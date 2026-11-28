# Trailblitz

A motorcycle storefront site: a Vue 3 frontend with an Express + MySQL API.

```
Trailblitz/
  frontend/   Vue 3 + Vite + Tailwind site
  backend/    Express API + MySQL database
```

## Getting started

You need [Node.js](https://nodejs.org) 20.19 or newer, and either [Docker](https://www.docker.com/products/docker-desktop/) or your own MySQL server.

### 1. Start the database and API

```sh
cd backend
npm install
cp .env.example .env       # PowerShell: Copy-Item .env.example .env
docker compose up -d       # starts MySQL and creates the tables + starter products
npm run dev                # API on http://localhost:3000
```

Using your own MySQL (XAMPP, MySQL Workbench, etc.) instead of Docker? Put your details in `backend/.env`, then run `npm run db:setup` instead of `docker compose up -d`.

Check it works: open http://localhost:3000/api/health. You should see `{"status":"ok"}`.

### 2. Start the frontend

In a second terminal:

```sh
cd frontend
npm install
npm run dev                # site on http://localhost:5173
```

The frontend sends `/api` requests to the backend automatically while developing.

More detail: [frontend/README.md](frontend/README.md) · [backend/README.md](backend/README.md)
