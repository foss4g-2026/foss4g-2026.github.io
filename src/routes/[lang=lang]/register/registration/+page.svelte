<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.registration')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.registration')}</h1>
  
  <!-- Register Now Button -->
  <SubmitButton 
    href="https://ti.to/osgeo-jp/foss4g-2026"
    text="Register Now"
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.fees_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$t('register.registration.main_registration_types') as unknown as string[][]}
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
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.additional_items_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$t('register.registration.additional_items') as unknown as string[][]}
      class="mb-6"
    />
    
    <!-- Additional fees note -->
    <div class="mb-6">
      <span class="text-sm text-gray-500">※{$t('register.registration.fees_note_additional')}</span>
    </div>
  </div>
</div>
