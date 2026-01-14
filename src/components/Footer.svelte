<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/stores'
  
  $: locale = $page.params.lang || 'ja'
</script>

<footer class="footer footer-horizontal footer-center bg-base-200 p-10">
  <aside>
    <p class="font-bold text-xl">{$t('title')}</p>
    <p>Copyright © 2026 FOSS4G 2026 Hiroshima LOC</p>
    
    <!-- Legal Links -->
    <div class="flex flex-wrap gap-4 mt-4 text-sm">
      <a href="/{locale}/tokushoho" class="link link-hover">商取引に関する開示</a>
    </div>
  </aside>
</footer>