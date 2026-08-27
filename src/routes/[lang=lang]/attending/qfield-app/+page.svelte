<script lang="ts">
  import { t, json, locale } from 'svelte-i18n'
  import Card from '$components/Card.svelte'

  const appLink = 'https://onelink.to/foss4g26'
  const appStoreUrl = 'https://apps.apple.com/app/qfield-for-qgis/id1531726814'
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=ch.opengis.qfield'

  $: features = $json('qfield_app.features') as unknown as { title: string; description: string }[]
  $: appStoreBadge =
    $locale === 'ja' ? '/images/qfield/appstore-badge-ja.svg' : '/images/qfield/appstore-badge-en.svg'
  $: googlePlayBadge =
    $locale === 'ja' ? '/images/qfield/googleplay-badge-ja.png' : '/images/qfield/googleplay-badge-en.png'
  // The Google Play badges ship with built-in clear space (a different amount per
  // locale), so scale them up until the visible badge matches the 40px App Store badge.
  $: googlePlayClass =
    $locale === 'ja' ? 'h-[52px] w-auto -my-[6px]' : 'h-[60px] w-auto -my-[10px]'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.qfield_app')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <!-- Banner -->
  <div class="relative w-full overflow-hidden rounded-2xl shadow-xl mb-12" style="background: linear-gradient(149.59deg, #C10609 4.86%, #F10606 104.98%);">
    <div class="absolute inset-0 opacity-15">
      <img src="/images/hero-background.webp" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 px-6 py-8 sm:px-10 lg:py-12">
      <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <!-- Title (subtitle only on large screens) -->
        <div class="flex-1 w-full text-center lg:text-left text-white">
          <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight" style="font-family: 'Archivo', sans-serif; letter-spacing: -0.02em;">
            {$t('qfield_app.hero.title')}
          </h1>
          <p class="hidden lg:block mt-4 text-lg xl:text-xl opacity-95">
            {$t('qfield_app.hero.subtitle')}
          </p>
        </div>

        <!-- App screenshot in a phone frame -->
        <div class="flex-shrink-0">
          <div class="rounded-[2rem] border-8 border-gray-900 shadow-2xl overflow-hidden bg-gray-900">
            <img
              src="/images/qfield/qfield_app.webp"
              alt={$t('qfield_app.hero.app_screenshot_alt')}
              class="block w-[160px] sm:w-[200px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- What is QField -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-4">{$t('qfield_app.about.title')}</h2>
    <p class="text-gray-700 mb-4">{$t('qfield_app.about.description')}</p>
    <p class="text-gray-700">{$t('qfield_app.about.conference_project')}</p>
  </section>

  <!-- Features -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-6">{$t('qfield_app.features_title')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each features as feature}
        <Card title={feature.title}>
          <p class="text-gray-700">{feature.description}</p>
        </Card>
      {/each}
    </div>
  </section>

  <!-- How to use -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-4">{$t('qfield_app.howto.title')}</h2>
    <div class="bg-gray-50 p-6 rounded-lg">
      <ol class="list-decimal list-outside ml-5 space-y-6 text-gray-700">
        <!-- Step 1: install QField -->
        <li>
          <p>{$t('qfield_app.howto.step1')}</p>
          <div class="mt-3 flex flex-wrap items-center gap-4">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" class="!no-underline">
              <img src={appStoreBadge} alt={$t('qfield_app.howto.badge_appstore_alt')} class="h-10 w-auto" />
            </a>
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" class="!no-underline">
              <img src={googlePlayBadge} alt={$t('qfield_app.howto.badge_googleplay_alt')} class={googlePlayClass} />
            </a>
          </div>
        </li>

        <!-- Step 2: open the conference project -->
        <li>
          <p>{$t('qfield_app.howto.step2')}</p>
          <div class="mt-3 inline-block bg-white rounded-2xl shadow-md p-4">
            <img
              src="/images/qfield/onelink_to_foss4g26.svg"
              alt={$t('qfield_app.howto.qr_alt')}
              class="w-40 h-40 sm:w-48 sm:h-48"
            />
            <p class="mt-3 text-center text-sm">
              <a href={appLink} target="_blank" rel="noopener noreferrer" class="link link-primary font-mono break-all">
                onelink.to/foss4g26
              </a>
            </p>
          </div>
        </li>

        <!-- Step 3: ready to go -->
        <li>
          <p>{$t('qfield_app.howto.step3')}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- Credit -->
  <section class="mb-8">
    <p class="text-gray-700">
      {$t('qfield_app.credit.text')}
      <a href="https://opengis.ch/" target="_blank" rel="noopener noreferrer" class="link link-primary">
        OPENGIS.ch
      </a>{$t('qfield_app.credit.suffix')}
    </p>
  </section>
</div>
