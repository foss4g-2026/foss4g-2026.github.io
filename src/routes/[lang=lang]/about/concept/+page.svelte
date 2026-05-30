<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.concept')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.concept')}</h1>
  
  <div class="prose max-w-none">
    <!-- Hero Section with Theme and Image -->
    <div class="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
      <!-- Background Image -->
      <div class="relative h-96 md:h-[500px]">
        <img 
          src="/images/HiroshimaCity.webp" 
          alt="Hiroshima City skyline" 
          class="w-full h-full object-cover"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white px-6 max-w-4xl">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              "{$t('about.concept.theme.title')}"
            </h2>
            <p class="text-xl md:text-2xl font-light drop-shadow-md opacity-90">
              {$t('about.concept.theme.subtitle')}
            </p>
          </div>
        </div>
        
        <!-- Photo Credit -->
        <div class="absolute bottom-4 right-4">
          <p class="text-white text-xs opacity-75 drop-shadow-sm">
            Photo courtesy of the Hiroshima Convention & Visitors Bureau (HCVB)
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div>
        <h3 class="text-2xl font-semibold mb-4">{$t('about.concept.vision.title')}</h3>
        <p class="mb-4">
          {$t('about.concept.vision.paragraph_1')}
        </p>
        <p class="mb-4">
          {$t('about.concept.vision.paragraph_2')}
        </p>
      </div>
      
      <div>
        <h3 class="text-2xl font-semibold mb-4">{$t('about.concept.hiroshima.title')}</h3>
        <p class="mb-4">
          {$t('about.concept.hiroshima.paragraph_1')}
        </p>
        <p class="mb-4">
          {$t('about.concept.hiroshima.paragraph_2')}
        </p>
      </div>
    </div>

    <div class="bg-gray-50 p-8 rounded-lg mb-8">
      <h3 class="text-2xl font-semibold mb-4">{$t('about.concept.logo.title')}</h3>
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div class="w-48 h-48 rounded-lg flex items-center justify-center">
          <img src="/images/logo-04.svg" alt="FOSS4G Hiroshima 2026 Conference Logo" class="w-full h-full object-contain rounded-lg" />
        </div>
        <div class="flex-1">
          <p class="mb-4">
            {$t('about.concept.logo.description')}
          </p>
          <p class="mb-4">
            {$t('about.concept.logo.paragraph_1')}
          </p>
          <p class="mb-4">
            {$t('about.concept.logo.paragraph_2')}
          </p>
          <p>
            {$t('about.concept.logo.conclusion')}
          </p>
        </div>
      </div>
      
      <div class="mt-6 p-6 bg-white border-l-4 border-green-600 rounded-r-lg">
        <h4 class="text-lg font-semibold mb-3">Logo Downloads</h4>
        <p class="mb-4 text-gray-700">
          Our logo is available for use in social media and marketing material under 
          <a 
            href="https://creativecommons.org/licenses/by/4.0/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-700 hover:text-green-900 underline font-medium"
          >
            CC BY 4.0
          </a> license. 
          You are free to use, share, and adapt these logos for any purpose, including commercial use, as long as you provide appropriate credit to "FOSS4G Hiroshima 2026". 
          You can find the mark in various forms for download here at:
        </p>
        <div class="flex flex-col gap-2">
          <a 
            href="https://github.com/foss4g-2026/foss4g-2026.github.io/tree/main/logo/svg" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-700 hover:text-green-900 font-medium flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            SVG Format (Vector)
          </a>
          <a 
            href="https://github.com/foss4g-2026/foss4g-2026.github.io/tree/main/logo/png" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-700 hover:text-green-900 font-medium flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            PNG Format (Raster)
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
