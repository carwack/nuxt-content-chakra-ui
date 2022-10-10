import { MdxComponents } from './components/content/MdcComponents'
import {} from '@chakra-ui/vue-next'

export default defineNuxtConfig({
  modules: [
    './modules/chakra-module.js',
    '@nuxt/content',
    function (options, nuxt) {
      nuxt.hook('nitro:config', config => {
        if (nuxt.options.dev) {
          // Prevent inlining emotion (+ the crucial css cache!) in dev mode
          config.externals.external ||= []
          config.externals.external.push('@emotion/server')
        }
      })
    }
  ]
})
