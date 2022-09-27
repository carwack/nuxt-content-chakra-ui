import { extractCritical} from '@emotion/server'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => { 
    const { ids, css } = extractCritical(html.body.join())
    console.log('html', html.body.join())
    console.log(ids, css)
    html.head.push(`<script>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`)
    html.head.push(`<style>${css}</style>`)
  })
})


// import { extractCritical } from '@emotion/server'

// export default defineNuxtPlugin((nuxtApp) => {

//   // nuxtApp.hook('app:rendered', ({ _, html }) => {
//   //   const { ids, css } = extractCritical(html.body)
//   //   console.log('html', html.body)
//   //   html.head.push(`<script>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`)
//   //   html.head.push(`<style>${css}</style>`)
//   // })

//   nuxtApp.hook('vue-renderer:ssr:templateParams', (params) => {
//     console.log('Params:', params)
//     const { ids, css } = extractCritical(params.APP)
//   })
// })