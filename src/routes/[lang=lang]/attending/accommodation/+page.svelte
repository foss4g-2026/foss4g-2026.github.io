<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'

  type Hotel = { name: string; category: string; url: string; lng: number; lat: number }

  $: hotels = $t('accommodation.hotels') as unknown as Hotel[]

  $: mapItems = hotels.map((hotel, i) => ({
    coordinates: [hotel.lng, hotel.lat] as [number, number],
    label: i + 1,
    title: hotel.name,
    description: hotel.name,
  }))
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.accommodation')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('accommodation.title')}</h1>

  <p class="mb-4 text-lg">{$t('accommodation.intro')}</p>

  <div class="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-8">
    <p class="text-gray-700">{$t('accommodation.disclaimer')}</p>
  </div>

  <!-- Map -->
  <div class="mb-8">
    <Map
      mapClass="w-full h-96 rounded-lg"
      center={[132.462, 34.394]}
      zoom={12}
      style={$t('map.settings.style')}
      items={[
        ...mapItems,
        { coordinates: [132.451043, 34.392077] as [number, number], title: $t('venue.main_venue.title'), description: $t('venue.main_venue.title'), color: 'text-blue-600' },
        { coordinates: [132.46937446033377, 34.395002597128396] as [number, number], title: $t('venue.workshop_venue.title'), description: $t('venue.workshop_venue.title'), color: 'text-green-600' },
        { coordinates: [132.4754913298887, 34.397656485682845] as [number, number], title: $t('accommodation.legend.hiroshima_station'), description: $t('accommodation.legend.hiroshima_station'), color: 'text-orange-500' },
      ]}
    />
  </div>

  <!-- Map Legend -->
  <div class="flex flex-wrap gap-4 mb-8 text-sm">
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-full bg-red-500"></div>
      <span>{$t('accommodation.legend.hotels')}</span>
    </div>
    <div class="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-blue-600"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
      <span>{$t('venue.main_venue.title')}</span>
    </div>
    <div class="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-green-600"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
      <span>{$t('venue.workshop_venue.title')}</span>
    </div>
    <div class="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-orange-500"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
      <span>{$t('accommodation.legend.hiroshima_station')}</span>
    </div>
  </div>

  <!-- Hotel Table -->
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-3 py-2 text-left w-12">{$t('accommodation.table.number')}</th>
          <th class="border border-gray-300 px-3 py-2 text-left">{$t('accommodation.table.name')}</th>
          <th class="border border-gray-300 px-3 py-2 text-left w-36">{$t('accommodation.table.category')}</th>
          <th class="border border-gray-300 px-3 py-2 text-left w-28">{$t('accommodation.table.website')}</th>
        </tr>
      </thead>
      <tbody>
        {#each hotels as hotel, i}
          <tr class="hover:bg-gray-50">
            <td class="border border-gray-300 px-3 py-2 text-center">{i + 1}</td>
            <td class="border border-gray-300 px-3 py-2">{hotel.name}</td>
            <td class="border border-gray-300 px-3 py-2">{$t(`accommodation.categories.${hotel.category}`)}</td>
            <td class="border border-gray-300 px-3 py-2 text-center">
              {#if hotel.url}
                <a href={hotel.url} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                  {$t('accommodation.table.website')}
                </a>
              {:else}
                -
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
