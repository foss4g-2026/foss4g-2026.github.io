<script lang="ts">
  import { t } from 'svelte-i18n'
  import generalSessions from '../../../../../data/foss4g-2026_sessions.json'
  import academicSessions from '../../../../../data/foss4g-2026-academic-track_sessions.json'

  interface Session {
    ID: string
    'Proposal title': string
    'Speaker names': string[]
  }

  const sortBySpeaker = (a: Session, b: Session) =>
    a['Speaker names'][0].localeCompare(b['Speaker names'][0])

  const allGeneral: Session[] = (generalSessions as Session[]).slice().sort(sortBySpeaker)
  const allAcademic: Session[] = (academicSessions as Session[]).slice().sort(sortBySpeaker)

  let searchQuery = $state('')

  const matchesQuery = (s: Session, query: string) =>
    s['Proposal title'].toLowerCase().includes(query) ||
    s['Speaker names'].some((name) => name.toLowerCase().includes(query))

  const filteredGeneral = $derived(() => {
    const q = searchQuery.trim().toLowerCase()
    return q ? allGeneral.filter((s) => matchesQuery(s, q)) : allGeneral
  })

  const filteredAcademic = $derived(() => {
    const q = searchQuery.trim().toLowerCase()
    return q ? allAcademic.filter((s) => matchesQuery(s, q)) : allAcademic
  })
</script>

<svelte:head>
  <title>{$t('nav.program_sub.presentations')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.presentations')}</h1>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
    <p class="text-yellow-800">{$t('presentations.confirmed_note')}</p>
  </div>

  <div class="mb-8">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder={$t('presentations.search_placeholder')}
      class="input input-bordered w-full sm:max-w-md"
    />
  </div>

  <section class="mb-12">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
      <h2 class="text-2xl font-semibold">{$t('presentations.general_tracks')}</h2>
      <span class="text-sm text-gray-500">
        {filteredGeneral().length} {$t('presentations.total_count')}
      </span>
    </div>
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>{$t('presentations.table_title')}</th>
            <th class="w-64">{$t('presentations.table_speakers')}</th>
          </tr>
        </thead>
        <tbody>
          {#each filteredGeneral() as session (session.ID)}
            <tr>
              <td>{session['Proposal title']}</td>
              <td>{session['Speaker names'].join(', ')}</td>
            </tr>
          {:else}
            <tr>
              <td colspan="2" class="text-center text-gray-500 py-8">
                {$t('presentations.no_results')}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
      <h2 class="text-2xl font-semibold">{$t('presentations.academic_tracks')}</h2>
      <span class="text-sm text-gray-500">
        {filteredAcademic().length} {$t('presentations.total_count')}
      </span>
    </div>
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>{$t('presentations.table_title')}</th>
            <th class="w-64">{$t('presentations.table_speakers')}</th>
          </tr>
        </thead>
        <tbody>
          {#each filteredAcademic() as session (session.ID)}
            <tr>
              <td>{session['Proposal title']}</td>
              <td>{session['Speaker names'].join(', ')}</td>
            </tr>
          {:else}
            <tr>
              <td colspan="2" class="text-center text-gray-500 py-8">
                {$t('presentations.no_results')}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
</div>
