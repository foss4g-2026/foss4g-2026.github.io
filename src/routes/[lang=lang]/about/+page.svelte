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
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- About FOSS4G -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/foss4g" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.foss4g')}
        </a>
      </h2>
    </div>

    <!-- Map -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/map" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.map')}
        </a>
      </h2>
    </div>

    <!-- Organizers -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/organizers" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.organizers')}
        </a>
      </h2>
    </div>

    <!-- Concept -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/concept" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.concept')}
        </a>
      </h2>
    </div>

    <!-- Code of Conduct -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/code-of-conduct" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.code_of_conduct')}
        </a>
      </h2>
    </div>

    <!-- Privacy Policy -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/privacy-policy" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.privacy_policy')}
        </a>
      </h2>
    </div>

    <!-- Terms and Conditions -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/terms-conditions" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.terms_conditions')}
        </a>
      </h2>
    </div>

    <!-- Information for Sponsors -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 class="text-xl font-semibold mb-2">
        <a href="/{lang}/about/sponsors" class="text-blue-600 hover:text-blue-800 hover:underline">
          {$t('nav.about_sub.sponsors')}
        </a>
      </h2>
    </div>
  </div>
</div>
