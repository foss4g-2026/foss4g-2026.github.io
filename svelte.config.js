import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
  preprocess: [
    vitePreprocess(),
  ],
  kit: {
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
      $images: 'src/images',
    },
    // GitHub Pages does not rewrite unknown paths to index.html.
    // Use 404.html as SPA fallback, and generate directory-style pages.
    adapter: adapter({
      fallback: '404.html',
    }),
    prerender: {
      entries: [
        '*',
        '/en',
        '/ja',
        '/en/_crawl',
        '/ja/_crawl',
      ],
      handleUnseenRoutes: 'warn'
    }
  }
}

export default config
