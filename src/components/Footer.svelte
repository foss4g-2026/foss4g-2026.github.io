<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
  
  $: locale = $page.params.lang || 'ja'
</script>

<footer class="footer footer-horizontal footer-center bg-base-200 p-10">
  <aside>
    <p class="font-bold text-xl">{$t('title')}</p>
    <p>Copyright © 2026 FOSS4G 2026 Hiroshima LOC</p>
    
    <!-- Social Media and Mailing List -->
    <div class="flex flex-col items-center gap-4 mt-6">
      <!-- Mailing List Button -->
      <a href="https://mailchi.mp/foss4g/mailing-list" 
         target="_blank" 
         rel="noopener noreferrer"
         class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
        <FontAwesomeIcon icon={faEnvelope} class="mr-2" />
        Join our Mailing List
      </a>
      
      <!-- Social Media Icons -->
      <div class="flex flex-col items-center gap-2">
        <p class="text-sm text-gray-600 font-medium">Follow us for event updates</p>
        <div class="flex gap-4">
          <a href="https://www.linkedin.com/company/foss4g2026/" 
             target="_blank" 
             rel="noopener noreferrer"
             class="btn btn-circle btn-outline btn-sm hover:btn-primary"
             title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} class="text-lg" />
          </a>
          <a href="https://t.me/foss4g" 
             target="_blank" 
             rel="noopener noreferrer"
             class="btn btn-circle btn-outline btn-sm hover:btn-primary"
             title="Telegram">
            <FontAwesomeIcon icon={faTelegram} class="text-lg" />
          </a>
        </div>
      </div>
    </div>
    
    <!-- Legal Links -->
    <div class="flex flex-wrap gap-4 mt-4 text-sm">
      <a href="/{locale}/tokushoho" class="link link-hover">特定商取引法に基づく表記</a>
    </div>
  </aside>
</footer>