<template>
  <div class="forgot-password">
    <div class="return" @click="backToLogin">
      <img src="../assets/back@2x.png" alt="" />
      <p class="back">Back</p>
    </div>
    <p class="create-account">Forgot password</p>
    <p class="info">Please enter your username and e-mail address</p>
    <el-form>
      <el-form-item>
        <p class="label-username">Username</p>
        <el-input
          v-model="ruleForm.username"
          @blur="
            unFocused({ label: '.label-username', input: ruleForm.username })
          "
          @focus="focus('.label-username')"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <p class="label-email">Email</p>
        <el-input
          v-model="ruleForm.email"
          @blur="unFocused({ label: '.label-email', input: ruleForm.email })"
          @focus="focus('.label-email')"
        ></el-input>
      </el-form-item>
      <el-button @click="resetPassword">Reset password</el-button>
    </el-form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        email: "",
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
    backToLogin() {
      this.$store.commit("CHANGE_AUTH_OPTION", "login");
    },
    resetPassword() {
      this.$store.commit("CHANGE_AUTH_OPTION", "reset-password");
    },
  },
};
</script>
  
  <style scoped>
.forgot-password .return {
  cursor: pointer;
  width: fit-content;
}

.forgot-password p.back {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.3rem;
}

.forgot-password img {
  width: 1.5rem;
  vertical-align: middle;
}

.forgot-password p.create-account {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #262626;
  text-align: center;
  margin-top: 2rem;
}

.forgot-password p.info {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
  margin-top: 0.1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.forgot-password p.label-username,
.forgot-password p.label-email {
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

.forgot-password .el-form .el-input :deep(.el-input__wrapper) {
  border-radius: 12px;
  padding: 0.5rem 1rem;
}

.forgot-password .el-form :deep(.el-input .el-input__wrapper.is-focus) {
  border: 1px solid #0e74bd;
  box-shadow: 0px 0px 0px 4px rgba(14, 116, 189, 0.15);
}

.forgot-password p.agree {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #484a4e;
}

.forgot-password p.agree span {
  color: #0093e9;
  text-decoration: underline;
}

.forgot-password .el-button {
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
</style>