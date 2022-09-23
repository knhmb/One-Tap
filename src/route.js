import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import HomeUser from "./pages/HomeUser";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/Profile";
import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";

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
      path: "/about-us",
      component: AboutUs,
    },
    {
      path: "/user-profile",
      component: UserProfile,
      children: [
        {
          path: "profile",
          component: Profile,
          name: "profile",
        },
        {
          path: "content",
          component: Content,
          name: "content",
        },
      ],
    },
  ],
});

export default router;
