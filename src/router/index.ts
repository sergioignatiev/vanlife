import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Импорт обычного навбара
const DefaultNavbar = () => import('../views/TheNavbar.vue')
const HostNavbar = () => import('../views/TheHostNavbar.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      navbar: DefaultNavbar,
    },
    meta: { title: 'All Vans', favicon: '/images/home.png' },
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: () => import('../views/AboutView.vue'),
      navbar: DefaultNavbar,
    },
    meta: { title: 'About', favicon: '/images/about.png' },
  },
  {
    path: '/:id',
    name: 'van-page',
    components: {
      default: () => import('../views/TheVanView.vue'),
      navbar: DefaultNavbar,
    },
    props: { default: true },
  },
  {
    path: '/registration',
    name: 'registration',
    components: {
      default: () => import('../views/RegistrationView.vue'),
      navbar: HostNavbar,
    },
  },
  {
    path: '/host',
    name: 'host',
    components: {
      default: () => import('../views/host/TheHostView.vue'),
      navbar: HostNavbar,
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/host/TheDashboardView.vue'),
      },
      {
        path: 'income',
        name: 'income',
        component: () => import('../views/host/TheIncomeView.vue'),
      },
      {
        path: 'vans',
        name: 'vans',
        component: () => import('../views/host/TheVansView.vue'),
      },
      {
        path: ':id',
        name: 'host-vans-id',
        component: () => import('../views/host/TheHostVanIdView.vue'),
        props:true,
        children: [
          {
            path: 'details',
            name: 'van-details',
            component: () => import('../views/host/TheVanDetailsView.vue'),
            props:true,
            meta: { noScroll: true },
          },
          {
            path: 'pricing',
            name: 'van-pricing',
            component: () => import('../views/host/TheVanPricingView.vue'),
            props:true,
            meta: { noScroll: true },
          },
{
            path: 'photos',
            name: 'van-photos',
            component: () => import('../views/host/TheVanPhotosView.vue'),
            props:true,
            meta: { noScroll: true },
          },

        ],
      },
      {
        path: 'reviews',
        name: 'reviews',
        component: () => import('../views/host/TheReviewssView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.noScroll) {
      // полностью отключаем авто-скролл
      return false
    }

    if (savedPosition) {
      return savedPosition
    }

    return { left: 0, top: 0 }
  },
})

export default router
