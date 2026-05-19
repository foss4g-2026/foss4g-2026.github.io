<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('gala_dinner.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">🎉 {$t('gala_dinner.title')}</h1>
  
  <p class="text-lg font-semibold mb-8">{$t('gala_dinner.date')}</p>
  
  <div class="prose max-w-none mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('gala_dinner.venue_title')}</h2>
    <p class="text-base mb-2">
      <a href={$t('gala_dinner.venue_link')} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">
        {$t('gala_dinner.venue_name')}
      </a>
    </p>
    <p class="text-base mb-6">{$t('gala_dinner.transportation')}</p>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('gala_dinner.what_to_expect_title')}</h2>
    <ul class="space-y-4 mb-6">
      {#each $json('gala_dinner.what_to_expect') as item}
        <li class="flex items-start">
          <span class="text-3xl mr-4">{item.icon}</span>
          <div>
            <strong class="text-lg">{item.title}</strong>
            <p class="text-base text-gray-700">{item.description}</p>
          </div>
        </li>
      {/each}
    </ul>
    
    <h2 class="text-2xl font-semibold mb-4">{$t('gala_dinner.ticket_price_title')}</h2>
    <p class="text-xl font-bold mb-2">{$t('gala_dinner.ticket_price')}</p>
    <p class="text-base italic mb-6">{$t('gala_dinner.ticket_note')}</p>
  </div>
  
  <SubmitButton 
    href={$t('gala_dinner.register_url')}
    text={$t('gala_dinner.register_button')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
</div>
