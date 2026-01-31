<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.cancellation')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.cancellation')}</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-8">
      {$t('register.cancellation.intro')}
    </p>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.refund_schedule.title')}</h2>
    <div class="mb-8">
      <p class="mb-4">{$t('register.cancellation.refund_schedule.policy_summary')}</p>
      
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              {#each $t('register.cancellation.refund_schedule.headers') as header}
                <th class="bg-gray-100">{header}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each $t('register.cancellation.refund_schedule.rows') as row}
              <tr>
                {#each row as cell}
                  <td>{cell}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.cancellation_process.title')}</h2>
    <div class="mb-6">
      <ol class="list-decimal list-inside space-y-2">
        {#each $t('register.cancellation.cancellation_process.steps') as step}
          <li>{step}</li>
        {/each}
      </ol>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.contact_information.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <p class="mb-2">{$t('register.cancellation.contact_information.description')}</p>
      <p class="font-semibold">registration[at]foss4g.org</p>
    </div>

    <h2 class="text-2xl font-semibold mb-4">{$t('register.cancellation.force_majeure_note.title')}</h2>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <p class="text-gray-700">{$t('register.cancellation.force_majeure_note.content')}</p>
    </div>
  </div>
</div>
