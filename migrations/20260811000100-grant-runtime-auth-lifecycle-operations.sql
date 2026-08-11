-- Better Auth expires verification records and manages sessions and provider accounts
-- during normal authentication lifecycle operations. The runtime role needs these
-- data privileges but remains unable to alter schemas or grant permissions.
GRANT SELECT, INSERT, UPDATE, DELETE ON auth."user", auth."session", auth."account", auth."verification" TO pew_runtime;
