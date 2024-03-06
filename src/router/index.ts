// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router/auto'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/EditChaussure',
  //     name: 'EditChaussure',
  //     component: () => import('../views/EditChaussure.vue')
  //   },

  // ]
})

export default router
