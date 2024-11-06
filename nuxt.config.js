import { plugins } from "@storeino/template-core";
export default {
  head: {
    title: 'customize-theme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap'
      },
      {  
        rel: 'stylesheet',  
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'  
      } ,
      {  
        rel: 'stylesheet',  
        href: 'https://fonts.googleapis.com/css2?family=Twentieth+Century:wght@300&display=swap'  
      }  
    ]
  },
  target: 'server',
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/main.css',
    '~/assets/css/fontCss.css'
  ],
  plugins: [
    ...plugins,
    { src: '~/plugins/carousel.js', mode:'client'},
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/axios'
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  serverMiddleware: ['~/server/index'],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
  }
}
