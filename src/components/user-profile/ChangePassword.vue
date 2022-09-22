<template>
  <div class="change-password">
    <div class="card">
      <h2>Change Password</h2>
      <el-form>
        <el-row>
          <el-col :sm="24" :md="8">
            <p>Old password</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input
                placeholder="Old password"
                v-model="ruleForm.oldPassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>New password</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input
                placeholder="New password"
                v-model="ruleForm.newPassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Confirm new password</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input
                placeholder="Confirm new password"
                v-model="ruleForm.confirmNewPassword"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button class="update">Change</el-button>
      </el-form>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
    };
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
  color: rgba(255, 255, 255, 0.8);
  background: rgba(160, 166, 169, 0.4);
  border-radius: 40px;
  margin-left: auto;
  display: flex;
  padding: 1.5rem;
}
</style>