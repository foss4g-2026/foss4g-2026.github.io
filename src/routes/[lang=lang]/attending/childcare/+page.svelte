<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.childcare')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('childcare.title')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">{$t('childcare.description')}</p>
  </div>
</div>
