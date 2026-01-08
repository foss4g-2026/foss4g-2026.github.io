<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('register.adopt_a_ticket.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('register.adopt_a_ticket.title')}</h1>
  
  <div class="prose max-w-none mb-8">
    <p class="text-lg mb-6">
      {$t('register.adopt_a_ticket.intro')}
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.adopt_a_ticket.why.title')}</h2>
    <div class="prose max-w-none mb-6">
      <ul class="list-disc pl-6 space-y-2">
        <li>{$t('register.adopt_a_ticket.why.tgp_support')}</li>
        <li>{$t('register.adopt_a_ticket.why.workshop_instructors')}</li>
      </ul>
      
      <p class="mt-4">{$t('register.adopt_a_ticket.why.belief')}</p>
      
      <p class="mt-4">{$t('register.adopt_a_ticket.why.funding_challenge')}</p>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.adopt_a_ticket.how.title')}</h2>
    <div class="prose max-w-none mb-6">
      <p class="mb-4">{$t('register.adopt_a_ticket.how.description')}</p>
      
      <p class="mb-4">{$t('register.adopt_a_ticket.how.opportunity')}</p>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.adopt_a_ticket.benefits.title')}</h2>
    <div class="prose max-w-none">
      <p>{$t('register.adopt_a_ticket.benefits.description')}</p>
    </div>
  </div>
</div>
