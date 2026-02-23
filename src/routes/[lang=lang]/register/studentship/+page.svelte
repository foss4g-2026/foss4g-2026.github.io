<script lang="ts">
  import { t } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.studentship')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.studentship')}</h1>
  
  <!-- Register Now Button -->
  <SubmitButton 
    href="https://ti.to/osgeo-jp/foss4g-2026"
    text="Register Now"
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('register.studentship.special_rates.title')}</h2>
    <p>
      {$t('register.studentship.special_rates.description')}
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.eligibility.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.studentship.eligibility.requirements') as requirement}
        <li>{requirement}</li>
      {/each}
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.studentship.student_fees.title')}</h2>
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <p class="text-3xl font-bold text-primary">{$t('register.studentship.student_fees.price')}</p>
    </div>
  </div>

  <div class="mb-8">
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">{$t('register.studentship.contact.title')}</h3>
      <p>{$t('register.studentship.contact.description')} <strong>{$t('register.studentship.contact.email')}</strong></p>
    </div>
  </div>
</div>
