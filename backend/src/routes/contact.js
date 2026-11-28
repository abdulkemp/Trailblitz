import { Router } from 'express'
import pool from '../db.js'

const router = Router()

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Field rules: required or optional, and maximum length (matches the table)
const FIELDS = {
  name: { required: true, max: 100 },
  email: { required: true, max: 255 },
  subject: { required: false, max: 150 },
  phone: { required: false, max: 30 },
  message: { required: true, max: 5000 },
}

function validate(body) {
  const errors = {}
  const values = {}

  for (const [field, rule] of Object.entries(FIELDS)) {
    const raw = body?.[field]
    const value = typeof raw === 'string' ? raw.trim() : ''

    if (rule.required && !value) {
      errors[field] = 'This field is required'
    } else if (value.length > rule.max) {
      errors[field] = `Must be ${rule.max} characters or fewer`
    }

    values[field] = value || null
  }

  if (values.email && !errors.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Enter a valid email address'
  }

  return { errors, values }
}

// POST /api/contact → save a message from the Contact page
router.post('/', async (req, res) => {
  const { errors, values } = validate(req.body)

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ error: 'Please check the form', fields: errors })
  }

  const [result] = await pool.query(
    'INSERT INTO contact_messages (name, email, subject, phone, message) VALUES (?, ?, ?, ?, ?)',
    [values.name, values.email, values.subject, values.phone, values.message],
  )

  res.status(201).json({ id: result.insertId, message: 'Thanks! Your message has been sent.' })
})

export default router
