// https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-open-fetch', "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true
    }
  },
  openFetch: {
    clients: {
      player: {
        schema:
          `${process.env.EM_BASE_URL}/player/v3/api-docs`,
      },
      casino: {
        schema:
          `${process.env.EM_BASE_URL}/casino/v3/api-docs`,
      },
    },
  },
})