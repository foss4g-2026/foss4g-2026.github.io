<script lang="ts">
  import { t, json } from 'svelte-i18n'

  interface RunningItem {
    text: string
    subitems?: string[]
  }

  $: before = $json('call_for_papers.session_chair.before.items') as unknown as string[]
  $: running = $json('call_for_papers.session_chair.running.items') as unknown as RunningItem[]
  $: issues = $json('call_for_papers.session_chair.issues.items') as unknown as string[]
  $: after = $json('call_for_papers.session_chair.after.items') as unknown as string[]
</script>

<svelte:head>
  <title>{$t('nav.cfp_sub.session_chair_guidelines')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-6">{$t('call_for_papers.session_chair.title')}</h1>

  <div class="prose max-w-none">
    <p class="mb-4">{$t('call_for_papers.session_chair.intro')}</p>
    <p class="mb-6">{$t('call_for_papers.session_chair.intro_note')}</p>

    <!-- Before the Session -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('call_for_papers.session_chair.before.title')}</h2>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      {#each before as item}
        <li>{@html item}</li>
      {/each}
    </ul>

    <!-- Running the Session -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('call_for_papers.session_chair.running.title')}</h2>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      {#each running as item}
        <li>
          {@html item.text}
          {#if item.subitems}
            <ul class="list-disc pl-6 mt-2 space-y-1">
              {#each item.subitems as sub}
                <li>{@html sub}</li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>

    <!-- Handling Issues -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('call_for_papers.session_chair.issues.title')}</h2>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      {#each issues as item}
        <li>{@html item}</li>
      {/each}
    </ul>

    <!-- After the Session -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('call_for_papers.session_chair.after.title')}</h2>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      {#each after as item}
        <li>{@html item}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <p class="text-base">{$t('call_for_papers.session_chair.footer')}</p>
  </div>
</div>
