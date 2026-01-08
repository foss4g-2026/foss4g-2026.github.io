<script lang="ts">
  const { imageSrc, altText, copyrightText } = $props()
</script>

<div class="relative w-full h-full overflow-hidden">
  <img src={imageSrc} alt={altText} class="absolute inset-0 w-full h-full object-cover" />
  <p class="absolute bottom-0 left-0 text-sm text-left text-white py-1 px-1 m-1 z-10">© {copyrightText}</p>
</div>