<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('excursion.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">🚢 {$t('excursion.title')}</h1>
  
  <div class="mb-6">
    <p class="text-lg font-semibold">{$t('excursion.date')}</p>
    <p class="text-base">{$t('excursion.time')}</p>
    <p class="text-base font-semibold text-primary">{$t('excursion.fee')}</p>
  </div>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-4">{$t('excursion.intro')}</p>
    
    <ul class="list-disc pl-6 mb-6">
      {#each $t('excursion.notes') as note}
        <li class="text-base mb-2">{note}</li>
      {/each}
    </ul>
    
    <hr class="my-8" />
    
    <h2 class="text-2xl font-semibold mb-6">{$t('excursion.itinerary_title')}</h2>
    
    {#each $t('excursion.itinerary') as item}
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">
          <span class="text-3xl mr-2">{item.icon}</span>
          {item.title}
        </h3>
        <p class="text-base text-gray-700">{item.description}</p>
      </div>
    {/each}
    
    <div class="bg-gray-50 p-6 rounded-lg mb-6">
      <h4 class="text-lg font-semibold mb-3">Options:</h4>
      <ul class="space-y-2">
        {#each $t('excursion.free_time_options') as option}
          <li class="text-base">{option}</li>
        {/each}
      </ul>
    </div>
    
    <hr class="my-8" />
    
    <p class="text-base italic text-gray-600">{$t('excursion.return_note')}</p>
  </div>
</div>
