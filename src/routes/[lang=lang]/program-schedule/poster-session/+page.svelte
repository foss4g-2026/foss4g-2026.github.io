<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/state'
  import posterData from '$lib/data/posterSessions.json'

  interface Poster {
    ID: string
    'Proposal title': string
    'Speaker names': string[]
    Abstract: string
    Description: string
    'Session type': { en: string }
  }

  const posters: Poster[] = posterData as Poster[]

  let searchQuery = $state('')

  const filtered = $derived(
    searchQuery.trim() === ''
      ? posters
      : posters.filter(p =>
          p['Proposal title'].toLowerCase().includes(searchQuery.toLowerCase()) ||
          p['Speaker names'].join(', ').toLowerCase().includes(searchQuery.toLowerCase())
        )
  )

  let expandedId = $state<string | null>(null)

  function toggleAbstract(id: string) {
    expandedId = expandedId === id ? null : id
  }
</script>

<svelte:head>
  <title>{$t('nav.program_sub.poster_session')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('poster_session.title')}</h1>

  <!-- Info box -->
  <div class="bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
    <h2 class="text-xl font-semibold text-green-800 mb-3">{$t('poster_session.about_title')}</h2>
    <p class="text-green-900 mb-4">{$t('poster_session.about_description')}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-semibold text-green-800">{$t('poster_session.venue_title')}</p>
        <p class="text-green-900">{$t('poster_session.venue_name')}</p>
      </div>
      <div>
        <p class="font-semibold text-green-800">{$t('poster_session.schedule_title')}</p>
        <p class="text-green-900">{$t('poster_session.core_time')}</p>
      </div>
    </div>
  </div>

  <!-- Guidelines -->
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
    <h2 class="text-xl font-semibold mb-3">{$t('poster_session.guidelines_title')}</h2>
    <ul class="list-disc pl-6 space-y-2 text-gray-700">
      <li>{$t('poster_session.guideline_1')}</li>
      <li>{$t('poster_session.guideline_2')}</li>
      <li>{$t('poster_session.guideline_3')}</li>
    </ul>
  </div>

  <!-- Poster list -->
  <h2 class="text-2xl font-semibold mb-4">{$t('poster_session.list_title')}</h2>

  <!-- Search -->
  <div class="mb-4">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder={$t('poster_session.search_placeholder')}
      class="input input-bordered w-full max-w-lg"
    />
  </div>

  <p class="text-sm text-gray-500 mb-4">{filtered.length} {$t('poster_session.total_count')}</p>

  <div class="overflow-x-auto rounded-lg border border-gray-200">
    <table class="table table-zebra w-full">
      <thead class="bg-gray-100">
        <tr>
          <th class="w-24">{$t('poster_session.table_id')}</th>
          <th>{$t('poster_session.table_title')}</th>
          <th class="w-48">{$t('poster_session.table_speakers')}</th>
        </tr>
      </thead>
      <tbody>
        {#each filtered as poster (poster.ID)}
          <tr class="hover:bg-blue-50 cursor-pointer" onclick={() => toggleAbstract(poster.ID)}>
            <td class="font-mono text-sm text-gray-500">{poster.ID}</td>
            <td>
              <p class="font-medium text-gray-900">{poster['Proposal title']}</p>
              {#if expandedId === poster.ID}
                <p class="text-sm text-gray-600 mt-2 leading-relaxed">{poster.Abstract}</p>
              {/if}
            </td>
            <td class="text-sm text-gray-600">{poster['Speaker names'].join(', ')}</td>
          </tr>
        {/each}
        {#if filtered.length === 0}
          <tr>
            <td colspan="3" class="text-center text-gray-400 py-8">{$t('poster_session.no_results')}</td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
  <p class="text-xs text-gray-400 mt-3">{$t('poster_session.click_hint')}</p>
</div>
