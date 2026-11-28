// Any request that didn't match a route
export function notFound(req, res) {
  res.status(404).json({ error: 'Not found' })
}

// Express 5 sends errors thrown in async route handlers here automatically.
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  // Malformed JSON in the request body
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  // MySQL isn't running, or the connection details in .env are wrong
  if (['ECONNREFUSED', 'ER_ACCESS_DENIED_ERROR', 'ER_BAD_DB_ERROR'].includes(err.code)) {
    console.error(`Database error (${err.code}): check MySQL is running and backend/.env is correct.`)
    return res.status(503).json({ error: 'Database unavailable' })
  }

  console.error(err)
  res.status(err.status ?? 500).json({ error: 'Something went wrong' })
}
