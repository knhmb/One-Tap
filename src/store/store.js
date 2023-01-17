import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import authModule from "./modules/auth";

const store = createStore({
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
  },
});

export default store;
