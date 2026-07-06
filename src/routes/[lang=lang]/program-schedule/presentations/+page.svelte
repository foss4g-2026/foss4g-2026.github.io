<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/state'
  import { onMount } from 'svelte'

  let widgetContainer: HTMLDivElement

  onMount(() => {
    const locale = page.params.lang === 'ja' ? 'ja' : 'en'
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://talks.osgeo.org/foss4g-2026/schedule/widget/v2.${locale}.js`
    script.async = true
    script.onload = () => {
      const widget = document.createElement('pretalx-schedule')
      widget.setAttribute('event-url', 'https://talks.osgeo.org/foss4g-2026/')
      widget.setAttribute('locale', locale)
      widgetContainer.appendChild(widget)
    }
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  })
</script>

<svelte:head>
  <title>{$t('nav.program_sub.presentations')} - {$t('title')}</title>
</svelte:head>

<div class="py-4">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.presentations')}</h1>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
    <p class="text-yellow-800 mb-2">{$t('presentations.confirmed_note')}</p>
    <p class="text-yellow-800">
      <a 
        href="https://talks.osgeo.org/foss4g-2026/schedule/" 
        target="_blank"
        rel="noopener noreferrer"
        class="underline hover:text-yellow-900 font-medium inline-flex items-center gap-1"
      >
        Open in Pretalx (full page)
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </p>
  </div>

  <div bind:this={widgetContainer} class="w-full overflow-auto border rounded-lg" style="max-height: 70vh;"></div>

</div>
