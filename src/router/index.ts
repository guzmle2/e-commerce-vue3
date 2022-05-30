import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ShowCaseView from '@/views/ShowCaseView/ShowCaseView.vue';
import ShoppingCartView from '@/views/ShopingCartView/ShoppingCartView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ShowCaseView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
