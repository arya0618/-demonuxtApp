
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
      {rel:"stylesheet" ,href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}
    ],
    script:[ { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
    { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   '~/plugins/vuetify.js',
   "~/plugins/vee-validate",
   "~/plugins/vue-modal.js",
   '~/plugins/vue-bootstrap.js',
   "~/plugins/vue-select.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  styleResources: {
    scss: [
        "~/assets/sass/_variables.scss"
    ]
},
  /*
  ** Nuxt.js modules
  */

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/bulma',
    'nuxt-fontawesome', // Imports FontAwesome 5 SVG icons
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }]
  ],
  /*
  ** Build configuration
  */

 
  build: {
    /*
    ** You can extend webpack config here
    */
   
   transpile: ["vee-validate/dist/rules"],

    extend (config, ctx) {
    }
  }
}
