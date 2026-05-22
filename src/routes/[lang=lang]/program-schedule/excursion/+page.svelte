<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
  import Map from '$components/Map.svelte'
</script>

<svelte:head>
  <title>{$t('excursion.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">🚢 {$t('excursion.title')}</h1>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-6">{$t('excursion.intro')}</p>
  </div>
  
  <SubmitButton 
    href={$t('excursion.registration_url')}
    text={$t('excursion.registration_title')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="prose max-w-none mb-8 mt-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('excursion.details_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $json('excursion.details') as detail}
        <li class="text-base">{detail}</li>
      {/each}
    </ul>
    
    <h2 class="text-2xl font-semibold mb-6">{$t('excursion.itinerary_title')}</h2>
    
    {#each $json('excursion.itinerary') as item}
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">
          <span class="text-3xl mr-2">{item.icon}</span>
          {#if item.link}
            <a href={item.link} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
              {item.title}
            </a>{item.title_suffix || ''}
          {:else}
            {item.title}{item.title_suffix || ''}
          {/if}
        </h3>
        <p class="text-base text-gray-700">{item.description}</p>
      </div>
    {/each}
    
    <div class="bg-gray-50 p-6 rounded-lg mb-6">
      <ul class="space-y-4">
        {#each $json('excursion.afternoon_options') as option}
          <li class="text-base">
            <span class="text-2xl mr-2">{option.icon}</span>
            {#if option.link}
              <a href={option.link} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">
                {option.title}
              </a>
            {:else}
              <strong>{option.title}</strong>
            {/if}
            <p class="ml-10 text-gray-700">{option.description}</p>
          </li>
        {/each}
      </ul>
    </div>
    
    <hr class="my-8" />
    
    <h2 class="text-2xl font-semibold mb-4">🚆 {$t('excursion.return_title')}</h2>
    <p class="text-base text-gray-700 mb-6">{$t('excursion.return_note')}</p>
    
    <hr class="my-8" />
    
    <h2 class="text-2xl font-semibold mb-6">🗺️ {$t('excursion.map_title')}</h2>
  </div>
  
  <div class="mb-8">
    <Map 
      mapClass="h-96 w-full rounded-lg"
      style={$t('map.settings.style')}
      center={[132.38, 34.34]}
      zoom={10}
      items={[
        {
          coordinates: [132.45215, 34.39269],
          label: "🕊️",
          description: "Peace Memorial Park"
        },
        {
          coordinates: [132.45415, 34.39389],
          label: "⛴️",
          description: "Ferry Terminal"
        },
        {
          coordinates: [132.31983, 34.29600],
          label: "⛩️",
          description: "Itsukushima Shrine"
        },
        {
          coordinates: [132.31966, 34.27978],
          label: "⛰️",
          description: "Mt. Misen"
        },
        {
          coordinates: [132.31853, 34.29202],
          label: "🏯",
          description: "Daishō-in Temple"
        }
      ]}
    />
  </div>
</div>
