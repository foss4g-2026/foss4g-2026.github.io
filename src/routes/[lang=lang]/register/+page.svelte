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
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Registration -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/register/registration" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.register_sub.registration')}
        </a>
      </h2>
    </div>

    <!-- Studentship Program -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/register/studentship" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.register_sub.studentship')}
        </a>
      </h2>
    </div>

    <!-- Travel Grant Program -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/register/travel-grant" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.register_sub.travel_grant')}
        </a>
      </h2>
    </div>

    <!-- Adopt-a-ticket -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/register/adopt-a-ticket" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.register_sub.adopt_a_ticket')}
        </a>
      </h2>
    </div>

    <!-- Volunteering -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/register/volunteering" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.register_sub.volunteering')}
        </a>
      </h2>
    </div>

    <!-- Cancellation Policy -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/register/cancellation" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.register_sub.cancellation')}
        </a>
      </h2>
    </div>
  </div>
</div>
