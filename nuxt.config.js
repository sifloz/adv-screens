export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'adv-screens',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Firebase module configuation
  firebase: {
    lazy: true,
    config: {
      // REQUIRED: Official config for firebase.initializeApp(config):
      apiKey: 'AIzaSyCTZ5VTc1J57yj4oxZmgrLFlemr5H54TxI',
      authDomain: 'adv-screens.firebaseapp.com',
      databaseURL: 'https://adv-screens.firebaseio.com',
      projectId: 'adv-screens',
      storageBucket: 'adv-screens.appspot.com',
      messagingSenderId: '174883261420',
      appId: '1:174883261420:web:a8175e5d8f4405f60dcec9',
      measurementId: '<measurementId>'
    },
    onFirebaseHosting: false,
    services: {
      auth: false,
      firestore: false,
      functions: false,
      storage: false,
      database: false,
      messaging: false,
      performance: false,
      analytics: false,
      remoteConfig: false,
      firestore: {
        memoryOnly: false, // default
        chunkName: 'firebase-auth', // default
        enablePersistence: true,
        emulatorPort: 3000,
        emulatorHost: 'localhost',
        settings: {
          // Firestore Settings - currently only works in SPA mode
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
