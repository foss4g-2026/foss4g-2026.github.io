<script lang="ts">
  import { t } from 'svelte-i18n'
  import sponsorsData from '$lib/data/sponsors.json'

  type Sponsor = {
    name: string
    website: string
    logo: string
    description: string | null
  }

  type Category = {
    key: string
    label: string
    sponsors: Sponsor[]
    accentColor: string
    badge: string
  }

  const categories: Category[] = [
    {
      key: 'diamond',
      label: 'Diamond Sponsors',
      sponsors: sponsorsData.diamond,
      accentColor: '#d7000f',
      badge: 'bg-red-100 text-red-700'
    },
    {
      key: 'platinum',
      label: 'Platinum Sponsors',
      sponsors: sponsorsData.platinum,
      accentColor: '#94a3b8',
      badge: 'bg-slate-100 text-slate-700'
    },
    {
      key: 'gold',
      label: 'Gold Sponsors',
      sponsors: sponsorsData.gold,
      accentColor: '#fbbf24',
      badge: 'bg-amber-100 text-amber-700'
    },
    {
      key: 'silver',
      label: 'Silver Sponsors',
      sponsors: sponsorsData.silver,
      accentColor: '#9ca3af',
      badge: 'bg-gray-100 text-gray-700'
    },
    {
      key: 'bronze',
      label: 'Bronze Sponsors',
      sponsors: sponsorsData.bronze,
      accentColor: '#fb923c',
      badge: 'bg-orange-100 text-orange-700'
    },
    {
      key: 'supporter',
      label: 'Supporter Sponsors',
      sponsors: sponsorsData.supporter,
      accentColor: '#4ade80',
      badge: 'bg-green-100 text-green-700'
    },
    {
      key: 'media_partner',
      label: 'Media Partners',
      sponsors: sponsorsData.media_partner,
      accentColor: '#c084fc',
      badge: 'bg-purple-100 text-purple-700'
    },
    {
      key: 'partner_organization',
      label: 'Partner Organizations',
      sponsors: sponsorsData.partner_organization,
      accentColor: '#2dd4bf',
      badge: 'bg-teal-100 text-teal-700'
    }
  ]

  let openDescriptions: Record<string, boolean> = {}

  function toggleDescription(key: string) {
    openDescriptions[key] = !openDescriptions[key]
    openDescriptions = { ...openDescriptions }
  }
</script>

<svelte:head>
  <title>{$t('nav.sponsors_sub.our_sponsors')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-2">{$t('nav.sponsors_sub.our_sponsors')}</h1>
  <p class="text-gray-500 mb-6 text-lg">
    We are grateful to all our sponsors and partners who make FOSS4G Hiroshima 2026 possible.
  </p>
  <p class="text-sm text-gray-500 mb-10 bg-gray-50 border-l-4 border-gray-300 px-4 py-3">
    Detailed information for each sponsor will be added and updated.
  </p>

  {#each categories as category}
    <section class="mb-14">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl font-bold text-slate-800">{category.label}</h2>
      </div>

      <div class="flex flex-col gap-4">
        {#each category.sponsors as sponsor}
          {@const cardKey = category.key + '_' + sponsor.name}
          <div class="bg-white border-l-4 shadow-sm hover:shadow-md transition-shadow duration-200" style="border-color: {category.accentColor}">
            <div class="flex flex-col sm:flex-row items-center sm:items-stretch gap-0">

              <!-- Logo area -->
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center bg-gray-50 p-6 w-full sm:w-52 shrink-0 hover:bg-gray-100 transition-colors duration-150"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  class="h-16 w-auto max-w-[160px] object-contain"
                />
              </a>

              <!-- Info area -->
              <div class="flex flex-col justify-center flex-1 px-6 py-5">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 class="text-lg font-bold text-slate-800 leading-tight">{sponsor.name}</h3>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-blue-500 hover:text-blue-700 hover:underline mt-0.5 inline-block"
                    >
                      {sponsor.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                  {#if sponsor.description}
                    <button
                      onclick={() => toggleDescription(cardKey)}
                      class="self-start sm:self-center flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors duration-150 shrink-0"
                    >
                      <span>More Info</span>
                      <svg
                        class="w-4 h-4 transition-transform duration-200 {openDescriptions[cardKey] ? 'rotate-180' : ''}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  {/if}
                </div>

                {#if sponsor.description && openDescriptions[cardKey]}
                  <div class="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                    {sponsor.description}
                  </div>
                {/if}
              </div>

            </div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>
