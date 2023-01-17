<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="share">
    <img src="../../assets/Frame-190.png" alt="" />
    <div class="text">
      <p>Share Your Theme</p>
      <p>Share your custome theme to public Library</p>
    </div>
    <el-button>Share</el-button>
  </div>
</template>

<style scoped>
.share {
  background: #0093e9;
  border-radius: 24px;
  padding: 1rem 1rem 1rem 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  /* overflow: hidden; */
}

.share .el-button {
  background: #ffffff;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0093e9;
  padding: 1.4rem;
}

.share img {
  width: 7.5rem;
  position: absolute;
  bottom: 0;
  left: 2rem;
}

.share .text p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
}

.share .text p:last-of-type {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.3rem;
}
</style>