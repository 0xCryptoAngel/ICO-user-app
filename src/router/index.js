import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import('@/views/Faq.vue'),
  },
  {
    path: "/term",
    name: "term",
    component: () => import('@/views/Terms.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
