<script lang="ts">
  import { t } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.travel_grant')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">FOSS4G 2026 Travel Grant Programme</h1>
  
  <p class="mb-6">OSGeo provides a Travel Grant Program (TGP) to facilitate accessibility and diversity at the global FOSS4G 2026 Conference, which will happen in Hiroshima, Japan, 30 August - 5 September 2026.</p>
  
  <p class="mb-8">The TGP is administered by the Conference Committee and supported by members of the Hiroshima LOC (HLOC). Applications will be accepted until 28 February 2026.</p>
  
  <!-- Apply Button -->
  <div class="text-center mb-8">
    <!-- Submit Button with Logo -->
    <SubmitButton 
      href="https://docs.google.com/forms/d/1y-FwIef6XShILx75QOv0JmTlptw41Y8w0KgTlzuUYKI/"
      text="Apply for TGP"
      disabled={false}
    />
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">Important dates</h2>
    
    <Table 
      headers={['', '']}
      rows={[
        ['TGP application period', '1 February 2026 - 28 February 2026'],
        ['Evaluation', '1 April - 14 April 2026'],
        ['Contact grant receivers', '15 April 2026'],
        ['Conference', '30 August - 5 September 2026']
      ]}
      class="mb-8"
    />

    <h2 class="text-2xl font-semibold mb-4">Travel Grants</h2>
    
    <p class="mb-4">The Travel Grant will include a full conference ticket (including 2 workshop tracks and gala dinner) and a lump-sum contribution towards travel, accommodation or other expenses.</p>
    
    <p class="mb-4">There will be 3 different sizes of travel grants available:</p>
    
    <ol class="list-decimal pl-6 mb-6">
      <li class="mb-2">Applicants from <a href="https://en.wikipedia.org/wiki/East_Asia" class="text-primary hover:underline">East Asia</a> including from Japan, South Korea, North Korea, China, Taiwan and Mongolia: 200USD</li>
      <li class="mb-2">Applicants from <a href="https://en.wikipedia.org/wiki/Southeast_Asia" class="text-primary hover:underline">Southeast Asia</a>, <a href="https://en.wikipedia.org/wiki/South_Asia" class="text-primary hover:underline">South Asia</a> and <a href="https://en.wikipedia.org/wiki/Oceania" class="text-primary hover:underline">Oceania</a> (not including countries from point 1): 500 USD</li>
      <li class="mb-2">Applicants from other countries (not including countries from point 1 and 2): 1000 USD (TBC)</li>
    </ol>
    
    <p class="mb-4">The size and number of grants may be adjusted at the discretion of the Conference Committee, depending upon the level of funding raised and the number of applications received. Applicants will only be able to apply for one size of travel grant and are encouraged to apply for the smallest grant that will enable them to attend FOSS4G 2026.</p>
    
    <p class="mb-4">Any person applying for more than one grant will be excluded from the application process.</p>
    
    <p class="mb-8">In addition, everyone receiving a travel grant is expected to do volunteer work for at least 12 hours during the conference. This is a way to strengthen the OSGeo community and will help to create a better conference experience for everyone.</p>

    <h2 class="text-2xl font-semibold mb-4">Criteria</h2>
    
    <p class="mb-4">In order to guarantee a transparent and fair allocation of funds, the travel grant programme uses a points system for ranking applications. Points are awarded if applicants match specific criteria. After the application phase is over, all applicants are ranked by points, and the applicants with the most points will receive funding.</p>
    
    <p class="mb-6">Please note that the purpose of the travel grant programme is to enhance diversity at the conference. We might reserve a few programme spots for people with unique and outstanding applications. However, the majority of programme spots will solely be determined by the point ranking.</p>
    
    <p class="mb-4">Applicants receive points for the following criteria:</p>

    <h3 class="text-xl font-semibold mb-3">Nationality</h3>
    
    <p class="mb-4">The allocation of points is based on the World Bank country rating by income (<a href="https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html" class="text-primary hover:underline">https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html</a>).</p>
    
    <ul class="list-disc pl-6 mb-6">
      <li>Applicants from Low-income economies receive 1.5 points.</li>
      <li>Applicants from Lower-middle-income economies receive 1 point.</li>
      <li>Applicants from Upper-middle-income economies receive 0.5 point.</li>
      <li>Applicants from High-income economies receive 0 point.</li>
    </ul>

    <h3 class="text-xl font-semibold mb-3">Residence</h3>
    
    <p class="mb-4">The allocation of points is based on the World Bank country rating by income (<a href="https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html" class="text-primary hover:underline">https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html</a>).</p>
    
    <ul class="list-disc pl-6 mb-6">
      <li>Applicants who are currently living in Low-income economies receive 1.5 points.</li>
      <li>Applicants who are currently living in Lower-middle-income economies receive 1 point.</li>
      <li>Applicants who are currently living in Upper-middle-income economies receive 0.5 point.</li>
      <li>Applicants who are currently living in High-income economies receive 0 point.</li>
    </ul>

    <h3 class="text-xl font-semibold mb-3">Refugee or Displaced person</h3>
    
    <p class="mb-6">If a person is considered as a refugee or a displaced person will receive 1 point.</p>

    <h3 class="text-xl font-semibold mb-3">Gender and Minorities</h3>
    
    <p class="mb-6">In order to create a more diverse community, women and applicants from other under-represented groups will receive 1 point.</p>

    <h3 class="text-xl font-semibold mb-3">Students</h3>
    
    <p class="mb-6">Students in general receive 1 point. Phd students are considered as students.</p>

    <h3 class="text-xl font-semibold mb-3">Submitted and Accepted Talks</h3>
    
    <p class="mb-4">The HLOC values applicants who are willing to contribute to the success of the FOSS4G. Therefore we award points for people who are willing to present at the conference. Only one presenting author will be eligible to receive points.</p>
    
    <ul class="list-disc pl-6 mb-6">
      <li>A talk or workshop submission that is accepted earns 3 points.</li>
      <li>A talk or workshop submission that is not selected still earns 1 point.</li>
    </ul>

    <h3 class="text-xl font-semibold mb-3">OSGeo Software and Community</h3>
    
    <ul class="list-disc pl-6 mb-6">
      <li>Details of their past contributions to OSGeo projects or community activities: 3 points</li>
      <li>Demonstrated usage and experience with OSGeo software: 1 point</li>
    </ul>

    <h3 class="text-xl font-semibold mb-3">Summary of Scoring Criteria</h3>
    
    <p class="mb-4">Overall, summary of all scoring criteria is shown as the following table.</p>
    
    <Table 
      headers={['Category', 'Sub category', 'Point']}
      rows={[
        ['Nationality', 'Low-Income country', '1.5'],
        ['', 'Lower-Middle-Income country', '1'],
        ['', 'Upper-Middle-Income country', '0.5'],
        ['Residence', 'Low-Income country', '1.5'],
        ['', 'Lower-Middle-Income country', '1'],
        ['', 'Upper-Middle-Income country', '0.5'],
        ['Refugee or Displaced person', '', '1'],
        ['Gender and Minorities', '', '1'],
        ['Students', '', '1'],
        ['Accepted talks / workshops', '', '3'],
        ['Submitted, but not selected talks / workshops', '', '1'],
        ['OSGeo projects or community contributions', '', '3'],
        ['Usage and experience with OSGeo software', '', '1']
      ]}
      class="mb-8"
    />

    <h3 class="text-xl font-semibold mb-3">Payment</h3>
    
    <p class="mb-4">You must be able to fund the direct costs of your travel to FOSS4G and be in possession of a valid entry visa and immunization documents (if required). Successful applicants will receive a conference pass and become eligible for reimbursement of expenses up to the limit of the travel grant when they check-in at the conference registration desk. Reimbursement of expenses will be by electronic means (details to be advised).</p>
    
    <p class="mb-8">Only in the case of demonstrated needs and exceptional cases, the travel grant amount will be provided in advance or used to cover specific travel costs directly.</p>

    <h2 class="text-2xl font-semibold mb-4">Supporting the TGP</h2>
    
    <p class="mb-4">The travel grant program is funded through:</p>
    
    <ul class="list-disc pl-6 mb-6">
      <li>Conference sponsors</li>
      <li><a href="https://www.osgeo.org/sponsors/" class="text-primary hover:underline">Sponsors of OSGeo</a></li>
      <li>Annual commitment from the OSGeo board</li>
    </ul>
    
    <p class="mb-4">You can help to make FOSS4G more accessible and increase the diversity of our attendees by making a donation to the FOSS4G TGP through the <a href="https://www.osgeo.jp/sponsor" class="text-primary hover:underline">OSGeo Japan chapter</a> that is managing the conference, or <a href="https://www.osgeo.org/about/how-to-become-a-sponsor/" class="text-primary hover:underline">donating money directly to OSGeo</a>.</p>
    
    <p class="mb-8">An easy way to support is to <strong>Adopt-a-ticket</strong> during your own <strong>registration</strong> to the event. The proceeds from <strong>adopt-a-ticket</strong> will be used to cover costs for workshop presenters and TGP applicants' gratis entrance. With at least one <em>ticket adoption,</em> you will be included as an honourable mention in our conference channels.</p>

    <h2 class="text-2xl font-semibold mb-4">About the TGP</h2>
    
    <p class="mb-4">The FOSS4G Travel Grant Program initiative was established in 2017 by the OSGeo Board to facilitate accessibility and diversity at the global and regional FOSS4G events.</p>
    
    <p class="mb-8">The travel grant program is managed by the Conference Committee, in collaboration with representatives from each FOSS4G event.</p>
  </div>
</div>
