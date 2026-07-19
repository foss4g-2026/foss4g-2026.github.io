<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import Map from '$components/Map_event.svelte'

  type Restaurant = { name: string; cuisine: string; hours: string; walk: string; notes: string; lng: number; lat: number }

  $: restaurants = $json('community_sprint.restaurants') as unknown as Restaurant[]

  $: mapItems = restaurants.map((r, i) => ({
    coordinates: [r.lng, r.lat] as [number, number],
    label: i + 1,
    title: r.name,
    description: `${r.name}\n${r.cuisine}\n${r.hours}\n${r.walk}${r.notes ? '\n' + r.notes : ''}`,
    color: 'text-red-600'
  }))
</script>

<svelte:head>
  <title>{$t('community_sprint.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('community_sprint.title')}</h1>

  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-4">{$t('community_sprint.intro')}</p>
    <p class="text-base mb-6">{$t('community_sprint.description')}</p>

    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_sprint.date_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $json('community_sprint.dates') as date}
        <li class="text-base">{date}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('community_sprint.venue_title')}</h2>
    <p class="text-base mb-2">
      <a href={$t('community_sprint.venue_link')} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
        {$t('community_sprint.venue')}
      </a>
    </p>
    <ul class="list-disc pl-6 mb-6">
      <li class="text-base">{$t('community_sprint.venue_note')}</li>
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('community_sprint.host_title')}</h2>
    <p class="text-base mb-6">{@html $t('community_sprint.host_description')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('community_sprint.registration_title')}</h2>
    <p class="text-base mb-4">{@html $t('community_sprint.registration_description')}</p>
    <p class="text-base italic">{$t('community_sprint.registration_note')}</p>
  </div>

  <!-- Nearby Restaurants -->
  <div class="mt-12">
    <h2 class="text-2xl font-semibold mb-2">{$t('community_sprint.nearby_restaurants_title')}</h2>
    <p class="text-base text-gray-600 mb-6">{$t('community_sprint.nearby_restaurants_note')}</p>

    <!-- Map -->
    <div class="mb-8">
      <Map
        mapClass="w-full h-96 rounded-lg"
        center={[132.44852, 34.38779]}
        zoom={15}
        style={$t('map.settings.style')}
        items={[
          { coordinates: [132.44852, 34.38779] as [number, number], title: $t('community_sprint.venue'), description: $t('community_sprint.venue'), color: 'text-blue-600' },
          ...mapItems
        ]}
      />
    </div>
    <!-- Map Legend -->
    <div class="flex flex-wrap gap-4 mb-6 text-sm">
      <div class="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-blue-600"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
        <span>{$t('community_sprint.venue')}</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-300 text-xs font-bold border-2 border-red-600">1</div>
        <span>{$t('community_sprint.nearby_restaurants_title')}</span>
      </div>
    </div>

    <!-- Restaurant Table -->
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-3 py-2 text-left w-10">#</th>
            <th class="border border-gray-300 px-3 py-2 text-left">{$t('community_sprint.restaurants_table.name')}</th>
            <th class="border border-gray-300 px-3 py-2 text-left">{$t('community_sprint.restaurants_table.cuisine')}</th>
            <th class="border border-gray-300 px-3 py-2 text-left">{$t('community_sprint.restaurants_table.hours')}</th>
            <th class="border border-gray-300 px-3 py-2 text-left">{$t('community_sprint.restaurants_table.walk')}</th>
            <th class="border border-gray-300 px-3 py-2 text-left">{$t('community_sprint.restaurants_table.notes')}</th>
          </tr>
        </thead>
        <tbody>
          {#each restaurants as r, i}
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-300 px-3 py-2 text-center">{i + 1}</td>
              <td class="border border-gray-300 px-3 py-2 font-medium">{r.name}</td>
              <td class="border border-gray-300 px-3 py-2">{r.cuisine}</td>
              <td class="border border-gray-300 px-3 py-2">{r.hours}</td>
              <td class="border border-gray-300 px-3 py-2 whitespace-nowrap">{r.walk}</td>
              <td class="border border-gray-300 px-3 py-2 text-gray-600">{r.notes}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
