import { Router } from 'express'
import pool from '../db.js'

const router = Router()

const CATEGORIES = ['shop', 'collection']

// GET /api/products            → all products
// GET /api/products?category=shop
// GET /api/products?category=collection
router.get('/', async (req, res) => {
  const { category } = req.query

  if (category !== undefined && !CATEGORIES.includes(category)) {
    return res
      .status(400)
      .json({ error: `category must be one of: ${CATEGORIES.join(', ')}` })
  }

  const [rows] = category
    ? await pool.query(
        'SELECT id, name, description, price, image_url, category FROM products WHERE category = ? ORDER BY id',
        [category],
      )
    : await pool.query(
        'SELECT id, name, description, price, image_url, category FROM products ORDER BY id',
      )

  res.json(rows)
})

// GET /api/products/:id → one product
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid product id' })
  }

  const [rows] = await pool.query(
    'SELECT id, name, description, price, image_url, category FROM products WHERE id = ?',
    [id],
  )

  if (rows.length === 0) {
    return res.status(404).json({ error: 'Product not found' })
  }

  res.json(rows[0])
})

export default router
