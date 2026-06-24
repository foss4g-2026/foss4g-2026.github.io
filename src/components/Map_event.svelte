<script lang="ts">
  import { 
    MapLibre, 
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
    GlobeControl
  } from 'svelte-maplibre-gl'
  import maplibregl from 'maplibre-gl' // 💡 これを必ず入れてください

  const { mapClass, style, center, zoom, items, ...props } = $props()

  // 💡 地図の「生（なま）のオブジェクト」をキャッチするための変数を準備します
  let mapInstance: maplibregl.Map | null = $state(null);

  // 💡 画面幅（ブラウザの幅）の変化を監視するための変数
  let mapWidth = $state(0);

  // 地図の準備ができたり、ピン（items）が変わったり、画面幅が変わるたびに実行する処理
  $effect(() => {
    // 地図がまだ読み込まれていない、またはピンがない場合は何もしない
    if (!mapInstance || !items || items.length === 0 || !center) return;

    // 1. まずは「すべてのピン」を囲む四角い範囲（BBox）を計算する
    const bounds = new maplibregl.LngLatBounds();
    items.forEach((item: any) => {
      if (item.coordinates) bounds.extend(item.coordinates);
    });

    // 2. 固定したい中心点（広島）を基準に、四角い範囲を「左右・上下に対称」になるよう広げる
    // これにより、中心を広島に固定したまま、一番遠いピンが入る範囲が作られます
    const [cLng, cLat] = center;
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    const maxDLng = Math.max(Math.abs(ne.lng - cLng), Math.abs(sw.lng - cLng));
    const maxDLat = Math.max(Math.abs(ne.lat - cLat), Math.abs(sw.lat - cLat));

    // 広島を中心とした「対称な新しい範囲」をセットする
    const symmetricBounds = new maplibregl.LngLatBounds(
      [cLng - maxDLng, cLat - maxDLat], // 南西の角
      [cLng + maxDLng, cLat + maxDLat]  // 北東の角
    );

    // 3. 地図ライブラリ公式の機能（fitBounds）を使って、画面（スマホ・PC問わず）にピッタリ合わせる
    mapInstance.fitBounds(symmetricBounds, {
      padding: 40,      // ピンが画面の端っこにピッタリくっつきすぎないようにする余白（40ピクセル）
      animate: false,   // 最初の表示時はアニメーションなしで一瞬で合わせる
      maxZoom: 15       // ピンが少なすぎるときに、拡大されすぎるのを防ぐ
    });
  });
</script>

<div bind:clientWidth={mapWidth} class="w-full">
  <MapLibre
    class={mapClass}
    center={center}
    zoom={zoom} 
    style={style}
    bind:map={mapInstance} 
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
            {:else if item.label !== undefined}
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-red-300 text-2xl shadow-lg border-3 border-red-600 leading-none">
                {item.label}
              </div>
            {:else}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={item.color || "text-red-500"}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
            {/if}
          </div>        
        {/snippet}
        <Popup class="text-block whitespace-pre-line">
          <span class="text-lg">{item.description}</span>
        </Popup>
      </Marker>
    {/each}
  </MapLibre>
</div>
<style>
  /* MapLibreが内側に強制している「240px」の限界突破を命令する */
  :global(.maplibregl-popup) {
    max-width: 270px !important; /* 💡 ここでポップアップ全体の最大幅を好きなサイズに変えられます */
  }
  
  :global(.maplibregl-popup-content) {
    width: 100% !important;
  }
</style>