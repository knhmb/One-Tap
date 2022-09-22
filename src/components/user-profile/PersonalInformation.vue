<template>
  <div class="personal-information">
    <div class="card">
      <h2>Personal Information</h2>
      <el-form>
        <el-row>
          <el-col :sm="24" :md="8">
            <p>Avatar</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <img class="avatar" src="../../assets/avatar-dummy@2x.jpg" alt="" />
            <el-button class="select-photo">Choose photo</el-button>
            <img class="delete" src="../../assets/del@2x.png" alt="" />
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Username</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Email</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Display name</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input v-model="ruleForm.displayName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button class="update">Update</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "taimanchan",
        email: "chantaiman@gmail.com",
        displayName: "Chan Tai Man",
      },
    };
  },
};
</script>

<style scoped>
.personal-information {
  margin-top: 2rem;
}

.personal-information .card {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
}

.personal-information .el-row {
  align-items: center;
}

.personal-information .el-row .el-col {
  margin-bottom: 1.5rem;
}

.personal-information .el-row .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
}

.personal-information .el-form .el-row :deep(.el-form-item) {
  margin-bottom: 0;
}

.personal-information p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
}

.personal-information h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2.5rem;
}

.personal-information img.avatar {
  width: 4rem;
  border-radius: 100%;
}

.personal-information img.delete {
  width: 1.3rem;
  cursor: pointer;
  background: #e9e9eb;
  border-radius: 40px;
}

.personal-information .el-button.select-photo {
  background: #262626;
  border-radius: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 1rem;
}

.personal-information .el-input :deep(.el-input__wrapper) {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 0.3rem 1rem;
}

.personal-information .el-button.update {
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