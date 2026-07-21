<script lang="ts">
  import { t } from 'svelte-i18n'
  import Card from '$components/Card.svelte'
  import MemberCard from '$components/MemberCard.svelte'
  import { steeringCommitteeMembers } from '$lib/data/steeringCommittee'
  import { locMembers } from '$lib/data/locMember'
  import { scientificCommitteeCochairs, scientificCommitteeMembers } from '$lib/data/scientificCommittee'
</script>

<svelte:head>
  <title>{$t('nav.about_sub.organizers')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.about_sub.organizers')}</h1>
  
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">{$t('about.organizer.conference_chairs.title')}</h2>
    <p class="text-gray-600 mb-6">{$t('about.organizer.conference_chairs.description')}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">{$t('about.organizer.steering_committee.title')}</h2>
    <p class="text-gray-600 mb-6">{$t('about.organizer.steering_committee.description')}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each steeringCommitteeMembers as member}
        <MemberCard {member} />
      {/each}
    </div>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">{$t('about.organizer.loc_members.title')}</h2>
    <p class="text-gray-600 mb-6">{$t('about.organizer.loc_members.description')}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each locMembers as member}
        <MemberCard {member} />
      {/each}
    </div>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">{$t('about.organizer.scientific_committee.title')}</h2>
    <p class="text-gray-600 mb-6">{$t('about.organizer.scientific_committee.description')}</p>
    <div>
      <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.scientific_committee.co-chair')}</h3>
      <div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 mb-6">
        <table class="table table-zebra [&_:where(th,td)]:border [&_:where(th,td)]:border-base-300">
          <thead>
            <tr class="bg-base-200">
              <th>{$t('about.organizer.scientific_committee.name')}</th>
              <th>{$t('about.organizer.scientific_committee.affiliation')}</th>
            </tr>
          </thead>
          <tbody>
            {#each scientificCommitteeCochairs as coChair}
              <tr>
                <td>{coChair.name}</td>
                <td>{coChair.affiliation}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <h3 class="text-lg font-semibold mb-2">{$t('about.organizer.scientific_committee.members')}</h3>
      <div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 mb-6">
        <table class="table table-zebra [&_:where(th,td)]:border [&_:where(th,td)]:border-base-300">
          <thead>
            <tr class="bg-base-200">
              <th>{$t('about.organizer.scientific_committee.name')}</th>
              <th>{$t('about.organizer.scientific_committee.affiliation')}</th>
            </tr>
          </thead>
          <tbody>
            {#each scientificCommitteeMembers as member}
              <tr>
                <td>{member.name}</td>
                <td>{member.affiliation}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
