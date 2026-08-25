<script lang="ts">
  import { t, json } from 'svelte-i18n'

  interface Section {
    title: string
    html: string
  }

  $: intro = $json('attendee_guide.intro') as unknown as string[]
  $: sections = $json('attendee_guide.sections') as unknown as Section[]
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.attendee_guide')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-6">{$t('attendee_guide.title')}</h1>

  <div class="prose max-w-none">
    {#each intro as p}
      <p class="mb-4">{p}</p>
    {/each}

    {#each sections as section}
      <hr class="my-8" />
      <h2 class="text-2xl font-semibold mb-4">{section.title}</h2>
      {@html section.html}
    {/each}
  </div>
</div>
