<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.registration')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.registration')}</h1>
  
  <!-- Registration notice -->
  <div class="text-center mb-8">
    <div class="alert alert-warning">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span class="text-lg font-medium">{$t('register.registration.ticket_link_note')}</span>
    </div>
  </div>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.fees_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$t('register.registration.registration_types') as unknown as string[][]}
      class="mb-6"
    />
    
    <!-- Additional fees note -->
    <div class="mb-6">
      <span class="text-sm text-gray-500">※{$t('register.registration.fees_note_additional')}</span>
    </div>
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
