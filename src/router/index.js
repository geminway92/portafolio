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
      path: '/contact',
      name: 'Contact',
      component: () => import(/*webpackChunkName: "Projects" */ '../modules/Portfolio/views/Contact.vue')
   }
]
const router = createRouter({
   history: createWebHashHistory(),
   routes
});

export default router;
