<template>
  <div class="fonts">
    <h1>Font</h1>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="single-font">
          <p>Carter One</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Concert One</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Dancing Script</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Poiret One</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Poppins</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>PT Mono</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Rajdhani</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Roboto Slab</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="single-font">
          <p>Solway</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <p>Font Color</p>
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
      color2: "#0093E9",
    };
  },
};
</script>

<style scoped>
.fonts {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 2rem;
}

.fonts h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 1rem;
}

.fonts .el-col {
  margin-bottom: 1rem;
}

.fonts .single-font {
  background: #f3f3f5;
  border: 1px solid rgba(38, 38, 38, 0.2);
  border-radius: 12px;
  padding: 1rem 0.5rem;
  cursor: pointer;
}
.fonts .single-font p {
  font-family: "Carter One";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #262626;
  text-align: center;
}

.fonts .el-col:nth-of-type(2) .single-font p {
  font-family: "Concert One";
}
.fonts .el-col:nth-of-type(3) .single-font p {
  font-family: "Dancing Script";
}
.fonts .el-col:nth-of-type(4) .single-font p {
  font-family: "Poiret One";
}
.fonts .el-col:nth-of-type(5) .single-font p {
  font-family: "Poppins";
}
.fonts .el-col:nth-of-type(6) .single-font p {
  font-family: "PT Mono";
}
.fonts .el-col:nth-of-type(7) .single-font p {
  font-family: "Rajdhani";
}
.fonts .el-col:nth-of-type(7) .single-font p {
  font-family: "Roboto Slab";
}
.fonts .el-col:nth-of-type(7) .single-font p {
  font-family: "Solway";
}

.fonts .color-box {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 3.2rem;
  padding: 0 1rem;
}

.fonts .color-box span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: rgba(38, 38, 38, 0.6);
  margin-right: 0.3rem;
}

.fonts :deep(.el-color-picker.el-tooltip__trigger.el-tooltip__trigger) {
  border: 1px solid #000000;
  box-shadow: inset 0px 0px 0px 4px #ffffff;
  border-radius: 12px;
}

.fonts :deep(.el-color-picker__trigger) {
  height: 3rem;
  width: 3rem;
  border-radius: 12px;
}

.fonts :deep(.el-icon.el-color-picker__icon.is-icon-arrow-down) {
  display: none;
}

.fonts .el-row:nth-of-type(2) {
  align-items: center;
}

.fonts p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 56px;
  color: #202226;
}
</style>