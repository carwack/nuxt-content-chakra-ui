import ChakraUIVuePlugin from '@chakra-ui/vue-next'
import { hydrate } from '@emotion/css'
import { extractCritical, renderStylesToString } from "@emotion/server"


// /**
//  *
//  * @param html Page HTML
//  * @param ids Array of critical ids to hydrate
//  * @param css Critical CSS string
//  */
 const injectCritical = (html, ids, css) =>
 html
   .replace(
     "</title>\n",
     `</title>\n<script>window.$emotionSSRIds=${JSON.stringify(
       ids
     )}</script>\n`
   )
   .replace("</head>\n", `<style>${css}</style>\n</head>\n`)

export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp)
  // console.log(useHydration())
  // nuxtApp.hook('app:created', (ctx, html) => {
  //   console.log(ctx)
  //   console.log(nuxtApp.ssrContext)
  //   // /** Extract critical styles */
  //   // const { ids, css } = extractCritical(html)
  //   // console.log(ids)
  //   // console.log(css)
  //   // /** Append ssr ids to rendered HTML for hydration */
  //   // return injectCritical(html, ids, css) 
  // })

  nuxtApp.hook('app:rendered', ({ ssrContext, html }) => {
    console.log('html:', { html })
    const { ids, css } = extractCritical(html.body)

    console.log(ids)
    /** Append ssr ids to rendered HTML for hydration */
    // return injectCritical(html.head, ids, css) 
    html.head.push(`<script>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`)
    html.head.push(`<style>${css}</style>`)

    // console.log(ssrContext)
    // @ts-expect-error Need to add $emotionSSRIds to global namespace
    // const ssrIds = window?.$emotionSSRIds || []
    // hydrate(ids)
  })

  nuxtApp.vueApp.use(ChakraUIVuePlugin)
})