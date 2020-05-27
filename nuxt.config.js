export default {
  head: {
    titleTemplate: `%s - Content`,
    title: 'Content',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `How to use Nuxt Content and Components in your website` }
    ],
    link: [
       // Demo for adding a google font (INTER UI)
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'
      }
    ]
  },
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
  },
  generate: {
    async routes () {
      // next comment to make VSCode ignore the "error"
      // @ts-ignore
      const { $content } = require('@nuxt/content')
      const pages = await $content().only(['path']).fetch()
      const posts = await $content('posts').only(['path']).fetch()
      
      const files = [...pages,...posts,]

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}