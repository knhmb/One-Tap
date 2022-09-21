<template>
  <section class="auth">
    <el-dialog
      @close="$emit('closeDialog', false)"
      :model-value="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <h3>Welcome</h3>
      <p class="login-message">Login to your ONE TAP account</p>
      <el-form>
        <el-form-item>
          <p class="label-username">Username</p>
          <el-input
            v-model="ruleForm.username"
            @blur="unFocused"
            @focus="focus"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <p class="label-password">Password</p>
          <el-input
            type="password"
            show-password
            v-model="ruleForm.password"
            @blur="unFocusedPassword"
            @focus="focusPassword"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="$emit('closeDialog', false)">Cancel</el-button>
          <el-button type="primary" @click="$emit('closeDialog', false)"
            >Confirm</el-button
          >
        </span>
      </template> -->
    </el-dialog>
  </section>
</template>

<script>
export default {
  props: ["dialogVisible"],
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
    };
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
</style>