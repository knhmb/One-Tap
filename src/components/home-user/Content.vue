<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-user-content">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template #title>
          <img
            class="video-icon"
            src="../../assets/display-video@2x.png"
            alt=""
          />
          <p>What is One Tap?</p>
        </template>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
          <img
            class="video-icon"
            src="../../assets/display-video@2x.png"
            alt=""
          />
          <p>Zanzibar 2020, Tanzania</p>
        </template>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
          <img
            class="video-icon"
            src="../../assets/display-video@2x.png"
            alt=""
          />
          <p>10 Best Places to Visit in Canada</p>
        </template>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
      </el-collapse-item>
    </el-collapse>
    <div class="collapse">
      <img src="../../assets/display-photo@2x.png" alt="" />
      <p>Travel photo - part 1</p>
    </div>
    <div class="collapse">
      <img src="../../assets/display-photo@2x.png" alt="" />
      <p>Travel photo - part 2</p>
    </div>
    <div class="collapse">
      <img src="../../assets/display-link@2x.png" alt="" />
      <p>One Tap International Limited</p>
    </div>
    <div class="collapse">
      <img src="../../assets/display-link@2x.png" alt="" />
      <p>Purchase Your One Tap DBC Now!</p>
    </div>
    <img src="../../assets/brand-logo@2x.png" class="logo" alt="" />
  </div>
</template>

<style scoped>
.home-user-content {
  width: 100%;
}

.home-user-content .el-collapse {
  /* box-shadow: 0px 0.5px 1px rgba(60, 119, 104, 0.4),
    0px 4px 8px rgba(60, 119, 104, 0.24); */
  border-radius: 24px;
  border: none;
}

.home-user-content .el-collapse :deep(.el-collapse-item) {
  margin-bottom: 1rem;
}

.home-user-content .el-collapse :deep(.el-collapse-item__arrow) {
  margin-left: 0;
}

.home-user-content .el-collapse :deep(.el-collapse-item__header) {
  border-radius: 24px;
  box-shadow: 0px 0.5px 1px rgba(60, 119, 104, 0.4),
    0px 4px 8px rgba(60, 119, 104, 0.24);
  padding: 1rem;
  justify-content: space-between;
}

.home-user-content .el-collapse :deep(.el-collapse-item__header p) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202226;
}

.home-user-content .el-collapse :deep(.el-collapse-item__content) {
  padding: 0;
  border-radius: 24px;
  background: transparent;
}

.home-user-content .el-collapse :deep(.el-collapse-item__wrap) {
  border-radius: 24px;
  background: transparent;
  padding: 0;
}

.home-user-content img.video-icon {
  width: 1.7rem;
}

.home-user-content iframe {
  width: 100%;
  height: 18rem;
}
.home-user-content .collapse {
  background: #ffffff;
  box-shadow: 0px 0.5px 1px rgba(60, 119, 104, 0.4),
    0px 4px 8px rgba(60, 119, 104, 0.24);
  border-radius: 24px;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.home-user-content .collapse img {
  width: 1.7rem;
}

.home-user-content .collapse p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #202226;
  text-align: center;
  width: 100%;
}

.home-user-content img.logo {
  width: 3rem;
  margin: 0 auto;
  display: block;
  margin-top: 3rem;
}
</style>