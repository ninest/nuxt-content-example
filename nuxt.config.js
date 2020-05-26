export default {
  head: {
    title: 'First Content'
  },
  // srcDir: 'src/',
  buildModules: ["@nuxt/components"],
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  // import screen size mixin in all components
  styleResources: {
    scss: [
      'assets/styles/screen.scss',
    ]
  }
}