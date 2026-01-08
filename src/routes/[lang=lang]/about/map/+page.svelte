<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.map')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.map')}</h1>
  
  <div class="mb-8">
    <Map 
      mapClass="h-96 w-full rounded-lg"
      style={$t('map.settings.style')}
      center={[132.4596, 34.3853]}
      zoom={12}
      items={[
        {
          coordinates: [132.45118, 34.39205],
          title: $t('about.map.main_venue.name'),
          description: $t('about.map.main_venue.title') + ' - ' + $t('about.map.main_venue.dates'),
          color: "text-red-600"
        },
        {
          coordinates: [132.46930498963332, 34.395054166977275],
          title: $t('about.map.workshop_venue.name'),
          description: $t('about.map.workshop_venue.title') + ' - ' + $t('about.map.workshop_venue.dates'),
          color: "text-blue-600"
        }
      ]}
    />
  </div>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.map.venues_title')}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center mb-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-red-600 mr-2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
          <h3 class="text-lg font-semibold">{$t('about.map.main_venue.title')}</h3>
        </div>
        <p class="text-gray-700">{$t('about.map.main_venue.name')}</p>
        <p class="text-sm text-gray-600 mt-2">{$t('about.map.main_venue.dates')}</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center mb-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-600 mr-2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
          <h3 class="text-lg font-semibold">{$t('about.map.workshop_venue.title')}</h3>
        </div>
        <p class="text-gray-700">{$t('about.map.workshop_venue.name')}</p>
        <p class="text-sm text-gray-600 mt-2">{$t('about.map.workshop_venue.dates')}</p>
      </div>
    </div>
  </div>
</div>
