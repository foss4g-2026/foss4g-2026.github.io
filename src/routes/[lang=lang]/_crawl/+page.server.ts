import type { PageServerLoad } from './$types'
export const prerender = true
export const load: PageServerLoad = ({ params }) => ({ lang: params.lang as 'en' | 'ja' })