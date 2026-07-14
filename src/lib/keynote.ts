import { keynoteSessionConfigs, type KeynoteSessionConfig } from '$lib/data/keynoteSessions'
import { fetchPretalxTalk, type PretalxSpeaker } from '$lib/pretalx'

export interface ResolvedSession {
  id: string
  dayLabel: string
  date: string
  room: string
  title: string
  pretalxUrl: string
  speakers: PretalxSpeaker[]
  moderators: string[]
  coordinators: string[]
  hadMissingSpeakers: boolean
}

async function resolveSession(config: KeynoteSessionConfig): Promise<ResolvedSession | null> {
  const talk = await fetchPretalxTalk(config.pretalxCode)
  if (!talk) return null

  const speakers: PretalxSpeaker[] = []
  const moderators: string[] = []
  const coordinators: string[] = []
  const matchedCodes = new Set<string>()

  for (const speaker of talk.speakers) {
    if (!speaker.name) continue

    const role = config.roleOverrides?.[speaker.code]
    if (role) matchedCodes.add(speaker.code)

    if (role === 'registrant') continue
    if (role === 'moderator') {
      moderators.push(speaker.name)
    } else if (role === 'coordinator') {
      coordinators.push(speaker.name)
    } else if (speaker.biography.trim()) {
      speakers.push(speaker)
    }
  }

  for (const code of Object.keys(config.roleOverrides ?? {})) {
    if (!matchedCodes.has(code)) {
      console.warn(
        `[keynote] roleOverride code "${code}" in config "${config.id}" did not match any speaker returned by Pretalx for talk "${config.pretalxCode}". The override may be stale.`
      )
    }
  }

  if (talk.missingSpeakerCodes.length > 0) {
    console.warn(
      `[keynote] failed to fetch speaker(s) ${talk.missingSpeakerCodes.join(', ')} for talk "${config.pretalxCode}" (config "${config.id}"). They are omitted from the page.`
    )
  }

  return {
    id: config.id,
    dayLabel: config.dayLabel,
    date: config.date,
    room: config.room,
    title: talk.title,
    pretalxUrl: `https://talks.osgeo.org/foss4g-2026/talk/${config.pretalxCode}/`,
    speakers,
    moderators,
    coordinators,
    hadMissingSpeakers: talk.missingSpeakerCodes.length > 0,
  }
}

export async function resolveKeynoteSessions(): Promise<{ sessions: ResolvedSession[]; hadError: boolean }> {
  const results = await Promise.allSettled(keynoteSessionConfigs.map(resolveSession))

  const sessions: ResolvedSession[] = []
  let hadError = false

  for (const result of results) {
    if (result.status === 'rejected') {
      hadError = true
      continue
    }
    const session = result.value
    if (!session) {
      hadError = true
      continue
    }
    if (session.hadMissingSpeakers) hadError = true
    // A session with no visible speakers/moderators/coordinators (e.g. nobody has filled in
    // a Pretalx bio yet) is a normal "not announced yet" state, not a fetch error — it's
    // simply omitted from `sessions` below, and `hadError` is intentionally left untouched.
    if (session.speakers.length > 0 || session.moderators.length > 0 || session.coordinators.length > 0) {
      sessions.push(session)
    }
  }

  return { sessions, hadError }
}
