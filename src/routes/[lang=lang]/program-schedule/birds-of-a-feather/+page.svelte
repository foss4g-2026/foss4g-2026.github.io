<script lang="ts">
  import { t } from 'svelte-i18n'

  const wikiUrl = 'https://wiki.osgeo.org/wiki/FOSS4G-2026/BirdsOfAFeather'
</script>

<svelte:head>
  <title>{$t('nav.program_sub.birds_of_a_feather')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-6">{$t('bof.title')}</h1>

  <div class="prose max-w-none">
    <p class="mb-4">{$t('bof.intro')}</p>
    <p class="mb-4">{$t('bof.description')}</p>
    <p class="mb-4">
      {$t('bof.room_before')}<a href={wikiUrl} target="_blank" rel="noopener noreferrer">{$t('bof.wiki_link_text')}</a>{$t('bof.room_after')}
    </p>
    <p class="mb-4">
      {$t('bof.organize_before')}<a href={wikiUrl} target="_blank" rel="noopener noreferrer">{$t('bof.wiki_link_text')}</a>{$t('bof.organize_after')}
    </p>
  </div>
</div>
