<script lang="ts">
  import { t } from 'svelte-i18n'
  import Map from '$components/Map.svelte'
  import Countdown from '$components/Countdown.svelte'
  const HiroshimaImage = '/images/HiroshimaConventionCenter.webp'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import { faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
  import { config } from '@fortawesome/fontawesome-svg-core'
  import '@fortawesome/fontawesome-svg-core/styles.css'
  config.autoAddCss = false
</script>

<!-- Hero Section with New Design -->
<div class="w-full">
  <!-- Hero with Background Image -->
  <div class="relative w-full overflow-hidden" style="background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);">
    <!-- Background Pattern/Image -->
    <div class="absolute inset-0 opacity-30">
      <img src="/images/hero-background.webp" alt="" class="w-full h-full object-cover" />
    </div>
    
    <!-- Hero Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <!-- Right Side: Circular Image (First on mobile) -->
        <div class="flex-shrink-0 lg:order-2">
          <div class="space-y-2">
            <div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
              <div class="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/images/tourounagashi_001.webp" 
                  alt="Hiroshima Toro Nagashi" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <p class="text-xs text-gray-500 text-center" style="font-family: 'Inter', sans-serif;">©︎HCVB</p>
          </div>
        </div>
        
        <!-- Left Side: Text Content (Second on mobile) -->
        <div class="flex-1 w-full lg:w-auto lg:order-1">
          <div class="space-y-6 lg:space-y-8">
            <!-- Main Title -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight hero-title-animation" style="font-family: 'Archivo', sans-serif; letter-spacing: -0.02em;">
              FOSS4G Hiroshima 2026, Japan
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-700" style="font-family: 'Inter', sans-serif;">
              {$t('teaser.top_content.subtitle')}
            </p>
            
            <!-- Event Period -->
            <p class="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700" style="font-family: 'Inter', sans-serif;">
              August 30 - September 5, 2026
            </p>
            
            <!-- Register Button -->
            <div class="pt-2">
              <a 
                href="https://ti.to/osgeo-jp/foss4g-2026" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" 
                style="background: linear-gradient(149.59deg, #C10609 4.86%, #F10606 104.98%); font-family: 'Inter', sans-serif;">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- News Section -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
    <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-800 mb-4" style="font-family: 'Archivo', sans-serif;">{$t('teaser.news.title')}</h2>
      <div class="border-t border-gray-300 pt-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- News Item 1 -->
          <div class="space-y-2">
            <p class="text-xs text-gray-600">{$t('teaser.news.items.pasco_sponsor_jul23.date')}</p>
            <h3 class="text-lg font-normal text-gray-900">
              {$t('teaser.news.items.pasco_sponsor_jul23.title')}
            </h3>
            <p class="text-sm text-gray-600">
              {$t('teaser.news.items.pasco_sponsor_jul23.description')}
            </p>
          </div>
          <!-- News Item 2 -->
          <div class="space-y-2">
            <p class="text-xs text-gray-600">{$t('teaser.news.items.b2b_hiring_jul19.date')}</p>
            <h3 class="text-lg font-normal text-gray-900">
              {$t('teaser.news.items.b2b_hiring_jul19.title')}
            </h3>
            <p class="text-sm text-gray-600">
              {$t('teaser.news.items.b2b_hiring_jul19.description')}
            </p>
          </div>
          <!-- News Item 3 -->
          <div class="space-y-2">
            <p class="text-xs text-gray-600">{$t('teaser.news.items.gsi_partner_jul16.date')}</p>
            <h3 class="text-lg font-normal text-gray-900">
              {$t('teaser.news.items.gsi_partner_jul16.title')}
            </h3>
            <p class="text-sm text-gray-600">
              {$t('teaser.news.items.gsi_partner_jul16.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Schedule Section (Dark Background) -->
  <div class="w-full" style="background: radial-gradient(120% 120% at 50% 120%, #5C5C5C 0%, #202020 100%);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <!-- Countdown - 上部に配置 -->
      <Countdown />
      
      <!-- 日程カード（3枚） - カウントダウンの下に配置 -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Workshop Days Card (White) -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-6" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Workshops</h3>
          <div class="space-y-2">
            <p class="text-5xl font-bold text-center" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">8/30-8/31</p>
            <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">AUGUST 2026</p>
          </div>
          <div class="mt-6">
            <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/program-schedule/workshops" class="text-sm font-medium text-gray-700 hover:text-gray-900 underline" style="font-family: 'Inter', sans-serif;">View Details →</a>
          </div>
        </div>
        
        <!-- Main Conference Card (White) -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-6" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Main Conference</h3>
          <div class="space-y-2">
            <p class="text-5xl font-bold text-center" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">9/1-9/3</p>
            <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">SEPTEMBER 2026</p>
          </div>
          <div class="mt-6">
            <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/program-schedule/presentations" class="text-sm font-medium text-gray-700 hover:text-gray-900 underline" style="font-family: 'Inter', sans-serif;">View Details →</a>
          </div>
        </div>
        
        <!-- Community Sprint & Event Days Card (White) -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-6" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Community Sprint & Events</h3>
          <div class="space-y-2">
            <p class="text-5xl font-bold text-center" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">9/4-9/5</p>
            <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">SEPTEMBER 2026</p>
          </div>
          <div class="mt-6">
            <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/program-schedule/community-sprint" class="text-sm font-medium text-gray-700 hover:text-gray-900 underline" style="font-family: 'Inter', sans-serif;">View Details →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- About Section -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
    <div class="space-y-10">
      <div class="space-y-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight" style="font-family: 'Archivo', sans-serif;">
          {$t('teaser.top_content.paragraph_1')}
        </h2>
        <div class="max-w-3xl space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed" style="font-family: 'Inter', sans-serif;">
          <p>{$t('teaser.top_content.paragraph_2')}</p>
          <p>{$t('teaser.top_content.paragraph_3')}</p>
          <p>{$t('teaser.top_content.paragraph_4')}</p>
          <p>{$t('teaser.top_content.paragraph_5')}</p>
        </div>
        <div class="pt-4">
          <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/about/foss4g" 
             class="inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-white rounded" 
             style="background: linear-gradient(149.59deg, #C10609 4.86%, #F10606 104.98%); font-family: 'Inter', sans-serif;">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Hiroshima Image Section -->
  <div class="w-full h-96 sm:h-[500px] lg:h-[600px] relative">
    <img src="{HiroshimaImage}" alt="Hiroshima" class="w-full h-full object-cover rounded" />
    <p class="absolute bottom-2 right-2 text-xs text-white opacity-70" style="font-family: 'Inter', sans-serif; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">©︎HCVB</p>
  </div>

  <!-- Venue Section -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
    <div class="text-center space-y-10">
      <div class="space-y-4">
        <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900" style="font-family: 'Archivo', sans-serif; letter-spacing: -0.03em;">Venue</h2>
      </div>
      
      <!-- Venue Information Grid -->
      <div class="flex flex-col md:flex-row gap-8 justify-center items-start max-w-5xl mx-auto">
        <div class="flex-1 text-left space-y-4">
          <p class="text-xs text-gray-500 uppercase tracking-wider" style="font-family: 'Space Mono', monospace;">MAIN CONFERENCE VENUE</p>
          <h3 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight" style="font-family: 'Archivo', sans-serif;">{$t('teaser.venue.main.name')}</h3>
        </div>
        <div class="hidden md:block w-px h-32 bg-gray-400"></div>
        <div class="flex-1 text-left space-y-4">
          <p class="text-xs text-gray-500 uppercase tracking-wider" style="font-family: 'Space Mono', monospace;">WORKSHOP VENUE</p>
          <h3 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight" style="font-family: 'Archivo', sans-serif;">{$t('teaser.venue.hands_on.name')}</h3>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="mt-8">
        <Map
          mapClass="w-full h-[400px] sm:h-[500px] rounded-2xl shadow-lg"
          center={[132.4596, 34.37034]}
          zoom={12}
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
            },
            {
              coordinates: [132.46405767905273, 34.34296856461762],
              title: $t('about.map.gala_venue.name'),
              description: $t('about.map.gala_venue.title') + ' - ' + $t('about.map.gala_venue.dates'),
              color: "text-yellow-600"
            },
            {
              coordinates: [132.45505812798388, 34.39719885093278],
              title: $t('about.map.icebreaker_venue.name'),
              description: $t('about.map.icebreaker_venue.title') + ' - ' + $t('about.map.icebreaker_venue.dates'),
              color: "text-green-600"
            },
            {
              coordinates: [132.447970, 34.387633],
              title: $t('about.map.sprint_venue.name'),
              description: $t('about.map.sprint_venue.title') + ' - ' + $t('about.map.sprint_venue.dates'),
              color: "text-purple-600"
            },
            {
          coordinates: [132.46095264907268, 34.38989639131672],
          title: $t('about.map.geochicas_venue.name'),
          description: $t('about.map.geochicas_venue.title') + ' - ' + $t('about.map.geochicas_venue.dates'),
          color: "text-purple-400"
        }
          ]}
        />
      </div>
    </div>
  </div>
  
  <!-- CTA Section: Join Us in Hiroshima -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
    <div class="rounded-2xl p-12 sm:p-16 text-center shadow-xl border border-gray-300" style="background: linear-gradient(149.59deg, #0A0A0A 4.86%, #5D5D5D 104.98%);">
      <div class="space-y-8 max-w-3xl mx-auto">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white" style="font-family: 'Archivo', sans-serif; letter-spacing: -0.03em;">Join Us in<br />Hiroshima</h2>
        <p class="text-lg sm:text-xl text-white opacity-60 leading-relaxed" style="font-family: 'Inter', sans-serif;">
          Stay connected and get the latest updates.
        </p>
        
        <!-- Registration Button -->
        <div class="pt-2">
          <a href="/{$t('nav.languages.current_language') === 'English' ? 'en' : 'ja'}/register/registration" 
             class="inline-flex items-center justify-center px-8 py-4 text-lg sm:text-xl font-medium text-white rounded-lg hover:opacity-90 transition-opacity" 
             style="background: linear-gradient(149.59deg, #C10609 4.86%, #F10606 104.98%); font-family: 'Inter', sans-serif;">
            Register Now
          </a>
        </div>
        
        <!-- Mailing List Button -->
        <div>
          <a href="https://mailchi.mp/foss4g/mailing-list" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all" 
             style="font-family: 'Inter', sans-serif;">
            <FontAwesomeIcon icon={faEnvelope} class="mr-2" />
            Join our Mailing List
          </a>
        </div>
        
        <!-- Social Media Links -->
        <div class="flex flex-col items-center gap-4 pt-4">
          <p class="text-sm text-white/60 font-medium" style="font-family: 'Inter', sans-serif;">Follow us for event updates</p>
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/company/foss4g2026/" 
               target="_blank" 
               rel="noopener noreferrer"
               class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 transition-all"
               title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} class="text-xl" />
            </a>
            <a href="https://t.me/foss4g" 
               target="_blank" 
               rel="noopener noreferrer"
               class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 transition-all"
               title="Telegram">
              <FontAwesomeIcon icon={faTelegram} class="text-xl" />
            </a>
            <a href="https://chat.whatsapp.com/Lffta4SIYKOH03aUw318Q1?mode=gi_t" 
               target="_blank" 
               rel="noopener noreferrer"
               class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 transition-all"
               title="WhatsApp Public Chat">
              <FontAwesomeIcon icon={faWhatsapp} class="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sponsors Section -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
   <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
    <div class="text-center mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-800">{$t('teaser.sponsors.title')}</h2>
    </div>
    
    <!-- Diamond Sponsors -->
    <div class="mb-12 py-6">
      <h3 class="text-xl font-semibold text-slate-700 mb-6 text-center">{$t('teaser.sponsors.diamond_sponsors')}</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://eukarya.io/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Eukarya/eukarya.svg"
              alt="Eukarya"
              class="h-36 sm:h-44 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://geot.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/GeoTechnologies/08_GT_vi_horizontal_transparent_large.png"
              alt="Geo Technologies"
              class="h-40 sm:h-48 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Platinum Sponsors -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.platinum_sponsors')}</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.mierune.co.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/MIERUNE/MIERUNE.png"
              alt="MIERUNE Inc."
              class="h-28 sm:h-36 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://cesium.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Cesium/15_Cesium_dark_color.png"
              alt="Cesium"
              class="h-28 sm:h-36 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Gold Sponsors -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.gold_sponsors')}</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="http://www.geocat.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/GeoCat/14_GeoCat colour - Jeroen Ticheler.svg"
              alt="GeoCat"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://locationmind.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/LocationMind/20_locationmind_logo-color-horizontal.png"
              alt="LocationMind Inc."
              class="h-28 sm:h-32 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Silver Sponsors -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.silver_sponsors')}</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.gaia3d.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Gaia3D/gaia3d.avif"
              alt="Gaia3D Inc"
              class="h-24 sm:h-28 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://prometiprostor.hr/en/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Promet_i_prostor/Promet_i_prostor.png"
              alt="Promet i prostor d.o.o."
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://qfield.cloud/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/QFieldCloud/QFieldCloud.png"
              alt="QFieldCloud GmbH"
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.earthbrain.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/EarthBrain/21_Earthbrain_eb_logo.png"
              alt="EarthBrain Inc."
              class="h-28 sm:h-32 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Bronze Sponsors -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.bronze_sponsors')}</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://opendata.aws" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/AWS/AWS.svg"
              alt="Amazon Web Services (AWS)"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.nayuta-inc.co.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Nayuta/Nayuta.png"
              alt="Nayuta, Inc."
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://auspatious.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Auspatious/10_logo_Auspatious_2.png"
              alt="Auspatious"
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.apptec.co.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/AppliedTechnology/05_応用技術_FOSS4G_MachiSpaceLogo_2026.png"
              alt="Applied Technology"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://arkedgespace.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/ArkEdgeSpace/13_ArkEdgeSpace_BRANDLOGO2lineB-RGB-Ver001 - Kota Yuhara.png"
              alt="ArkEdgeSpace"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.geosolutionsgroup.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Geosolutions/12_geosolutions_logo.png"
              alt="GeoSolutions"
              class="h-8 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.jafta.or.jp/contents/home/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Jafta/16_Jafta.png"
              alt="Japan Forest Technology Association"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://developmentseed.org/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/DevelopmentSeed/17_Development_Seed_hor--pos@2x.png"
              alt="Development Seed"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://uc.i-ric.org/en" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/iRIC/18-2_iRic_signature01color.jpg"
              alt="iRIC"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="http://www.orbitalnet.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Orbitalnet/19_orbitalnet.svg"
              alt="Orbitalnet"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://pacificspatial.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/PSS/22_pss_horizontal.svg"
              alt="Pacific Spatial Solutions"
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.ajiko.co.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/AsiaAirSurvey/23_AsiaAirSurvey.png"
              alt="Asia Air Survey Co., Ltd."
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://overturemaps.org/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/OvertureMaps/24_OvertureMapsFoundationHorizontalColor_NoraAnwar.svg"
              alt="Overture Maps Foundation"
              class="h-24 sm:h-28 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.pasco.co.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/PASCO/25_PASCO_logo_color.svg"
              alt="PASCO"
              class="h-24 sm:h-28 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Partner Organizations -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.partner_organizations')}</h3>
      <div class="flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full">
          <a href="https://www.jpgu.org/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/JpGU/JpGU_logo.png"
              alt="Japan Geoscience Union"
              class="h-28 sm:h-36 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full">
          <a href="https://www.mlit.go.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/MLIT/MLIT_logo.png"
              alt="Ministry of Land, Infrastructure, Transport and Tourism"
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full">
          <a href="https://www.gsi.go.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/GSI/GSI_logo.png"
              alt="Geospatial Information Authority of Japan"
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full">
          <a href="https://www.mofa.go.jp/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/MOFA/06_mofa_logo.png"
              alt="Ministry of Foreign Affairs of Japan"
              class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Media Partners -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.media_partners')}</h3>
      <div class="flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full">
          <a href="http://nextpb.com/gisnext/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/GISnext/logo2.png"
              alt="GIS next"
              class="h-24 sm:h-32 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full">
          <a href="https://gisworld-tech.com/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/GISworldtech/GISWorld-tech_logo.jpg"
              alt="GISWORLD-Tech"
              class="h-24 sm:h-32 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Supporter Sponsors -->
    <div>
      <h3 class="text-xl font-semibold text-slate-700 mb-4 text-center">{$t('teaser.sponsors.supporter_sponsor')}</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://ti.to/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/Tito/tito-wordmark-blue.svg"
              alt="Tito"
              class="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div class="flex items-center justify-center bg-white rounded-lg p-6 w-full sm:w-[calc(50%-0.75rem)]">
          <a href="https://www.isprs.org/" target="_blank" rel="noopener noreferrer" class="block">
            <img
              src="/images/sponsors/ISPRS/isprs_logo.jpg"
              alt="ISPRS"
              class="h-28 sm:h-32 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
   </div>
  </div>

  <!-- Organizers Section -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center space-y-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900" style="font-family: 'Archivo', sans-serif;">Organizers</h2>
      
      <!-- Organizers Logo Grid -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
        <!-- OSGeo Japan Logo -->
        <div class="flex items-center justify-center">
          <img 
            src="/images/OSGeoJP_logo_color.svg" 
            alt="OSGeo Japan" 
            class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <!-- OSGeo Logo -->
        <div class="flex items-center justify-center">
          <img 
            src="/images/osgeo-logo-cmyk.svg" 
            alt="OSGeo Foundation" 
            class="h-20 sm:h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  </div>
</div>
