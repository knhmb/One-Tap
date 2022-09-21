import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // return savedPosition;
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});

export default router;
