// MapLibre GL JS v6 no longer bundles its web worker automatically.
// When bundling with Vite, the worker URL must be set explicitly, using
// `?worker&url` so the worker keeps its sibling `maplibre-gl-shared` import.
// See: https://maplibre.org/maplibre-gl-js/docs/introduction/
import { setWorkerUrl } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

setWorkerUrl(workerUrl)
