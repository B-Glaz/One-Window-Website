# One Window backend

Server-only code lives here. `backend/src/modules` owns business services, while `db/` and
`drizzle/` own persistence schema and migrations. Frontend components never import these
internals; Next route handlers are thin HTTP adapters.
