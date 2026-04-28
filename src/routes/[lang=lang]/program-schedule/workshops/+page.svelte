<script lang="ts">
  import { t } from 'svelte-i18n'
  import { page } from '$app/state'
  import { onMount } from 'svelte'

  let widgetContainer: HTMLDivElement

  onMount(() => {
    const locale = page.params.lang === 'ja' ? 'ja' : 'en'
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://talks.osgeo.org/foss4g-2026-workshop/schedule/widget/v2.${locale}.js`
    script.async = true
    script.onload = () => {
      const widget = document.createElement('pretalx-schedule')
      widget.setAttribute('event-url', 'https://talks.osgeo.org/foss4g-2026-workshop/')
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
  <title>{$t('nav.program_sub.workshops')} - {$t('title')}</title>
</svelte:head>

<div class="py-4">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.program_sub.workshops')}</h1>

  <div class="prose max-w-none mb-8">
    <p class="text-lg">{$t('workshops.schedule_description')}</p>
    <p class="text-base text-gray-700">{$t('workshops.schedule_note_timetable')}</p>
    <ul class="list-disc pl-6 text-sm text-gray-600">
      <li>{$t('workshops.schedule_note_sponsored')}</li>
      <li>{$t('workshops.schedule_note_unconfirmed')}</li>
    </ul>
  </div>

  <div bind:this={widgetContainer} class="w-full overflow-auto border rounded-lg" style="max-height: 70vh;"></div>
</div>

<style>
  :global(pretalx-schedule) {
    --pretalx-clr-primary: #3b82f6;
  }
</style>
