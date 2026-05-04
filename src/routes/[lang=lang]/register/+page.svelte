<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  
  $: lang = $page.params.lang
</script>

<svelte:head>
  <title>{$t('register.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('register.title')}</h1>
  
  <!-- Registration -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/register/registration" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.register_sub.registration')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('register.landing.registration_description')}</p>
  </section>

  <!-- Studentship Program -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/register/studentship" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.register_sub.studentship')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('register.landing.studentship_description')}</p>
  </section>

  <!-- Travel Grant Program -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/register/travel-grant" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.register_sub.travel_grant')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('register.landing.travel_grant_description')}</p>
  </section>

  <!-- Adopt-a-ticket -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/register/adopt-a-ticket" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.register_sub.adopt_a_ticket')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('register.landing.adopt_a_ticket_description')}</p>
  </section>

  <!-- Volunteering -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/register/volunteering" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.register_sub.volunteering')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('register.landing.volunteering_description')}</p>
  </section>

  <!-- Cancellation Policy -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/register/cancellation" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.register_sub.cancellation')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('register.landing.cancellation_description')}</p>
  </section>
</div>
