<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="features">
    <base-card>
      <h2>Features</h2>
      <img class="wavy-line" src="../../assets/Vector-23.png" alt="" />
      <el-row>
        <el-col>
          <img src="../../assets/easy-to-use@2x.png" alt="" />
          <div class="text">
            <p>Easy to use</p>
            <p>
              Add social media, video, article, website, contents and new
              releases
            </p>
          </div>
        </el-col>
        <el-col>
          <img src="../../assets/link@2x.png" alt="" />
          <div class="text">
            <p>Link to your socials</p>
            <p>Your followers can find you on other platforms</p>
          </div>
        </el-col>
        <el-col>
          <img src="../../assets/web-based@2x.png" alt="" />
          <div class="text">
            <p>Web based</p>
            <p>No need to install anything</p>
          </div>
        </el-col>
      </el-row>
      <!-- <div class="features-content">

      </div> -->
    </base-card>
  </div>
</template>

<style scoped>
.features {
  height: 100%;
}

.features .card {
  background: #d5f7e8;
  height: 100%;
  /* min-height: 23rem; */
}

.features h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  text-transform: capitalize;
  color: #262626;
  text-decoration: wavy;
}

.features img.wavy-line {
  width: 3rem;
  margin: 1rem 0;
}

.features .el-col {
  display: flex;
  align-items: center;
}

.features .el-col:not(:last-of-type) {
  margin-bottom: 1rem;
}

.features .el-col img {
  width: 2rem;
  margin-right: 1rem;
}

.features .el-col .text p:first-of-type {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
}

.features .el-col .text p:nth-of-type(2) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
}
</style>