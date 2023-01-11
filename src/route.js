import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import HomeUser from "./pages/HomeUser";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/Profile";
import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Styling from "./pages/Styling";

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
      path: "/contact-us",
      component: ContactUs,
    },
    {
      path: "/terms-and-conditions",
      component: TermsAndConditions,
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
        {
          path: "styling",
          component: Styling,
          name: "styling",
        },
      ],
    },
  ],
});

export default router;
