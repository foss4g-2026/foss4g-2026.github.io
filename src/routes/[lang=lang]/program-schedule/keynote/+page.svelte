<script lang="ts">
  import { t } from 'svelte-i18n'
  import { resolveKeynoteSessions, type ResolvedSession } from '$lib/keynote'
  import KeynoteSpeakerCard from '$components/KeynoteSpeakerCard.svelte'

  let { data } = $props()

  let sessions = $state<ResolvedSession[]>(data.sessions)
  let loadError = $state(data.hadError)

  $effect(() => {
    resolveKeynoteSessions()
      .then((result) => {
        sessions = result.sessions
        loadError = result.hadError
      })
      .catch(() => {
        loadError = true
      })
  })
</script>

<svelte:head>
  <title>{$t('nav.program_sub.keynote')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">{$t('nav.program_sub.keynote')}</h1>

  <p class="text-sm text-gray-500 mb-8">{$t('keynote.disclaimer')}</p>

  {#if loadError}
    <p class="text-sm text-red-500 mb-6">{$t('keynote.load_error')}</p>
  {/if}

  <div class="space-y-12">
    {#each sessions as session (session.id)}
      <section class="border border-gray-200 rounded-lg p-6">
        <p class="text-sm font-semibold text-primary mb-1">{session.dayLabel}</p>
        <h2 class="text-2xl font-bold mb-1">{session.title}</h2>
        <p class="text-sm text-gray-600 mb-4">
          {session.date} / {session.room}
          ·
          <a href={session.pretalxUrl} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            Pretalx
          </a>
        </p>

        {#if session.speakers.length > 0}
          <p class="text-sm font-semibold text-gray-700 mb-2">{$t('keynote.speakers_label')}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {#each session.speakers as speaker (speaker.code)}
              <KeynoteSpeakerCard name={speaker.name} biography={speaker.biography} avatarUrl={speaker.avatarUrl} />
            {/each}
          </div>
        {/if}

        {#if session.moderators.length > 0}
          <p class="text-sm text-gray-600">
            <span class="font-semibold">{$t('keynote.moderator_label')}:</span>
            {session.moderators.join(', ')}
          </p>
        {/if}

        {#if session.coordinators.length > 0}
          <p class="text-sm text-gray-600">
            <span class="font-semibold">{$t('keynote.coordinator_label')}:</span>
            {session.coordinators.join(', ')}
          </p>
        {/if}
      </section>
    {/each}

    {#if sessions.length === 0}
      <p class="text-gray-500">{$t('keynote.day_tba_message')}</p>
    {/if}
  </div>
</div>
