<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.general_sessions')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.general_sessions')}</h1>
  
  <!-- Submit Button -->
  <div class="text-center mb-8">
    <a href="javascript:void(0)" class="btn btn-primary btn-lg">
      Submit a proposal for General Sessions
    </a>
  </div>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.topics.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.general_sessions.topics.intro')}
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.general_sessions.topics.technical_topics.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.general_sessions.topics.technical_topics.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.general_sessions.topics.application_areas.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.general_sessions.topics.application_areas.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Timeline</h2>
    <Table 
      headers={['Phase', 'Date']}
      rows={[
        ['Call for Talks Submissions', 'January 12 - March 16, 2026'],
        ['Community Vote', 'March 17 - March 24, 2026'],
        ['Announce accepted talks', 'April 15, 2026'],
        ['Full program', 'April 22, 2026 (TBC)']
      ]}
      class="mb-8"
    />
  </div>
</div>
