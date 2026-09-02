<script lang="ts">
  /**
   * Time-row mapping for the Draft v3 timetable.
   *
   * Grid layout (row 1 = day-header):
   *   Row  2  → 09:00–09:30  (30 min)
   *   Row  3  → 09:30–10:00  (30 min)
   *   Row  4  → 10:00–11:00  (60 min)
   *   Row  5  → 11:00–12:00  (60 min)
   *   Row  6  → 12:00–13:00  (60 min)
   *   Row  7  → 13:00–14:00  (60 min)
   *   Row  8  → 14:00–15:00  (60 min)
   *   Row  9  → 15:00–15:30  (30 min)
   *   Row 10  → 15:30–16:00  (30 min)
   *   Row 11  → 16:00–16:30  (30 min)
   *   Row 12  → 16:30–17:00  (30 min)
   *   Row 13  → 17:00–17:30  (30 min)
   *   Row 14  → 17:30–18:00  (30 min)
   *   Row 15  → 18:00–18:30  (30 min)
   *   Row 16  → 18:30–19:00  (30 min)
   *   Row 17  → 19:00–Late   (evening)
   */
  export let lang: string = 'en'

  const TIME_ROWS: Array<{ start: string; end: string; row: number }> = [
    { start: '09:00', end: '09:30', row: 2 },
    { start: '09:30', end: '10:00', row: 3 },
    { start: '10:00', end: '11:00', row: 4 },
    { start: '11:00', end: '12:00', row: 5 },
    { start: '12:00', end: '13:00', row: 6 },
    { start: '13:00', end: '14:00', row: 7 },
    { start: '14:00', end: '15:00', row: 8 },
    { start: '15:00', end: '15:30', row: 9 },
    { start: '15:30', end: '16:00', row: 10 },
    { start: '16:00', end: '16:30', row: 11 },
    { start: '16:30', end: '17:00', row: 12 },
    { start: '17:00', end: '17:30', row: 13 },
    { start: '17:30', end: '18:00', row: 14 },
    { start: '18:00', end: '18:30', row: 15 },
    { start: '18:30', end: '19:00', row: 16 },
    { start: '19:00', end: 'Late',  row: 17 },
  ]

  function tr(time: string): number {
    const slot = TIME_ROWS.find(s => s.start === time)
    if (slot) return slot.row
    // 'Late' / end of last slot
    if (time === 'Late' || time === '21:00') return 18
    // fallback: parse minutes
    const [h, m] = time.split(':').map(Number)
    if (h < 10) return 2
    if (h < 15) return Math.round((h - 10) * 2 + Math.ceil(m / 30)) + 4
    return 17
  }

  const days = [
    { weekday: 'Sunday',    date: '30 August 2026',    venue: 'RCC Bunka Center' },
    { weekday: 'Monday',    date: '31 August 2026',    venue: 'RCC Bunka Center' },
    { weekday: 'Tuesday',   date: '1 September 2026',  venue: "Int'l Conference Center" },
    { weekday: 'Wednesday', date: '2 September 2026',  venue: "Int'l Conference Center" },
    { weekday: 'Thursday',  date: '3 September 2026',  venue: "Int'l Conference Center" },
    { weekday: 'Friday',    date: '4 September 2026',  venue: 'ASTER PLAZA' },
    { weekday: 'Saturday',  date: '5 September 2026',  venue: 'Peace Memorial Park / Miyajima' },
  ]

  interface ProgramEvent {
    day: number       // 0–6 (Sun–Sat), grid-col = day + 2
    start: string
    end: string
    type: string
    title: string
    subtitle?: string
    venue?: string
    link?: string     // relative path under /[lang], e.g. /program-schedule/workshops/
  }

  const events: ProgramEvent[] = [
    // ── Aug 30 (Sun) Workshop Day 1 ──
    { day: 0, start: '09:00', end: '10:00', type: 'neutral',  title: 'Registration / Setup' },
    { day: 0, start: '10:00', end: '13:00', type: 'workshop', title: 'Workshops Day 1 – Session 1', subtitle: '10:00 – 13:00', link: '/program-schedule/workshops/' },
    { day: 0, start: '13:00', end: '14:00', type: 'neutral',  title: 'Break' },
    { day: 0, start: '14:00', end: '17:00', type: 'workshop', title: 'Workshops Day 1 – Session 2', subtitle: '14:00 – 17:00', link: '/program-schedule/workshops/' },
    { day: 0, start: '19:00', end: 'Late',  type: 'social',   title: 'TGP Dinner', subtitle: '19:00 – 21:00' },

    // ── Aug 31 (Mon) Workshop Day 2 ──
    { day: 1, start: '09:00', end: '10:00', type: 'neutral',  title: 'Registration / Setup' },
    { day: 1, start: '10:00', end: '13:00', type: 'workshop', title: 'Workshops Day 2 – Session 1', subtitle: '10:00 – 13:00', link: '/program-schedule/workshops/' },
    { day: 1, start: '13:00', end: '14:00', type: 'neutral',  title: 'Break' },
    { day: 1, start: '14:00', end: '17:00', type: 'workshop', title: 'Workshops Day 2 – Session 2', subtitle: '14:00 – 17:00', link: '/program-schedule/workshops/' },
    { day: 1, start: '18:00', end: '19:00', type: 'social',   title: 'Geochicas Take!', subtitle: '18:00 – 21:00', venue: 'JOHN BLUE, Namiki St.', link: '/program-schedule/geochicas/' },
    { day: 1, start: '19:00', end: 'Late',  type: 'social',   title: 'Geochicas Take! (cont.)', link: '/program-schedule/geochicas/' },

    // ── Sep 1 (Tue) Main Conference Day 1 ──
    { day: 2, start: '09:00', end: '09:30', type: 'neutral',  title: 'Morning Break / Registration' },
    { day: 2, start: '09:30', end: '10:00', type: 'keynote',  title: 'Opening Ceremony' },
    { day: 2, start: '10:00', end: '12:00', type: 'keynote',  title: 'Keynote Sessions', subtitle: '10:00 – 12:00', venue: 'Phoenix Hall', link: '/program-schedule/keynote/' },
    { day: 2, start: '12:00', end: '13:00', type: 'b2b',     title: 'B2B Session', subtitle: '12:00 – 15:00', venue: 'Himawari', link: '/program-schedule/b2b-session/' },
    { day: 2, start: '13:00', end: '15:00', type: 'session', title: 'General Sessions / Academic Track\nLightning Talks\n(B2B Session continues – 15:00)', link: '/program-schedule/presentations/' },
    { day: 2, start: '15:00', end: '15:30', type: 'neutral',  title: 'Coffee Break' },
    { day: 2, start: '15:30', end: '18:00', type: 'session',  title: 'General Sessions / Academic Track\nSponsor Sessions', subtitle: '15:30 – 18:00', link: '/program-schedule/presentations/' },
    { day: 2, start: '18:00', end: '19:00', type: 'social',   title: 'Move to Ice Breaker venue' },
    { day: 2, start: '19:00', end: 'Late',  type: 'social',   title: 'Ice Breaker', subtitle: 'from 19:00', venue: 'Hiroshima Gate Park', link: '/program-schedule/ice-breaker/' },

    // ── Sep 2 (Wed) Main Conference Day 2 ──
    { day: 3, start: '09:00', end: '09:30', type: 'neutral',  title: 'Morning Break' },
    { day: 3, start: '09:30', end: '11:00', type: 'keynote',  title: 'Keynote Sessions', subtitle: '09:30 – 11:00', venue: 'Phoenix Hall', link: '/program-schedule/keynote/' },
    { day: 3, start: '11:00', end: '12:00', type: 'session',  title: 'General Sessions / Academic Track', link: '/program-schedule/presentations/' },
    { day: 3, start: '12:00', end: '13:00', type: 'lunch',    title: 'Lunch\nHiring Session 12:00 – 13:00', link: '/program-schedule/hiring-session/' },
    { day: 3, start: '13:00', end: '15:00', type: 'session',  title: 'General Sessions / Academic Track\nLightning Talks\n(Poster Core Time)', link: '/program-schedule/presentations/' },
    { day: 3, start: '15:00', end: '15:30', type: 'neutral',  title: 'Coffee Break' },
    { day: 3, start: '15:30', end: '18:00', type: 'special',  title: 'General Sessions / Academic Track\n\nHigh School Poster core time\n15:30 – 16:30\n(Phoenix Hall Lobby)', link: '/program-schedule/presentations/' },
    { day: 3, start: '18:00', end: '19:00', type: 'social',   title: 'Chartered bus to Gala Dinner' },
    { day: 3, start: '19:00', end: 'Late',  type: 'social',   title: 'Gala Dinner', subtitle: 'from 19:00', venue: 'Grand Prince Hotel Hiroshima', link: '/program-schedule/gala-dinner/' },

    // ── Sep 3 (Thu) Main Conference Day 3 ──
    { day: 4, start: '09:00', end: '09:30', type: 'neutral',  title: 'Morning Break' },
    { day: 4, start: '09:30', end: '11:00', type: 'keynote',  title: 'Keynote Sessions', subtitle: '09:30 – 11:00', venue: 'Phoenix Hall', link: '/program-schedule/keynote/' },
    { day: 4, start: '11:00', end: '12:00', type: 'session',  title: 'General Sessions / Academic Track', link: '/program-schedule/presentations/' },
    { day: 4, start: '12:00', end: '13:00', type: 'neutral',  title: 'Lunch' },
    { day: 4, start: '13:00', end: '15:30', type: 'session',  title: 'General Sessions / Academic Track\nLightning Talks', link: '/program-schedule/presentations/' },
    { day: 4, start: '15:30', end: '16:00', type: 'neutral',  title: 'Coffee Break' },
    { day: 4, start: '16:00', end: '16:30', type: 'keynote',  title: 'Keynote Sessions', subtitle: '16:00 – 16:30', venue: 'Phoenix Hall', link: '/program-schedule/keynote/' },
    { day: 4, start: '16:30', end: '17:30', type: 'keynote',  title: 'Keynote Sessions', subtitle: '16:30 – 17:30', venue: 'Phoenix Hall', link: '/program-schedule/keynote/' },
    { day: 4, start: '17:30', end: '18:30', type: 'keynote',  title: 'Closing Ceremony\n(Group Photo)', subtitle: '17:30 – 18:30' },
    { day: 4, start: '18:30', end: 'Late',  type: 'social',   title: 'Informal' },

    // ── Sep 4 (Fri) Community Sprint ──
    { day: 5, start: '09:30', end: '17:00', type: 'community', title: 'Community Sprint', subtitle: '9:30 – 17:00\nAster Plaza 7F\n(free of charge)', link: '/program-schedule/community-sprint/' },
    { day: 5, start: '19:00', end: 'Late',  type: 'social',    title: 'Informal' },

    // ── Sep 5 (Sat) Excursion ──
    { day: 6, start: '09:00', end: '17:00', type: 'community', title: 'Excursion', subtitle: '9:00 – 17:00\nPeace Memorial Park / Miyajima', link: '/program-schedule/excursion/' },
    { day: 6, start: '19:00', end: 'Late',  type: 'social',    title: 'Informal' },
  ]

  const typeColors: Record<string, { bg: string; color: string }> = {
    'workshop':  { bg: '#FBCBA8', color: '#17365D' },
    'session':   { bg: '#C8DEFA', color: '#17365D' },
    'keynote':   { bg: '#29B6D8', color: '#ffffff' },
    'b2b':       { bg: '#F0B8E8', color: '#17365D' },
    'lunch':     { bg: '#DDD0F5', color: '#17365D' },
    'special':   { bg: '#B8E6A0', color: '#17365D' },
    'community': { bg: '#FFE066', color: '#17365D' },
    'social':    { bg: '#F0A8DC', color: '#17365D' },
    'neutral':   { bg: '#DCDCDC', color: '#17365D' },
  }

  const legendItems = [
    { label: 'Workshop',                    color: '#FBCBA8' },
    { label: 'Keynote / Opening / Closing', color: '#29B6D8' },
    { label: 'General Sessions',            color: '#C8DEFA' },
    { label: 'Special / High School',       color: '#B8E6A0' },
    { label: 'Lunch / Hiring Session',      color: '#DDD0F5' },
    { label: 'Community Sprint / Excursion',color: '#FFE066' },
    { label: 'Social / Evening / B2B',      color: '#F0A8DC' },
    { label: 'Break / Registration',        color: '#DCDCDC' },
  ]
</script>

<div class="po-scroll">
  <div class="po-wrap">

    <!-- ── Header ── -->
    <div class="po-header">
      <h2 class="po-title">FOSS4G Hiroshima 2026 – Program Outline</h2>
      <p class="po-subtitle">30 August – 5 September 2026 &nbsp;|&nbsp; Hiroshima, Japan &nbsp;|&nbsp; Theme: Bridging Geospatial Technology and Humanity</p>
    </div>

    <!-- ── Main timetable grid ── -->
    <!-- col 1 = Time, col 2-8 = 7 days; row 1 = day-header, rows 2-15 = time slots -->
    <div class="po-grid">

      <!-- Time column header -->
      <div class="po-cell po-time-header">Time</div>

      <!-- Day headers -->
      {#each days as day, i}
        <div class="po-cell po-day-header" style="grid-column: {i + 2}; grid-row: 1;">
          <div class="po-weekday">{day.weekday}</div>
          <div class="po-date">{day.date}</div>
          <div class="po-venue">{day.venue}</div>
        </div>
      {/each}

      <!-- Time labels -->
      {#each TIME_ROWS as slot}
        <div
          class="po-cell po-time-label"
          style="grid-column: 1; grid-row: {slot.row};"
        >
          {slot.start}{slot.end !== 'Late' ? ` – ${slot.end}` : ' –'}
          {#if slot.end === 'Late'}<br/>Late{/if}
        </div>
      {/each}

      <!-- Events -->
      {#each events as ev}
        {@const col = ev.day + 2}
        {@const rowStart = tr(ev.start)}
        {@const rowEnd = ev.end === 'Late' ? 18 : tr(ev.end)}
        {@const style = typeColors[ev.type] ?? { bg: '#eee', color: '#17365D' }}
        <div
          class="po-cell po-event po-event--{ev.type}"
          style="grid-column: {col}; grid-row: {rowStart} / {rowEnd}; background: {style.bg}; color: {style.color};"
          aria-label="{ev.title}"
        >
          {#if ev.title}
            <div class="po-event-title">
              {#if ev.link}
                <a class="po-link" href="/{lang}{ev.link}">{ev.title}</a>
              {:else}
                {ev.title}
              {/if}
            </div>
          {/if}
          {#if ev.subtitle}
            <div class="po-event-sub">{ev.subtitle}</div>
          {/if}
          {#if ev.venue}
            <div class="po-event-venue">{ev.venue}</div>
          {/if}
        </div>
      {/each}

    </div><!-- /po-grid -->

    <!-- ── Legend ── -->
    <div class="po-legend">
      {#each legendItems as item}
        <div class="po-legend-item">
          <span class="po-legend-dot" style="background:{item.color};"></span>
          <span>{item.label}</span>
        </div>
      {/each}
    </div>

    <p class="po-note">※ Detailed session titles, times, and room assignments are subject to change. Schedule will be updated as confirmed by the LOC.</p>
  </div>
</div>

<style>
  /* ── Variables ── */
  .po-wrap {
    --navy:   #17365D;
    --border: #999999;
    --bg:     #ffffff;
  }

  /* ── Scroll wrapper ── */
  .po-scroll {
    overflow-x: auto;
    width: 100%;
  }
  .po-wrap {
    min-width: 1200px;
    max-width: 2048px;
    margin: 0 auto;
    padding: 1.5rem 1rem 1rem;
    background: var(--bg);
    font-family: Arial, Helvetica, sans-serif;
    color: var(--navy);
  }

  /* ── Header ── */
  .po-header {
    text-align: center;
    margin-bottom: 1rem;
  }
  .po-title {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--navy);
    margin: 0 0 0.3rem;
    letter-spacing: -0.01em;
  }
  .po-subtitle {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--navy);
    margin: 0;
    opacity: 0.8;
  }

  /* ── Main grid ──
     col 1 = Time (~120px), cols 2–8 = 7 equal day columns
     row 1 = day-header
     rows 2–15 = time slots (proportional heights: 30min=30px, 60min=60px, evening=60px)
  */
  .po-grid {
    display: grid;
    grid-template-columns: 120px repeat(7, minmax(0, 1fr));
    grid-template-rows:
      auto          /* row 1:  day header          */
      30px          /* row 2:  09:00–09:30  30 min */
      30px          /* row 3:  09:30–10:00  30 min */
      60px          /* row 4:  10:00–11:00  60 min */
      60px          /* row 5:  11:00–12:00  60 min */
      60px          /* row 6:  12:00–13:00  60 min */
      60px          /* row 7:  13:00–14:00  60 min */
      60px          /* row 8:  14:00–15:00  60 min */
      30px          /* row 9:  15:00–15:30  30 min */
      30px          /* row 10: 15:30–16:00  30 min */
      55px          /* row 11: 16:00–16:30  30 min (taller to fit keynote card) */
      55px          /* row 12: 16:30–17:00  30 min (taller to fit keynote card) */
      55px          /* row 13: 17:00–17:30  30 min (taller to fit keynote card) */
      55px          /* row 14: 17:30–18:00  30 min (taller to fit keynote card) */
      30px          /* row 15: 18:00–18:30  30 min */
      30px          /* row 16: 18:30–19:00  30 min */
      60px;         /* row 17: 19:00–Late   evening */
    border-top:  1px solid var(--border);
    border-left: 1px solid var(--border);
  }

  /* ── Generic cell ── */
  .po-cell {
    border-right:  1px solid var(--border);
    border-bottom: 1px solid var(--border);
    box-sizing: border-box;
    overflow: hidden;
  }

  /* ── Time column header ── */
  .po-time-header {
    grid-column: 1;
    grid-row: 1;
    background: var(--navy);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Day headers ── */
  .po-day-header {
    background: var(--navy);
    color: #fff;
    text-align: center;
    padding: 0.5rem 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
  }
  .po-weekday {
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1.1;
  }
  .po-date {
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0.9;
  }
  .po-venue {
    font-size: 0.62rem;
    font-style: italic;
    opacity: 0.7;
    margin-top: 0.1rem;
  }

  /* ── Time labels ── */
  .po-time-label {
    background: var(--bg);
    font-size: 0.62rem;
    font-weight: 700;
    color: var(--navy);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.1rem 0.2rem;
    line-height: 1.3;
  }

  /* ── Event blocks ── */
  .po-event {
    padding: 0.2rem 0.35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    text-align: center;
    z-index: 2;
    position: relative;
  }
  .po-event-title {
    font-size: 0.72rem;
    font-weight: 900;
    line-height: 1.25;
    white-space: pre-line;
    overflow-wrap: break-word;
  }
  .po-event-sub {
    font-size: 0.6rem;
    font-weight: 600;
    opacity: 0.85;
    white-space: pre-line;
    margin-top: 0.1rem;
  }
  .po-event-venue {
    font-size: 0.58rem;
    font-weight: 700;
    opacity: 0.75;
    font-style: italic;
    margin-top: 0.15rem;
  }

  /* Keynote: white text */
  .po-event--keynote .po-event-title,
  .po-event--keynote .po-event-sub,
  .po-event--keynote .po-event-venue {
    color: #ffffff;
    opacity: 1;
  }

  /* ── Links ── */
  :global(.po-link) {
    color: inherit !important;
    text-decoration: underline;
    text-decoration-color: currentColor;
    text-underline-offset: 2px;
    font-weight: inherit;
    white-space: pre-line;
  }
  :global(.po-link:hover) {
    text-decoration-thickness: 2px;
    opacity: 0.85;
  }

  /* ── Legend ── */
  .po-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
    margin-top: 0.9rem;
    padding-top: 0.6rem;
    border-top: 1px solid #ccc;
  }
  .po-legend-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--navy);
  }
  .po-legend-dot {
    display: inline-block;
    width: 13px;
    height: 13px;
    border: 1px solid var(--border);
    flex-shrink: 0;
  }

  /* ── Note ── */
  .po-note {
    font-size: 0.65rem;
    color: var(--navy);
    opacity: 0.55;
    margin-top: 0.4rem;
  }
</style>
