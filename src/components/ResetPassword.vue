<template>
  <div class="reset-password">
    <p class="create-account">Reset password</p>
    <p class="info">
      Your password has been reset and sent to your email, please check your
      email.
    </p>
    <el-button @click="$emit('closeDialog')">Home Page</el-button>
  </div>
</template>
    
    <script>
export default {
  methods: {
    backToLogin() {
      this.$store.commit("CHANGE_AUTH_OPTION", "login");
    },
  },
};
</script>
    
    <style scoped>
.reset-password .return {
  cursor: pointer;
  width: fit-content;
}

.reset-password p.create-account {
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

.reset-password p.info {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
  margin-top: 0.1rem;
  /* text-align: center; */
  margin-bottom: 1rem;
}

.reset-password .el-button {
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