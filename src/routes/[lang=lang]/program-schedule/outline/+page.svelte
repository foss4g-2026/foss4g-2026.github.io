<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/state'
  import ProgramOutline from '$components/ProgramOutline.svelte'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.outline')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.outline')}</h1>

  <ProgramOutline lang={page.params.lang} />
</div>
