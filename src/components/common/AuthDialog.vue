<template>
  <section class="auth">
    <el-dialog
      @close="closeDialog"
      :model-value="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <Login v-if="authOption === 'login'" />
      <Register v-if="authOption === 'register'" />
      <forgot-password
        v-if="authOption === 'forgot-password'"
      ></forgot-password>
      <reset-password
        @closeDialog="closeDialog"
        v-if="authOption === 'reset-password'"
      ></reset-password>
    </el-dialog>
  </section>
</template>

<script>
import Login from "../Login.vue";
import Register from "../Register.vue";
import ForgotPassword from "../ForgotPassword.vue";
import ResetPassword from "../ResetPassword.vue";

export default {
  props: ["dialogVisible"],
  components: {
    Login,
    Register,
    ForgotPassword,
    ResetPassword,
  },
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  computed: {
    authOption() {
      return this.$store.getters.authOption;
    },
  },
  methods: {
    focus() {
      const el = document.querySelector(".label-username");
      el.style.top = "20%";
    },
    focusPassword() {
      const el = document.querySelector(".label-password");
      el.style.top = "20%";
    },
    unFocused() {
      const el = document.querySelector(".label-username");
      el.style.top = "50%";
    },
    unFocusedPassword() {
      const el = document.querySelector(".label-password");
      el.style.top = "50%";
    },
    closeDialog() {
      this.$emit("closeDialog", false);
      this.$store.commit("CHANGE_AUTH_OPTION", "login");
    },
  },
};
</script>

<style scoped>
.auth :deep(.el-dialog) {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
}

.auth :deep(.el-dialog .el-dialog__header) {
  display: none;
}

.auth h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #262626;
  text-align: center;
}

.auth p.login-message {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
  text-align: center;
  margin-bottom: 1rem;
}

.auth .el-form .el-form-item {
  position: relative;
}

.auth p.label-username,
.auth p.label-password {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  z-index: 1;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  transition: 0.3s;

  color: rgba(38, 38, 38, 0.4);
}

.auth .el-form .el-input :deep(.el-input__wrapper) {
  /* border: 1px solid #0e74bd;
  box-shadow: 0px 0px 0px 4px rgba(14, 116, 189, 0.15); */
  border-radius: 12px;
  padding: 0.5rem 1rem;
}

.auth .el-form :deep(.el-input .el-input__wrapper.is-focus) {
  border: 1px solid #0e74bd;
  box-shadow: 0px 0px 0px 4px rgba(14, 116, 189, 0.15);
}

.auth .remember-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth .remember-me .el-form-item {
  margin-bottom: 0;
}

.auth .remember-me p {
  cursor: pointer;
}

.auth .remember-me p,
.auth .remember-me .el-checkbox :deep(.el-checkbox__label) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
}

.auth .el-button {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
  width: 100%;
  padding: 1.8rem 1rem;
  margin-top: 1rem;
  background: linear-gradient(
      83.9deg,
      #c3f7c4 1.51%,
      rgba(195, 247, 196, 0) 100%
    ),
    #0093e9;
  border-radius: 40px;
}

.auth p.no-account {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
  text-align: center;
  margin-top: 1rem;
}

.auth p.no-account span {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0e74bd;
}

@media screen and (max-width: 991px) {
  .auth :deep(.el-dialog) {
    width: 90%;
  }
}
</style>