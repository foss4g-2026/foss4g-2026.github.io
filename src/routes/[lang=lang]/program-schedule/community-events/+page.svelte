<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('community_events.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('community_events.title')}</h1>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-6">{@html $t('community_events.intro')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_events.when_title')}</h2>
    <p class="text-base mb-4">{$t('community_events.when_description')}</p>
    
    <ul class="list-disc pl-6 mb-6">
      {#each $json('community_events.suggested_times') as time}
        <li class="text-base">{time}</li>
      {/each}
    </ul>
    
    <p class="text-base mb-6">{$t('community_events.other_times_note')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_events.venue_title')}</h2>
    <p class="text-base mb-6">{@html $t('community_events.venue_description')}</p>
    
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('community_events.apply_title')}</h2>
    <p class="text-base mb-6">{$t('community_events.apply_description')}</p>
  </div>
  
  <SubmitButton 
    href={$t('community_events.form_url')}
    text={$t('community_events.apply_button_text')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="prose max-w-none mt-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('community_events.notes_title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $json('community_events.notes') as note}
        <li class="text-base">{note}</li>
      {/each}
    </ul>
  </div>
</div>
