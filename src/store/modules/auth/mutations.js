export default {
  LOGIN(state, payload) {
    state.currentUserDetails = payload;
    state.isLoggedIn = true;
  },
};
