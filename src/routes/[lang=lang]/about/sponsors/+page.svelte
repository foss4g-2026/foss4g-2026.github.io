<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'

  // Create table data from translation structure
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
      $t('about.sponsors.packages.labels.slots'),
      $t('about.sponsors.packages.diamond.slots'),
      $t('about.sponsors.packages.platinum.slots'),
      $t('about.sponsors.packages.gold.slots'),
      $t('about.sponsors.packages.silver.slots'),
      $t('about.sponsors.packages.bronze.slots')
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
  <title>{$t('nav.about_sub.sponsors')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.sponsors.title')}</h1>
  
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
  </div>

  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-lg font-semibold mb-2">{$t('about.sponsors.contact.title')}</h3>
    <p>{$t('about.sponsors.contact.content')} <strong>foss4g2026[at]osgeo.jp</strong></p>
  </div>
</div>
