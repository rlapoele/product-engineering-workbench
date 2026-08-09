CREATE SCHEMA IF NOT EXISTS auth;
CREATE SCHEMA IF NOT EXISTS app;
CREATE SCHEMA IF NOT EXISTS ops;
CREATE SCHEMA IF NOT EXISTS migration;

DO $$ BEGIN
  CREATE ROLE pew_runtime NOLOGIN;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE auth."user" (
  "id" text NOT NULL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL UNIQUE,
  "emailVerified" boolean NOT NULL,
  "image" text,
  "createdAt" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE auth."session" (
  "id" text NOT NULL PRIMARY KEY,
  "expiresAt" timestamptz NOT NULL,
  "token" text NOT NULL UNIQUE,
  "createdAt" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" timestamptz NOT NULL,
  "ipAddress" text,
  "userAgent" text,
  "userId" text NOT NULL REFERENCES auth."user"("id") ON DELETE CASCADE
);

CREATE TABLE auth."account" (
  "id" text NOT NULL PRIMARY KEY,
  "accountId" text NOT NULL,
  "providerId" text NOT NULL,
  "userId" text NOT NULL REFERENCES auth."user"("id") ON DELETE CASCADE,
  "accessToken" text,
  "refreshToken" text,
  "idToken" text,
  "accessTokenExpiresAt" timestamptz,
  "refreshTokenExpiresAt" timestamptz,
  "scope" text,
  "password" text,
  "createdAt" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" timestamptz NOT NULL
);

CREATE TABLE auth."verification" (
  "id" text NOT NULL PRIMARY KEY,
  "identifier" text NOT NULL,
  "value" text NOT NULL,
  "expiresAt" timestamptz NOT NULL,
  "createdAt" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE INDEX "session_userId_idx" ON auth."session"("userId");
CREATE INDEX "account_userId_idx" ON auth."account"("userId");
CREATE INDEX "verification_identifier_idx" ON auth."verification"("identifier");

CREATE TABLE app.projects (
  id uuid PRIMARY KEY,
  owner_user_id text NOT NULL REFERENCES auth."user"("id"),
  title text NOT NULL CHECK (length(trim(title)) > 0),
  description text,
  content_locale text NOT NULL CHECK (length(trim(content_locale)) > 0),
  starter_id text NOT NULL,
  starter_version integer NOT NULL CHECK (starter_version > 0),
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (id, owner_user_id)
);

CREATE TABLE app.specifications (
  id uuid PRIMARY KEY,
  project_id uuid NOT NULL UNIQUE REFERENCES app.projects(id),
  section_ids jsonb NOT NULL CHECK (jsonb_typeof(section_ids) = 'array'),
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (id, project_id)
);

CREATE TABLE app.goals (
  id uuid PRIMARY KEY,
  project_id uuid NOT NULL,
  specification_id uuid NOT NULL,
  canonical_section_id text NOT NULL,
  artifact_type text NOT NULL CHECK (artifact_type = 'goal'),
  title text NOT NULL CHECK (length(trim(title)) > 0),
  content text NOT NULL CHECK (length(trim(content)) > 0),
  lifecycle_status text NOT NULL CHECK (lifecycle_status = 'Active'),
  creator_user_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  current_revision_id uuid NOT NULL,
  UNIQUE (project_id),
  UNIQUE (id, creator_user_id),
  UNIQUE (id, project_id, creator_user_id),
  FOREIGN KEY (specification_id, project_id) REFERENCES app.specifications(id, project_id),
  FOREIGN KEY (project_id, creator_user_id) REFERENCES app.projects(id, owner_user_id)
);

CREATE TABLE app.goal_revisions (
  id uuid PRIMARY KEY,
  goal_id uuid NOT NULL REFERENCES app.goals(id),
  version integer NOT NULL CHECK (version > 0),
  saved_by_user_id text NOT NULL,
  saved_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  snapshot jsonb NOT NULL CHECK (jsonb_typeof(snapshot) = 'object'),
  UNIQUE (goal_id, version),
  UNIQUE (id, goal_id),
  FOREIGN KEY (goal_id, saved_by_user_id) REFERENCES app.goals(id, creator_user_id)
);

ALTER TABLE app.goals ADD CONSTRAINT goals_current_revision_same_goal
  FOREIGN KEY (current_revision_id, id) REFERENCES app.goal_revisions(id, goal_id)
  DEFERRABLE INITIALLY DEFERRED;

CREATE TABLE app.command_operations (
  owner_user_id text NOT NULL REFERENCES auth."user"("id"),
  operation_id uuid NOT NULL,
  command_type text NOT NULL CHECK (command_type IN ('create_project', 'save_first_goal')),
  request_fingerprint char(64) NOT NULL,
  project_id uuid,
  goal_id uuid,
  revision_id uuid,
  completed_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (owner_user_id, operation_id),
  CHECK (
    (command_type = 'create_project' AND project_id IS NOT NULL AND goal_id IS NULL AND revision_id IS NULL) OR
    (command_type = 'save_first_goal' AND project_id IS NOT NULL AND goal_id IS NOT NULL AND revision_id IS NOT NULL)
  ),
  FOREIGN KEY (project_id, owner_user_id) REFERENCES app.projects(id, owner_user_id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (goal_id, project_id, owner_user_id) REFERENCES app.goals(id, project_id, creator_user_id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (revision_id, goal_id) REFERENCES app.goal_revisions(id, goal_id) DEFERRABLE INITIALLY DEFERRED
);

CREATE TABLE ops.command_outcomes_hourly (
  hour_started_at timestamptz NOT NULL,
  command_category text NOT NULL,
  outcome text NOT NULL,
  source_revision text NOT NULL,
  count bigint NOT NULL DEFAULT 0,
  total_duration_ms bigint NOT NULL DEFAULT 0,
  max_duration_ms integer NOT NULL DEFAULT 0,
  PRIMARY KEY (hour_started_at, command_category, outcome, source_revision)
);

CREATE TABLE ops.release_evidence (
  id uuid PRIMARY KEY,
  environment text NOT NULL,
  release_type text NOT NULL,
  source_revision text NOT NULL,
  migration_identifiers text[] NOT NULL DEFAULT '{}',
  outcome text NOT NULL,
  duration_ms integer NOT NULL,
  readiness_or_smoke_result text,
  recovery_exercise_reference text,
  error_classification text,
  recorded_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);

GRANT USAGE ON SCHEMA auth, app, ops TO pew_runtime;
GRANT SELECT, INSERT ON auth."user", auth."session", auth."account", auth."verification" TO pew_runtime;
GRANT SELECT, INSERT ON app.projects, app.specifications, app.goals, app.goal_revisions, app.command_operations TO pew_runtime;
GRANT SELECT, INSERT, UPDATE ON ops.command_outcomes_hourly, ops.release_evidence TO pew_runtime;
