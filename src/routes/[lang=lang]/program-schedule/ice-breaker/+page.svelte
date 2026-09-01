<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import IceBreakerMap from '$components/IceBreakerMap.svelte'
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
    <IceBreakerMap style={$t('map.settings.style')} title={$t('ice_breaker.map_title')} />
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
    <p class="text-base mb-2">{$t('ice_breaker.hiroshima_ondo_body')}</p>
    <p class="text-base mb-4">{$t('ice_breaker.hiroshima_ondo_lead')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('ice_breaker.hiroshima_ondo_videos') as unknown as any[]) as video}
        <li class="text-base mb-2">
          <a href={video.url} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {video.title}
          </a>
        </li>
      {/each}
    </ul>
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
    <p class="text-base mb-6">{$t('ice_breaker.dj_request.thanks')}</p>

    <p class="text-base italic">{$t('ice_breaker.closing')}</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">{$t('ice_breaker.survey.title')}</h2>
    <div class="text-base">
      {@html $t('ice_breaker.survey.html')}
    </div>
  </div>
</div>
