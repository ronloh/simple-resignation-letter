export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'resign',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,user-scalable=no" },
      { hid: 'description', name: 'description', content: '' },
      { property: "og:title", content: "在下告辞！"},
      { property: "og:description", content: "Don't know how to write a resignation letter? Trust me, I'm an engineer."},
      { property: "og:image", content: "https://resignation-24880.web.app/img/resign_01.jpg"},
      { property: "og:image:width", content: "282"},
      { property: "og:image:height", content: "200"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    "@nuxtjs/vuetify",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB100PN7hRy_TOQkK1cNfnTmzbNSushmIw',
          projectId: 'resignation-24880',
          appId: '1:952315327155:web:0f25cd2b92be6ea8',
          measurementId: "G-T8YX9MX4KG"
        },
        services: {
          analytics: false,
        },
        
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  },

  scanDir: "src",
  buildDir: "functions/.nuxt"
}
