<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.contact')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('contact.title')}</h1>
  
  <div class="max-w-2xl mx-auto text-center">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <p class="text-lg mb-4">{$t('contact.description')}</p>
      <p class="text-lg mb-6">{$t('contact.help_message')}</p>
      <p class="text-lg mb-6"><span class="font-mono">info[at]foss4g.org</span></p>
    </div>
  </div>
</div>
