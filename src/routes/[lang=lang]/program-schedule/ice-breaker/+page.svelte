<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import Map from '$components/Map.svelte'

  let isFormHovered = false
</script>

<svelte:head>
  <title>{$t('ice_breaker.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">{$t('ice_breaker.title')}</h1>
  
  <p class="text-lg font-semibold mb-8">{$t('ice_breaker.date')}</p>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-4">{$t('ice_breaker.intro')}</p>
    <p class="text-base mb-6">{$t('ice_breaker.description')}</p>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.venue_title')}</h2>
    <p class="text-base mb-2">
      <a href={$t('ice_breaker.venue_link')} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">
        {$t('ice_breaker.venue_name')}
      </a>
    </p>
    <p class="text-base mb-4">{$t('ice_breaker.venue_description')}</p>
    <p class="text-base mb-4">{$t('ice_breaker.venue_map_prompt')}</p>

  </div>

  <div class="mb-8">
    <Map
      mapClass="h-96 w-full rounded-lg"
      style={$t('map.settings.style')}
      center={[132.454972, 34.397063]}
      zoom={14}
      items={[
        {
          coordinates: [132.451065, 34.392088],
          label: "🏛️",
          description: "International Conference Center Hiroshima"
        },
        {
          coordinates: [132.454972, 34.397063],
          label: "🎆",
          description: "Hiroshima Gate Park"
        }
      ]}
    />
  </div>

  <div class="prose max-w-none mb-8">
    
    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.what_to_expect_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('ice_breaker.what_to_expect') as unknown as any[]) as item}
        <li class="text-base mb-2">{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.hiroshima_ondo_title')}</h2>
    <p class="text-base mb-2">{$t('ice_breaker.hiroshima_ondo_intro')}</p>
    <p class="text-base mb-4">{$t('ice_breaker.hiroshima_ondo_body')}</p>
    <div class="flex justify-center mb-8">
      <img
        src="/images/ice-breaker/HiroshimaOndo.webp"
        alt="Hiroshima Ondo"
        class="rounded-xl shadow-md w-full"
      />
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.organizations_title')}</h2>
    <p class="text-base mb-6">{$t('ice_breaker.organizations_intro')}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {#each ($json('ice_breaker.organizations') as unknown as any[]) as org}
        <div class="card bg-base-100 shadow-md overflow-hidden">
          <figure>
            <img src={org.image} alt={org.alt} class="w-full object-cover" />
          </figure>
          <div class="card-body p-4">
            <h3 class="card-title text-lg">{org.name}</h3>
          </div>
        </div>
      {/each}
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('ice_breaker.dj_request.title')}</h2>
    <p class="text-base mb-4">{$t('ice_breaker.dj_request.intro')}</p>
    <p class="text-base mb-4">{$t('ice_breaker.dj_request.body')}</p>
    <p class="text-sm text-gray-500 mb-4">{$t('ice_breaker.dj_request.note')}</p>
    <p class="text-base mb-4">{$t('ice_breaker.dj_request.form_prompt')}</p>
    <div class="flex justify-center mb-6">
      <a
        href={$t('ice_breaker.dj_request.form_url')}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-lg bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3 no-underline"
        on:mouseenter={() => isFormHovered = true}
        on:mouseleave={() => isFormHovered = false}
      >
        <img
          src={isFormHovered ? "/images/logo-16.svg" : "/images/logo-04.svg"}
          alt="FOSS4G 2026 Logo"
          class="w-8 h-8 object-contain transition-all duration-200"
        >
        <span>{$t('ice_breaker.dj_request.form_label')}</span>
      </a>
    </div>
    <p class="text-base font-semibold mb-6">{$t('ice_breaker.dj_request.deadline')}</p>

    <p class="text-base italic">{$t('ice_breaker.closing')}</p>
  </div>
</div>
