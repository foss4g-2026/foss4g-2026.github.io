<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  
  $: lang = $page.params.lang
</script>

<svelte:head>
  <title>{$t('program_schedule.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('program_schedule.title')}</h1>
  
  <!-- Outline -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/outline" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('program_schedule.outline.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('program_schedule.outline.description')}</p>
  </section>

  <!-- Keynote Speakers -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.keynote.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('common.coming_soon')}</p>
  </section>

  <!-- Presentations -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/presentations" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('program_schedule.presentations.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('program_schedule.presentations.description')}</p>
  </section>

  <!-- Workshop -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/workshops" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('program_schedule.workshop.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('program_schedule.workshop.description')}</p>
  </section>

  <!-- Events -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.events.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('common.coming_soon')}</p>
  </section>

  <!-- Geochicas -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/geochicas" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('program_schedule.geochicas.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('program_schedule.geochicas.description')}</p>
  </section>
</div>
