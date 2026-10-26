# Backend application layer

This folder owns server-only application services. It is intentionally separate from the Next.js route adapters.

## Boundaries

- `src/modules/` contains domain services and business rules.
- `src/integrations/` contains external providers such as CRM, Zoho, email, and analytics adapters.
- `src/persistence/` contains database repositories and schema-facing code.
- `src/security/` contains validation, rate limiting, and request protections.
- `src/observability/` contains safe structured logging and request IDs.
- Route handlers in `app/api/` are thin adapters: parse HTTP input, call a backend service, and map the response.
- Frontend code must never import backend persistence or integration internals.

## Current module

- `src/modules/leads/service.ts` owns lead validation, supported form codes, idempotency checks, persistence, and submission references.
- Future backend features should be added as explicit modules under `src/modules/<feature>/`.

