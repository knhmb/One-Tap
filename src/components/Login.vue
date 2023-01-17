<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <h3>Welcome</h3>
    <p class="login-message">Login to your ONE TAP account</p>
    <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
      <el-form-item prop="username">
        <p class="label-username">Username</p>
        <el-input
          v-model="ruleForm.username"
          @blur="
            unFocused({ label: '.label-username', input: ruleForm.username })
          "
          @focus="focus('.label-username')"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <p class="label-password">Password</p>
        <el-input
          type="password"
          show-password
          v-model="ruleForm.password"
          @blur="
            unFocused({ label: '.label-password', input: ruleForm.password })
          "
          @focus="focus('.label-password')"
        ></el-input>
      </el-form-item>
      <div class="remember-me">
        <el-form-item>
          <el-checkbox v-model="ruleForm.rememberMe" label="Remember me" />
        </el-form-item>
        <p @click="setForgotPassword">Forgot Password?</p>
      </div>
      <el-button @click="login">Login</el-button>
      <p class="no-account">
        Don’t have an account? <span @click="register">Sign up</span>
      </p>
    </el-form>
  </div>
</template>
  
  <script>
export default {
  props: ["dialogVisible"],
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        rememberMe: false,
      },
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password is required!", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    focus(item) {
      const el = document.querySelector(item);
      el.style.top = "20%";
    },
    unFocused({ label, input }) {
      const el = document.querySelector(label);
      if (input) {
        return;
      }
      el.style.top = "50%";
    },
    register() {
      this.$store.commit("CHANGE_AUTH_OPTION", "register");
    },
    setForgotPassword() {
      this.$store.commit("CHANGE_AUTH_OPTION", "forgot-password");
    },
    login() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            username: this.ruleForm.username,
            password: this.ruleForm.password,
          };
          this.$store.dispatch("auth/login", data).then(() => {
            this.$emit("closedDialog");
            this.$router.replace("/home-user");
          });
        }
      });
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
  cursor: pointer;
}
</style>