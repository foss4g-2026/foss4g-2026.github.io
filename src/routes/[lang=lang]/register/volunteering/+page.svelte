<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.volunteering')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.volunteering')}</h1>
  
  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.application_status.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <p>{$t('register.volunteering.application_status.description')}</p>
    </div>

    <div class="bg-blue-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('register.volunteering.contact.title')}</h3>
      <p class="text-sm mb-2">{$t('register.volunteering.contact.description')}</p>
      <p class="text-sm font-semibold">{$t('register.volunteering.contact.email')}</p>
    </div>
  </div>
</div>
