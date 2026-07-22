<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import SubmitButton from '$components/SubmitButton.svelte'

  interface ScheduleItem {
    time: string
    content: string
  }

  $: schedule = $json('b2b_session.schedule') as unknown as ScheduleItem[]
  $: datetimeDetails = $json('b2b_session.datetime_details') as unknown as string[]
</script>

<svelte:head>
  <title>{$t('b2b_session.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-4">{$t('b2b_session.title')}</h1>

  <p class="text-lg font-semibold mb-8">{$t('b2b_session.date')}</p>

  <div class="prose max-w-none mb-8">
    <p class="text-base mb-4">{$t('b2b_session.intro')}</p>
    <p class="text-base mb-6">{$t('b2b_session.description')}</p>
    <p class="text-base mb-6">{$t('b2b_session.lunch_description')}</p>

    <!-- Overview -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('b2b_session.overview_title')}</h2>
    <ul class="list-none pl-0 mb-6 space-y-2">
      <li class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
        <span class="font-semibold min-w-24">{$t('b2b_session.datetime_title')}:</span>
        <span>
          {$t('b2b_session.datetime')}
          <ul class="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
            {#each datetimeDetails as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        </span>
      </li>
      <li class="flex items-start gap-2">
        <span class="font-semibold min-w-24">{$t('b2b_session.venue_title')}:</span>
        <span>{$t('b2b_session.venue')}</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="font-semibold min-w-24">{$t('b2b_session.ticket_title')}:</span>
        <span>
          {$t('b2b_session.ticket_price')}
          <span class="block text-sm text-gray-600 mt-1">{$t('b2b_session.ticket_note')}</span>
        </span>
      </li>
    </ul>

    <!-- Schedule -->
    <h2 class="text-2xl font-semibold mb-4 mt-8">{$t('b2b_session.schedule_title')}</h2>
    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse text-sm">
        <tbody>
          {#each schedule as item}
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="py-3 pr-6 font-mono font-semibold text-gray-700 whitespace-nowrap">{item.time}</td>
              <td class="py-3">{item.content}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <SubmitButton
    href={$t('b2b_session.register_url')}
    text={$t('b2b_session.register_button')}
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
</div>
