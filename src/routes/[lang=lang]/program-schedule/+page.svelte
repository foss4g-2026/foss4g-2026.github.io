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
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/keynote" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('program_schedule.keynote.title')}
      </a>
    </h2>
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

  <!-- Community Events -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/community-events" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('community_events.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('community_events.summary_description')}</p>
  </section>

  <!-- Community Sprint -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/community-sprint" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.program_sub.community_sprint')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('community_sprint.intro')}</p>
  </section>

  <!-- Ice Breaker -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/ice-breaker" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.program_sub.ice_breaker')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('ice_breaker.intro')}</p>
  </section>

  <!-- Gala Dinner -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/gala-dinner" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.program_sub.gala_dinner')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('gala_dinner.date')}</p>
  </section>

  <!-- Excursion -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/program-schedule/excursion" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.program_sub.excursion')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('excursion.intro')}</p>
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
