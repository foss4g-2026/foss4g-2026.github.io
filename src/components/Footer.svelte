<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import { faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
  
  $: locale = $page.params.lang || 'ja'
</script>

<footer class="footer footer-horizontal footer-center bg-white p-10 border-t border-gray-200" style="font-family: 'Inter', sans-serif;">
  <aside>
    <p class="font-bold text-xl" style="font-family: 'Archivo', sans-serif;">{$t('title')}</p>
    <p class="text-gray-600">Copyright © 2026 FOSS4G Hiroshima 2026 LOC</p>
    
    <!-- Social Media and Mailing List -->
    <div class="flex flex-col items-center gap-4 mt-6">
      <!-- Mailing List Button -->
      <a href="https://mailchi.mp/foss4g/mailing-list" 
         target="_blank" 
         rel="noopener noreferrer"
         class="inline-flex items-center px-6 py-3 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
         style="background: linear-gradient(149.59deg, #C10609 4.86%, #F10606 104.98%);">
        <FontAwesomeIcon icon={faEnvelope} class="mr-2" />
        Join our Mailing List
      </a>
      
      <!-- Social Media Icons -->
      <div class="flex flex-col items-center gap-2">
        <p class="text-sm text-gray-600 font-medium">Follow us for event updates</p>
        <div class="flex gap-4">
          <span 
             class="btn btn-circle btn-sm cursor-not-allowed opacity-30"
             title="LinkedIn (Closed)">
            <FontAwesomeIcon icon={faLinkedin} class="text-lg" />
          </span>
          <span 
             class="btn btn-circle btn-sm cursor-not-allowed opacity-30"
             title="Telegram (Closed)">
            <FontAwesomeIcon icon={faTelegram} class="text-lg" />
          </span>
          <span 
             class="btn btn-circle btn-sm cursor-not-allowed opacity-30"
             title="WhatsApp (Closed)">
            <FontAwesomeIcon icon={faWhatsapp} class="text-lg" />
          </span>
        </div>
      </div>
    </div>
    
    <!-- Legal Links -->
    <div class="flex flex-wrap gap-4 mt-4 text-sm">
      <a href="/{locale}/tokushoho" class="link link-hover">特定商取引法に基づく表記</a>
    </div>
  </aside>
</footer>