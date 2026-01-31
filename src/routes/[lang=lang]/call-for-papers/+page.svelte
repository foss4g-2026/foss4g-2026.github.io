<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('call_for_papers.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('call_for_papers.title')}</h1>
  
  <!-- General Sessions -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/call-for-papers/general-sessions" 
         class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('call_for_papers.general_sessions.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.general_sessions.description')}</p>
  </section>

  <!-- Academic Track -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/call-for-papers/academic-track" 
         class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('call_for_papers.academic_track.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.academic_track.description')}</p>
  </section>

  <!-- Workshop Proposals -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/call-for-papers/workshops" 
         class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('call_for_papers.workshops.title')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('call_for_papers.workshops.description')}</p>
  </section>
  <section class="mb-12">
    <h3 class="text-lg font-semibold mb-2">Contact</h3>
    <p>For any questions about the Call for Proposals, please contact <strong>callforpapers[at]foss4g.org</strong></p>
  </section>
</div>
