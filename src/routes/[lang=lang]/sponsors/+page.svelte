<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'

  let isProspectusHovered = false
  let isFormHovered = false

  $: headers = [
    $t('about.sponsors.packages.labels.title'),
    $t('about.sponsors.packages.diamond.title'),
    $t('about.sponsors.packages.platinum.title'),
    $t('about.sponsors.packages.gold.title'),
    $t('about.sponsors.packages.silver.title'),
    $t('about.sponsors.packages.bronze.title')
  ]

  $: rows = [
    [
      $t('about.sponsors.packages.labels.cost'),
      $t('about.sponsors.packages.diamond.cost'),
      $t('about.sponsors.packages.platinum.cost'),
      $t('about.sponsors.packages.gold.cost'),
      $t('about.sponsors.packages.silver.cost'),
      $t('about.sponsors.packages.bronze.cost')
    ],
    [
      $t('about.sponsors.packages.labels.tickets'),
      $t('about.sponsors.packages.diamond.tickets'),
      $t('about.sponsors.packages.platinum.tickets'),
      $t('about.sponsors.packages.gold.tickets'),
      $t('about.sponsors.packages.silver.tickets'),
      $t('about.sponsors.packages.bronze.tickets')
    ],
    [
      $t('about.sponsors.packages.labels.cxo_tickets'),
      $t('about.sponsors.packages.diamond.cxo_tickets'),
      $t('about.sponsors.packages.platinum.cxo_tickets'),
      $t('about.sponsors.packages.gold.cxo_tickets'),
      $t('about.sponsors.packages.silver.cxo_tickets'),
      $t('about.sponsors.packages.bronze.cxo_tickets')
    ],
    [
      $t('about.sponsors.packages.labels.session'),
      $t('about.sponsors.packages.diamond.session'),
      $t('about.sponsors.packages.platinum.session'),
      $t('about.sponsors.packages.gold.session'),
      $t('about.sponsors.packages.silver.session'),
      $t('about.sponsors.packages.bronze.session')
    ],
    [
      $t('about.sponsors.packages.labels.booth'),
      $t('about.sponsors.packages.diamond.booth'),
      $t('about.sponsors.packages.platinum.booth'),
      $t('about.sponsors.packages.gold.booth'),
      $t('about.sponsors.packages.silver.booth'),
      $t('about.sponsors.packages.bronze.booth')
    ]
  ]
</script>

<svelte:head>
  <title>{$t('nav.sponsors')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.sponsors.title')}</h1>
  
  <!-- Call for Sponsors Section -->
  <h2 class="text-2xl font-semibold mb-4">{$t('about.sponsors.call_for_sponsors.title')}</h2>
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md mb-12">
    <p class="text-lg mb-6 leading-relaxed text-gray-700">
      {$t('about.sponsors.call_for_sponsors.intro')}
    </p>
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a 
        href="/documents/SponsorshipProspectus.pdf" 
        target="_blank"
        class="btn btn-lg bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3 no-underline"
        on:mouseenter={() => isProspectusHovered = true}
        on:mouseleave={() => isProspectusHovered = false}
      >
        <img 
          src={isProspectusHovered ? "/images/logo-16.svg" : "/images/logo-04.svg"} 
          alt="FOSS4G 2026 Logo" 
          class="w-8 h-8 object-contain transition-all duration-200"
        >
        <span>{$t('about.sponsors.call_for_sponsors.prospectus_link')}</span>
      </a>
      <a 
        href="https://forms.gle/egvu9ehCRpmxDPSk7" 
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
        <span>{$t('about.sponsors.call_for_sponsors.application_form')}</span>
      </a>
    </div>
    
    <!-- Alternative Contact Method -->
    <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
      <h3 class="text-lg font-semibold text-yellow-900 mb-3">{$t('about.sponsors.call_for_sponsors.alternative_contact.title')}</h3>
      <p class="text-yellow-800 mb-4">
        {$t('about.sponsors.call_for_sponsors.alternative_contact.intro')}
      </p>
      <p class="font-semibold text-yellow-900 mb-2">{$t('about.sponsors.call_for_sponsors.alternative_contact.required_info_title')}</p>
      <ul class="list-disc list-inside text-yellow-800 mb-4 space-y-1">
        {#each $t('about.sponsors.call_for_sponsors.alternative_contact.required_info') as item}
          <li>{item}</li>
        {/each}
      </ul>
      <p class="text-sm text-yellow-800 italic">
        {$t('about.sponsors.call_for_sponsors.alternative_contact.note')}
      </p>
    </div>
  </div>
  
  <div class="prose max-w-none mb-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.sponsors.benefits.title')}</h2>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>{$t('about.sponsors.benefits.global_audience')}</li>
      <li>{$t('about.sponsors.benefits.various_benefits')}</li>
      <li>{$t('about.sponsors.benefits.community_support')}</li>
    </ul>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-semibold mb-6">{$t('about.sponsors.packages.title')}</h2>
    <Table 
      {headers}
      {rows}
      class="w-full"
    />
    <div class="mt-4">
      <p class="text-sm text-gray-600">※ {$t('about.sponsors.packages.tax_note')}</p>
    </div>
  </div>

  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-lg font-semibold mb-2">{$t('about.sponsors.contact.title')}</h3>
    <p>{$t('about.sponsors.contact.content')} <strong>sponsor[at]foss4g.org</strong></p>
  </div>

  <!-- Current Sponsors Section -->
  <div class="mt-12">
    <h2 class="text-2xl font-semibold mb-8 text-center">{$t('about.sponsors.current_sponsors.title')}</h2>
    
    <!-- Media Partners -->
    <div class="mb-10">
      <h3 class="text-xl font-semibold text-slate-700 mb-6 text-center">{$t('teaser.sponsors.media_partners')}</h3>
      <div class="flex items-center justify-center bg-white p-8 rounded-lg shadow-md">
        <a href="https://www.gisnext.jp/" target="_blank" rel="noopener noreferrer" class="block">
          <img 
            src="/images/sponsors/GISnext/logo2.png"
            alt="GIS next" 
            class="h-24 sm:h-28 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
    
    <!-- Supporter Sponsors -->
    <div>
      <h3 class="text-xl font-semibold text-slate-700 mb-6 text-center">{$t('teaser.sponsors.supporter_sponsor')}</h3>
      <div class="flex items-center justify-center bg-white p-8 rounded-lg shadow-md">
        <a href="https://ti.to/" target="_blank" rel="noopener noreferrer" class="block">
          <img 
            src="/images/sponsors/Tito/tito-wordmark-blue.svg" 
            alt="Tito" 
            class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  </div>
</div>
