import mysql from 'mysql2/promise'

// One shared connection pool for the whole app.
// Settings come from backend/.env (see .env.example).
const pool = mysql.createPool({
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  // Return DECIMAL columns (like price) as numbers instead of strings
  decimalNumbers: true,
})

export default pool
