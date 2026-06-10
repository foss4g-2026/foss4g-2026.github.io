<script lang="ts">
  import { t } from 'svelte-i18n'
  import schoolPosterData from '$lib/data/schoolPosters.json'

  interface Poster {
    ID: string
    'Proposal title': string
    'Speaker names': string[]
    Abstract: string
    Description: string
    'Session type': { en: string }
  }

  const posters: Poster[] = schoolPosterData as Poster[]

  let expandedId = $state<string | null>(null)

  function toggleAbstract(id: string) {
    expandedId = expandedId === id ? null : id
  }
</script>

<svelte:head>
  <title>{$t('nav.program_sub.student_poster')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('student_poster.title')}</h1>

  <!-- Info box -->
  <div class="bg-pink-50 border-l-4 border-pink-500 p-5 mb-8 rounded-r-lg">
    <h2 class="text-xl font-semibold text-pink-800 mb-3">{$t('student_poster.about_title')}</h2>
    <p class="text-pink-900 mb-4">{$t('student_poster.about_description')}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-semibold text-pink-800">{$t('student_poster.venue_title')}</p>
        <p class="text-pink-900">{$t('student_poster.venue_name')}</p>
      </div>
      <div>
        <p class="font-semibold text-pink-800">{$t('student_poster.schedule_title')}</p>
        <p class="text-pink-900">{$t('student_poster.core_time')}</p>
      </div>
    </div>
  </div>

  <!-- Guidelines -->
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
    <h2 class="text-xl font-semibold mb-3">{$t('student_poster.guidelines_title')}</h2>
    <ul class="list-disc pl-6 space-y-2 text-gray-700">
      <li>{$t('student_poster.guideline_1')}</li>
      <li>{$t('student_poster.guideline_2')}</li>
    </ul>
  </div>

  <!-- Poster list -->
  <h2 class="text-2xl font-semibold mb-6">{$t('student_poster.list_title')}</h2>

  <div class="grid grid-cols-1 gap-4">
    {#each posters as poster (poster.ID)}
      <div
        class="border border-gray-200 rounded-lg p-5 hover:border-pink-300 hover:bg-pink-50 cursor-pointer transition-colors"
        onclick={() => toggleAbstract(poster.ID)}
        role="button"
        tabindex="0"
        onkeypress={(e) => e.key === 'Enter' && toggleAbstract(poster.ID)}
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <p class="font-semibold text-gray-900 text-lg leading-snug">{poster['Proposal title']}</p>
            <p class="text-sm text-pink-700 mt-1 font-medium">{poster['Speaker names'].join(', ')}</p>
          </div>
          <div class="text-gray-400 mt-1">
            {#if expandedId === poster.ID}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            {/if}
          </div>
        </div>
        {#if expandedId === poster.ID}
          <p class="text-sm text-gray-600 mt-3 leading-relaxed border-t border-gray-100 pt-3">{poster.Abstract}</p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="text-xs text-gray-400 mt-4">{$t('student_poster.click_hint')}</p>
</div>
