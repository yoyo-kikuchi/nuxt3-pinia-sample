export default defineNuxtConfig({
  ssr: false,
  css: ["vuetify/lib/styles/main.sass"],
  imports: {
    dirs: ["stores"],
  },
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
  ],
});
