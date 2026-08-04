<script lang="ts">
  import {
    MapLibre,
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
    GlobeControl
  } from 'svelte-maplibre-gl'
  import maplibregl from 'maplibre-gl'
  import { t } from 'svelte-i18n'

  interface Restaurant {
    name_en: string
    name_ja: string
    category_en: string
    category_ja: string
    latitude: number
    longitude: number
    walk_time: string
    opening_hours: string
    dietary_tags: string[]
    description: string
    address_en: string
    address_ja: string
    phone: string
    website: string
    openstreetmap_url: string
  }

  const { restaurants, mapStyle, lang = 'en' } = $props<{
    restaurants: Restaurant[]
    mapStyle: string
    lang?: string
  }>()

  // Filter state
  let activeFilter = $state('all')

  const filters = [
    { key: 'all',              labelKey: 'restaurant_map.filter.all' },
    { key: 'halal-dedicated',  labelKey: 'restaurant_map.filter.halal_dedicated' },
    { key: 'halal-ingredients',labelKey: 'restaurant_map.filter.halal_ingredients' },
    { key: 'vegetarian',       labelKey: 'restaurant_map.filter.vegetarian' },
    { key: 'other',            labelKey: 'restaurant_map.filter.other' },
  ]

  const filtered: Restaurant[] = $derived(
    activeFilter === 'all'
      ? restaurants
      : activeFilter === 'other'
        ? restaurants.filter((r: Restaurant) => r.dietary_tags.length === 0)
        : restaurants.filter((r: Restaurant) => r.dietary_tags.includes(activeFilter))
  )

  // Marker colors by dietary tag priority
  function markerColor(tags: string[]): string {
    if (tags.includes('halal-dedicated'))   return 'text-green-600'
    if (tags.includes('halal-ingredients')) return 'text-emerald-400'
    if (tags.includes('vegan'))             return 'text-purple-500'
    if (tags.includes('vegetarian'))        return 'text-purple-500'
    return 'text-red-500'
  }

  // Map fit-bounds logic
  let mapInstance = $state<maplibregl.Map | undefined>(undefined)
  let hasFitted = false

  const CENTER: [number, number] = [132.453, 34.390]

  $effect(() => {
    if (!mapInstance || filtered.length === 0) return
    if (hasFitted) return

    const bounds = new maplibregl.LngLatBounds()
    filtered.forEach((r: Restaurant) => bounds.extend([r.longitude, r.latitude]))

    const [cLng, cLat] = CENTER
    const ne = bounds.getNorthEast()
    const sw = bounds.getSouthWest()
    const maxDLng = Math.max(Math.abs(ne.lng - cLng), Math.abs(sw.lng - cLng))
    const maxDLat = Math.max(Math.abs(ne.lat - cLat), Math.abs(sw.lat - cLat))

    const symmetricBounds = new maplibregl.LngLatBounds(
      [cLng - maxDLng, cLat - maxDLat],
      [cLng + maxDLng, cLat + maxDLat]
    )

    mapInstance.fitBounds(symmetricBounds, { padding: 48, animate: false, maxZoom: 15 })
    hasFitted = true
  })

  // Re-fit when filter changes
  $effect(() => {
    // Track activeFilter to re-fit on change
    const _f = activeFilter
    if (!mapInstance || filtered.length === 0) return
    const bounds = new maplibregl.LngLatBounds()
    filtered.forEach((r: Restaurant) => bounds.extend([r.longitude, r.latitude]))
    mapInstance.fitBounds(bounds, { padding: 48, animate: true, maxZoom: 15 })
  })
</script>

<!-- Filter buttons -->
<div class="flex flex-wrap gap-2 mb-3">
  {#each filters as f}
    <button
      type="button"
      class="px-3 py-1 rounded-full text-sm font-medium border transition-colors
        {activeFilter === f.key
          ? 'bg-gray-800 text-white border-gray-800'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}"
      onclick={() => { activeFilter = f.key; hasFitted = false }}
    >
      {$t(f.labelKey)}
    </button>
  {/each}
</div>

<!-- Legend -->
<div class="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-gray-600">
  <span class="flex items-center gap-1">
    <svg width="14" height="14" viewBox="0 0 24 24" class="text-green-600"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/></svg>
    {$t('restaurant_map.legend.halal_dedicated')}
  </span>
  <span class="flex items-center gap-1">
    <svg width="14" height="14" viewBox="0 0 24 24" class="text-emerald-400"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/></svg>
    {$t('restaurant_map.legend.halal_ingredients')}
  </span>
  <span class="flex items-center gap-1">
    <svg width="14" height="14" viewBox="0 0 24 24" class="text-purple-500"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/></svg>
    {$t('restaurant_map.legend.vegetarian_vegan')}
  </span>
  <span class="flex items-center gap-1">
    <svg width="14" height="14" viewBox="0 0 24 24" class="text-red-500"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/></svg>
    {$t('restaurant_map.legend.other')}
  </span>
</div>

<!-- Map -->
<div class="w-full">
  <MapLibre
    class="w-full h-[480px] rounded-lg"
    center={CENTER}
    zoom={14}
    style={mapStyle}
    bind:map={mapInstance}
  >
    <NavigationControl position="top-right" />
    <ScaleControl position="bottom-left" />
    <GlobeControl position="top-right" />

    {#each filtered as r (`${r.latitude},${r.longitude}`)}
      <Marker lnglat={[r.longitude, r.latitude]}>
        {#snippet content()}
          <div class="text-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={markerColor(r.dietary_tags)}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </div>
        {/snippet}
        <Popup class="text-block">
          <div class="text-sm min-w-[200px]">
            <p class="font-bold text-base mb-0.5">
              {lang === 'ja' ? r.name_ja : r.name_en}
            </p>
            <p class="text-gray-500 mb-1">
              {lang === 'ja' ? r.category_ja : r.category_en}
            </p>
            {#if r.walk_time}
              <p class="mb-1">🚶 {r.walk_time}</p>
            {/if}
            {#if r.opening_hours}
              <p class="mb-1">🕐 {r.opening_hours}</p>
            {/if}
            {#if r.description}
              <p class="mb-1 text-gray-700">{r.description}</p>
            {/if}
            <div class="flex gap-2 mt-1 flex-wrap">
              {#if r.website}
                <a href={r.website} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline text-xs">{$t('restaurant_map.popup.website')}</a>
              {/if}
              {#if r.openstreetmap_url}
                <a href={r.openstreetmap_url} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline text-xs">{$t('restaurant_map.popup.osm')}</a>
              {/if}
            </div>
          </div>
        </Popup>
      </Marker>
    {/each}
  </MapLibre>
</div>

<style>
  :global(.maplibregl-popup) {
    max-width: 300px !important;
  }
  :global(.maplibregl-popup-content) {
    width: 100% !important;
  }
</style>
