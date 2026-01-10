<script lang="ts">
  import { page } from '$app/state'
  import { t } from 'svelte-i18n'
  import Link from '$components/Link.svelte'
  import NavLink from '$components/NavLink.svelte'
  import { isNavEnabled } from '$lib/config/navigation'
  const { data } = $props<{ data: { locale: 'en' | 'ja' } }>()

  function getRestPath(pathname: string): string {
    const m = pathname.match(/^\/(en|ja)(\/.*)?$/)
    return m?.[2] ?? ''
  }

  const _initRest = getRestPath(page.url.pathname)
  let restPath = $state(_initRest)
  let currentLanguage = $state('')

  // Dropdown states for mobile menu
  let mobileAboutOpen = $state(false)
  let mobileRegisterOpen = $state(false)
  let mobileCfpOpen = $state(false)
  let mobileProgramOpen = $state(false)
  let mobileAttendingOpen = $state(false)
  let mobileLanguageOpen = $state(false)

  // Dropdown states for desktop menu
  let desktopAboutOpen = $state(false)
  let desktopRegisterOpen = $state(false)
  let desktopCfpOpen = $state(false)
  let desktopProgramOpen = $state(false)
  let desktopAttendingOpen = $state(false)
  let desktopLanguageOpen = $state(false)

  // Function to close all dropdowns
  function closeAllDropdowns() {
    // Mobile dropdowns
    mobileAboutOpen = false
    mobileRegisterOpen = false
    mobileCfpOpen = false
    mobileProgramOpen = false
    mobileAttendingOpen = false
    mobileLanguageOpen = false
    
    // Desktop dropdowns
    desktopAboutOpen = false
    desktopRegisterOpen = false
    desktopCfpOpen = false
    desktopProgramOpen = false
    desktopAttendingOpen = false
    desktopLanguageOpen = false
  }

  $effect(() => {
    currentLanguage = $t('nav.languages.current_language')
  })

  $effect(() => {
    // Track page.url and update a plain string state (no $derived)
    const newRestPath = getRestPath(page.url.pathname)
    if (newRestPath !== restPath) {
      restPath = newRestPath
      // Close all dropdowns when page changes
      closeAllDropdowns()
    }
  })
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
        </svg>
      </div>
      <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow">
        <!-- Mobile Menu Items -->
        <li>
          <details bind:open={mobileAboutOpen}>
            <summary>{$t('nav.about')}</summary>
            <ul class="p-2">
              <li><NavLink href={'/' + data.locale + '/about/foss4g'} enabled={isNavEnabled('about', 'foss4g')}>{$t('nav.about_sub.foss4g')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/map'} enabled={isNavEnabled('about', 'map')}>{$t('nav.about_sub.map')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/organizers'} enabled={isNavEnabled('about', 'organizers')}>{$t('nav.about_sub.organizers')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/concept'} enabled={isNavEnabled('about', 'concept')}>{$t('nav.about_sub.concept')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/code-of-conduct'} enabled={isNavEnabled('about', 'codeOfConduct')}>{$t('nav.about_sub.code_of_conduct')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/privacy-policy'} enabled={isNavEnabled('about', 'privacyPolicy')}>{$t('nav.about_sub.privacy_policy')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/terms-conditions'} enabled={isNavEnabled('about', 'termsConditions')}>{$t('nav.about_sub.terms_conditions')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/about/sponsors'} enabled={isNavEnabled('about', 'sponsors')}>{$t('nav.about_sub.sponsors')}</NavLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details bind:open={mobileRegisterOpen}>
            <summary>{$t('nav.register')}</summary>
            <ul class="p-2">
              <li><NavLink href={'/' + data.locale + '/register/registration'} enabled={isNavEnabled('register', 'registration')}>{$t('nav.register_sub.registration')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/register/studentship'} enabled={isNavEnabled('register', 'studentship')}>{$t('nav.register_sub.studentship')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/register/travel-grant'} enabled={isNavEnabled('register', 'travelGrant')}>{$t('nav.register_sub.travel_grant')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/register/adopt-a-ticket'} enabled={isNavEnabled('register', 'adoptATicket')}>{$t('nav.register_sub.adopt_a_ticket')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/register/volunteering'} enabled={isNavEnabled('register', 'volunteering')}>{$t('nav.register_sub.volunteering')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/register/cancellation'} enabled={isNavEnabled('register', 'cancellation')}>{$t('nav.register_sub.cancellation')}</NavLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details bind:open={mobileCfpOpen}>
            <summary>{$t('nav.call_for_papers')}</summary>
            <ul class="p-2">
              <li><NavLink href={'/' + data.locale + '/call-for-papers/general-sessions'} enabled={isNavEnabled('cfp', 'generalSessions')}>{$t('nav.cfp_sub.general_sessions')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/call-for-papers/academic-track'} enabled={isNavEnabled('cfp', 'academicTrack')}>{$t('nav.cfp_sub.academic_track')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/call-for-papers/workshops'} enabled={isNavEnabled('cfp', 'workshops')}>{$t('nav.cfp_sub.workshops')}</NavLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details bind:open={mobileProgramOpen}>
            <summary>{$t('nav.program_schedule')}</summary>
            <ul class="p-2">
              <li><NavLink href={'/' + data.locale + '/program-schedule/outline'} enabled={isNavEnabled('program', 'outline')}>{$t('nav.program_sub.outline')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/program-schedule/keynote'} enabled={isNavEnabled('program', 'keynote')}>{$t('nav.program_sub.keynote')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/program-schedule/presentations'} enabled={isNavEnabled('program', 'presentations')}>{$t('nav.program_sub.presentations')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/program-schedule/workshops'} enabled={isNavEnabled('program', 'workshops')}>{$t('nav.program_sub.workshops')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/program-schedule/events'} enabled={isNavEnabled('program', 'events')}>{$t('nav.program_sub.events')}</NavLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details bind:open={mobileAttendingOpen}>
            <summary>{$t('nav.attending')}</summary>
            <ul class="p-2">
              <li><NavLink href={'/' + data.locale + '/attending/venue'} enabled={isNavEnabled('attending', 'venue')}>{$t('nav.attending_sub.venue')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/attending/transport'} enabled={isNavEnabled('attending', 'transport')}>{$t('nav.attending_sub.transport')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/attending/travel-guide'} enabled={isNavEnabled('attending', 'travelGuide')}>{$t('nav.attending_sub.travel_guide')}</NavLink></li>
              <li><NavLink href={'/' + data.locale + '/attending/accommodation'} enabled={isNavEnabled('attending', 'accommodation')}>{$t('nav.attending_sub.accommodation')}</NavLink></li>
            </ul>
          </details>
        </li>
        <li><Link href={'/' + data.locale + '/contact'}>{$t('nav.contact')}</Link></li>
        <!-- Language Switcher for Mobile -->
        <li>
          <details bind:open={mobileLanguageOpen}>
            <summary>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" class="iconLanguage_DSK9"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>
              {currentLanguage}
            </summary>
            <ul class="p-2">
              <li><Link href={'/en' + restPath}>{$t('nav.languages.english')}</Link></li>
              <li><Link href={'/ja' + restPath}>{$t('nav.languages.japanese')}</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <Link class="btn btn-ghost" href={'/' + data.locale}>
      <img src="/images/logo_text.webp" alt="FOSS4G 2026 Hiroshima" class="h-8" />
    </Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <!-- About Dropdown -->
      <li>
        <details bind:open={desktopAboutOpen}>
          <summary>{$t('nav.about')}</summary>
          <ul class="bg-base-100 rounded-t-none p-2 w-52">
            <li><NavLink href={'/' + data.locale + '/about/foss4g'} enabled={isNavEnabled('about', 'foss4g')}>{$t('nav.about_sub.foss4g')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/map'} enabled={isNavEnabled('about', 'map')}>{$t('nav.about_sub.map')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/organizers'} enabled={isNavEnabled('about', 'organizers')}>{$t('nav.about_sub.organizers')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/concept'} enabled={isNavEnabled('about', 'concept')}>{$t('nav.about_sub.concept')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/code-of-conduct'} enabled={isNavEnabled('about', 'codeOfConduct')}>{$t('nav.about_sub.code_of_conduct')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/privacy-policy'} enabled={isNavEnabled('about', 'privacyPolicy')}>{$t('nav.about_sub.privacy_policy')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/terms-conditions'} enabled={isNavEnabled('about', 'termsConditions')}>{$t('nav.about_sub.terms_conditions')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/about/sponsors'} enabled={isNavEnabled('about', 'sponsors')}>{$t('nav.about_sub.sponsors')}</NavLink></li>
          </ul>
        </details>
      </li>
      
      <!-- Register Dropdown -->
      <li>
        <details bind:open={desktopRegisterOpen}>
          <summary>{$t('nav.register')}</summary>
          <ul class="bg-base-100 rounded-t-none p-2 w-52">
            <li><NavLink href={'/' + data.locale + '/register/registration'} enabled={isNavEnabled('register', 'registration')}>{$t('nav.register_sub.registration')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/register/studentship'} enabled={isNavEnabled('register', 'studentship')}>{$t('nav.register_sub.studentship')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/register/travel-grant'} enabled={isNavEnabled('register', 'travelGrant')}>{$t('nav.register_sub.travel_grant')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/register/adopt-a-ticket'} enabled={isNavEnabled('register', 'adoptATicket')}>{$t('nav.register_sub.adopt_a_ticket')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/register/volunteering'} enabled={isNavEnabled('register', 'volunteering')}>{$t('nav.register_sub.volunteering')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/register/cancellation'} enabled={isNavEnabled('register', 'cancellation')}>{$t('nav.register_sub.cancellation')}</NavLink></li>
          </ul>
        </details>
      </li>
      
      <!-- Call for Papers Dropdown -->
      <li>
        <details bind:open={desktopCfpOpen}>
          <summary>{$t('nav.call_for_papers')}</summary>
          <ul class="bg-base-100 rounded-t-none p-2 w-52">
            <li><NavLink href={'/' + data.locale + '/call-for-papers/general-sessions'} enabled={isNavEnabled('cfp', 'generalSessions')}>{$t('nav.cfp_sub.general_sessions')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/call-for-papers/academic-track'} enabled={isNavEnabled('cfp', 'academicTrack')}>{$t('nav.cfp_sub.academic_track')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/call-for-papers/workshops'} enabled={isNavEnabled('cfp', 'workshops')}>{$t('nav.cfp_sub.workshops')}</NavLink></li>
          </ul>
        </details>
      </li>
      
      <!-- Program Schedule Dropdown -->
      <li>
        <details bind:open={desktopProgramOpen}>
          <summary>{$t('nav.program_schedule')}</summary>
          <ul class="bg-base-100 rounded-t-none p-2 w-52">
            <li><NavLink href={'/' + data.locale + '/program-schedule/outline'} enabled={isNavEnabled('program', 'outline')}>{$t('nav.program_sub.outline')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/program-schedule/keynote'} enabled={isNavEnabled('program', 'keynote')}>{$t('nav.program_sub.keynote')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/program-schedule/presentations'} enabled={isNavEnabled('program', 'presentations')}>{$t('nav.program_sub.presentations')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/program-schedule/workshops'} enabled={isNavEnabled('program', 'workshops')}>{$t('nav.program_sub.workshops')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/program-schedule/events'} enabled={isNavEnabled('program', 'events')}>{$t('nav.program_sub.events')}</NavLink></li>
          </ul>
        </details>
      </li>
      
      <!-- Attending Dropdown -->
      <li>
        <details bind:open={desktopAttendingOpen}>
          <summary>{$t('nav.attending')}</summary>
          <ul class="bg-base-100 rounded-t-none p-2 w-52">
            <li><NavLink href={'/' + data.locale + '/attending/venue'} enabled={isNavEnabled('attending', 'venue')}>{$t('nav.attending_sub.venue')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/attending/transport'} enabled={isNavEnabled('attending', 'transport')}>{$t('nav.attending_sub.transport')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/attending/travel-guide'} enabled={isNavEnabled('attending', 'travelGuide')}>{$t('nav.attending_sub.travel_guide')}</NavLink></li>
            <li><NavLink href={'/' + data.locale + '/attending/accommodation'} enabled={isNavEnabled('attending', 'accommodation')}>{$t('nav.attending_sub.accommodation')}</NavLink></li>
          </ul>
        </details>
      </li>
      
      <!-- Contact (single page) -->
      <li><Link href={'/' + data.locale + '/contact'}>{$t('nav.contact')}</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <!-- Language Switcher for Desktop -->
    <div class="dropdown dropdown-end hidden lg:block">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" class="iconLanguage_DSK9"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>
        {currentLanguage}
      </div>
      <ul class="menu dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-32 p-2 shadow">
        <li><Link href={'/en' + restPath}>{$t('nav.languages.english')}</Link></li>
        <li><Link href={'/ja' + restPath}>{$t('nav.languages.japanese')}</Link></li>
      </ul>
    </div>
  </div>
</div>