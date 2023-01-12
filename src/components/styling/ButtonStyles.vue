<template>
  <div class="button-styles">
    <el-row>
      <el-col :span="6">
        <p>Button Size</p>
      </el-col>
      <el-col :span="18">
        <el-slider v-model="value1" />
      </el-col>
      <el-col :span="6">
        <p>Button Font Color</p>
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
        <p>Button Color</p>
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
      value1: 0,
      color1: "#0093E9",
      color2: "#0093E9",
    };
  },
};
</script>

<style scoped>
.button-styles p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 56px;
  color: #262626;
}

.button-styles .el-row {
  align-items: center;
}

.button-styles .el-col {
  margin-bottom: 1rem;
}

.button-styles :deep(.el-slider__runway) {
  height: 1rem;
  border-radius: 16px;
  background: rgba(0, 147, 233, 0.2);
}
.button-styles :deep(.el-slider__bar) {
  height: 100%;
  background-color: #0093e9;
  border-radius: 16px;
}

.button-styles :deep(.el-slider__button-wrapper) {
  height: 2.7rem;
}

.button-styles
  :deep(.el-slider__button.el-tooltip__trigger.el-tooltip__trigger) {
  border: 2px solid #ffffff;
  border-radius: 4px;
  /* border-radius: 0; */
}

.button-styles :deep(.el-icon.el-color-picker__icon.is-icon-arrow-down) {
  display: none;
}

.button-styles :deep(.el-color-picker.el-tooltip__trigger.el-tooltip__trigger) {
  border: 1px solid #000000;
  box-shadow: inset 0px 0px 0px 4px #ffffff;
  border-radius: 12px;
}

.button-styles :deep(.el-color-picker__trigger) {
  height: 3rem;
  width: 3rem;
  border-radius: 12px;
}

.button-styles .color-box {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 3.2rem;
  padding: 0 1rem;
}

.button-styles .color-box span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: rgba(38, 38, 38, 0.6);
  margin-right: 0.3rem;
}
</style>