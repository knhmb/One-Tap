export default {
  CHANGE_AUTH_OPTION(state, payload) {
    state.authOption = payload;
  },
  TOGGLE_DIALOG_VISIBLE(state, payload) {
    state.dialogVisible = payload;
    console.log(state.dialogVisible);
  },
};
