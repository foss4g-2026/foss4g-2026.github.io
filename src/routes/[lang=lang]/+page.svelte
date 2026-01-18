<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
  import ImageAndCopyright from '$components/ImageAndCopyright.svelte'
  import Countdown from '$components/Countdown.svelte'
  const HiroshimaImage = '/images/HiroshimaConventionCenter.webp'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import {
    faCalendarDay,
    faMapLocationDot,
    faDollarSign,
    faAlarmClock,
    faPersonWalkingLuggage,
  } from '@fortawesome/free-solid-svg-icons'
  import { config } from '@fortawesome/fontawesome-svg-core'
  import '@fortawesome/fontawesome-svg-core/styles.css'
  config.autoAddCss = false
</script>

<!-- Hero Section with Modern Design -->
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Hero Image with Title and Subtitle -->
  <div class="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden rounded-3xl mb-8">
    <!-- Background Image with rounded corners -->
    <div class="absolute inset-0 rounded-3xl overflow-hidden">
      <div class="w-full h-full">
        <ImageAndCopyright
          imageSrc={HiroshimaImage}
          altText={$t('images.hiroshima.alt')}
          copyrightText={$t('images.hiroshima.copyright')}
        />
      </div>
      <!-- Soft gradient overlay for gentle aesthetic -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-blue-900/50 to-indigo-800/40"></div>
    </div>
    
    <!-- Hero Content - Title and Subtitle only -->
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
          {$t('title')}
        </h1>
        <!-- Subtitle -->
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 drop-shadow-lg">
          {$t('teaser.top_content.subtitle')}
        </h2>
      </div>
    </div>
  </div>
  
  <!-- Countdown Section -->
  <div class="mb-8">
    <Countdown />
  </div>
  
  <!-- Content Card outside the image -->
  <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
    <div class="text-gray-800 space-y-4 text-base sm:text-lg leading-relaxed">
      <p class="font-medium text-slate-800 text-lg sm:text-xl">{$t('teaser.top_content.paragraph_1')}</p>
      <p class="text-gray-700">{$t('teaser.top_content.paragraph_2')}</p>
      <p class="text-gray-700">{$t('teaser.top_content.paragraph_3')}</p>
      <p class="text-gray-700">{$t('teaser.top_content.paragraph_4')}</p>
      <p class="text-gray-700">{$t('teaser.top_content.paragraph_5')}</p>
    </div>
  </div>

  <!-- Venue Section -->
  <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mt-8">
    <div class="flex items-center mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-800">{$t('teaser.venue.label')}</h2>
    </div>
    
    <!-- Venue Information Grid -->
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="bg-white/80 rounded-lg p-4 shadow-sm">
        <h4 class="font-semibold text-slate-800 mb-1">{$t('teaser.venue.main.label')}</h4>
        <p class="text-slate-600">{$t('teaser.venue.main.name')}</p>
      </div>
      <div class="bg-white/80 rounded-lg p-4 shadow-sm">
        <h4 class="font-semibold text-slate-800 mb-1">{$t('teaser.venue.hands_on.label')}</h4>
        <p class="text-slate-600">{$t('teaser.venue.hands_on.name')}</p>
      </div>
    </div>
    
    <!-- Map Section -->
    <div class="mt-6">
      <Map
        mapClass="w-full h-[300px] sm:h-[350px] rounded-lg shadow-sm"
        center={[132.4596, 34.3853]}
        zoom={6}
        style={$t('map.settings.style')}
        items={[
          {
            coordinates: [132.45118, 34.39205],
            title: $t('about.map.main_venue.name'),
            description: $t('about.map.main_venue.title') + ' - ' + $t('about.map.main_venue.dates'),
            color: "text-red-600"
          },
          {
            coordinates: [132.46930498963332, 34.395054166977275],
            title: $t('about.map.workshop_venue.name'),
            description: $t('about.map.workshop_venue.title') + ' - ' + $t('about.map.workshop_venue.dates'),
            color: "text-blue-600"
          }
        ]}
      />
    </div>
  </div>

  <!-- Partner Sponsors Section -->
  <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mt-8">
    <div class="text-center mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-800">Partner Sponsors</h2>
    </div>
    
    <!-- Sponsors Logo Grid -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
      <!-- OSGeo Japan Logo -->
      <div class="flex items-center justify-center">
        <img 
          src="/images/OSGeoJP_logo_color.svg" 
          alt="OSGeo Japan" 
          class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <!-- OSGeo Logo -->
      <div class="flex items-center justify-center">
        <img 
          src="/images/osgeo-logo-cmyk.svg" 
          alt="OSGeo Foundation" 
          class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
        />
      </div>
    </div>
  </div>
</div>
