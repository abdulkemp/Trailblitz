// Small helper for calling the Trailblitz API.
//
// In development, requests to /api are proxied to the backend by Vite
// (see vite.config.js), so no base URL is needed.
// In production, set VITE_API_URL to the backend's address,
// e.g. VITE_API_URL=https://api.trailblitz.example

const BASE_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

async function request(path, options = {}) {
  let response
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
  } catch {
    throw new ApiError("Can't reach the server. Is the backend running?")
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new ApiError(data?.error ?? `Request failed (${response.status})`, data?.fields)
  }

  return data
}

export class ApiError extends Error {
  constructor(message, fields = {}) {
    super(message)
    this.fields = fields ?? {}
  }
}

export function getProducts(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : ''
  return request(`/api/products${query}`)
}

export function getProduct(id) {
  return request(`/api/products/${id}`)
}

export function sendContactMessage(message) {
  return request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(message),
  })
}
