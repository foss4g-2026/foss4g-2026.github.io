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

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200/50 my-8">
  <!-- Conference Dates -->
  <div class="text-center mb-6">
    <h3 class="text-2xl font-bold text-slate-800 mb-2">{$t('teaser.period.label', { default: 'FOSS4G 2026 Hiroshima' })}</h3>
    <p class="text-lg text-slate-600 mb-3">{$t('teaser.period.date', { default: 'August 30 - September 5, 2026' })}</p>
    
    <!-- Detailed Schedule -->
    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <div class="bg-white/80 rounded-lg p-4 shadow-sm">
        <h4 class="font-semibold text-slate-800 mb-1">{$t('teaser.period.hands_on.label', { default: 'Hands-on' })}</h4>
        <p class="text-slate-600">{$t('teaser.period.hands_on.date', { default: 'Aug 30' })}</p>
      </div>
      <div class="bg-white/80 rounded-lg p-4 shadow-sm">
        <h4 class="font-semibold text-slate-800 mb-1">{$t('teaser.period.main.label', { default: 'Main Conference' })}</h4>
        <p class="text-slate-600">{$t('teaser.period.main.date', { default: 'Aug 31 - Sep 3' })}</p>
      </div>
      <div class="bg-white/80 rounded-lg p-4 shadow-sm">
        <h4 class="font-semibold text-slate-800 mb-1">{$t('teaser.period.sprints.label', { default: 'Code Sprints' })}</h4>
        <p class="text-slate-600">{$t('teaser.period.sprints.date', { default: 'Sep 4-5' })}</p>
      </div>
    </div>
  </div>

  <!-- Countdown Display -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <!-- Days -->
    <div class="bg-white/80 rounded-xl p-4 shadow-sm">
      <div class="text-3xl md:text-4xl font-bold text-blue-600">{days}</div>
      <div class="text-sm font-medium text-slate-600 uppercase tracking-wide">
        {$t('countdown.days', { default: 'Days' })}
      </div>
    </div>

    <!-- Hours -->
    <div class="bg-white/80 rounded-xl p-4 shadow-sm">
      <div class="text-3xl md:text-4xl font-bold text-blue-600">{hours}</div>
      <div class="text-sm font-medium text-slate-600 uppercase tracking-wide">
        {$t('countdown.hours', { default: 'Hours' })}
      </div>
    </div>

    <!-- Minutes -->
    <div class="bg-white/80 rounded-xl p-4 shadow-sm">
      <div class="text-3xl md:text-4xl font-bold text-blue-600">{minutes}</div>
      <div class="text-sm font-medium text-slate-600 uppercase tracking-wide">
        {$t('countdown.minutes', { default: 'Minutes' })}
      </div>
    </div>

    <!-- Seconds -->
    <div class="bg-white/80 rounded-xl p-4 shadow-sm">
      <div class="text-3xl md:text-4xl font-bold text-blue-600">{seconds}</div>
      <div class="text-sm font-medium text-slate-600 uppercase tracking-wide">
        {$t('countdown.seconds', { default: 'Seconds' })}
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="text-center mt-6">
    <p class="text-slate-600">
      {$t('countdown.message', { default: 'Join us for the world\'s largest geospatial conference!' })}
    </p>
  </div>
</div>
