<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  
  $: lang = $page.params.lang
</script>

<svelte:head>
  <title>{$t('about.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('about.title')}</h1>
  
  <!-- About FOSS4G -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/foss4g" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.foss4g')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.foss4g_description')}</p>
  </section>

  <!-- Map -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/map" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.map')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.map_description')}</p>
  </section>

  <!-- Organizers -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/organizers" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.organizers')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.organizers_description')}</p>
  </section>

  <!-- Concept -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/concept" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.concept')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.concept_description')}</p>
  </section>

  <!-- Code of Conduct -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/code-of-conduct" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.code_of_conduct')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.code_of_conduct_description')}</p>
  </section>

  <!-- Privacy Policy -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/privacy-policy" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.privacy_policy')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.privacy_policy_description')}</p>
  </section>

  <!-- Terms and Conditions -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">
      <a href="/{lang}/about/terms-conditions" class="text-blue-600 hover:text-blue-800 hover:underline">
        {$t('nav.about_sub.terms_conditions')}
      </a>
    </h2>
    <p class="text-gray-700 mb-4">{$t('about.landing.terms_conditions_description')}</p>
  </section>
</div>
