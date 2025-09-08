import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Solutions from '../pages/SolutionsPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routes = [
  { path: '/', component: Home, meta: { bg: 'bg-black' } },
  { path: '/solutions', component: Solutions, meta: { bg: 'bg-[#a9e602]' } },
  {
    path: '/login',
    component: LoginPage,
    meta: { bg: 'bg-gradient-to-br from-purple-800 to-cyan-400' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
