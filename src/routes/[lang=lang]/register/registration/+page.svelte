<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.registration')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.registration')}</h1>
  
  <!-- Get your ticket here button -->
  <div class="text-center mb-8">
    <a href="https://2026.foss4g.org/" class="btn btn-primary btn-lg">
      {$t('register.registration.get_ticket_button')}
    </a>
  </div>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.fees_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$t('register.registration.registration_types') as unknown as string[][]}
      class="mb-6"
    />
  </div>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.whats_included.title')}</h2>
    
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.registration.whats_included.items') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
</div>
