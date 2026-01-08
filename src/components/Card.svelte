<script lang="ts">
  interface Props {
    title?: string
    children: any
    class?: string
    centerTitle?: boolean
  }
  
  const { title, children, class: className = '', centerTitle = false }: Props = $props()
</script>

<div class="card bg-base-100 shadow-xl {className}">
  <div class="card-body">
    {#if title}
      <h2 class="card-title {centerTitle ? 'justify-center' : ''}">{title}</h2>
    {/if}
    {@render children()}
  </div>
</div>
