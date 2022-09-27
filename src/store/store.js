import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

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
});

export default store;
