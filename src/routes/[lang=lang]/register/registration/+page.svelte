<script lang="ts">
  import { t, json } from 'svelte-i18n'
  import Table from '$components/Table.svelte'
  import SubmitButton from '$components/SubmitButton.svelte'
</script>

<svelte:head>
  <title>{$t('nav.register_sub.registration')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('nav.register_sub.registration')}</h1>
  
  <!-- Register Now Button -->
  <SubmitButton 
    href="https://ti.to/osgeo-jp/foss4g-2026"
    text="Register Now"
    disabled={false}
    target="_blank"
    rel="noopener noreferrer"
  />
  
  <!-- VAT notice banner -->
  <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6">
    <p class="font-semibold">{$t('register.registration.vat_notice.title')}</p>
    <p>{@html $t('register.registration.vat_notice.content')}</p>
  </div>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.fees_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$json('register.registration.main_registration_types') as unknown as string[][]}
      class="mb-6"
    />
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.whats_included.title')}</h2>
    
    <ul class="list-disc pl-6 mb-6">
      {#each $json('register.registration.whats_included.items') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.additional_items_title')}</h2>
    
    <Table 
      headers={[$t('register.registration.type'), $t('register.registration.price')]}
      rows={$json('register.registration.additional_items') as unknown as string[][]}
      class="mb-6"
    />
    
    <!-- Additional fees note -->
    <div class="mb-6">
      <span class="text-sm text-gray-500">※{$t('register.registration.fees_note_additional')}</span>
    </div>
  </div>

  <!-- Goods -->
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">{$t('register.registration.goods.title')}</h2>
    <p class="text-base mb-6">{$t('register.registration.goods.description')}</p>

    <!-- T-shirt (front / back) -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-3">{$t('register.registration.goods.tshirt')}</h3>
      <div class="grid grid-cols-2 gap-4">
        <figure>
          <img
            src="/images/goods/t_shirts_front.jpg"
            alt="{$t('register.registration.goods.tshirt')} - {$t('register.registration.goods.tshirt_front')}"
            class="w-full h-auto rounded-lg border border-gray-200"
            loading="lazy"
          />
          <figcaption class="mt-2 text-center text-sm text-gray-600">{$t('register.registration.goods.tshirt_front')}</figcaption>
        </figure>
        <figure>
          <img
            src="/images/goods/t_shirts_back.jpg"
            alt="{$t('register.registration.goods.tshirt')} - {$t('register.registration.goods.tshirt_back')}"
            class="w-full h-auto rounded-lg border border-gray-200"
            loading="lazy"
          />
          <figcaption class="mt-2 text-center text-sm text-gray-600">{$t('register.registration.goods.tshirt_back')}</figcaption>
        </figure>
      </div>
    </div>

    <!-- Bag -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-3">{$t('register.registration.goods.bag')}</h3>
      <figure class="max-w-sm">
        <img
          src="/images/goods/bag.jpg"
          alt={$t('register.registration.goods.bag')}
          class="w-full h-auto rounded-lg border border-gray-200"
          loading="lazy"
        />
      </figure>
    </div>

    <!-- Tenugui -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-3">{$t('register.registration.goods.tenugui')}</h3>
      <figure>
        <img
          src="/images/goods/tenugui.jpg"
          alt={$t('register.registration.goods.tenugui')}
          class="w-full h-auto rounded-lg border border-gray-200"
          loading="lazy"
        />
      </figure>
    </div>
  </div>
</div>
