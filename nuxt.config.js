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
      { property: "og:description", content: "Hello it's me :)"},
      { property: "og:image", content: "https://resignation-24880.web.app/img/resign_01.jpg"},
      { property: "og:image:width", content: "282"},
      { property: "og:image:height", content: "200"},
      { property: "keywords", content: "resign, resignation, resignation letter, tender resignation, resignation letter format, bye bye, good bye, simple resignation letter, resignation letter sample, resign letter sample, simple resign letter, how to resign"},
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
          apiKey: process.env.FIREBASE_WEB_API_KEY,
          authDomain: "resignation-24880.firebaseapp.com",
          databaseURL: "https://resignation-24880.firebaseio.com",
          projectId: "resignation-24880",
          storageBucket: "resignation-24880.appspot.com",
          messagingSenderId: "952315327155",
          appId: "1:952315327155:web:0f25cd2b92be6ea8",
          measurementId: "G-T8YX9MX4KG"
        },
        services: {
          analytics: true,
        },
        useFirebaseHosting: true
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
