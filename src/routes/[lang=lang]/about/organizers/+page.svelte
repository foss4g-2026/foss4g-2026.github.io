<script lang="ts">
  import { t } from 'svelte-i18n'
  import Card from '$components/Card.svelte'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.organizers')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.organizers')}</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
    <!-- Organizer 1 -->
    <Card title={$t('about.organizer.roles.representative')} class="text-center" centerTitle={true}>
      <div class="flex justify-center mb-4">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/images/organizers/NobusukeIwasaki.webp" alt={$t('about.organizer.organizers.iwasaki.name')} class="rounded-full" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.organizers.iwasaki.name')}</h3>
        <p class="text-gray-700 text-sm">{$t('about.organizer.organizers.iwasaki.organization')}</p>
      </div>
    </Card>

    <!-- Organizer 2 -->
    <Card title={$t('about.organizer.roles.director')} class="text-center" centerTitle={true}>
      <div class="flex justify-center mb-4">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/images/organizers/KenyaTamura.webp" alt={$t('about.organizer.organizers.tamura.name')} class="rounded-full" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.organizers.tamura.name')}</h3>
        <p class="text-gray-700 text-sm">{$t('about.organizer.organizers.tamura.organization')}</p>
      </div>
    </Card>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('about.organizer.organizing_committee.title')}</h2>
    <p class="mb-4">
      {$t('about.organizer.organizing_committee.description_1')}
    </p>
    
    <p class="mb-4">
      {$t('about.organizer.organizing_committee.description_2')}
    </p>
  </div>
</div>
