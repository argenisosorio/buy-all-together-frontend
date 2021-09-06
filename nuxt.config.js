export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'store',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" }
    ],
    script: [
      { src: "js/jquery-3.5.1.min.js" },
      { src: "js/script.js" },
      { src: "vendor/jquery/dist/jquery.min.js" },
      { src: "vendor/jquery-migrate/dist/jquery-migrate.min.js" },
      { src: "vendor/popper.js/dist/umd/popper.min.js" },
      { src: "vendor/bootstrap/bootstrap.min.js" },
      { src: "vendor/appear.js" },
      { src: "vendor/jquery.countdown.min.js" },
      { src: "vendor/hs-megamenu/src/hs.megamenu.js" },
      { src: "vendor/svg-injector/dist/svg-injector.min.js" },
      { src: "vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js" },
      { src: "vendor/jquery-validation/dist/jquery.validate.min.js" },
      { src: "vendor/fancybox/jquery.fancybox.min.js" },
      { src: "vendor/typed.js/lib/typed.min.js" },
      { src: "vendor/slick-carousel/slick/slick.js" },
      { src: "vendor/bootstrap-select/dist/js/bootstrap-select.min.js" },
      { src: "js/hs.core.js" },
      { src: "js/components/hs.countdown.js" },
      { src: "js/components/hs.header.js" },
      { src: "js/components/hs.hamburgers.js" },
      { src: "js/components/hs.unfold.js" },
      { src: "js/components/hs.focus-state.js" },
      { src: "js/components/hs.malihu-scrollbar.js" },
      { src: "js/components/hs.validation.js" },
      { src: "js/components/hs.fancybox.js" },
      { src: "js/components/hs.onscroll-animation.js" },
      { src: "js/components/hs.slick-carousel.js" },
      { src: "js/components/hs.show-animation.js" },
      { src: "js/components/hs.svg-injector.js" },
      { src: "js/components/hs.go-to.js" },
      { src: "js/components/hs.selectpicker.js" },
      { src: "js/Plugins-Init-index.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vendor/font-awesome/css/fontawesome-all.min.css',
    '~/assets/css/font-electro.css',
    '~/assets/vendor/animate.css/animate.min.css',
    '~/assets/vendor/hs-megamenu/src/hs.megamenu.css',
    '~/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
    '~/assets/vendor/fancybox/jquery.fancybox.css',
    '~/assets/vendor/slick-carousel/slick/slick.css',
    '~/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css',
    '~/assets/css/theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
