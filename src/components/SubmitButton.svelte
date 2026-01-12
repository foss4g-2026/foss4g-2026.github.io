<script lang="ts">
  import { t } from 'svelte-i18n'
  
  export let href: string = '#';
  export let text: string = 'Submit a proposal';
  
  let isHovered = false;
</script>

<div class="text-center mb-8">
  <a 
    {href}
    class="btn btn-lg inline-flex items-center gap-3 mx-auto bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 no-underline"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
  >
    <img 
      src={isHovered ? "/images/logo-16.svg" : "/images/logo-04.svg"} 
      alt="FOSS4G 2026 Logo" 
      class="w-8 h-8 object-contain transition-all duration-200"
    >
    <span>{text}</span>
  </a>
</div>
