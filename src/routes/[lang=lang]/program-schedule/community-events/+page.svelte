<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
  import Map from '$components/Map_event.svelte'

  type event = { name: string; description: string[]; planned_location: string; event_timing: string; url: string; lng: number; lat: number }

  $: events = $json('community_events.community_list') as unknown as event[]
  
  $: mapItems = events.map((event, i) => ({
    coordinates: [event.lng, event.lat] as [number, number],
    label: i + 1,
    title: event.name,
    description: `${event.name}\n【${event.event_timing}】\n${event.planned_location}`,
    color: 'text-red-600'
  }))
</script>

<svelte:head>
  <title>{$t('community_events.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('community_events.title')}</h1>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-6">{@html $t('community_events.intro')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_events.when_title')}</h2>
    <p class="text-base mb-4">{$t('community_events.when_description')}</p>
    
    <ul class="list-disc pl-6 mb-6">
      {#each $json('community_events.suggested_times') as time}
        <li class="text-base">{time}</li>
      {/each}
    </ul>
    
    <p class="text-base mb-6">{$t('community_events.other_times_note')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_events.venue_title')}</h2>
    <p class="text-base mb-6">{@html $t('community_events.venue_description')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_events.apply_title')}</h2>
    <p class="text-base mb-6">{$t('community_events.apply_description')}</p>
  </div>
  
  <SubmitButton 
    href={$t('community_events.form_url')}
    text={$t('community_events.apply_button_text')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="prose max-w-none mt-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('community_events.notes_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $json('community_events.notes') as note}
        <li class="text-base">{note}</li>
      {/each}
    </ul>
  </div>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-4xl font-bold mb-8">{$t('community_events.map_title')}</h2>

    <!-- Map -->
    <div class="mb-8">
      <Map
        mapClass="w-full h-120 rounded-lg"
        center={[132.451043, 34.392077]}
        zoom={5}
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
        <span>{$t('community_events.legend.event')}</span>
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

    <!-- Event Table -->
    <div class="overflow-x-auto">
      <h2 class="text-2xl font-semibold mb-4">{$t('community_events.table_title')}</h2>    
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-3 py-2 text-left w-12">
              {$t('community_events.table.number')}
            </th>
            <th class="border border-gray-300 px-3 py-2 text-left">
              {$t('community_events.table.name')} </th>
          </tr>
        </thead>
        <tbody>
          {#each events as event, i}
            <tr class="hover:bg-gray-50">
              <td class="border border-gray-300 px-3 py-2 text-center valign-top">
                {i + 1}
              </td>
              
              <td class="border border-gray-300 px-3 py-2">
                <div class="font-bold text-base mb-2">
                  {event.name}
                </div>
                
                {#if event.description && event.description.length > 0}
                  <div class="space-y-2 text-gray-700">
                    {#each event.description as paragraph}
                      <p>{paragraph}</p>
                    {/each}
                  </div>
                {/if}
                <div class="pt-2 border-t border-gray-100 text-xs">
                  {#if event.url}
                    <span class="font-semibold text-gray-600 mr-1">URL:</span>
                    <a href={event.url} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline break-all">
                      {event.url}
                    </a>
                  {:else}
                    <span class="text-gray-400">URL: -</span>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>    
    </div>
  </div>
</div>
