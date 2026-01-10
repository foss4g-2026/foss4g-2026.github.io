<script lang="ts">
  import Link from '$components/Link.svelte'
  
  const { 
    href, 
    enabled = true, 
    children, 
    class: className = '' 
  } = $props<{ 
    href: string
    enabled?: boolean
    children: any
    class?: string 
  }>()
</script>

{#if enabled}
  <Link {href} class={className}>
    {@render children()}
  </Link>
{:else}
  <span class="text-gray-400 cursor-not-allowed {className}" title="Coming Soon">
    {@render children()}
  </span>
{/if}
