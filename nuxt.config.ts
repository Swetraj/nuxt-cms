// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-auth-utils',
    'vuetify-nuxt-module'
  ],
  routeRules: { '/admin/**': { ssr: false } },
  vuetify: {
    vuetifyOptions: './vuetify.config.mts',
    moduleOptions: {
      styles: { configFile: './scss/variables.scss' }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
})
