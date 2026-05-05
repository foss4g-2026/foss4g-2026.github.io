<script lang="ts">
  import { t } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('community_sprint.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('community_sprint.title')}</h1>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-4">{$t('community_sprint.intro')}</p>
    <p class="text-base mb-6">{$t('community_sprint.description')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_sprint.date_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('community_sprint.dates') as date}
        <li class="text-base">{date}</li>
      {/each}
    </ul>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('community_sprint.venue_title')}</h2>
    <p class="text-base mb-6">
      <a href={$t('community_sprint.venue_link')} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
        {$t('community_sprint.venue')}
      </a>
    </p>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('community_sprint.host_title')}</h2>
    <p class="text-base mb-6">{$t('community_sprint.host_description')}</p>
  </div>
  
  <SubmitButton 
    href={$t('community_sprint.host_form_url')}
    text={$t('community_sprint.host_button_text')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="prose max-w-none mt-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('community_sprint.registration_title')}</h2>
    <p class="text-base mb-4">{$t('community_sprint.registration_description')}</p>
    <p class="text-base italic">{$t('community_sprint.registration_note')}</p>
  </div>
</div>
