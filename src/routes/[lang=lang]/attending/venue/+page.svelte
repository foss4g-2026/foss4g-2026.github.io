<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.venue')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('venue.overview')}</h1>

  <!-- Main Venue: Hiroshima International Conference Center -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-4">{$t('venue.main_venue.title')}</h2>
    <p class="mb-4">{$t('venue.main_venue.description')}</p>
    <p class="mb-6 text-gray-700">{$t('venue.main_venue.details')}</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
      <div>
        <img src="/images/icch.png" alt={$t('venue.main_venue.title')} class="w-full h-64 object-cover rounded-lg shadow">
      </div>
      <div>
        <Map
          mapClass="w-full h-64 rounded-lg"
          center={[132.451043, 34.392077]}
          zoom={15}
          style={$t('map.settings.style')}
          items={[
            {
              coordinates: [132.451043, 34.392077],
              title: $t('venue.main_venue.title'),
              description: $t('venue.main_venue.address')
            }
          ]}
        />
      </div>
    </div>

    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-3">{$t('venue.main_venue.address_title')}</h3>
      <p class="mb-3">{$t('venue.main_venue.address')}</p>
      <ul class="list-disc pl-6 space-y-1">
        {#each ($t('venue.main_venue.access') as unknown as string[]) as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- Workshop Venue: RCC Culture Center -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-4">{$t('venue.workshop_venue.title')}</h2>
    <p class="mb-4">{$t('venue.workshop_venue.description')}</p>
    <p class="mb-6 text-gray-700">{$t('venue.workshop_venue.details')}</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
      <div>
        <img src="/images/rccbc.jpg" alt={$t('venue.workshop_venue.title')} class="w-full h-64 object-cover rounded-lg shadow">
      </div>
      <div>
        <Map
          mapClass="w-full h-64 rounded-lg"
          center={[132.46937446033377, 34.395002597128396]}
          zoom={15}
          style={$t('map.settings.style')}
          items={[
            {
              coordinates: [132.46937446033377, 34.395002597128396],
              title: $t('venue.workshop_venue.title'),
              description: $t('venue.workshop_venue.address')
            }
          ]}
        />
      </div>
    </div>

    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-3">{$t('venue.workshop_venue.address_title')}</h3>
      <p class="mb-3">{$t('venue.workshop_venue.address')}</p>
      <ul class="list-disc pl-6 space-y-1">
        {#each ($t('venue.workshop_venue.access') as unknown as string[]) as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </section>
</div>
