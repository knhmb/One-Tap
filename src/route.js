import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import HomeUser from "./pages/HomeUser";
import UserProfile from "./pages/UserProfile";

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
    {
      path: "/user-profile",
      component: UserProfile,
    },
  ],
});

export default router;
