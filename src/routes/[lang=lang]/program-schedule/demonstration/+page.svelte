<script lang="ts">
  import { t } from 'svelte-i18n'
  import demoData from '$lib/data/demonstration.json'

  interface Demonstration {
    ID: string
    'Proposal title': string
    'Speaker names': string[]
    Abstract: string
    Description: string
    'Session type': { en: string }
  }

  const demonstrations: Demonstration[] = demoData as Demonstration[]

  let searchQuery = $state('')

  const filtered = $derived(
    searchQuery.trim() === ''
      ? demonstrations
      : demonstrations.filter(d =>
          d['Proposal title'].toLowerCase().includes(searchQuery.toLowerCase()) ||
          d['Speaker names'].join(', ').toLowerCase().includes(searchQuery.toLowerCase())
        )
  )

  let expandedId = $state<string | null>(null)

  function toggleAbstract(id: string) {
    expandedId = expandedId === id ? null : id
  }
</script>

<svelte:head>
  <title>{$t('nav.program_sub.demonstration')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('demonstration.title')}</h1>

  <!-- Info box -->
  <div class="bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
    <h2 class="text-xl font-semibold text-green-800 mb-3">{$t('demonstration.about_title')}</h2>
    <p class="text-green-900 mb-4">{$t('demonstration.about_description')}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-semibold text-green-800">{$t('demonstration.venue_title')}</p>
        <p class="text-green-900">{$t('demonstration.venue_name')}</p>
        <p class="text-green-900 text-sm">{$t('demonstration.venue_note')}</p>
      </div>
      <div>
        <p class="font-semibold text-green-800">{$t('demonstration.schedule_title')}</p>
        <p class="text-green-900">{$t('demonstration.core_time')}</p>
      </div>
    </div>
  </div>

  <!-- Schedule -->
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-3">{$t('demonstration.schedule_title')}</h2>
    <p class="text-gray-700 mb-2">{$t('demonstration.schedule_description')}</p>
    <p class="text-gray-700">{$t('demonstration.schedule_note')}</p>
  </div>

  <!-- Information for Presenters -->
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
    <h2 class="text-xl font-semibold mb-3">{$t('demonstration.presenters_title')}</h2>
    <ul class="list-disc pl-6 space-y-2 text-gray-700">
      <li>{$t('demonstration.presenter_1')}</li>
      <li>{$t('demonstration.presenter_2')}</li>
    </ul>
  </div>

  <!-- Demonstration list -->
  <h2 class="text-2xl font-semibold mb-4">{$t('demonstration.list_title')}</h2>

  <!-- Search -->
  <div class="mb-4">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder={$t('demonstration.search_placeholder')}
      class="input input-bordered w-full max-w-lg"
    />
  </div>

  <p class="text-sm text-gray-500 mb-4">{filtered.length} {$t('demonstration.total_count')}</p>

  <div class="overflow-x-auto rounded-lg border border-gray-200">
    <table class="table table-zebra w-full">
      <thead class="bg-gray-100">
        <tr>
          <th class="w-24">{$t('demonstration.table_id')}</th>
          <th>{$t('demonstration.table_title')}</th>
          <th class="w-48">{$t('demonstration.table_speakers')}</th>
        </tr>
      </thead>
      <tbody>
        {#each filtered as demo (demo.ID)}
          <tr class="hover:bg-blue-50 cursor-pointer" onclick={() => toggleAbstract(demo.ID)}>
            <td class="font-mono text-sm text-gray-500">{demo.ID}</td>
            <td>
              <p class="font-medium text-gray-900">{demo['Proposal title']}</p>
              {#if expandedId === demo.ID}
                <p class="text-sm text-gray-600 mt-2 leading-relaxed">{demo.Abstract}</p>
              {/if}
            </td>
            <td class="text-sm text-gray-600">{demo['Speaker names'].join(', ')}</td>
          </tr>
        {/each}
        {#if filtered.length === 0}
          <tr>
            <td colspan="3" class="text-center text-gray-400 py-8">{$t('demonstration.no_results')}</td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
  <p class="text-xs text-gray-400 mt-3">{$t('demonstration.click_hint')}</p>
</div>
