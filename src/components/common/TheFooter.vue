<template>
  <footer>
    <base-container>
      <el-row>
        <el-col :sm="24" :md="12">
          <p>
            Copyright © 2022 One Tap International Limited. All Rights Reserved
          </p>
        </el-col>
        <el-col :sm="24" :md="12">
          <p @click="navigate('/about-us')">About us</p>
          <p @click="navigate('/contact-us')">Contact us</p>
          <p @click="navigate('/terms-and-conditions')">Terms & Conditions</p>
        </el-col>
      </el-row>
    </base-container>
  </footer>
</template>

<script>
export default {
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
footer {
  background: #f3f3f5;
}

footer .container {
  padding-top: 0;
  padding-bottom: 0.5;
}

footer .el-col:last-of-type {
  display: flex;
  justify-content: flex-end;
}

footer .el-col:last-of-type p {
  cursor: pointer;
}

footer .el-col:last-of-type p:nth-of-type(2) {
  margin: 0 2.5rem;
}

footer p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
}

@media screen and (max-width: 991px) {
  footer .el-col:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  footer .el-col:last-of-type p:nth-of-type(2) {
    margin: 1rem 0;
  }

  footer .el-col:first-of-type p {
    margin-bottom: 1rem;
  }

  footer p {
    text-align: center;
  }
}
</style>