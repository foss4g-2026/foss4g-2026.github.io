<script lang="ts">
  import { t } from 'svelte-i18n'
  import sessions from '../../../../../data/foss4g-2026_sessions.json'

  interface Session {
    ID: string
    'Proposal title': string
    'Speaker names': string[]
  }

  const allSessions: Session[] = (sessions as Session[]).sort((a, b) =>
    a['Speaker names'][0].localeCompare(b['Speaker names'][0])
  )

  let searchQuery = $state('')

  const filteredSessions = $derived(() => {
    if (!searchQuery.trim()) return allSessions
    const query = searchQuery.toLowerCase()
    return allSessions.filter(
      (s) =>
        s['Proposal title'].toLowerCase().includes(query) ||
        s['Speaker names'].some((name) => name.toLowerCase().includes(query))
    )
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

  <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder={$t('presentations.search_placeholder')}
      class="input input-bordered w-full sm:max-w-md"
    />
    <span class="text-sm text-gray-500">
      {filteredSessions().length} {$t('presentations.total_count')}
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
        {#each filteredSessions() as session (session.ID)}
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
</div>
