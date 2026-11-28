// Creates the database (if needed), its tables, and the starter products.
// Run with: npm run db:setup
//
// Use this if you run MySQL yourself (XAMPP, MySQL Workbench, etc.).
// With Docker you don't need it: docker compose runs the same SQL files
// automatically the first time the database container starts.

import { readFile } from 'node:fs/promises'
import mysql from 'mysql2/promise'

const dbName = process.env.DB_NAME

if (!dbName || !/^[A-Za-z0-9_]+$/.test(dbName)) {
  console.error('Set DB_NAME in backend/.env (letters, numbers and underscores only).')
  process.exit(1)
}

const schema = await readFile(new URL('../db/schema.sql', import.meta.url), 'utf8')
const seed = await readFile(new URL('../db/seed.sql', import.meta.url), 'utf8')

const connection = await mysql.createConnection({
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // Lets us run each .sql file in one go
  multipleStatements: true,
})

try {
  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
  )
  await connection.query(`USE \`${dbName}\``)

  await connection.query(schema)
  console.log('✔ Tables created')

  await connection.query(seed)
  console.log('✔ Starter products added')

  console.log(`Database "${dbName}" is ready.`)
} catch (err) {
  console.error('Database setup failed:', err.message)
  process.exitCode = 1
} finally {
  await connection.end()
}
