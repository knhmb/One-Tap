<template>
  <div class="background">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="inner-box">
          <div class="color"></div>
          <p>Flat Color</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="inner-box">
          <div class="color"></div>
          <p>Gradient Color</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="inner-box">
          <div class="color">
            <img src="../../assets/icon.png" alt="" />
          </div>
          <p>Upload Image</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <p>First Color</p>
      </el-col>
      <el-col :span="2">
        <el-color-picker v-model="color1" />
      </el-col>
      <el-col :span="16">
        <div class="color-box">
          <span>#</span>
          <p>{{ color1.replace("#", "") }}</p>
        </div>
      </el-col>
      <el-col :span="6">
        <p>Second Color</p>
      </el-col>
      <el-col :span="2">
        <el-color-picker v-model="color2" />
      </el-col>
      <el-col :span="16">
        <div class="color-box">
          <span>#</span>
          <p>{{ color2.replace("#", "") }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "#0093E9",
      color2: "#0093E9",
    };
  },
};
</script>

<style scoped>
.background {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 2rem;
}

.background .inner-box {
  border: 1px solid rgba(38, 38, 38, 0.2);
  border-radius: 12px;
  padding: 1rem;
}

.background .inner-box .color {
  background: #3d3d3d;
  border-radius: 8px;
  width: 100%;
  height: 16rem;
}

.background .inner-box .color img {
  width: 2rem;
}

.background .inner-box p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #202226;
  text-align: center;
  margin-top: 1rem;
}

.background .el-col:nth-of-type(2) .inner-box .color {
  background: linear-gradient(180deg, #999999 0%, #3d3d3d 100%);
}
.background .el-col:nth-of-type(3) .inner-box .color {
  background: #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background :deep(.el-icon.el-color-picker__icon.is-icon-arrow-down) {
  display: none;
}

.background :deep(.el-color-picker.el-tooltip__trigger.el-tooltip__trigger) {
  border: 1px solid #000000;
  box-shadow: inset 0px 0px 0px 4px #ffffff;
  border-radius: 12px;
}

.background :deep(.el-color-picker__trigger) {
  height: 3rem;
  width: 3rem;
  border-radius: 12px;
}

.background .color-box {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 3.2rem;
  padding: 0 1rem;
}

.background .color-box span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: rgba(38, 38, 38, 0.6);
  margin-right: 0.3rem;
}

.background p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 56px;
  color: #202226;
}

.background .el-row:nth-of-type(2) {
  margin-top: 2rem;
  align-items: center;
}

.background .el-row:nth-of-type(2) .el-col {
  margin-bottom: 1rem;
}
</style>