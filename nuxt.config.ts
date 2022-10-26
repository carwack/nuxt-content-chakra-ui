export default {
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
  build: {
    extend(config, ctx) {
      config.resolve.alias.vue$ = "vue/dist/vue.esm-browser.js";
    }
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light'
    }
  }
}
