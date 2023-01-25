<template>
  <div class="change-password">
    <div class="card">
      <h2>Change Password</h2>
      <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
        <el-row>
          <el-col :sm="24" :md="8">
            <p>Old password</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="oldPassword">
              <el-input
                type="password"
                placeholder="Old password"
                v-model="ruleForm.oldPassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>New password</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="newPassword">
              <el-input
                type="password"
                placeholder="New password"
                v-model="ruleForm.newPassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Confirm new password</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="confirmNewPassword">
              <el-input
                type="password"
                placeholder="Confirm new password"
                v-model="ruleForm.confirmNewPassword"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button
          :disabled="isPasswordEmpty"
          class="update"
          @click="changePass"
          >Change</el-button
        >
      </el-form>
    </div>
  </div>
</template>
  
  <script>
import { ElNotification } from "element-plus";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("New password is required!"));
      } else {
        if (this.ruleForm.confirmNewPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField(
            "confirmNewPassword",
            () => null
          );
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the new password again."));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "Old password is required!",
            trigger: "blur",
          },
        ],
        newPassword: [{ validator: validatePass, trigger: "blur" }],
        confirmNewPassword: [
          { validator: validateConfirmPass, trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    isPasswordEmpty() {
      return (
        this.ruleForm.oldPassword.length <= 0 ||
        this.ruleForm.newPassword.length <= 0 ||
        this.ruleForm.confirmNewPassword.length <= 0
      );
    },
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
  },
  methods: {
    passwordChecker(password) {
      const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(password);
    },
    changePass() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const isValidPass = this.passwordChecker(this.ruleForm.newPassword);
          if (isValidPass) {
            const data = {
              password: this.ruleForm.newPassword,
              password2: this.ruleForm.confirmNewPassword,
            };
            this.$store
              .dispatch("profile/updateUserDetails", {
                id: this.userDetails.item.id,
                data,
              })
              .then(() => {
                ElNotification({
                  title: "Success",
                  message: "Password has been updated",
                  type: "success",
                });
                this.$refs.ruleFormRef.resetFields();
              });
          }
        } else {
          ElNotification({
            title: "Error",
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!",
            type: "error",
          });
        }
      });
    },
  },
};
</script>
  
  <style scoped>
.change-password {
  margin-top: 2rem;
}

.change-password .card {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
}

.change-password .el-row {
  align-items: center;
}

.change-password .el-row .el-col {
  margin-bottom: 1.5rem;
}

/* .change-password .el-row .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
} */

.change-password .el-form .el-row :deep(.el-form-item) {
  margin-bottom: 0;
}

.change-password p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
}

.change-password h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2.5rem;
}

.change-password .el-input :deep(.el-input__wrapper) {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 0.3rem 1rem;
}

.change-password .el-button.update {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* color: rgba(255, 255, 255, 0.8);
  background: rgba(160, 166, 169, 0.4); */
  border-radius: 40px;
  margin-left: auto;
  display: flex;
  padding: 1.5rem;
  background: #0093e9;
  border-color: #0093e9;
  color: #fff;
}
</style>