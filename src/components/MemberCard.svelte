<script lang="ts">
  import { t } from 'svelte-i18n'
  import type { SteeringMember } from '$lib/data/steeringCommittee'
  import Avatar from '$components/Avatar.svelte'
  import ProfileDisclosure from '$components/ProfileDisclosure.svelte'

  interface Props {
    member: SteeringMember
  }

  const { member }: Props = $props()
</script>

<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
  <div class="card-body items-center text-center pt-8 pb-6 flex flex-col gap-3">

    <Avatar
      src={`/images/members/${member.photo}`}
      alt={member.name}
      fallback="/images/members/placeholder.png"
      size="w-24"
    />

    <!-- Name -->
    <div>
      <h3 class="text-lg font-bold leading-tight">{member.name}</h3>
      <p class="text-sm text-gray-500">{member.nameJa}</p>
    </div>

    <!-- Committee badges -->
    <div class="flex flex-wrap justify-center gap-1">
      {#each member.committees as committee}
        <span class="badge badge-outline badge-sm text-xs">{committee}</span>
      {/each}
    </div>

    <!-- Affiliation -->
    <p class="text-sm text-gray-600 italic">{member.affiliation}</p>

    <ProfileDisclosure label={$t('about.organizer.steering_committee.profile_label')} text={member.profile} />

  </div>
</div>
