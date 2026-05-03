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
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <a 
      href="/{lang}/sponsors/information-for-sponsors"
      class="block p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105 border-2 border-transparent hover:border-primary"
    >
      <h2 class="text-2xl font-semibold mb-3 text-primary">{$t('nav.sponsors_sub.information_for_sponsors')}</h2>
      <p class="text-gray-700">{$t('about.sponsors.landing.information_description')}</p>
    </a>
    
    <a 
      href="/{lang}/sponsors/honorable-mentions"
      class="block p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105 border-2 border-transparent hover:border-primary"
    >
      <h2 class="text-2xl font-semibold mb-3 text-primary">{$t('nav.sponsors_sub.honorable_mentions')}</h2>
      <p class="text-gray-700">{$t('about.sponsors.landing.honorable_description')}</p>
    </a>
  </div>
</div>
