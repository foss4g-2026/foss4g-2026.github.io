<script lang="ts">
  import { locale } from 'svelte-i18n'
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('nav.attending_sub.childcare')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('childcare.title')}</h1>
  
  {#if $locale === 'ja'}
    <!-- 日本語版 -->
    <div class="prose max-w-none">
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">託児・ファミリーフレンドリー・ポリシー</h2>
        
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">1. 私たちの理念：誰も取り残さない (Leave No One Behind)</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>FOSS4Gは、オープンソースの精神に基づき、あらゆる背景を持つ参加者を歓迎します。私たちは「Geo for All」の理念を家族にも広げ、子供たちを「未来のコミュニティリーダー」として尊重します。育児中であることを理由に参加を断念することなく、専門的なキャリア形成と家族との時間を両立できる環境を提供します。</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">2. セッションへの参加について</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>子供同伴の容認：すべてのセッションにおいて、保護者が同伴する子供の入場を歓迎します。ベビーカーでの入室も可能です。</li>
            <li>座席への配慮：子供が泣いたり、外に出る必要がある場合に備え、各部屋の出口付近に優先席を設けます。</li>
            <li>登壇者のサポート：発表者が子供を連れて登壇することを認めます。必要に応じて、発表中に子供をサポートするスタッフを配置します。</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">3. 費用とスポンサーシップ</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>参加費：子供（16歳未満）のカンファレンス登録料は無料です。</li>
            <li>託児費用：LOCは、Childcare Sponsorship等を通じて託児サービスの費用補助を検討します。補助の範囲はスポンサーシップの状況により決定します。</li>
            <li>食事：会場内のケータリングは子供も利用できます。ただし、アレルギーや食事制限への対応を含め、お子様の食事に関する最終的な判断と責任は保護者が負うものとします。事前登録時にアレルギー情報をご申告ください。</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">4. 参加者へのお願い</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>コミュニティの受容：すべての参加者に対し、子供連れの参加者への理解と忍耐をお願いします。子供たちは大人をモデルにして学ぶ存在であることを念頭に置いてください。</li>
            <li>行動規範（CoC）：会場の行動規範は子供たちにも適用されます。すべての子供が尊重され、安全に過ごせるよう努めてください。</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">託児サービス ご利用案内</h2>
        
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">5. 会場内の施設とサービス</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>キッズスペース（Chill Space）：会場内に、親と子供がリラックスして過ごせる専用の休憩エリアを設置します。おもちゃや絵本を備え、雨天でも安全に遊べる環境を確保します。</li>
            <li>授乳・おむつ交換室：静かでプライバシーの保たれた授乳室、およびおむつ交換台を設置します。託児スペース内にナーシングゾーン（授乳・交換エリア）を設け、パーテーション等でプライバシーを確保します。</li>
            <li>オンサイト託児サービス：メインカンファレンス期間中、外部の専門託児事業者によるオンサイト託児サービスを手配します。サービスは託児事業者と参加者の間の直接契約となります。対象年齢は0歳から中学生までとし、年齢に応じた過ごし方（乳幼児の保育、学齢児向けのジュニア・ラウンジ等）を用意します。</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">6. 利用方法（事前登録）</h3>
          <p class="mb-4">託児サービスの利用を希望される方は、託児事業者が提供する専用フォームから直接お申し込みください。フォームのリンクは、準備ができ次第カンファレンスウェブサイトおよび参加登録時にご案内します。</p>
          <blockquote class="border-l-4 border-gray-400 pl-4 italic">
            お子様の年齢・月齢、アレルギー情報、緊急連絡先等は、託児事業者に直接ご申告いただきます。
          </blockquote>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">7. 免責事項</h3>
          <p>託児サービスは外部の専門事業者により提供されます。カンファレンス主催者（LOC）は、託児事業者が提供するサービスの内容について責任を負いません。サービスに関する契約・同意は、参加者と託児事業者の間で直接取り交わされます。</p>
        </div>
      </section>
    </div>
  {:else}
    <!-- English Version -->
    <div class="prose max-w-none">
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Childcare & Family-Friendly Policy</h2>
        
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">1. Our Philosophy: Leave No One Behind</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Based on the open-source spirit, FOSS4G welcomes participants from all backgrounds. We extend the "Geo for All" philosophy to include families and respect children as "future community leaders". Our goal is to provide an environment where attendees do not have to give up participation due to parenting responsibilities, allowing them to balance professional career growth with family time.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">2. Session Participation</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Admission with Children: Children accompanied by guardians are welcome in all sessions. Strollers (pushchairs) are also permitted in the rooms.</li>
            <li>Seating Arrangements: Priority seating will be designated near the exits of each room to allow parents to step out easily if a child becomes restless.</li>
            <li>Speaker Support: Presenters are welcome to bring their children on stage if they wish. If needed, staff can be assigned to support the child during the presentation.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">3. Fees and Sponsorship</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Registration Fee: Conference registration for children (under 16) is free.</li>
            <li>Childcare Costs: The LOC will explore options to subsidize childcare services through Childcare Sponsorship and other funding. The extent of subsidies will depend on sponsorship availability.</li>
            <li>Meals: Children are welcome to use the on-site catering services. However, parents/guardians bear final responsibility for their children's dietary needs, including the management of allergies and dietary restrictions. Please declare any allergy information during pre-registration.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">4. Request to Participants</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Community Acceptance: We ask all participants to be patient and welcoming toward attendees with children. Please remember that children learn by observing the adults in our community as role models.</li>
            <li>Code of Conduct (CoC): The conference Code of Conduct applies to children as well. We ask guardians to ensure their children are respected and can enjoy the event safely.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Childcare Service: Practical Information</h2>
        
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">5. On-site Facilities and Services</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Kids Space (Chill Space): We will establish a dedicated "Chill Space" within the venue for parents and children to relax. This area will be equipped with toys and books, providing a safe play environment regardless of the weather.</li>
            <li>Nursing and Changing Rooms: Private and quiet nursing (lactation) rooms and diaper-changing stations will be set up within the childcare space. A dedicated nursing zone will be created using partitions to ensure privacy.</li>
            <li>On-site Childcare Service: During the main conference, on-site childcare services will be arranged through an external professional childcare provider. The service will operate as a direct contract between the childcare provider and the participant. The service covers children from infants (age 0) through junior high school age, with age-appropriate arrangements (nursery care for infants/toddlers, a Junior Lounge for older children, etc.).</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">6. How to Use (Pre-registration)</h3>
          <p class="mb-4">Those wishing to use childcare services are requested to register directly through the childcare provider's dedicated registration form. The link to the form will be available on the conference website and during the ticket registration process once ready.</p>
          <blockquote class="border-l-4 border-gray-400 pl-4 italic">
            Note: Personal information such as the child's age, allergy details, and emergency contacts will be submitted directly to the childcare provider.
          </blockquote>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">7. Disclaimer</h3>
          <p>Childcare services are provided by an external professional vendor. The conference organizers (LOC) are not responsible for the services provided by third-party childcare vendors. All agreements and consents regarding childcare services are made directly between the participant and the childcare provider.</p>
        </div>
      </section>
    </div>
  {/if}
</div>
