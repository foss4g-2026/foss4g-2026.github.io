import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  // MapLibre GL JS v6 must be bundled (not externalized) during SSR/prerender
  // so its worker URL import resolves correctly.
  // https://maplibre.org/maplibre-gl-js/docs/introduction/
  ssr: {
    noExternal: ['maplibre-gl'],
  },
})
