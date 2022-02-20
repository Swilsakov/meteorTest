export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MINING METEORITE',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
        crossorigin: "anonymous",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
        integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
        crossorigin: "anonymous",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", 
        integrity: "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",
        crossorigin: "anonymous",
        type: "text/javascript"
      },
      {
        src: "https://unpkg.com/swiper@8/swiper-bundle.min.js",
        type: "text/javascript"
      },
      

      {
        src: "https://code.jquery.com/ui/1.13.0/jquery-ui.min.js",
        integrity: "sha256-hlKLmzaRlE8SCJC1Kw8zoUbU8BxA+8kR3gseuKfMjxA=",
        crossorigin: "anonymous",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-2.2.4.min.js",
        body: true,
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.bootcdn.net/ajax/libs/jQuery-viewport-checker/1.8.8/jquery.viewportchecker.min.js",
        type: "text/javascript"
      },
      
      {src:'~assets/js/script.js', type: 'text/javascript'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/animate.css',

    '@/assets/css/swiper.min.css',
    '@/assets/icomoon/style.css',
    '@/assets/css/jquery-ui.min.css',
    '@/assets/css/jquery.fancybox.min.css',
    '@/assets/css/responsive.css',
    '@/assets/icomoon/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
