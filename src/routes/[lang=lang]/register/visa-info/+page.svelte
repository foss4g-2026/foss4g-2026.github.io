<script lang="ts">
  import { onMount } from "svelte";

  let mermaidCode = `
  flowchart TD
    Start([Planning Short-term Stay<br/>in Japan]) --> Check1{Is your country listed<br/>in VISA exempted<br/>countries?}
    
    Check1 -->|Yes| NoVisa[No VISA required<br/>Short-term stay allowed]
    Check1 -->|No| NeedVisa[VISA required]
    
    NeedVisa --> CheckTGP{Are you getting TGP Grant?}
    
    CheckTGP -->|Yes| BusinessVisa[Apply for Single-Entry Short-Term Stay VISA]
    CheckTGP -->|No| CheckeVisa{Is your country available<br/>for eVISA system?}
    
    CheckeVisa -->|No| BusinessVisa
    CheckeVisa -->|Yes| eVisa[Apply via eVISA system]
    
    %% Business VISA Process
    BusinessVisa --> BizPrep[Prepare applicant's<br/>documents]
    BizPrep --> BizDoc[Applicant documents:<br/>- Application form<br/>- Passport<br/>- Photo<br/>- Itinerary, etc.]
    BizDoc --> HostDoc[Receive documents<br/>from host organization]
    HostDoc --> HostDocList[Host documents:<br/>- Letter of reason<br/>- Invitation letter<br/>- Guarantee letter<br/>- Company info, etc.]
    HostDocList --> BizEmbassy[Apply at Japanese<br/>Embassy/Consulate]
    BizEmbassy --> BizReview[Review process]
    BizReview --> VisaResult[Obtain VISA]
    
    %% eVISA Process
    eVisa --> eVisaSubmit[Submit online application]
    eVisaSubmit --> VisaResult[Obtain VISA]
    
    %% Entry to Japan
    NoVisa --> Enter[Enter Japan]
    VisaResult --> Enter
    VisaResult --> Enter
    
    Enter --> End([FOSS4G 2026!!])
    
    style Start fill:#e1f5ff
    style NoVisa fill:#c8e6c9
    style VisaResult fill:#fff9c4
    style End fill:#e1f5ff
  `

  let container: HTMLDivElement;

  onMount(async () => {
    const mermaid = (await import("mermaid")).default;
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
    });
    const { svg } = await mermaid.render(
      'mermaid-diagram',
      mermaidCode
    );
    container.innerHTML = svg;

  })
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Visa Information</h1>
  <p>
    Japan requires visas for citizens of certain countries. You can find more information on which nationalities will need to obtain a VISA to come to Japan here:
  </p>
  <a href="https://www.mofa.go.jp/j_info/visit/visa/index.html" class="text-blue-600 underline mb-4 inline-block">
    https://www.mofa.go.jp/j_info/visit/visa/index.html
  </a>

  <h2 class="text-2xl font-semibold mt-8 mb-4">VISAs</h2>
  <h3 class="text-xl font-semibold mt-6 mb-2">Countries that can enter without VISA</h3>
  <p>
    The exemption from the visa requirement applies to the citizens of the following countries:
  </p>
  <ul class="list-disc pl-6 mb-6">
    <li>Andorra</li>
    <li>Argentina</li>
    <li>Australia</li>
    <li>Austria</li>
    <li>Bahamas</li>
    <li>Barbados</li>
    <li>Belgium</li>
    <li>Brazil</li>
    <li>Brunei Darussalam</li>
    <li>Bulgaria</li>
    <li>Canada</li>
    <li>Chile</li>
    <li>Costa Rica</li>
    <li>Croatia</li>
    <li>Cyprus</li>
    <li>Czech Republic</li>
    <li>Denmark</li>
    <li>Dominican Republic</li>
    <li>El Salvador</li>
    <li>Estonia</li>
    <li>Finland</li>
    <li>France</li>
    <li>Germany</li>
    <li>Greece</li>
    <li>Guatemala</li>
    <li>Honduras</li>
    <li>Hong Kong</li>
    <li>Hungary</li>
    <li>Iceland</li>
    <li>Indonesia</li>
    <li>Ireland</li>
    <li>Israel</li>
    <li>Italy</li>
    <li>Latvia</li>
    <li>Lesotho</li>
    <li>Liechtenstein</li>
    <li>Lithuania</li>
    <li>Luxembourg</li>
    <li>Macao</li>
    <li>Malaysia</li>
    <li>Malta</li>
    <li>Mauritius</li>
    <li>Mexico</li>
    <li>Monaco</li>
    <li>Montenegro</li>
    <li>Netherlands</li>
    <li>New Zealand</li>
    <li>North Macedonia</li>
    <li>Norway</li>
    <li>Panama</li>
    <li>Paraguay</li>
    <li>Peru</li>
    <li>Poland</li>
    <li>Portugal</li>
    <li>Qatar</li>
    <li>Republic of Korea</li>
    <li>Romania</li>
    <li>San Marino</li>
    <li>Serbia</li>
    <li>Singapore</li>
    <li>Slovakia</li>
    <li>Slovenia</li>
    <li>Spain</li>
    <li>Suriname</li>
    <li>Sweden</li>
    <li>Switzerland</li>
    <li>Taiwan</li>
    <li>Thailand</li>
    <li>Tunisia</li>
    <li>Türkiye</li>
    <li>United Arab Emirates</li>
    <li>United Kingdom</li>
    <li>United States</li>
    <li>Uruguay</li>
  </ul>
  <p>
    This information is taken from <a href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html" class="text-blue-600 underline mb-4 inline-block">the website of The Ministry of Foreign Affairs</a> as of 11 January 2026.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">VISA process for those not included above</h3>
  <p>
    The steps of obtaining a VISA for Japan
  </p>
  <div bind:this={container} class="mermaid"></div>

  <p>If you are not a citizen of the countries listed above or a part of Special Categories, then you are required to apply for a visa.</p>

  <h4 class="text-lg font-semibold mt-6 mb-2">eVISA</h4>
  <p>
    The following countries are available to apply eVISA for 15 days or 30 days:
  </p>
  <ul class="list-disc pl-6 mb-6">
    <li>Australia</li>
    <li>Brunei Darussalam</li>
    <li>Brazil</li>
    <li>Cambodia</li>
    <li>Canada</li>
    <li>Saudi Arabia</li>
    <li>South Africa</li>
    <li>Taiwan</li>
    <li>United Kingdom</li>
    <li>United States</li>
  </ul>

  <p>
    Except Cambodia, Saudi Arabia and South Africa, other countries are also listed as VISA exempted countries.
  </p>

  <p>
    You can read about eVISA and apply for it here: 
  </p>
  <!-- Submit Button without Logo -->
  <div class="text-center mb-8">
    <button type="button" class="btn btn-lg flex items-center gap-3 mx-auto bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
      <a href="https://www.mofa.go.jp/j_info/visit/visa/visaonline.html">
        <span>Apply for eVISA</span>
      </a>
    </button>
  </div>

  <h4 class="text-lg font-semibold mt-6 mb-2">Short-term business affairs VISA</h4>
  <p>
    If your nationality is not eligible for eVISA, you need to apply for a <span class="font-bold">Single-Entry Short-Term Stay VISA</span> for the purpose of visiting for <span class="font-bold">Short-Term Business Affairs</span>, including attending a conference.<br />
    each Nationality group has different required documentations:
  </p>

  <ul class="list-disc pl-6 mb-6">
    <li><a class="text-blue-600 underline inline-block" href="https://www.mofa.go.jp/j_info/visit/visa/short/philippine.html">Philippines</a></li>
    <li><a class="text-blue-600 underline inline-block" href="https://www.mofa.go.jp/ca/fna/page23e_000538.html">Viet Nam</a></li>
    <li><a class="text-blue-600 underline inline-block" href="https://www.mofa.go.jp/ca/fna/page23e_000539.html">China</a></li>
    <li><a class="text-blue-600 underline inline-block" href="https://www.mofa.go.jp/j_info/visit/visa/short/russia.html">Russia</a></li>
    <li><a class="text-blue-600 underline inline-block" href="https://www.mofa.go.jp/ca/fna/page25e_000136.html">CIS countries, Ukraine, Georgia</a></li>
    <li><a class="text-blue-600 underline inline-block" href="https://www.mofa.go.jp/j_info/visit/visa/short/other_visa.html">Other Nationalities</a></li>
  </ul>

  <p>
    Please check what kind of documents is required for your nationality to obtain a VISA.
  </p>

  <p>
    For example, the following documents are required for Other Nationalities group.
  </p>

  <ol class="list-[upper-alpha] pl-6 mb-6">
    <li>Documents prepared by VISA applicant: You can download PDF from the above links
      <ul class="list-disc pl-6">
        <li>Valid passport</li>
        <li>1 VISA application form</li>
        <li>1 Photo</li>
        <li>Itinerary with the flight/ship number and date of arrival and departure to and from Japan</li>
        <li>Document to prove that you are traveling to Japan for business purposes (any of the following)
          <ul class="list-disc pl-6">
            <li>Travel order issued by your employer</li>
            <li>Letter from employer</li>
            <li>Document equivalent to the above</li>
            <li>Certificate of employment</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Documents prepared by Hiroshima LOC in Japan
      <ul class="list-disc pl-6">
        <li>Invitation letter</li>
        <li>Itinerary in Japan</li>
      </ul>
    </li>
    <li>Documents prepared by Hiroshima LOC for TGP grants
      <ul class="list-disc pl-6">
        <li>Letter of guarantee</li>
        <li>A certified copy of the corporation register or Overview of company/organization</li>
      </ul>
    </li>
  </ol>
  <p>
    Once you receive B and C documents, you need to apply a VISA at Japanese embassy by yourself.
  </p>

  <h4 class="text-lg font-semibold mt-6 mb-2">Addresses of Japanese embassies / consulates</h4>
  <p>
    You can find the addresses and phone numbers of nearest Japanese embassies / consulates at <a class="text-blue-600 underline mb-4 inline-block" href="https://www.mofa.go.jp/about/emb_cons/over/index.html">this website</a>.
  </p>

  <h4 class="text-lg font-semibold mt-6 mb-2">How can you get documents from LOC?</h4>
  <p>
    During the conference registration process, please ensure you indicate you need a VISA support from the LOC. We will contact you and issue the documents for B and C for registered participants or TGP participants.
  </p>

</div>