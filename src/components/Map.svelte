<script lang="ts">
  import { 
    MapLibre, 
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
    GlobeControl
  } from 'svelte-maplibre-gl'

  const { mapClass, style, center, zoom, items, ...props } = $props()
</script>

<MapLibre
  class={mapClass}
  center={center}
  zoom={zoom}
  style={style}
>
  <NavigationControl position="top-right" />
  <ScaleControl position="bottom-left" />
  <GlobeControl position="top-right" />
  {#each items as item (item.coordinates)}
    <Marker lnglat={item.coordinates}>
      {#snippet content()}
        <div class="text-center loading-none">
          {#if item.icon}
            <img src={item.icon} alt={item.title} class="w-6 h-6" />
          {:else}
            <!-- Standard map pin marker -->
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={item.color || "text-red-500"}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          {/if}
        </div>        
      {/snippet}
      <Popup class="text-block">
        <span class="text-lg">{item.description}</span>
      </Popup>
    </Marker>
  {/each}
</MapLibre>