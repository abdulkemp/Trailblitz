import express from 'express'
import cors from 'cors'

import pool from './db.js'
import productsRouter from './routes/products.js'
import contactRouter from './routes/contact.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

const app = express()

// Allow the frontend to call the API from another origin (e.g. in production).
// In development the Vite proxy makes this unnecessary.
const allowedOrigins = (process.env.CORS_ORIGIN ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : false }))

app.use(express.json({ limit: '100kb' }))

// Quick check that the API and the database are both reachable
app.get('/api/health', async (req, res) => {
  await pool.query('SELECT 1')
  res.json({ status: 'ok' })
})

app.use('/api/products', productsRouter)
app.use('/api/contact', contactRouter)

app.use(notFound)
app.use(errorHandler)

export default app
