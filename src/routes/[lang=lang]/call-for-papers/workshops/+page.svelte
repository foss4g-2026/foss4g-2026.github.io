<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.workshops')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.workshops')}</h1>
  
  <!-- Submit Button -->
  <div class="mb-8 text-center">
    <a href="javascript:void(0)" class="btn btn-primary btn-lg">
      Submit a proposal for Workshops
    </a>
  </div>
  
  <div class="prose max-w-none">
    <!-- Overview -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshops.overview.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.workshops.overview.description')}
    </p>

    <!-- Timeline -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshops.timeline.title')}</h2>
    <Table
      headers={[$t('call_for_papers.workshops.timeline.headers.phase'), $t('call_for_papers.workshops.timeline.headers.deadline'), $t('call_for_papers.workshops.timeline.headers.description')]}
      rows={[
        [$t('call_for_papers.workshops.timeline.rows.submission.phase'), $t('call_for_papers.workshops.timeline.rows.submission.deadline'), $t('call_for_papers.workshops.timeline.rows.submission.description')],
        [$t('call_for_papers.workshops.timeline.rows.vote.phase'), $t('call_for_papers.workshops.timeline.rows.vote.deadline'), $t('call_for_papers.workshops.timeline.rows.vote.description')],
        [$t('call_for_papers.workshops.timeline.rows.announcement.phase'), $t('call_for_papers.workshops.timeline.rows.announcement.deadline'), $t('call_for_papers.workshops.timeline.rows.announcement.description')],
        [$t('call_for_papers.workshops.timeline.rows.program.phase'), $t('call_for_papers.workshops.timeline.rows.program.deadline'), $t('call_for_papers.workshops.timeline.rows.program.description')]
      ]}
      class="mb-8"
    />

    <!-- Workshop Details -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshops.details.title')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.workshops.details.when_where.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.workshops.details.when_where.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.workshops.details.requirements.title')}</h3>
        <ul class="list-disc pl-6 text-sm">
          {#each $t('call_for_papers.workshops.details.requirements.items') as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Submission Guidelines -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.workshops.guidelines.title')}</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <h3 class="text-lg font-semibold mb-3">{$t('call_for_papers.workshops.guidelines.proposal.title')}</h3>
      <ul class="list-disc pl-6 text-sm space-y-1">
        {#each $t('call_for_papers.workshops.guidelines.proposal.items') as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div class="bg-red-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('call_for_papers.workshops.guidelines.important_notes.title')}</h3>
      <ul class="list-disc pl-6 text-sm">
        {#each $t('call_for_papers.workshops.guidelines.important_notes.items') as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
