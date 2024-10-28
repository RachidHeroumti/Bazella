import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _add39ec2 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _17009d35 = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages/error" */))
const _9478bfd4 = () => interopDefault(import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages/thanks/index" */))
const _c7344b4c = () => interopDefault(import('..\\pages\\wishlist\\index.vue' /* webpackChunkName: "pages/wishlist/index" */))
const _598b0202 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5398d364 = () => interopDefault(import('..\\pages\\account\\_route.vue' /* webpackChunkName: "pages/account/_route" */))
const _5b0554d6 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _b8944310 = () => interopDefault(import('..\\pages\\collections\\_slug.vue' /* webpackChunkName: "pages/collections/_slug" */))
const _5f7cf529 = () => interopDefault(import('..\\pages\\pages\\_slug.vue' /* webpackChunkName: "pages/pages/_slug" */))
const _4ce0cc8c = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _40e417da = () => interopDefault(import('..\\pages\\products\\_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _f051e47e = () => interopDefault(import('..\\pages\\shop\\_slug.vue' /* webpackChunkName: "pages/shop/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _add39ec2,
    name: "cart"
  }, {
    path: "/error",
    component: _17009d35,
    name: "error"
  }, {
    path: "/thanks",
    component: _9478bfd4,
    name: "thanks"
  }, {
    path: "/wishlist",
    component: _c7344b4c,
    name: "wishlist"
  }, {
    path: "/",
    component: _598b0202,
    name: "index"
  }, {
    path: "/account/:route?",
    component: _5398d364,
    name: "account-route"
  }, {
    path: "/blog/:slug?",
    component: _5b0554d6,
    name: "blog-slug"
  }, {
    path: "/collections/:slug?",
    component: _b8944310,
    name: "collections-slug"
  }, {
    path: "/pages/:slug?",
    component: _5f7cf529,
    name: "pages-slug"
  }, {
    path: "/posts/:slug?",
    component: _4ce0cc8c,
    name: "posts-slug"
  }, {
    path: "/products/:slug?",
    component: _40e417da,
    name: "products-slug"
  }, {
    path: "/shop/:slug?",
    component: _f051e47e,
    name: "shop-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
