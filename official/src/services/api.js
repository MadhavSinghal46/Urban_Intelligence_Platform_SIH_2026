const API_BASE_URL = 'http://127.0.0.1:8000'

async function fetchJson(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const errorText = await response.text()
    let message = 'Request failed'

    try {
      const parsed = JSON.parse(errorText)
      message = parsed.detail || parsed.message || message
    } catch {
      if (errorText) {
        message = errorText
      }
    }

    throw new Error(message)
  }

  return response.json()
}

export async function getHealth() {
  return fetchJson('/health')
}

export async function getEventsCount() {
  return fetchJson('/events/count')
}

export async function getEvents({ deviceId, minConfidence } = {}) {
  const params = new URLSearchParams()

  if (deviceId && deviceId !== 'all') {
    params.append('device_id', deviceId)
  }

  if (typeof minConfidence === 'number' && minConfidence > 0) {
    params.append('min_confidence', String(minConfidence))
  }

  const queryString = params.toString()
  const endpoint = queryString ? `/events?${queryString}` : '/events'

  const response = await fetchJson(endpoint)
  return Array.isArray(response?.events) ? response.events : []
}

export async function getEventById(eventId) {
  return fetchJson(`/events/${eventId}`)
}
