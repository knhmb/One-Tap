import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import authModule from "./modules/auth";
import profileModule from "./modules/profile";
import dashboardModule from "./modules/dashboard";

import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      authOption: "login",
      dialogVisible: false,
    };
  },
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule,
    profile: profileModule,
    dashboard: dashboardModule,
  },
});

export default store;
