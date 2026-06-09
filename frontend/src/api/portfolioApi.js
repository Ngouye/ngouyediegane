const API_BASE = '/api';

async function fetchJson(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`);
  if (!response.ok) throw new Error(`Erreur API: ${response.status}`);
  return response.json();
}

export async function getPortfolio() {
  return fetchJson('/portfolio');
}

export async function getProjects(featured) {
  const query = featured ? '?featured=true' : '';
  return fetchJson(`/projects${query}`);
}

export async function getProject(id) {
  return fetchJson(`/projects/${id}`);
}

export async function sendContact(data) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'Erreur lors de l\'envoi');
  return result;
}
