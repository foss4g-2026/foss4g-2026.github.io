<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  
  $: lang = $page.params.lang || 'en'
</script>

<svelte:head>
  <title>{$t('nav.sponsors')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.sponsors.title')}</h1>
  
  <!-- Information for Sponsors -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/sponsors/information-for-sponsors" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.sponsors_sub.information_for_sponsors')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.sponsors.landing.information_description')}</p>
  </section>
  
  <!-- Honorable Mentions -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/sponsors/honorable-mentions" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.sponsors_sub.honorable_mentions')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.sponsors.landing.honorable_description')}</p>
  </section>
</div>
