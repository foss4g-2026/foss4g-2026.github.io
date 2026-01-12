<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
  import Table from '$components/Table.svelte'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.general_sessions')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.general_sessions')}</h1>
  
  <!-- Submit Button with Logo -->
  <SubmitButton />
  
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

    <!-- Timeline -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.timeline.title')}</h2>
    <Table 
      headers={[$t('call_for_papers.general_sessions.timeline.headers.phase'), $t('call_for_papers.general_sessions.timeline.headers.date')]}
      rows={[
        [$t('call_for_papers.general_sessions.timeline.rows.call_for_talks.phase'), $t('call_for_papers.general_sessions.timeline.rows.call_for_talks.date')],
        [$t('call_for_papers.general_sessions.timeline.rows.community_vote.phase'), $t('call_for_papers.general_sessions.timeline.rows.community_vote.date')],
        [$t('call_for_papers.general_sessions.timeline.rows.announce_accepted.phase'), $t('call_for_papers.general_sessions.timeline.rows.announce_accepted.date')],
        [$t('call_for_papers.general_sessions.timeline.rows.full_program.phase'), $t('call_for_papers.general_sessions.timeline.rows.full_program.date')]
      ]}
      class="mb-8"
    />

    <!-- Session Types -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.general_sessions.session_types.title')}</h2>
    
    <div class="space-y-6 mb-8">
      <!-- Regular Talk -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-primary">{$t('call_for_papers.general_sessions.session_types.regular_talk.title')}</h3>
        <p class="text-sm text-gray-700">
          {$t('call_for_papers.general_sessions.session_types.regular_talk.description')}
        </p>
      </div>

      <!-- Lightning Talk -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-primary">{$t('call_for_papers.general_sessions.session_types.lightning_talk.title')}</h3>
        <p class="text-sm text-gray-700">
          {$t('call_for_papers.general_sessions.session_types.lightning_talk.description')}
        </p>
      </div>

      <!-- Poster Presentations -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-primary">{$t('call_for_papers.general_sessions.session_types.poster_presentations.title')}</h3>
        <p class="text-sm text-gray-700">
          {$t('call_for_papers.general_sessions.session_types.poster_presentations.description')}
        </p>
      </div>

      <!-- Interactive Demonstration -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-primary">{$t('call_for_papers.general_sessions.session_types.interactive_demonstration.title')}</h3>
        <p class="text-sm text-gray-700">
          {$t('call_for_papers.general_sessions.session_types.interactive_demonstration.description')}
        </p>
      </div>
    </div>
  </div>
</div>
