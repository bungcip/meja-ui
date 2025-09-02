import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Button from '../pages/Button.vue';
import Card from '../pages/Card.vue';
import DataTable from '../pages/DataTable.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/button',
    name: 'Button',
    component: Button,
  },
  {
    path: '/card',
    name: 'Card',
    component: Card,
  },
  {
    path: '/datatable',
    name: 'DataTable',
    component: DataTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
