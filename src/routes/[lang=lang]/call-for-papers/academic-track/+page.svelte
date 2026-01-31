<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.academic_track')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.cfp_sub.academic_track')}</h1>
  
  <!-- Submit Button with Logo -->
  <SubmitButton 
    href="https://talks.osgeo.org/fossg4-2026-academic-track/cfp"
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="prose max-w-none">
    <!-- Overview -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.overview.title')}</h2>
    <p class="mb-6">
      {$t('call_for_papers.academic_track.overview.description')}
    </p>

    <!-- Timeline -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.timeline.title')}</h2>
    <Table
      headers={[$t('call_for_papers.academic_track.timeline.headers.phase'), $t('call_for_papers.academic_track.timeline.headers.deadline'), $t('call_for_papers.academic_track.timeline.headers.description')]}
      rows={[
        [$t('call_for_papers.academic_track.timeline.rows.abstract_submission.phase'), $t('call_for_papers.academic_track.timeline.rows.abstract_submission.deadline'), $t('call_for_papers.academic_track.timeline.rows.abstract_submission.description')],
        [$t('call_for_papers.academic_track.timeline.rows.review_period.phase'), $t('call_for_papers.academic_track.timeline.rows.review_period.deadline'), $t('call_for_papers.academic_track.timeline.rows.review_period.description')],
        [$t('call_for_papers.academic_track.timeline.rows.notification.phase'), $t('call_for_papers.academic_track.timeline.rows.notification.deadline'), $t('call_for_papers.academic_track.timeline.rows.notification.description')],
        [$t('call_for_papers.academic_track.timeline.rows.full_paper.phase'), $t('call_for_papers.academic_track.timeline.rows.full_paper.deadline'), $t('call_for_papers.academic_track.timeline.rows.full_paper.description')]
      ]}
      class="mb-8"
    />

    <!-- Submission Process -->
    <h2 class="text-2xl font-semibold mb-4">{$t('call_for_papers.academic_track.submission_process.title')}</h2>
    
    <h3 class="text-xl font-semibold mb-3">{$t('call_for_papers.academic_track.submission_process.step1.title')}</h3>
    <ul class="list-disc pl-6 mb-4">
      {#each $t('call_for_papers.academic_track.submission_process.step1.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h3 class="text-xl font-semibold mb-3">{$t('call_for_papers.academic_track.submission_process.step2.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('call_for_papers.academic_track.submission_process.step2.items') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-lg font-semibold mb-2">Contact</h3>
    <p>For any questions about the Call for Proposals, please contact <strong>callforpapers[at]foss4g.org</strong></p>
  </div>
</div>
