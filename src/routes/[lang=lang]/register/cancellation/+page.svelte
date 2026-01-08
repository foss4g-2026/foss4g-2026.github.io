<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.cancellation')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.cancellation')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-8">
      {$t('register.cancellation.intro')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.refund_schedule.title')}</h2>
    <div class="mb-8">
      <p class="text-gray-600">TBD</p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.cancellation_process.title')}</h2>
    <div class="mb-6">
      <p class="text-gray-600">TBD</p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.workshop_cancellations.title')}</h2>
    <div class="mb-6">
      <p class="text-gray-600">TBD</p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.contact_information.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg">
      <p class="mb-2">{$t('register.cancellation.contact_information.description')}</p>
      <p class="font-semibold">{$t('register.cancellation.contact_information.email')}</p>
    </div>
  </div>
</div>
