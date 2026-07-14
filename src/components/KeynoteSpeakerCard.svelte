<script lang="ts">
  import { t } from 'svelte-i18n'
  import Avatar from '$components/Avatar.svelte'
  import ProfileDisclosure from '$components/ProfileDisclosure.svelte'

  interface Props {
    name: string
    biography: string
    avatarUrl?: string
  }

  const { name, biography, avatarUrl }: Props = $props()
</script>

<div class="card bg-base-100 shadow-md flex flex-col">
  <div class="card-body items-center text-center py-6 gap-2">
    <Avatar src={avatarUrl ?? ''} alt={name} fallback="/images/keynote/placeholder.svg" size="w-20" />

    <h3 class="text-base font-bold leading-tight">{name}</h3>

    {#if biography}
      <ProfileDisclosure label={$t('keynote.profile_label')} text={biography} />
    {/if}
  </div>
</div>
