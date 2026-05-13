<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { t } from 'svelte-i18n'

  // Conference start date: August 30, 2026
  const conferenceStartDate = new Date('2026-08-30T00:00:00+09:00')
  
  let days = 0
  let hours = 0
  let minutes = 0
  let seconds = 0
  let interval: NodeJS.Timeout

  function updateCountdown() {
    const now = new Date()
    const timeDiff = conferenceStartDate.getTime() - now.getTime()
    
    if (timeDiff > 0) {
      days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
    } else {
      days = hours = minutes = seconds = 0
    }
  }

  onMount(() => {
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
  })

  onDestroy(() => {
    if (interval) {
      clearInterval(interval)
    }
  })
</script>

<!-- Countdown Display -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <!-- Days -->
  <div class="bg-white rounded-2xl p-8 shadow-lg">
    <p class="text-7xl font-bold text-center mb-2" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{days}</p>
    <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">
      {$t('countdown.days', { default: 'Days' })}
    </p>
  </div>

  <!-- Hours -->
  <div class="bg-white rounded-2xl p-8 shadow-lg">
    <p class="text-7xl font-bold text-center mb-2" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{hours}</p>
    <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">
      {$t('countdown.hours', { default: 'Hours' })}
    </p>
  </div>

  <!-- Minutes -->
  <div class="bg-white rounded-2xl p-8 shadow-lg">
    <p class="text-7xl font-bold text-center mb-2" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{minutes}</p>
    <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">
      {$t('countdown.minutes', { default: 'Minutes' })}
    </p>
  </div>

  <!-- Seconds -->
  <div class="bg-white rounded-2xl p-8 shadow-lg">
    <p class="text-7xl font-bold text-center mb-2" style="font-family: 'Archivo', sans-serif; background: linear-gradient(149.59deg, #222222 4.86%, #535353 104.98%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{seconds}</p>
    <p class="text-xs text-gray-600 uppercase text-center" style="font-family: 'Inter', sans-serif;">
      {$t('countdown.seconds', { default: 'Seconds' })}
    </p>
  </div>
</div>
