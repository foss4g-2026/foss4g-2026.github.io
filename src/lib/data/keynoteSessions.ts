export type KeynoteRoleOverride = 'moderator' | 'coordinator' | 'registrant'

export interface KeynoteSessionConfig {
  id: string
  dayLabel: string
  pretalxCode: string
  date: string
  room: string
  /** Pretalx speaker code -> role override. Speakers not listed here are treated as regular keynote speakers. */
  roleOverrides?: Record<string, KeynoteRoleOverride>
}

export const keynoteSessionConfigs: KeynoteSessionConfig[] = [
  {
    id: 'day1-hnwcse',
    dayLabel: 'Day 1',
    pretalxCode: 'HNWCSE',
    date: 'September 1, 2026, 10:00–10:45',
    room: 'Phoenix Hall',
    roleOverrides: { '77LQA9': 'coordinator' }, // Toru Mori
  },
  {
    id: 'day1-shuzun',
    dayLabel: 'Day 1',
    pretalxCode: 'SHUZUN',
    date: 'September 1, 2026, 10:45–11:30',
    room: 'Phoenix Hall',
    roleOverrides: { '77LQA9': 'coordinator' }, // Toru Mori
  },
  {
    id: 'day2-ypvvzw',
    dayLabel: 'Day 2',
    pretalxCode: 'YPVVZW',
    date: 'September 2, 2026, 9:30-11:00',
    room: 'Phoenix Hall',
  },
  {
    id: 'day3-opening-s9rdgb',
    dayLabel: 'Day 3',
    pretalxCode: 'S9RDGB',
    date: 'September 3, 2026, 09:30–11:00',
    room: 'Phoenix Hall',
    // A.J. Koikoi-san (moderator) is not yet registered as a Pretalx speaker on this talk.
    // Add their code here (as 'moderator') once they register.
    roleOverrides: { 'CHKHF9': 'registrant' }, // Kenya Tamura
  },
  {
    id: 'day3-closing-vrkjj9',
    dayLabel: 'Day 3',
    pretalxCode: 'VRKJJ9',
    date: 'September 3, 2026, 16:00–16:30',
    room: 'Phoenix Hall',
  },
  {
    id: 'day3-closing-9x7g6y',
    dayLabel: 'Day 3',
    pretalxCode: 'HDRU7L',
    date: 'September 3, 2026, 16:30–18:00',
    room: 'Phoenix Hall',
  },
]
