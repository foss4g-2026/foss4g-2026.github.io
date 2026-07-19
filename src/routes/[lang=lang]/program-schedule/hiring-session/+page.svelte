<script lang="ts">
  import { t, json } from 'svelte-i18n'

  interface WhatToExpectItem {
    icon: string
    description: string
  }

  $: whatToExpect = $json('hiring_session.what_to_expect') as unknown as WhatToExpectItem[]
</script>

<svelte:head>
  <title>{$t('hiring_session.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">{$t('hiring_session.title')}</h1>

  <p class="text-lg font-semibold mb-4">{$t('hiring_session.date')}</p>

  <p class="text-lg text-gray-700 italic mb-8">{$t('hiring_session.tagline')}</p>

  <div class="prose max-w-none mb-8">
    <p class="text-base mb-4">{$t('hiring_session.intro')}</p>
    <p class="text-base mb-6">{$t('hiring_session.description')}</p>

    <!-- Venue -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('hiring_session.venue_title')}</h2>
    <p class="text-base font-semibold mb-6">{$t('hiring_session.venue')}</p>

    <!-- What to Expect -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('hiring_session.what_to_expect_title')}</h2>
    <ul class="space-y-4 mb-6">
      {#each whatToExpect as item}
        <li class="flex items-start">
          <span class="text-2xl mr-4">{item.icon}</span>
          <p class="text-base text-gray-700 mt-1">{item.description}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
