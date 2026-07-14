import { resolveKeynoteSessions } from '$lib/keynote'

export async function load() {
  try {
    return await resolveKeynoteSessions()
  } catch {
    return { sessions: [], hadError: true }
  }
}
