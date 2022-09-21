import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import HomeUser from "./pages/HomeUser";

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
    {
      path: "/home-user",
      component: HomeUser,
    },
  ],
});

export default router;
