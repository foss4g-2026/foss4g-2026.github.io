<script lang="ts">
  import { t, json, locale } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.travel_guide')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.attending_sub.travel_guide')}</h1>

  <div class="prose max-w-none">

    {#if $locale !== 'ja'}
    <!-- Welcome -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.welcome.title')}</h2>
    <p class="mb-6">{$t('travel_guide.welcome.description')}</p>

    <hr class="my-8" />

    <!-- Safety -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.safety.title')}</h2>
    <p class="mb-6">{$t('travel_guide.safety.description')}</p>

    <hr class="my-8" />

    <!-- Culture -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.culture.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.culture.items') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- Religion -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.religion.title')}</h2>
    <p class="mb-6">{$t('travel_guide.religion.description')}</p>

    <hr class="my-8" />

    <!-- Food Culture -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.food.title')}</h2>
    <p class="mb-2">{$t('travel_guide.food.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.food.popular_title')}</p>
    <ul class="list-disc pl-6 mb-4">
      {#each ($json('travel_guide.food.popular') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="mb-1 font-medium">{$t('travel_guide.food.hiroshima_title')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.food.hiroshima') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- Peace -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.peace.title')}</h2>
    <p class="mb-2">{$t('travel_guide.peace.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.peace.visit_title')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.peace.places') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- Language -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.language.title')}</h2>
    <p class="mb-2">{$t('travel_guide.language.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.language.phrases_title')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.language.phrases') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- Transportation -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.transportation.title')}</h2>
    <p class="mb-6">{$t('travel_guide.transportation.description')}</p>

    <!-- Currency -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.currency.title')}</h2>
    <p class="mb-6">{$t('travel_guide.currency.description')}</p>

    <!-- Electricity -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.electricity.title')}</h2>
    <p class="mb-6">{$t('travel_guide.electricity.description')}</p>

    <!-- Emergency -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.emergency.title')}</h2>
    <ul class="list-none pl-0 mb-6">
      <li>{$t('travel_guide.emergency.police')}</li>
      <li>{$t('travel_guide.emergency.fire')}</li>
    </ul>

    <!-- Internet -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.internet.title')}</h2>
    <p class="mb-6">{$t('travel_guide.internet.description')}</p>

    <!-- Smoking -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.smoking.title')}</h2>
    <p class="mb-6">{$t('travel_guide.smoking.description')}</p>

    <!-- LGBTQ -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.lgbtq.title')}</h2>
    <p class="mb-2">{$t('travel_guide.lgbtq.description')}</p>

    <!-- Places Nearby -->
    <h2 class="text-2xl font-semibold mt-4 mb-4">{$t('travel_guide.places_nearby.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.places_nearby.items') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />
    {/if}

    <!-- Travel Guide: Hiroshima -->
    <h2 class="text-3xl font-bold mb-4">{$t('travel_guide.guide_title')}</h2>
    <p class="mb-6">{$t('travel_guide.guide_intro')}</p>

    <!-- Must See -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.must_see.title')}</h2>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.must_see.peace_park.title')}</h3>
    <p class="mb-2">{$t('travel_guide.must_see.peace_park.description')}</p>
    <p class="mb-1">{$t('travel_guide.must_see.peace_park.visit_time')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.must_see.peace_park.admission_title')}</p>
    <ul class="list-disc pl-6 mb-4">
      {#each ($json('travel_guide.must_see.peace_park.admission') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.must_see.atomic_dome.title')}</h3>
    <p class="mb-2">{$t('travel_guide.must_see.atomic_dome.description')}</p>
    <p class="mb-1">{$t('travel_guide.must_see.atomic_dome.admission')}</p>
    <p class="mb-4">{$t('travel_guide.must_see.atomic_dome.visit_time')}</p>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.must_see.castle.title')}</h3>
    <p class="mb-2">{$t('travel_guide.must_see.castle.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.must_see.castle.admission_title')}</p>
    <ul class="list-disc pl-6 mb-2">
      {#each ($json('travel_guide.must_see.castle.admission') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="mb-6">{$t('travel_guide.must_see.castle.visit_time')}</p>

    <hr class="my-8" />

    <!-- Miyajima -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.miyajima.title')}</h2>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.miyajima.shrine.title')}</h3>
    <p class="mb-2">{$t('travel_guide.miyajima.shrine.description')}</p>
    <p class="mb-1">{$t('travel_guide.miyajima.shrine.admission')}</p>
    <p class="mb-1">{$t('travel_guide.miyajima.shrine.visit_time')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.miyajima.shrine.highlights_title')}</p>
    <ul class="list-disc pl-6 mb-4">
      {#each ($json('travel_guide.miyajima.shrine.highlights') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.miyajima.misen.title')}</h3>
    <p class="mb-2">{$t('travel_guide.miyajima.misen.description')}</p>
    <p class="mb-6">{$t('travel_guide.miyajima.misen.visit_time')}</p>

    <hr class="my-8" />

    <!-- Transport Experiences -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.transport_exp.title')}</h2>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.transport_exp.streetcar.title')}</h3>
    <p class="mb-2">{$t('travel_guide.transport_exp.streetcar.description')}</p>
    <p class="mb-1"><strong>{$t('travel_guide.transport_exp.streetcar.route_title')}</strong> {$t('travel_guide.transport_exp.streetcar.route')}</p>
    <p class="mb-4"><strong>{$t('travel_guide.transport_exp.streetcar.fare_title')}</strong> {$t('travel_guide.transport_exp.streetcar.fare')}</p>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.transport_exp.ferry.title')}</h3>
    <p class="mb-2">{$t('travel_guide.transport_exp.ferry.description')}</p>
    <p class="mb-1"><strong>{$t('travel_guide.transport_exp.ferry.time_title')}</strong> {$t('travel_guide.transport_exp.ferry.time')}</p>
    <p class="mb-6"><strong>{$t('travel_guide.transport_exp.ferry.fare_title')}</strong> {$t('travel_guide.transport_exp.ferry.fare')}</p>

    <hr class="my-8" />

    <!-- Historic Towns -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.historic_towns.title')}</h2>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.historic_towns.onomichi.title')}</h3>
    <p class="mb-2">{$t('travel_guide.historic_towns.onomichi.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.historic_towns.onomichi.highlights_title')}</p>
    <ul class="list-disc pl-6 mb-2">
      {#each ($json('travel_guide.historic_towns.onomichi.highlights') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="mb-4">{$t('travel_guide.historic_towns.onomichi.access')}</p>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.historic_towns.takehara.title')}</h3>
    <p class="mb-2">{$t('travel_guide.historic_towns.takehara.description')}</p>
    <p class="mb-6">{$t('travel_guide.historic_towns.takehara.access')}</p>

    <hr class="my-8" />

    <!-- Maritime -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.maritime.title')}</h2>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.maritime.yamato.title')}</h3>
    <p class="mb-2">{$t('travel_guide.maritime.yamato.description')}</p>
    <p class="mb-1">{$t('travel_guide.maritime.yamato.access')}</p>
    <p class="mb-4">{$t('travel_guide.maritime.yamato.admission')}</p>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.maritime.kure.title')}</h3>
    <p class="mb-2">{$t('travel_guide.maritime.kure.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.maritime.kure.highlights_title')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.maritime.kure.highlights') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- Day Trips -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.day_trips.title')}</h2>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.day_trips.shimanami.title')}</h3>
    <p class="mb-2">{$t('travel_guide.day_trips.shimanami.description')}</p>
    <p class="mb-1 font-medium">{$t('travel_guide.day_trips.shimanami.highlights_title')}</p>
    <ul class="list-disc pl-6 mb-2">
      {#each ($json('travel_guide.day_trips.shimanami.highlights') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="mb-4">{$t('travel_guide.day_trips.shimanami.recommended')}</p>

    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.day_trips.sandankyo.title')}</h3>
    <p class="mb-2">{$t('travel_guide.day_trips.sandankyo.description')}</p>
    <p class="mb-1">{$t('travel_guide.day_trips.sandankyo.season')}</p>
    <p class="mb-1">{$t('travel_guide.day_trips.sandankyo.access')}</p>
    <p class="mb-6">{$t('travel_guide.day_trips.sandankyo.visit_time')}</p>

    <hr class="my-8" />

    <!-- Onsen -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.onsen.title')}</h2>
    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.onsen.dogo.title')}</h3>
    <p class="mb-2">{$t('travel_guide.onsen.dogo.description')}</p>
    <p class="mb-1">{$t('travel_guide.onsen.dogo.access')}</p>
    <p class="mb-6">{$t('travel_guide.onsen.dogo.visit_time')}</p>

    <hr class="my-8" />

    <!-- Food to Try -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.food_try.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.food_try.items') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <!-- Itineraries -->
    <h2 class="text-2xl font-semibold mb-4">{$t('travel_guide.itineraries.title')}</h2>
    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.itineraries.half_day.title')}</h3>
    <ul class="list-disc pl-6 mb-4">
      {#each ($json('travel_guide.itineraries.half_day.items') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>
    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.itineraries.one_day.title')}</h3>
    <ul class="list-disc pl-6 mb-4">
      {#each ($json('travel_guide.itineraries.one_day.items') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>
    <h3 class="text-xl font-semibold mb-2">{$t('travel_guide.itineraries.weekend.title')}</h3>
    <ul class="list-disc pl-6 mb-6">
      {#each ($json('travel_guide.itineraries.weekend.items') as unknown as string[]) as item}
        <li>{item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- Dining Guide -->
    <h2 class="text-3xl font-bold mb-4">{$t('travel_guide.dining_title')}</h2>
    <p class="mb-6">{$t('travel_guide.dining_intro')}</p>

    <!-- Halal Dedicated -->
    <h3 class="text-xl font-semibold mb-4">{$t('travel_guide.halal_dedicated.title')}</h3>
    <ul class="list-none pl-0 mb-6 space-y-4">
      {#each ($json('travel_guide.halal_dedicated.restaurants') as unknown as Array<{name: string; type: string; detail: string}>) as r}
        <li class="border border-gray-200 rounded p-4">
          <p class="font-bold">{r.name}</p>
          <p class="text-sm text-gray-600 mb-1">{r.type}</p>
          <p>{r.detail}</p>
        </li>
      {/each}
    </ul>

    <!-- Halal Ingredients -->
    <h3 class="text-xl font-semibold mb-4">{$t('travel_guide.halal_ingredients.title')}</h3>
    <ul class="list-none pl-0 mb-6 space-y-4">
      {#each ($json('travel_guide.halal_ingredients.restaurants') as unknown as Array<{name: string; type: string; detail: string}>) as r}
        <li class="border border-gray-200 rounded p-4">
          <p class="font-bold">{r.name}</p>
          <p class="text-sm text-gray-600 mb-1">{r.type}</p>
          <p>{r.detail}</p>
        </li>
      {/each}
    </ul>

    <!-- Vegetarian -->
    <h3 class="text-xl font-semibold mb-4">{$t('travel_guide.vegetarian.title')}</h3>
    <ul class="list-none pl-0 mb-6 space-y-4">
      {#each ($json('travel_guide.vegetarian.restaurants') as unknown as Array<{name: string; type: string; detail: string}>) as r}
        <li class="border border-gray-200 rounded p-4">
          <p class="font-bold">{r.name}</p>
          <p class="text-sm text-gray-600 mb-1">{r.type}</p>
          <p>{r.detail}</p>
        </li>
      {/each}
    </ul>

    <!-- Seafood -->
    <h3 class="text-xl font-semibold mb-4">{$t('travel_guide.seafood.title')}</h3>
    <p class="mb-2">{$t('travel_guide.seafood.description')}</p>
    <ul class="list-disc pl-6 mb-4">
      <li>{$t('travel_guide.seafood.why_safe')}</li>
      <li>{$t('travel_guide.seafood.affordable')}</li>
    </ul>
    <p class="text-sm text-gray-600 mb-8"><em>{$t('travel_guide.seafood.note')}</em></p>

  </div>
</div>
