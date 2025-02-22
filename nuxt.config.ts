// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/vello.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
});
