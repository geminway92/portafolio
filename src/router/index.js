import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import(/*webpackChunkName: "navbar" */ '../modules/Portfolio/views/Home.vue'),

   },
   {
      path: '/projects',
      name: 'Projects',
      component: () => import(/*webpackChunkName: "Projects" */ '../modules/Portfolio/views/Projects.vue')
   },
   {
      path: '/:pathMatch(.*)*',
      redirect: '/'
   }
]
const router = createRouter({
   history: createWebHashHistory(),
   routes
});

export default router;
