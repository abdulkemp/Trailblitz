# Trailblitz API

Express 5 + MySQL backend for Trailblitz.

## Setup

```sh
npm install
cp .env.example .env       # PowerShell: Copy-Item .env.example .env
```

### Database: option A, Docker (recommended)

```sh
docker compose up -d
```

This starts MySQL 8.4 on port 3306. The first time it starts, it runs `db/schema.sql` and `db/seed.sql`, so the tables and starter products are created automatically. The defaults in `.env.example` already match it.

| Command | What it does |
| --- | --- |
| `docker compose up -d` | Start MySQL |
| `docker compose down` | Stop MySQL (data is kept) |
| `docker compose down -v` | Stop and **delete all data**; it re-seeds on the next start |

### Database: option B, your own MySQL

Put your MySQL details in `.env`, then run:

```sh
npm run db:setup
```

This creates the database (if needed), the tables and the starter products. Running it again resets the products but keeps contact messages.

## Run

```sh
npm run dev      # restarts automatically when you save a file
npm start        # without auto-restart
```

The API runs on http://localhost:3000.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/health` | Checks the API and database are reachable |
| GET | `/api/products` | All products |
| GET | `/api/products?category=shop` | Products on the Shop page (`shop` or `collection`) |
| GET | `/api/products/:id` | One product |
| POST | `/api/contact` | Save a Contact form message |

`POST /api/contact` takes JSON:

```json
{
  "name": "Abdul",
  "email": "abdul@example.com",
  "subject": "Bike enquiry",
  "phone": "+27 72 000 0000",
  "message": "Is the Harley still available?"
}
```

`name`, `email` and `message` are required. Invalid input returns `422` with a `fields` object explaining each problem.

## Project structure

```
backend/
  db/
    schema.sql          tables: products, contact_messages
    seed.sql            starter products
  scripts/
    setup-db.js         npm run db:setup
  src/
    server.js           starts the server
    app.js              Express app: middleware and routes
    db.js               MySQL connection pool
    routes/
      products.js
      contact.js
    middleware/
      errorHandler.js
  docker-compose.yml
  .env.example
```

## Adding a new endpoint

1. Create a file in `src/routes/`, for example `orders.js`, exporting an Express `Router`.
2. Register it in `src/app.js`: `app.use('/api/orders', ordersRouter)`.
3. If it needs a new table, add it to `db/schema.sql`.

Always pass values to `pool.query` as `?` placeholders (as the existing routes do), never by putting them directly in the SQL string. This protects against SQL injection.
