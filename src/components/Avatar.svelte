<script lang="ts">
  interface Props {
    src: string
    alt: string
    fallback: string
    size?: string
  }

  const { src, alt, fallback, size = 'w-24' }: Props = $props()

  let broken = $state(false)

  $effect(() => {
    void src
    broken = false
  })

  const displaySrc = $derived(broken || !src ? fallback : src)

  function handleError() {
    broken = true
  }
</script>

<div class="avatar mb-1">
  <div class="{size} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={displaySrc} {alt} onerror={handleError} class="object-cover" />
  </div>
</div>
