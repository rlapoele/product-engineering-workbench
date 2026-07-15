# AGENTS.md

# Product Engineering Workbench

Welcome to the Product Engineering Workbench repository.

Before making significant changes, contributors (human or AI) should understand the philosophy of this project.

This repository intentionally follows a **knowledge-first engineering** approach.

---

# Repository Philosophy

The Product Engineering Workbench is designed before it is implemented.

The objective is to maximize understanding and minimize unnecessary implementation rework.

Implementation should normally follow this progression:

Explore

↓

Discuss

↓

Crystallize Knowledge

↓

Specify

↓

Implement

↓

Validate

Do not jump directly to implementation when important knowledge is still missing or unstable.

---

# Repository Organization

The repository is organized into four complementary areas.

## Knowledge

Location:

docs/knowledge/

Purpose:

Long-term project memory.

Contains stable information such as:

- Vision
- Principles
- Product
- Architecture
- Data Model
- AI
- UX
- ADRs

Knowledge should evolve deliberately.

---

## Planning

Location:

docs/planning/

Purpose:

Current execution strategy.

Planning is expected to evolve frequently.

---

## Sessions

Location:

docs/sessions/

Purpose:

Working memory.

Sessions summarize exploratory discussions.

Sessions may eventually crystallize into stable project knowledge.

---

## Glossary

Location:

docs/glossary/

Purpose:

Canonical terminology used throughout the repository.

When introducing new concepts, update the glossary before introducing inconsistent terminology elsewhere.

---

# Product Scope

The Product Engineering Workbench focuses exclusively on **Product Engineering**.

The product intentionally stops where software implementation begins.

The workbench produces implementation-ready knowledge.

Software delivery remains the responsibility of external delivery tools and implementation environments.

Do not introduce delivery-management functionality unless explicitly requested.

Examples of out-of-scope functionality include:

- Sprint Planning
- Kanban Execution
- Task Assignment
- Capacity Planning
- Velocity Tracking
- Release Management

When appropriate, prefer integration or export capabilities over implementing delivery functionality.

---

# Repository Engineering Process

The engineering process used to develop this repository is intentionally independent from the workflows that the Product Engineering Workbench will eventually support.

Do not assume that the repository's own development methodology represents the product's workflow templates.

The repository is free to evolve while the product remains workflow-agnostic.

---

# Documentation First

When significant knowledge changes occur:

1. Update the relevant documentation.
2. Update the glossary if terminology changes.
3. Update planning if priorities change.
4. Record important architectural decisions as ADRs.
5. Summarize important discussions within Sessions.

Do not duplicate knowledge across multiple documents.

Prefer updating an existing document over creating a new one.

---

# AI Contributions

Artificial intelligence is treated as a contributor to the project.

AI should help:

- clarify ideas;
- challenge assumptions;
- identify inconsistencies;
- suggest alternatives;
- improve specifications;
- generate implementation-ready artifacts.

AI should not silently invent requirements or architectural decisions.

When uncertainty exists, explicitly identify assumptions and propose alternatives instead of making irreversible decisions.

---

# Contributor Principles

Regardless of whether the contributor is human or AI:

- preserve conceptual integrity;
- prefer clarity over cleverness;
- minimize unnecessary complexity;
- keep the product methodology-agnostic;
- maintain clear separation of concerns;
- preserve traceability of important decisions.

---

# Key Principles

The following principles guide all work on this repository.

- Help users think.
- Knowledge before implementation.
- Human remains in control.
- AI is optional by design.
- Collaboration is optional but encouraged.
- Conversations are working memory.
- Knowledge is long-term memory.
- Planning is a living execution strategy.
- Product Engineering is distinct from Product Delivery.
- Product scope takes precedence over feature growth.

---

# Reading Order

Before contributing to this repository, contributors should become familiar with:

1. README.md
2. docs/glossary/glossary.md
3. docs/knowledge/vision/product-vision.md
4. docs/knowledge/vision/product-goals.md
5. docs/knowledge/principles/product-principles.md
6. docs/planning/current-focus.md
7. docs/planning/open-questions.md

These documents provide the minimum context required before proposing significant changes.

