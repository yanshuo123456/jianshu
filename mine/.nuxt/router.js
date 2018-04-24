import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3c2a0b3a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _424bfe93 = () => import('..\\pages\\sign-up.vue' /* webpackChunkName: "pages/sign-up" */).then(m => m.default || m)
const _2db5a81d = () => import('..\\pages\\sign-in.vue' /* webpackChunkName: "pages/sign-in" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _3c2a0b3a,
			name: "index"
		},
		{
			path: "/sign-up",
			component: _424bfe93,
			name: "sign-up"
		},
		{
			path: "/sign-in",
			component: _2db5a81d,
			name: "sign-in"
		}
    ],
    fallback: false
  })
}
