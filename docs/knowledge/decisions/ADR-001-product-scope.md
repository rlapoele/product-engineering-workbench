# ADR-001 — Product Scope

**Status:** Accepted

**Date:** 2026-07-15

---

## Context

During the early design of the Product Engineering Workbench, an important question emerged regarding the product's scope.

Should the workbench support both Product Engineering and Product Delivery, or should it specialize in only one of these domains?

While both domains are closely related, they address different objectives and produce different kinds of artifacts.

---

## Origin

Resolved from:

- DOM-001 — Should the workbench explicitly distinguish Product Engineering from Product Delivery?

---

## Decision

The Product Engineering Workbench focuses exclusively on **Product Engineering**.

The product's responsibility ends when implementation-ready knowledge has been produced.

Planning and executing software delivery remain the responsibility of external delivery tools and platforms.

---

## Rationale

This decision:

- keeps the product focused;
- reduces implementation complexity;
- avoids duplicating capabilities already provided by delivery platforms;
- strengthens the workbench's unique value proposition;
- allows the product to remain methodology-agnostic while integrating naturally with existing delivery ecosystems.

---

## Consequences

The workbench will:

- support the creation of implementation-ready product knowledge;
- support export to external delivery tools;
- support AI implementation agents through structured exports.

The workbench will not provide:

- sprint management;
- task boards;
- workload management;
- capacity planning;
- release management.

---

## Related Documents

- Product Vision
- Product Principles
- 