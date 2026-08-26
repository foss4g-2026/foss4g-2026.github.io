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

    {#if member.linkedin}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline mt-1"
        aria-label="LinkedIn profile of {member.name}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.864-3.059-1.865 0-2.151 1.456-2.151 2.961v5.702h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/>
        </svg>
        LinkedIn
      </a>
    {/if}

  </div>
</div>
