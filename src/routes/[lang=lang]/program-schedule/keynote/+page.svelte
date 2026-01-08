<script lang="ts">
  import { t } from 'svelte-i18n'
  import ComingSoon from '$components/ComingSoon.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.keynote')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.keynote')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg text-center">{$t('keynote.announcement')}</p>
  </div>
</div>
