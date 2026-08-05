<script lang="ts">
  import { t, json } from 'svelte-i18n'

  interface Section {
    title: string
    items: string[]
  }

  $: sections = $json('call_for_papers.speaker.sections') as unknown as Section[]
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.speaker_guidelines')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-6">{$t('call_for_papers.speaker.title')}</h1>

  <div class="prose max-w-none">
    <p class="mb-4">{$t('call_for_papers.speaker.intro')}</p>
    <p class="mb-6">{$t('call_for_papers.speaker.intro_note')}</p>

    {#each sections as section}
      <h2 class="text-2xl font-semibold mb-4 mt-8">{section.title}</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        {#each section.items as item}
          <li>{@html item}</li>
        {/each}
      </ul>
    {/each}
  </div>
</div>
