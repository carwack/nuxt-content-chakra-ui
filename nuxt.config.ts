export default defineNuxtConfig({
  modules: [
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
  ],
})
