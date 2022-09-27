import ChakraUIVuePlugin from '@chakra-ui/vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    console.log('window', window?.$emotionSSRIds)
    const ssrIds = window?.$emotionSSRIds || []
    hydrate(ssrIds)
  })

  nuxtApp.vueApp.use(ChakraUIVuePlugin)
})