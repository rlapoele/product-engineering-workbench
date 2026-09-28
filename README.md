# Product Engineering Workbench

> **Help me think.**

The Product Engineering Workbench is an exploratory desktop-first repository
companion whose goal is to help individuals and teams create and continuously
maintain high-quality, human-owned product specifications.

Rather than focusing primarily on AI-assisted generation, the workbench aims to
improve the quality of product engineering by helping users think, structure,
validate and evolve Product Knowledge alongside the software and evidence that
inform it.

Artificial intelligence is an important capability of the workbench, but it is not its foundation. The product is designed to remain valuable even when AI is unavailable.

---

## Vision

The Product Engineering Workbench seeks to become the repository companion
through which humans and AI contributors inspect, evolve and share living
Product Knowledge while humans retain authority over product intent.

The guiding philosophy is simple:

> **Help me think.**

---

## Core Principles

- Knowledge-first engineering
- Document-first user experience
- Human remains in control
- AI is optional by design
- Collaboration is optional but encouraged
- Conversations are working memory
- Knowledge is long-term memory
- Planning is living execution strategy
- Traceability over duplication

---

## Repository Organization

```
docs/
│
├── knowledge/
│   Stable product knowledge
│
├── planning/
│   Current goals and execution strategy
│
├── sessions/
│   Summaries of exploratory discussions
│
└── glossary/
    Shared project vocabulary
```

The repository intentionally separates exploratory thinking from stable knowledge.

Ideas are expected to evolve through discussions before being formalized into project documentation.

---

## About This Repository

The engineering process used to develop this repository is independent from the product-engineering workflow templates that the Product Engineering Workbench may eventually support.

This repository documents and implements the product; it should not be interpreted as a reference instance of any single workflow offered by the product.

---

## Local Docker Development

The local-only Compose setup starts PostgreSQL, applies the committed migrations through its local migration role, and runs the application with its separate runtime role. It is not a Railway or production deployment configuration.

1. Fill the Google and GitHub OAuth values in your ignored `.env` file and configure both providers with `http://127.0.0.1:4321` as the local application origin/callback base.
2. Start the local stack:

   ```sh
   docker compose -f compose.local.yml up --build
   ```

3. Open `http://127.0.0.1:4321`.

The local host-side runtime connection is:

```text
postgresql://pew_runtime:pew_runtime_local@127.0.0.1:54329/product_engineering_workbench
```

To run the application on your host instead of in Compose, start and migrate only the database, then run Astro:

```sh
npm run start:db
npm run migrate:db
npm run dev
```

`npm run dev` reads the ignored local `.env` file when present and listens on `http://127.0.0.1:4321`. The Compose application service supplies its environment directly, overriding any local file values.

Use `npm run stop:db` to stop the database container while retaining its local volume.

Use `docker compose -f compose.local.yml down` to stop the stack. Add `--volumes` only when you intentionally want to discard the local database.

---

## Current Status

This repository remains in **knowledge discovery and specification**, alongside a deliberately bounded working implementation.

The repository-companion direction is now accepted. The target product is a
desktop-first experience over repository-resident Product Knowledge, supported
by one shared knowledge engine and accessible through desktop, CLI and MCP
surfaces. Detailed storage, runtime and migration choices remain open.

The authenticated Project-to-first-Goal technical slice is complete: it
provides an Astro SSR application with bounded React Islands, Better Auth
Google and GitHub OAuth, PostgreSQL persistence and local Docker support. It is
preserved as a bounded reference implementation and source of evidence, not as
the presumed target architecture.

Further implementation and visual-prototype work begins only after the
repository representation, knowledge-engine boundary and repository-companion
journey have been explored, validated and specified. The completed slice is a
constrained reference implementation, not authorization to broaden product
scope.

---

## Development Philosophy

The workbench itself is being developed using the principles it promotes.

Whenever possible:

```
Explore
    ↓
Discuss
    ↓
Crystallize knowledge
    ↓
Specify
    ↓
Implement
    ↓
Validate
```

Implementation is intentionally preceded by deliberate exploration in order to minimize unnecessary rework while remaining open to continuous learning.

---

## Intended Audience

The Product Engineering Workbench is intended for anyone involved in creating digital products, including:

- Product Managers
- Product Owners
- Business Analysts
- UX Designers
- Software Engineers
- Software Architects
- QA Engineers
- Technical Leads
- AI Contributors

---

## License

To be defined.
