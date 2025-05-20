import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import HomeView from '../views/HomeView.vue'
import Nprogress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue'),
    },
    {
      path: '/our-story',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/product/:id',
      name: 'product',
      component: () => import('../views/Product.vue'),
      props: true,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicy.vue'),
    },
    {
      path: "/shopping-cart",
      name: "shopping cart",
      component: () => import('../views/Cart.vue')
    }
  ],
  // For Vue Router with page transitions
  scrollBehavior(to, from, savedPosition) {
    // If navigating to a new page
    if (from.path !== to.path) {
      return new Promise((resolve) => {
        nextTick(() => {
          setTimeout(() => {
            if (savedPosition) {
              resolve(savedPosition);
            } else {
              window.scrollTo(0, 0);
              resolve({ top: 0 });
          setTimeout  }
          }, 600); 
        });
      });
    }
    
    // If using browser back/forward
    if (savedPosition) {
      return savedPosition;
    }
    
    // Default behavior
    return { top: 0 };
  }
})

router.beforeEach(() => {
  Nprogress.start();
})

router.afterEach(() => {
  Nprogress.done();
})

export default router
