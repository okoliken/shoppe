import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nprogress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        transition:"zoom"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        transition:"zoom"
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue'),
      meta: {
        transition:"zoom"
      }
    },
    {
      path: '/our-story',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        transition:"zoom"
      }
    }
  ],
})

router.beforeEach(() => {
  Nprogress.start();
})

router.afterEach(() => {
  Nprogress.done();
})

export default router
