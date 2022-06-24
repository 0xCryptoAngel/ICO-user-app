import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      title: 'About Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    },
  },
  {
    path: "/validator",
    name: "validator",
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
