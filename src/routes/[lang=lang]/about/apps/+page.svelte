<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import Card from '$components/Card.svelte'

  $: items = $json('about.apps.items') as unknown as { name: string; description: string; url: string }[]
</script>

<svelte:head>
  <title>{$t('nav.about_sub.apps')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.apps.title')}</h1>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
    <p class="text-yellow-800">{$t('about.apps.disclaimer')}</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each items as app}
      <Card title={app.name}>
        <p class="text-gray-700 mb-4">{app.description}</p>
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          class="link link-primary break-all"
        >
          {app.url}
        </a>
      </Card>
    {/each}
  </div>

  <p class="text-gray-700 mt-8">
    {$t('about.apps.cta_prefix')}
    <a
      href="https://github.com/foss4g-2026/foss4g-2026.github.io"
      target="_blank"
      rel="noopener noreferrer"
      class="link link-primary"
    >
      https://github.com/foss4g-2026/foss4g-2026.github.io
    </a>
    {$t('about.apps.cta_suffix')}
  </p>
</div>
