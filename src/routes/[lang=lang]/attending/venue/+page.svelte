<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.venue')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.attending_sub.venue')}</h1>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
    <div>
      <h2 class="text-2xl font-semibold mb-4">{$t('venue.main_venue.title')}</h2>
      <p class="mb-4">
        {$t('venue.main_venue.description')}
      </p>
      
      <h3 class="text-lg font-semibold mb-2">{$t('venue.facilities.title')}</h3>
      <ul class="list-disc pl-6 mb-4">
        <li>{$t('venue.facilities.main_auditorium')}</li>
        <li>{$t('venue.facilities.breakout_rooms')}</li>
        <li>{$t('venue.facilities.exhibition_hall')}</li>
        <li>{$t('venue.facilities.wifi')}</li>
        <li>{$t('venue.facilities.accessible')}</li>
      </ul>

      <h3 class="text-lg font-semibold mb-2">{$t('venue.address.title')}</h3>
      <p class="mb-2">{$t('venue.address.full_address')}</p>
      <p class="text-sm text-gray-600">{$t('venue.address.note')}</p>
    </div>
    
    <div>
      <div class="mb-4">
        <img src="/images/meeting_place.webp" alt="{$t('venue.main_venue.title')}" class="w-full h-64 object-cover rounded-lg">
      </div>
      <Map
        mapClass="w-full h-48 rounded-lg"
        center={[132.451043, 34.392077]}
        zoom={15}
        style={$t('map.settings.style')}
        items={[
          {
            coordinates: [132.451043, 34.392077],
            title: $t('venue.main_venue.title'),
            description: $t('venue.main_venue.description')
          }
        ]}
      />
    </div>
  </div>

  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-semibold mb-2">{$t('venue.workshop_venue.title')}</h3>
    <p class="mb-2"><strong>{$t('venue.workshop_venue.name')}</strong></p>
    <p class="text-sm">{$t('venue.workshop_venue.description')}</p>
  </div>
</div>
