const PRETALX_API_BASE = 'https://talks.osgeo.org/api/events/foss4g-2026'
const FETCH_TIMEOUT_MS = 8000

export interface PretalxSpeaker {
  code: string
  name: string
  biography: string
  avatarUrl: string
}

export interface PretalxTalk {
  title: string
  speakers: PretalxSpeaker[]
  /** Speaker codes listed on the talk that could not be fetched (network error, 404, timeout, etc.). */
  missingSpeakerCodes: string[]
}

/** Fetches JSON with a timeout. Returns null on any failure (non-2xx, network error, timeout, malformed JSON) — never throws. */
async function fetchJson(url: string): Promise<any | null> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

async function fetchSpeaker(code: string): Promise<PretalxSpeaker | null> {
  const data = await fetchJson(`${PRETALX_API_BASE}/speakers/${code}/`)
  if (!data) return null
  return {
    code,
    name: data.name ?? '',
    biography: data.biography ?? '',
    avatarUrl: data.avatar_url ?? '',
  }
}

export async function fetchPretalxTalk(code: string): Promise<PretalxTalk | null> {
  const data = await fetchJson(`${PRETALX_API_BASE}/talks/${code}/`)
  if (!data) return null
  const speakerCodes: string[] = data.speakers ?? []
  const results = await Promise.all(
    speakerCodes.map(async (speakerCode) => ({ speakerCode, speaker: await fetchSpeaker(speakerCode) }))
  )

  const speakers: PretalxSpeaker[] = []
  const missingSpeakerCodes: string[] = []
  for (const { speakerCode, speaker } of results) {
    if (speaker) speakers.push(speaker)
    else missingSpeakerCodes.push(speakerCode)
  }

  return {
    title: data.title ?? '',
    speakers,
    missingSpeakerCodes,
  }
}
