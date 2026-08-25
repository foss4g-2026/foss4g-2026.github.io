<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import { page } from '$app/stores'
  import sponsorsData from '$lib/data/sponsors.json'
  
  $: lang = $page.params.lang || 'en'

  const supporters: string[] = [
    "Thomas Palan",
    "Bonifacio Di Pietrantonio",
    "Julian Simoni",
    "Peter Johnson",
    "Jarrett Keifer",
    "Robert Cheetham",
    "Francis Josef Gasgonia",
    "Jared K Marcotte",
    "Edoardo Neerhut",
    "Hirofumi Hayashi",
    "Hiroshi Miura",
    "Yuhi Yamamoto",
    "Nobusuke Iwasaki",
    "Sogawa Yuka"
  ]

  interface TgpSupporter {
    name: string
    website: string
    logo: string
  }

  const tgpSupporterNames: string[] = ['GeoCat', 'QFieldCloud GmbH']
  const tgpSupporters: TgpSupporter[] = Object.values(sponsorsData)
    .flat()
    .filter((sponsor) => tgpSupporterNames.includes(sponsor.name))
</script>

<svelte:head>
  <title>{$t('nav.sponsors_sub.honorable_mentions')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.sponsors.honorable_mentions.title')}</h1>
  
  <div class="prose max-w-none mb-12">
    <p class="text-lg mb-6 leading-relaxed text-gray-700">
      {$t('about.sponsors.honorable_mentions.intro')}
    </p>
    
    <p class="text-lg mb-8 leading-relaxed text-gray-700">
      {$t('about.sponsors.honorable_mentions.description_before')}
      <a href="/{lang}/register/adopt-a-ticket" class="text-primary hover:underline font-semibold">
        {$t('about.sponsors.honorable_mentions.description_link')}
      </a>
      {$t('about.sponsors.honorable_mentions.description_after')}
    </p>
  </div>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md mb-12">
    <h2 class="text-2xl font-semibold mb-6">{$t('about.sponsors.honorable_mentions.supporters_title')}</h2>
    
    <ul class="list-disc list-inside space-y-2 text-lg">
      {#each supporters as supporter}
        <li>{supporter}</li>
      {/each}
    </ul>
  </div>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.sponsors.honorable_mentions.tgp_supporters_title')}</h2>

    <p class="text-lg mb-6 leading-relaxed text-gray-700">
      {$t('about.sponsors.honorable_mentions.tgp_supporters_description')}
    </p>

    <div class="flex flex-wrap gap-6">
      {#each tgpSupporters as supporter}
        <a
          href={supporter.website}
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full sm:w-52"
        >
          <img src={supporter.logo} alt={supporter.name} class="h-16 w-auto max-w-[160px] object-contain" />
          <span class="text-sm font-medium text-gray-700">{supporter.name}</span>
        </a>
      {/each}
    </div>
  </div>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
    <p class="text-gray-700 text-center italic">
      {$t('about.sponsors.honorable_mentions.thank_you')}
    </p>
  </div>
</div>
