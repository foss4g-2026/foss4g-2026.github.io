<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('ice_breaker.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">{$t('ice_breaker.title')}</h1>
  
  <p class="text-lg font-semibold mb-8">{$t('ice_breaker.date')}</p>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-4">{$t('ice_breaker.intro')}</p>
    <p class="text-base mb-6">{$t('ice_breaker.description')}</p>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.venue_title')}</h2>
    <p class="text-base mb-2">
      <a href={$t('ice_breaker.venue_link')} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">
        {$t('ice_breaker.venue_name')}
      </a>
    </p>
    <p class="text-base mb-6">{$t('ice_breaker.venue_description')}</p>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.what_to_expect_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('ice_breaker.what_to_expect') as item}
        <li class="text-base mb-2">{item}</li>
      {/each}
    </ul>
    
    <p class="text-base italic">{$t('ice_breaker.closing')}</p>
  </div>
</div>
