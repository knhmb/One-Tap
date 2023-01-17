<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="register">
    <div class="return" @click="backToLogin">
      <img src="../assets/back@2x.png" alt="" />
      <p class="back">Back</p>
    </div>
    <p class="create-account">Create your account</p>
    <p class="info">Please enter your information below</p>
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
      <el-form-item prop="actualName">
        <p class="label-actual-name">Display name</p>
        <el-input
          v-model="ruleForm.actualName"
          @blur="
            unFocused({
              label: '.label-actual-name',
              input: ruleForm.actualName,
            })
          "
          @focus="focus('.label-actual-name')"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <p class="label-email">Email</p>
        <el-input
          v-model="ruleForm.email"
          @blur="unFocused({ label: '.label-email', input: ruleForm.email })"
          @focus="focus('.label-email')"
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
      <el-form-item prop="confirmPassword">
        <p class="label-confirm-password">Confirm password</p>
        <el-input
          type="password"
          show-password
          v-model="ruleForm.confirmPassword"
          @blur="
            unFocused({
              label: '.label-confirm-password',
              input: ruleForm.confirmPassword,
            })
          "
          @focus="focus('.label-confirm-password')"
        ></el-input>
      </el-form-item>
      <p class="agree">
        By creating an account you are agreeing to our
        <span>Terms and Conditions</span>
      </p>
      <el-button @click="register">Register</el-button>
    </el-form>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Password is required!"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField("confirmPassword", () => null);
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again."));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
        confirmPassword: "",
        actualName: "",
        email: "",
      },
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validateConfirmPass, trigger: "blur" }],
        actualName: [
          { required: true, message: "Name is required!", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email is required!", trigger: "blur" },
          { type: "email", message: "Please enter a valid email." },
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
    backToLogin() {
      this.$store.commit("CHANGE_AUTH_OPTION", "login");
    },
    register() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            displayName: this.ruleForm.actualName,
            email: this.ruleForm.email,
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            password2: this.ruleForm.confirmPassword,
          };
          this.$store.dispatch("auth/register", data).then(() => {
            ElNotification({
              title: "Success",
              message: "Resgistered Successfully!",
              type: "success",
            });
            this.backToLogin();
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.register .return {
  cursor: pointer;
  width: fit-content;
}

.register p.back {
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

.register img {
  width: 1.5rem;
  vertical-align: middle;
}

.register p.create-account {
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

.register p.info {
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

.register p.label-username,
.register p.label-password,
.register p.label-actual-name,
.register p.label-email,
.register p.label-confirm-password {
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

.register .el-form .el-input :deep(.el-input__wrapper) {
  border-radius: 12px;
  padding: 0.5rem 1rem;
}

.register .el-form :deep(.el-input .el-input__wrapper.is-focus) {
  border: 1px solid #0e74bd;
  box-shadow: 0px 0px 0px 4px rgba(14, 116, 189, 0.15);
}

.register p.agree {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #484a4e;
}

.register p.agree span {
  color: #0093e9;
  text-decoration: underline;
}

.register .el-button {
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