<script lang="ts">
  import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$t("nav.attending_sub.transport")} - {$t("title")}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t("nav.attending_sub.transport")}</h1>

  <div class="prose max-w-none">
    <!-- Access from KIX -->
    <h2 class="text-2xl font-semibold mb-4">{$t("transport.kix.title")}</h2>
    <p class="mb-6">{@html $t("transport.kix.description")}</p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.section_headers.itinerary")}
    </h3>
    <div class="overflow-x-auto mb-4">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.section")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.transport")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.duration")}</th
            >
          </tr>
        </thead>
        <tbody>
          {#each $t("transport.kix.itinerary") as row}
            <tr>
              <td class="border border-gray-300 px-4 py-2">{row.section}</td>
              <td class="border border-gray-300 px-4 py-2">{row.transport}</td>
              <td class="border border-gray-300 px-4 py-2">{row.duration}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.section_headers.fare")}
    </h3>
    <p class="mb-2">{$t("transport.kix.fare")}</p>
    <p class="text-sm text-gray-600 mb-8">{$t("transport.kix.fare_note")}</p>

    <hr class="my-8" />

    <!-- Access from HIJ -->
    <h2 class="text-2xl font-semibold mb-4">{$t("transport.hij.title")}</h2>
    <p class="mb-6">{@html $t("transport.hij.description")}</p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.section_headers.itinerary")}
    </h3>
    <div class="overflow-x-auto mb-4">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.section")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.transport")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.duration")}</th
            >
          </tr>
        </thead>
        <tbody>
          {#each $t("transport.hij.itinerary") as row}
            <tr>
              <td class="border border-gray-300 px-4 py-2">{row.section}</td>
              <td class="border border-gray-300 px-4 py-2">{row.transport}</td>
              <td class="border border-gray-300 px-4 py-2">{row.duration}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.section_headers.fare")}
    </h3>
    <p class="mb-8">{$t("transport.hij.fare")}</p>

    <hr class="my-8" />

    <!-- Access from NRT -->
    <h2 class="text-2xl font-semibold mb-4">{$t("transport.nrt.title")}</h2>
    <p class="mb-6">{@html $t("transport.nrt.description")}</p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.section_headers.itinerary")}
    </h3>
    <div class="overflow-x-auto mb-4">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.section")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.transport")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.itinerary_headers.duration")}</th
            >
          </tr>
        </thead>
        <tbody>
          {#each $t("transport.nrt.itinerary") as row}
            <tr>
              <td class="border border-gray-300 px-4 py-2">{row.section}</td>
              <td class="border border-gray-300 px-4 py-2">{row.transport}</td>
              <td class="border border-gray-300 px-4 py-2">{row.duration}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.section_headers.fare")}
    </h3>
    <p class="mb-2">{$t("transport.nrt.fare")}</p>
    <p class="text-sm text-gray-600 mb-8">{$t("transport.nrt.fare_note")}</p>

    <hr class="my-8" />

    <!-- Important Notices -->
    <h2 class="text-2xl font-semibold mb-4">{$t("transport.notices.title")}</h2>
    <ul class="list-disc pl-6 mb-8">
      {#each $t("transport.notices.items") as item}
        <li><strong>{item.title}:</strong> {item.description}</li>
      {/each}
    </ul>

    <hr class="my-8" />

    <!-- JAPAN RAIL PASS -->
    <h2 class="text-2xl font-semibold mb-4">{$t("transport.jr_pass.title")}</h2>
    <p class="mb-4">{@html $t("transport.jr_pass.description")}</p>
    <p class="mb-2">{$t("transport.jr_pass.url_label")}</p>
    <p class="mb-6">
      <a
        href={$t("transport.jr_pass.url")}
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:underline">{$t("transport.jr_pass.url")}</a
      >
    </p>

    <div class="overflow-x-auto mb-6">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2 text-left font-bold"
              >{$t("transport.jr_pass.table_headers.duration")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.jr_pass.table_headers.ordinary_adult")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.jr_pass.table_headers.ordinary_child")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.jr_pass.table_headers.green_adult")}</th
            >
            <th class="border border-gray-300 px-4 py-2 text-left"
              >{$t("transport.jr_pass.table_headers.green_child")}</th
            >
          </tr>
        </thead>
        <tbody>
          {#each $t("transport.jr_pass.table_rows") as row}
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-bold"
                >{row.duration}</td
              >
              <td class="border border-gray-300 px-4 py-2"
                >{row.ordinary_adult}</td
              >
              <td class="border border-gray-300 px-4 py-2"
                >{row.ordinary_child}</td
              >
              <td class="border border-gray-300 px-4 py-2">{row.green_adult}</td
              >
              <td class="border border-gray-300 px-4 py-2">{row.green_child}</td
              >
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.jr_pass.nozomi.title")}
    </h3>
    <p class="mb-4">{@html $t("transport.jr_pass.nozomi.description")}</p>
    <ul class="list-disc pl-6 mb-8">
      <li>{$t("transport.jr_pass.nozomi.supplement")}</li>
    </ul>

    <hr class="my-8" />

    <!-- Hiroshima City Guide -->
    <h2 class="text-2xl font-semibold mb-4">
      {$t("transport.city_guide.title")}
    </h2>
    <p class="mb-6">{$t("transport.city_guide.intro")}</p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.city_guide.kamiyacho.title")}
    </h3>
    <p class="mb-6">{@html $t("transport.city_guide.kamiyacho.description")}</p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.city_guide.peace_park.title")}
    </h3>
    <p class="mb-6">
      {@html $t("transport.city_guide.peace_park.description")}
    </p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.city_guide.streetcars.title")}
    </h3>
    <p class="mb-4">
      {@html $t("transport.city_guide.streetcars.description_1")}
    </p>
    <p class="mb-6">
      {@html $t("transport.city_guide.streetcars.description_2")}
    </p>

    <h3 class="text-xl font-semibold mb-3">
      {$t("transport.city_guide.hiroshima_station.title")}
    </h3>
    <p class="mb-4">
      {@html $t("transport.city_guide.hiroshima_station.description")}
    </p>

    <h4 class="text-lg font-semibold mb-3">
      {$t("transport.city_guide.hiroshima_station.access_title")}
    </h4>
    <ul class="list-none pl-0 mb-8">
      <li>
        <strong
          >{$t(
            "transport.city_guide.hiroshima_station.travel_time_label",
          )}:</strong
        >
        {$t("transport.city_guide.hiroshima_station.travel_time")}
      </li>
      <li>
        <strong
          >{$t("transport.city_guide.hiroshima_station.fare_label")}:</strong
        >
        {$t("transport.city_guide.hiroshima_station.fare")}
      </li>
    </ul>
  </div>
</div>
