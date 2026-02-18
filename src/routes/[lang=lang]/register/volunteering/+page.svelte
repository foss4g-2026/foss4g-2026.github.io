<script lang="ts">
  import { t } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.volunteering')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.volunteering')}</h1>

  <SubmitButton
    href="https://docs.google.com/forms/d/e/1FAIpQLSfRQU1JuPcRaq7qVqVbRQ2k25ggUA1rlemANzPeyJ9MK5n08Q/viewform?usp=publish-editor"
    text={$t('register.volunteering.apply.button')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.join_title')}</h2>
    <p class="mb-6">{$t('register.volunteering.join_description')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.types_title')}</h2>

    <h3 class="text-xl font-semibold mb-3">{$t('register.volunteering.main_volunteer.title')}</h3>
    <p class="mb-4">{$t('register.volunteering.main_volunteer.description')}</p>

    <h3 class="text-xl font-semibold mb-3">{$t('register.volunteering.day_of_volunteer.title')}</h3>
    <p class="mb-6">{$t('register.volunteering.day_of_volunteer.description')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.requirements.title')}</h2>
    <p class="mb-6">{$t('register.volunteering.requirements.description')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.numbers.title')}</h2>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.volunteering.numbers.items') as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.activities.title')}</h2>
    <p class="mb-4">{$t('register.volunteering.activities.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.volunteering.activities.items') as item}
        <li><strong>{item.value}</strong>: {item.description}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.gains.title')}</h2>
    <p class="mb-4">{$t('register.volunteering.gains.intro')}</p>
    <ul class="list-disc pl-6 mb-6">
      {#each $t('register.volunteering.gains.items') as item}
        <li><strong>{item.value}</strong>: {item.description}</li>
      {/each}
    </ul>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.benefits.title')}</h2>
    <h3 class="text-xl font-semibold mb-3">{$t('register.volunteering.benefits.discount_title')}</h3>
    <p class="mb-6">{$t('register.volunteering.benefits.discount_description')}</p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.volunteering.apply.title')}</h2>
    <p class="mb-4">{$t('register.volunteering.apply.description')}</p>
    <p class="mb-8">{$t('register.volunteering.apply.closing')}</p>
  </div>
</div>
