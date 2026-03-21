<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.geochicas')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('program_schedule.geochicas.title')}</h1>
  
  <!-- Hero Image -->
  <div class="mb-8 flex justify-center">
    <img 
      src="/images/Geochicas/Geochicas.webp" 
      alt="Geochicas" 
      class="rounded-lg shadow-lg max-w-2xl w-full object-cover"
    />
  </div>

  <div class="prose max-w-none">
    <!-- About Geochicas -->
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.geochicas.about.title')}</h2>
    <p class="mb-4">
      {$t('program_schedule.geochicas.about.description')}
    </p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      {#each $t('program_schedule.geochicas.about.pillars') as pillar}
        <li>{pillar}</li>
      {/each}
    </ul>

    <p class="mb-6">
      {$t('program_schedule.geochicas.about.anniversary')}
    </p>

    <!-- The Geochicas Take! Event -->
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.geochicas.gathering.title')}</h2>
    <p class="mb-4">
      {$t('program_schedule.geochicas.gathering.description')}
    </p>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      {#each $t('program_schedule.geochicas.gathering.opportunities') as opportunity}
        <li>{opportunity}</li>
      {/each}
    </ul>

    <!-- Important Notice -->
    <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
      <p class="mb-3">
        <strong>{$t('program_schedule.geochicas.notice.exclusive')}</strong> {$t('program_schedule.geochicas.notice.exclusive_detail')}
      </p>
      <p>
        {$t('program_schedule.geochicas.notice.support')}
      </p>
    </div>

    <!-- Event Details Table -->
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.geochicas.event_info.title')}</h2>
    <Table 
      headers={[String($t('program_schedule.geochicas.event_info.headers.item')), String($t('program_schedule.geochicas.event_info.headers.details'))]}
      rows={[
        [String($t('program_schedule.geochicas.event_info.date_time')), String($t('program_schedule.geochicas.event_info.tbc'))],
        [String($t('program_schedule.geochicas.event_info.venue')), String($t('program_schedule.geochicas.event_info.tbc'))]
      ]}
      class="w-full mb-8"
    />

    <!-- Learn More -->
    <h2 class="text-2xl font-semibold mb-4">{$t('program_schedule.geochicas.learn_more.title')}</h2>
    <p class="mb-6">
      {$t('program_schedule.geochicas.learn_more.description')} 
      <a href="https://geochicas.community" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">{$t('program_schedule.geochicas.learn_more.website')}</a> 
      {$t('program_schedule.geochicas.learn_more.and')} 
      <a href="https://www.instagram.com/geochicasosm" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">{$t('program_schedule.geochicas.learn_more.instagram')}</a>.
    </p>
  </div>
</div>
