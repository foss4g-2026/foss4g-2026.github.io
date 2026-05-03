<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  
  $: lang = $page.params.lang || 'en'
</script>

<svelte:head>
  <title>{$t('nav.sponsors_sub.honorable_mentions')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.sponsors.honorable_mentions.title')}</h1>
  
  <div class="prose max-w-none mb-12">
    <p class="text-lg mb-6 leading-relaxed text-gray-700">
      {$t('about.sponsors.honorable_mentions.intro')}
    </p>
    
    <p class="text-lg mb-8 leading-relaxed text-gray-700">
      {$t('about.sponsors.honorable_mentions.description_before')}
      <a href="/{lang}/register/adopt-a-ticket" class="text-primary hover:underline font-semibold">
        {$t('about.sponsors.honorable_mentions.description_link')}
      </a>
      {$t('about.sponsors.honorable_mentions.description_after')}
    </p>
  </div>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md mb-12">
    <h2 class="text-2xl font-semibold mb-6">{$t('about.sponsors.honorable_mentions.supporters_title')}</h2>
    
    <ul class="list-disc list-inside space-y-2 text-lg">
      {#each $t('about.sponsors.honorable_mentions.supporters') as supporter}
        <li>{supporter}</li>
      {/each}
    </ul>
  </div>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
    <p class="text-gray-700 text-center italic">
      {$t('about.sponsors.honorable_mentions.thank_you')}
    </p>
  </div>
</div>
