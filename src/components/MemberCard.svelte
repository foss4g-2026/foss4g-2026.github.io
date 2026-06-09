<script lang="ts">
  import { t } from 'svelte-i18n'
  import type { SteeringMember } from '$lib/data/steeringCommittee'

  interface Props {
    member: SteeringMember
  }

  const { member }: Props = $props()

  const photoSrc = $derived(`/images/members/${member.photo}`)

  function handleImgError(e: Event) {
    const img = e.target as HTMLImageElement
    img.src = '/images/members/placeholder.png'
    img.onerror = null
  }
</script>

<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
  <div class="card-body items-center text-center pt-8 pb-6 flex flex-col gap-3">

    <!-- Photo -->
    <div class="avatar mb-1">
      <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img
          src={photoSrc}
          alt={member.name}
          onerror={handleImgError}
          class="object-cover"
        />
      </div>
    </div>

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

    <!-- Profile (collapsible) -->
    <details class="w-full text-left mt-1">
      <summary class="cursor-pointer text-sm font-medium text-primary hover:text-primary-focus select-none list-none flex items-center justify-center gap-1">
        <span>{$t('about.organizer.steering_committee.profile_label')}</span>
        <svg class="w-4 h-4 transition-transform details-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </summary>
      <p class="mt-2 text-sm text-gray-700 leading-relaxed bg-base-200 rounded-lg p-3">
        {member.profile}
      </p>
    </details>

  </div>
</div>

<style>
  details[open] .details-arrow {
    transform: rotate(180deg);
  }
</style>
