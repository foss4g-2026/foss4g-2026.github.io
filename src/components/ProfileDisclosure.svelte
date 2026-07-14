<script lang="ts">
  interface Props {
    label: string
    text: string
  }

  const { label, text }: Props = $props()
</script>

<details class="w-full text-left mt-1">
  <summary class="cursor-pointer text-sm font-medium text-primary hover:text-primary-focus select-none list-none flex items-center justify-center gap-1">
    <span>{label}</span>
    <svg class="w-4 h-4 transition-transform details-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </summary>
  <p class="mt-2 text-sm text-gray-700 leading-relaxed bg-base-200 rounded-lg p-3">
    {text}
  </p>
</details>

<style>
  details[open] .details-arrow {
    transform: rotate(180deg);
  }
</style>
