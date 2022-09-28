import ChakraUIVuePlugin, { chakraOptions } from '@chakra-ui/vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ChakraUIVuePlugin, chakraOptions({
    cssReset: true,
    emotionCacheOptions: {
      key: "chakra",
    }
  }))
})