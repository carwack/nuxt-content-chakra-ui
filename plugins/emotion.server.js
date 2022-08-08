import { extractCritical } from '@emotion/server'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.hook('app:rendered', ({ ssrContext, html }) => {
    const { ids, css } = extractCritical(html.body)
    html.head.push(`<script>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`)
    html.head.push(`<style>${css}</style>`)
  })
})