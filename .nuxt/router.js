import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _35575cdc = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _3cc46711 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3b0dc5c9 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/posts",
    component: _35575cdc,
    name: "posts"
  }, {
    path: "/",
    component: _3cc46711,
    name: "index"
  }, {
    path: "/:slug",
    component: _3b0dc5c9,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
