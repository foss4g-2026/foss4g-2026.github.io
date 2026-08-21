<script lang="ts">
  import '$lib/maplibre-worker'
  import type * as maplibregl from 'maplibre-gl'
  import { MapLibre, GeoJSONSource, CircleLayer, LineLayer, Marker, Popup, NavigationControl, ScaleControl } from 'svelte-maplibre-gl'
  import { t, locale } from 'svelte-i18n'
  import foodRaw from '$lib/data/icebreaker/hiroshima_food.geojson?raw'
  import venuesRaw from '$lib/data/icebreaker/venues.geojson?raw'
  import routeRaw from '$lib/data/icebreaker/walking_route.geojson?raw'
  import sakeRaw from '$lib/data/icebreaker/sake_shops.geojson?raw'

  const {
    style,
    title = 'FOSS4G Hiroshima 2026',
    showInfo = true,
  }: { style: string; title?: string; showInfo?: boolean } = $props()

  const food = JSON.parse(foodRaw)
  const venuesFC = JSON.parse(venuesRaw)
  const route = JSON.parse(routeRaw)
  const sakeFC = JSON.parse(sakeRaw)

  // Category metadata (color / icon / bilingual label) — mirrors the reference map.
  const CAT_META: Record<string, { icon: string; color: string; en: string; ja: string }> = {
    restaurant: { icon: '🍽️', color: '#E8601C', en: 'Restaurant', ja: 'レストラン' },
    bar:        { icon: '🍺', color: '#4A7EC7', en: 'Pub & Bar', ja: 'バー・パブ' },
    vegan:      { icon: '🌱', color: '#27AE60', en: 'Vegan', ja: 'ヴィーガン' },
    vegetarian: { icon: '🥗', color: '#7CB342', en: 'Vegetarian', ja: 'ベジタリアン' },
    muslim:     { icon: '🕌', color: '#009688', en: 'Muslim Friendly', ja: 'ムスリムフレンドリー' },
  }

  const FILTERS: { cat: string; icon: string; en: string; ja: string }[] = [
    { cat: 'all', icon: '🗺️', en: 'All', ja: 'すべて' },
    { cat: 'restaurant', icon: '🍽️', en: 'Restaurants', ja: 'レストラン' },
    { cat: 'bar', icon: '🍺', en: 'Pubs & Bars', ja: 'バー・パブ' },
    { cat: 'vegan', icon: '🌱', en: 'Vegan', ja: 'ヴィーガン' },
    { cat: 'vegetarian', icon: '🥗', en: 'Vegetarian', ja: 'ベジタリアン' },
    { cat: 'muslim', icon: '🕌', en: 'Muslim Friendly', ja: 'ムスリムフレンドリー' },
  ]

  // Circle color driven by category (data-driven maplibre expression).
  const circleColor: any = [
    'match', ['get', 'category'],
    'restaurant', CAT_META.restaurant.color,
    'bar', CAT_META.bar.color,
    'vegan', CAT_META.vegan.color,
    'vegetarian', CAT_META.vegetarian.color,
    'muslim', CAT_META.muslim.color,
    '#888',
  ]

  let map = $state<maplibregl.Map | undefined>(undefined)
  let selectedCat = $state('all')
  let showEvent = $state(true)
  let showSake = $state(false)
  let isFullscreen = $state(false)

  function toggleFullscreen() {
    isFullscreen = !isFullscreen
    // Let the CSS overlay apply, then resize the map to the new container size.
    setTimeout(() => map?.resize(), 60)
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isFullscreen) toggleFullscreen()
  }

  const foodFilter = $derived(
    selectedCat === 'all' ? undefined : (['==', ['get', 'category'], selectedCat] as any)
  )
  const shownCount = $derived(
    selectedCat === 'all'
      ? food.features.length
      : food.features.filter((f: any) => f.properties?.category === selectedCat).length
  )

  // Popup state (one popup at a time)
  type Selected =
    | { kind: 'food'; lnglat: [number, number]; props: any }
    | { kind: 'venue'; lnglat: [number, number]; props: any }
    | { kind: 'sake'; lnglat: [number, number]; props: any }
    | { kind: 'route'; lnglat: [number, number]; props: any }
    | null
  let selected = $state<Selected>(null)

  const venues = venuesFC.features.map((f: any) => ({
    lnglat: f.geometry.coordinates as [number, number],
    props: f.properties as any,
  }))
  const sakeShops = sakeFC.features.map((f: any) => ({
    lnglat: f.geometry.coordinates as [number, number],
    props: f.properties as any,
  }))
  const routeProps = route.features[0]?.properties as any

  function onFoodClick(e: any) {
    const f = e.features?.[0]
    if (!f) return
    selected = { kind: 'food', lnglat: e.lngLat.toArray(), props: f.properties }
  }
  function onRouteClick(e: any) {
    selected = { kind: 'route', lnglat: e.lngLat.toArray(), props: routeProps }
  }

  // Opening frame: both venues + the route + the Nagarekawa / Okonomimura cluster.
  // One-shot: `map` may be reassigned on camera changes, so guard to avoid an
  // effect loop that re-runs fitBounds on every zoom/pan.
  let fitted = false
  $effect(() => {
    if (!map || fitted) return
    fitted = true
    map.fitBounds([[132.449, 34.39], [132.47, 34.399]], { padding: 24, maxZoom: 16, animate: false })
  })

  // ---- Info sheet ----
  let infoOpen = $state(false)
  let infoTab = $state<'icebreaker' | 'route' | 'hiroshima' | 'sake'>('icebreaker')

  const TABS: { id: 'icebreaker' | 'route' | 'hiroshima' | 'sake'; icon: string; en: string; ja: string }[] = [
    { id: 'icebreaker', icon: '🎆', en: 'Ice Breaker', ja: 'アイスブレイク' },
    { id: 'route', icon: '🚶', en: 'Getting There', ja: '行き方' },
    { id: 'hiroshima', icon: '🕊️', en: 'Why Hiroshima', ja: 'なぜ広島' },
    { id: 'sake', icon: '🍶', en: 'Sake', ja: '日本酒' },
  ]

  const PROGRAM: { time: string; en: string; ja: string }[] = [
    { time: '19:00', en: 'Opening remarks', ja: '開会挨拶' },
    { time: '19:03', en: 'Toast', ja: '乾杯' },
    { time: '19:30', en: 'Hiroshima Ondo', ja: 'ひろしま音頭' },
    { time: '20:00', en: 'Yosakoi — by Kirabito', ja: 'よさこい（綺羅人）' },
    { time: '20:30', en: 'Samba — by Rosa de Hiroshima', ja: 'サンバ（サンバ連合ホーザ・ジ・ヒロシマ）' },
    { time: '20:45', en: 'Closing', ja: '中締め' },
  ]

  function openInfo(tab: typeof infoTab) {
    infoTab = tab
    infoOpen = true
  }

  // Deep-linking: #/info/<tab> opens the sheet on that tab.
  function applyHash() {
    if (!showInfo) return
    const m = /^#\/info\/(icebreaker|route|hiroshima|sake)$/.exec(location.hash)
    if (m) openInfo(m[1] as typeof infoTab)
  }
  $effect(() => {
    applyHash()
    const handler = () => applyHash()
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  })

  function tabLabel(x: { en: string; ja: string }) {
    return $locale === 'ja' ? x.ja : x.en
  }
</script>

<svelte:window onkeydown={onKeydown} />

<div class="ib-map-wrap" class:fullscreen={isFullscreen}>
  {#if isFullscreen}
    <header class="ib-header">
      <img class="ib-header-logo" src="/images/logo-04.svg" alt="FOSS4G Hiroshima 2026" />
      <h2 class="ib-header-title">{title}</h2>
      {#if showInfo}
        <button class="ib-header-btn" onclick={() => openInfo('icebreaker')} aria-label="Event information" title="Event info">ℹ️</button>
      {/if}
      <button class="ib-header-btn" onclick={toggleFullscreen} aria-label="Exit fullscreen" title="Exit fullscreen">✕</button>
    </header>
  {/if}
  <div class="ib-map-inner">
  <MapLibre
    bind:map
    class="ib-map"
    {style}
    center={[132.4626, 34.3927]}
    zoom={15}
  >
    <NavigationControl position="top-left" />
    <ScaleControl position="bottom-left" />

    <!-- Food & drink -->
    <GeoJSONSource data={food}>
      <CircleLayer
        filter={foodFilter}
        paint={{
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 12, 4, 15, 7, 18, 10],
          'circle-color': circleColor,
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 1.5,
          'circle-opacity': 0.95,
        }}
        onclick={onFoodClick}
        onmouseenter={() => map && (map.getCanvas().style.cursor = 'pointer')}
        onmouseleave={() => map && (map.getCanvas().style.cursor = '')}
      />
    </GeoJSONSource>

    <!-- Walking route + venues (event layer) -->
    {#if showEvent}
      <GeoJSONSource data={route}>
        <LineLayer paint={{ 'line-color': '#ffffff', 'line-width': 9, 'line-opacity': 0.9 }} layout={{ 'line-cap': 'round', 'line-join': 'round' }} />
        <LineLayer
          paint={{ 'line-color': '#d7000f', 'line-width': 5, 'line-dasharray': [0.2, 2] }}
          layout={{ 'line-cap': 'round', 'line-join': 'round' }}
          onclick={onRouteClick}
          onmouseenter={() => map && (map.getCanvas().style.cursor = 'pointer')}
          onmouseleave={() => map && (map.getCanvas().style.cursor = '')}
        />
      </GeoJSONSource>

      {#each venues as v (v.props.key)}
        <Marker lnglat={v.lnglat} onclick={() => (selected = { kind: 'venue', lnglat: v.lnglat, props: v.props })}>
          {#snippet content()}
            <div class="ib-venue-marker">
              <div class="ib-circle ib-circle-venue">{v.props.glyph}</div>
              <span class="ib-marker-label">{v.props.name_en}</span>
            </div>
          {/snippet}
        </Marker>
      {/each}
    {/if}

    <!-- Sake shops -->
    {#if showSake}
      {#each sakeShops as s (s.props.name_en)}
        <Marker lnglat={s.lnglat} onclick={() => (selected = { kind: 'sake', lnglat: s.lnglat, props: s.props })}>
          {#snippet content()}
            <div class="ib-venue-marker">
              <div class="ib-circle ib-circle-sake">🍶</div>
              <span class="ib-marker-label ib-marker-label-sake">{s.props.name_en}</span>
            </div>
          {/snippet}
        </Marker>
      {/each}
    {/if}

    <!-- Popup -->
    {#if selected}
      <Popup class="ib-pop" lnglat={selected.lnglat} maxWidth="300px" open onclose={() => (selected = null)}>
        {#if selected.kind === 'food'}
          {@const meta = CAT_META[selected.props.category] ?? CAT_META.restaurant}
          <div class="ib-popup">
            <div class="ib-popup-head"><span class="ib-popup-icon">{meta.icon}</span><span class="ib-popup-name">{selected.props.name}</span></div>
            <div class="ib-popup-tags">
              {#each (selected.props.tags?.length ? selected.props.tags : [selected.props.category]) as tg}
                {#if CAT_META[tg]}
                  <span class="ib-tag" style="background:{CAT_META[tg].color}">{CAT_META[tg].icon} {tabLabel(CAT_META[tg])}</span>
                {/if}
              {/each}
            </div>
            {#if selected.props.description}
              <p class="ib-popup-desc">{selected.props.description}</p>
            {/if}
            {#if selected.props.url}
              <a class="ib-popup-link" href={selected.props.url} target="_blank" rel="noopener noreferrer">🔗 {tabLabel({ en: 'Visit Website', ja: 'ウェブサイト' })}</a>
            {/if}
          </div>
        {:else if selected.kind === 'venue'}
          <div class="ib-popup">
            <div class="ib-popup-head"><span class="ib-popup-icon">{selected.props.glyph}</span><span class="ib-popup-name">{selected.props.name_en}<br><span class="ib-ja">{selected.props.name_ja}</span></span></div>
            <p class="ib-popup-desc">{selected.props.role_en}<br><span class="ib-ja">{selected.props.role_ja}</span><br><br><span class="ib-ja">{selected.props.addr_ja}</span></p>
            {#if selected.props.url}
              <a class="ib-popup-link" href={selected.props.url} target="_blank" rel="noopener noreferrer">🔗 {tabLabel({ en: 'Visit Website', ja: 'ウェブサイト' })}</a>
            {/if}
          </div>
        {:else if selected.kind === 'sake'}
          <div class="ib-popup">
            <div class="ib-popup-head"><span class="ib-popup-icon">🍶</span><span class="ib-popup-name">{selected.props.name_en}<br><span class="ib-ja">{selected.props.name_ja}</span></span></div>
            <p class="ib-popup-desc">{selected.props.note_en}<br><span class="ib-ja">{selected.props.note_ja}</span></p>
            {#if selected.props.url}
              <a class="ib-popup-link" href={selected.props.url} target="_blank" rel="noopener noreferrer">🔗 {tabLabel({ en: 'Visit Website', ja: 'ウェブサイト' })}</a>
            {/if}
          </div>
        {:else if selected.kind === 'route'}
          <div class="ib-popup">
            <div class="ib-popup-head"><span class="ib-popup-icon">🚶</span><span class="ib-popup-name">{routeProps.name_en}<br><span class="ib-ja">{routeProps.name_ja}</span></span></div>
            <p class="ib-popup-desc">
              {routeProps.notice_en}<br><br><span class="ib-ja">{routeProps.notice_ja}</span><br><br>
              {tabLabel({ en: `About ${routeProps.distance_m} m`, ja: `約 ${routeProps.distance_m} m` })}
            </p>
          </div>
        {/if}
      </Popup>
    {/if}
  </MapLibre>

  <!-- Info button (floating; hidden in fullscreen where the header carries it) -->
  {#if !isFullscreen && showInfo}
    <button class="ib-info-btn" onclick={() => openInfo('icebreaker')} aria-label="Event information" title="Event info">ℹ️</button>
  {/if}

  <!-- Layer toggles -->
  <div class="ib-layer-toggles">
    <button class="ib-layer-btn" class:active={showEvent} aria-pressed={showEvent} title="Ice Breaker venues & walking route" onclick={() => (showEvent = !showEvent)}>🎆</button>
    <button class="ib-layer-btn" class:active={showSake} aria-pressed={showSake} title="Where to buy the sake" onclick={() => (showSake = !showSake)}>🍶</button>
    {#if !isFullscreen}
      <button class="ib-layer-btn" title="Fullscreen" aria-label="Fullscreen" onclick={toggleFullscreen}>⛶</button>
    {/if}
  </div>

  <!-- Count badge -->
  <div class="ib-count">{shownCount} {tabLabel({ en: 'places shown', ja: '件表示中' })}</div>

  <!-- Filter bar -->
  <div class="ib-filter-bar">
    {#each FILTERS as f}
      <button
        class="ib-filter-btn"
        class:active={selectedCat === f.cat}
        style={selectedCat === f.cat && f.cat !== 'all' ? `background:${CAT_META[f.cat]?.color};border-color:${CAT_META[f.cat]?.color};color:#fff` : ''}
        onclick={() => (selectedCat = f.cat)}
      >{f.icon} {tabLabel(f)}</button>
    {/each}
  </div>
  </div>
</div>

<!-- Info sheet -->
{#if infoOpen && showInfo}
  <div class="ib-backdrop" role="presentation" onclick={() => (infoOpen = false)}></div>
  <div class="ib-sheet" role="dialog" aria-modal="true" aria-label="Event information">
    <div class="ib-sheet-head">
      <h2>FOSS4G Hiroshima 2026</h2>
      <button class="ib-sheet-close" onclick={() => (infoOpen = false)} aria-label="Close">✕</button>
    </div>
    <div class="ib-sheet-tabs">
      {#each TABS as tb}
        <button class="ib-sheet-tab" class:active={infoTab === tb.id} onclick={() => (infoTab = tb.id)}>{tb.icon} {tabLabel(tb)}</button>
      {/each}
    </div>
    <div class="ib-sheet-body">
      {#if infoTab === 'icebreaker'}
        <h3>HIROSHIMA FUSION NIGHT</h3>
        <p>The Ice Breaker / welcome party of FOSS4G Hiroshima 2026. <span class="ib-ja">FOSS4G Hiroshima 2026 アイスブレイク（歓迎会）</span></p>
        <div class="ib-callout">
          <p><strong>Tuesday 1 September 2026</strong> <span class="ib-ja">2026年9月1日（火）</span></p>
          <p>Doors 18:00 · Programme 19:00–20:45 · <strong>Admission free</strong></p>
          <p>Hiroshima Gate Park <span class="ib-ja">(ひろしまゲートパーク / 広島市中区基町5-25)</span></p>
        </div>
        <h3>Two areas</h3>
        <ul>
          <li><strong>Gate Park Plaza</strong> <span class="ib-ja">(ゲートパークプラザ)</span> — the dance floor, with a <em>yagura</em> stage at its centre. Open to everyone.</li>
          <li><strong>Oyane Hiroba</strong> <span class="ib-ja">(大屋根ひろば)</span> — the food and rest area, <strong>reserved for conference attendees</strong>.</li>
        </ul>
        <h3>Food &amp; drink</h3>
        <p>Conference attendees receive <strong>one meal and two drinks free</strong>; anything after that, and everything at the festival stalls and kitchen cars, is paid.</p>
        <h3>Programme</h3>
        <table class="ib-prog">
          <thead><tr><th>Time</th><th>Programme</th><th class="ib-ja">日本語</th></tr></thead>
          <tbody>
            {#each PROGRAM as p}
              <tr><td class="ib-prog-t">{p.time}</td><td>{p.en}</td><td class="ib-ja">{p.ja}</td></tr>
            {/each}
          </tbody>
        </table>
        <h3>Sake tasting</h3>
        <p>A tasting corner pours 100 bottles of Hiroshima local sake <span class="ib-ja">(地酒)</span>. See the <button class="ib-linkbtn" onclick={() => (infoTab = 'sake')}>Sake tab</button> for where to buy what you liked.</p>
        <h3>If it rains</h3>
        <p>In heavy rain the outdoor event is cancelled and a replacement Ice Breaker is held indoors at the conference venue.</p>
      {:else if infoTab === 'route'}
        <h3>From the Conference Center to the Ice Breaker</h3>
        <div class="ib-callout">
          <p class="ib-ja">国際会議場から ICE BREAKER 会場までは徒歩約15分<br>※バスは出ません<br>帽子などの持参をおすすめ</p>
          <p><strong>About a 15-minute walk. No shuttle bus is provided — please bring a hat and water.</strong></p>
        </div>
        <p>It is roughly {routeProps.distance_m} m from Hiroshima International Conference Center <span class="ib-ja">(広島国際会議場)</span> to Hiroshima Gate Park <span class="ib-ja">(ひろしまゲートパーク)</span>. The walk runs the length of Peace Memorial Park.</p>
        <h3>What you pass on the way</h3>
        <ul>
          {#each routeProps.waypoints ?? [] as w}
            <li>{w.name_en} <span class="ib-ja">({w.name_ja})</span></li>
          {/each}
        </ul>
        <h3>Please take care in the heat</h3>
        <p>Early September in Hiroshima is hot and humid well into the evening. Bring a hat and something to drink, and take your time.</p>
      {:else if infoTab === 'hiroshima'}
        <h3>Bridging Geospatial Technology and Humanity</h3>
        <p>The theme of FOSS4G Hiroshima 2026.</p>
        <h3>Three pillars</h3>
        <ul>
          <li><strong>Solving real problems with geospatial technology</strong> — disaster response and environmental protection. <span class="ib-ja">地理空間技術による課題解決（災害対応・環境保護）</span></li>
          <li><strong>A focus on humanity</strong> — supporting refugees, preserving cultural memory. <span class="ib-ja">「Humanity」への注目（難民支援・文化的記憶の保存）</span></li>
          <li><strong>Why it matters that this is Hiroshima</strong> — a theme that only a city that stands for peace and renewal can carry. <span class="ib-ja">平和と再生の象徴である広島だからこそ発信できるテーマ</span></li>
        </ul>
        <h3>The three dances</h3>
        <ul>
          <li><strong>Hiroshima Ondo</strong> <span class="ib-ja">(ひろしま音頭)</span> — the local <em>bon odori</em>. A circle anyone can join.</li>
          <li><strong>Yosakoi</strong> <span class="ib-ja">(よさこい)</span>, performed by <strong>Kirabito</strong> <span class="ib-ja">(綺羅人)</span> — a modern reinvention of a folk dance.</li>
          <li><strong>Samba</strong>, performed by <strong>Rosa de Hiroshima</strong> <span class="ib-ja">(サンバ連合ホーザ・ジ・ヒロシマ)</span> — named after the Brazilian anti-nuclear poem “Rose of Hiroshima”.</li>
        </ul>
      {:else if infoTab === 'sake'}
        <h3>Sake at the Ice Breaker</h3>
        <p>The tasting corner <span class="ib-ja">(日本酒飲み比べコーナー)</span> pours 100 bottles of Hiroshima local sake <span class="ib-ja">(地酒)</span>.</p>
        <p>The brands are being chosen so that <strong>you can actually buy them before you leave</strong> — every one will be on sale at one of the two shops below.</p>
        {#each sakeShops as s}
          <h3>{s.props.name_en} <span class="ib-ja">({s.props.name_ja})</span></h3>
          <p>{s.props.note_en} <span class="ib-ja">{s.props.note_ja}</span></p>
          <p><em>{tabLabel({ en: 'Brand list coming soon', ja: '銘柄は後日公開' })}</em></p>
          <p><a href={s.props.url} target="_blank" rel="noopener noreferrer">Visit website</a></p>
        {/each}
      {/if}
    </div>
  </div>
{/if}

<style>
  .ib-map-wrap { position: relative; }
  .ib-map-inner { position: relative; }
  :global(.ib-map) { height: 32rem; width: 100%; border-radius: 0.5rem; }

  /* Fullscreen overlay */
  .ib-map-wrap.fullscreen {
    position: fixed; inset: 0; z-index: 2000; background: #fff;
    display: flex; flex-direction: column;
  }
  .ib-map-wrap.fullscreen .ib-map-inner { flex: 1; min-height: 0; }
  .ib-map-wrap.fullscreen :global(.ib-map) { height: 100%; border-radius: 0; }

  /* Fullscreen header (reference-style) */
  .ib-header {
    display: flex; align-items: center; gap: 12px;
    padding: 8px 14px; background: #fff; border-bottom: 1px solid #e5e5e5;
  }
  .ib-header-logo { height: 30px; width: auto; }
  .ib-header-title { flex: 1; margin: 0; font-size: 16px; font-weight: 700; color: #222; line-height: 1.2; }
  .ib-header-btn {
    width: 40px; height: 40px; border: none; background: transparent;
    font-size: 20px; cursor: pointer; border-radius: 50%; flex: 0 0 auto;
  }
  .ib-header-btn:hover { background: #f0f0f0; }

  .ib-info-btn {
    position: absolute; top: 10px; right: 10px; z-index: 5;
    width: 40px; height: 40px; border-radius: 50%; border: none;
    background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.25); font-size: 20px; cursor: pointer;
  }
  .ib-info-btn:hover { background: #f2f2f2; }

  .ib-layer-toggles {
    position: absolute; top: 60px; right: 10px; z-index: 5;
    display: flex; flex-direction: column; gap: 8px;
  }
  .ib-layer-btn {
    width: 40px; height: 40px; border-radius: 50%; border: 2px solid #fff;
    background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.25); font-size: 20px; cursor: pointer;
  }
  .ib-layer-btn.active { box-shadow: 0 0 0 3px #d7000f, 0 2px 10px rgba(0,0,0,0.25); }

  .ib-count {
    position: absolute; top: 10px; left: 50px; z-index: 5;
    background: rgba(255,255,255,0.92); border-radius: 6px; padding: 4px 10px;
    font-size: 12px; font-weight: 600; color: #333; box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  }

  .ib-filter-bar {
    position: absolute; left: 0; right: 0; bottom: 10px; z-index: 5;
    display: flex; gap: 8px; overflow-x: auto; padding: 0 10px;
    scrollbar-width: none;
  }
  .ib-filter-bar::-webkit-scrollbar { display: none; }
  .ib-filter-btn {
    flex: 0 0 auto; border: 1.5px solid #ccc; background: #fff; color: #333;
    border-radius: 20px; padding: 6px 14px; font-size: 13px; font-weight: 600;
    cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.15); white-space: nowrap;
  }
  .ib-filter-btn.active { background: #555; border-color: #555; color: #fff; }

  /* Markers */
  :global(.ib-venue-marker) { display: flex; align-items: center; gap: 6px; cursor: pointer; }
  :global(.ib-circle) {
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 2px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.3);
  }
  :global(.ib-circle-venue) { width: 40px; height: 40px; background: #fff; border-color: #c9ccd1; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-size: 22px; }
  :global(.ib-circle-sake) { width: 34px; height: 34px; background: #1b3a6b; font-size: 18px; }
  :global(.ib-marker-label) {
    background: rgba(255,255,255,0.9); border-radius: 4px; padding: 1px 6px;
    font-size: 12px; font-weight: 700; color: #222; white-space: nowrap; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
  :global(.ib-marker-label-sake) { color: #1b3a6b; }

  /* Popup */
  :global(.ib-popup) { padding: 2px 2px; }
  :global(.ib-popup-head) { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; }
  :global(.ib-popup-icon) { font-size: 22px; line-height: 1; }
  :global(.ib-popup-name) { font-size: 15px; font-weight: 700; color: #222; line-height: 1.3; }
  :global(.ib-popup-tags) { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
  :global(.ib-tag) { color: #fff; border-radius: 4px; padding: 2px 7px; font-size: 11px; font-weight: 600; }
  :global(.ib-popup-desc) { font-size: 13px; color: #444; line-height: 1.5; margin-bottom: 8px; }
  :global(.ib-popup-link) {
    display: inline-block; background: #d7000f; color: #fff !important; text-decoration: none !important;
    border-radius: 6px; padding: 6px 12px; font-size: 13px; font-weight: 600;
  }
  :global(.ib-ja) { color: #666; font-size: 0.9em; }

  /* Larger, clearer popup close button */
  :global(.ib-pop .maplibregl-popup-content) { padding-right: 34px; }
  :global(.ib-pop .maplibregl-popup-close-button) {
    width: 30px; height: 30px;
    top: 4px; right: 4px;
    font-size: 22px; line-height: 26px;
    color: #444; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  :global(.ib-pop .maplibregl-popup-close-button:hover) { background: #eaeaea; color: #000; }

  /* Info sheet */
  .ib-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 1000; }
  .ib-sheet {
    position: fixed; z-index: 1001; left: 50%; transform: translateX(-50%);
    bottom: 0; width: 100%; max-width: 640px; max-height: 85vh;
    background: #fff; border-radius: 16px 16px 0 0; box-shadow: 0 -4px 24px rgba(0,0,0,0.3);
    display: flex; flex-direction: column;
  }
  .ib-sheet-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px 8px; }
  .ib-sheet-head h2 { font-size: 18px; font-weight: 700; margin: 0; }
  .ib-sheet-close { border: none; background: transparent; font-size: 20px; cursor: pointer; color: #555; }
  .ib-sheet-tabs { display: flex; gap: 6px; overflow-x: auto; padding: 0 14px 10px; scrollbar-width: none; }
  .ib-sheet-tabs::-webkit-scrollbar { display: none; }
  .ib-sheet-tab {
    flex: 0 0 auto; border: 1.5px solid #ddd; background: #fff; color: #333;
    border-radius: 20px; padding: 6px 14px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap;
  }
  .ib-sheet-tab.active { background: #d7000f; border-color: #d7000f; color: #fff; }
  .ib-sheet-body { overflow-y: auto; padding: 4px 20px 24px; }
  .ib-sheet-body :global(h3) { font-size: 16px; font-weight: 700; margin: 16px 0 6px; }
  .ib-sheet-body :global(p) { font-size: 14px; line-height: 1.6; margin: 0 0 8px; }
  .ib-sheet-body :global(ul) { padding-left: 20px; margin: 0 0 8px; }
  .ib-sheet-body :global(li) { font-size: 14px; line-height: 1.6; margin-bottom: 4px; }
  .ib-callout { background: #fff5f5; border-left: 4px solid #d7000f; border-radius: 0 8px 8px 0; padding: 10px 14px; margin: 8px 0; }
  .ib-callout p { margin: 0 0 4px; }
  .ib-prog { width: 100%; border-collapse: collapse; font-size: 13px; }
  .ib-prog th, .ib-prog td { text-align: left; padding: 4px 8px; border-bottom: 1px solid #eee; }
  .ib-prog-t { font-variant-numeric: tabular-nums; color: #d7000f; font-weight: 700; white-space: nowrap; }
  .ib-linkbtn, .ib-sheet-body :global(.ib-linkbtn) {
    border: none; background: none; color: #d7000f; font: inherit; cursor: pointer; padding: 0; text-decoration: underline;
  }
</style>
