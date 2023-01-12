<template>
  <div class="custom-theme">
    <h1>Custom Theme</h1>
    <p>Choosing your customize the Button, Colors, Font & Background</p>
    <div class="box">
      <h2>Buttons</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">
              Button
              <div class="btn-box"></div>
              <div class="btn-box"></div>
              <div class="btn-box"></div>
              <div class="btn-box"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">
              Button
              <div class="btn-box"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">
              Button
              <div class="btn-box"></div>
              <div class="btn-box"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-box">
            <div class="btn">Button</div>
          </div>
        </el-col>
      </el-row>
      <ButtonStyles />
    </div>
  </div>
</template>

<script>
import ButtonStyles from "@/components/styling/ButtonStyles.vue";

export default {
  components: {
    ButtonStyles,
  },
};
</script>

<style scoped>
.custom-theme {
  margin-top: 2rem;
}

.custom-theme h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #262626;
}

.custom-theme p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  margin-top: 0.5rem;
}

.custom-theme .el-col {
  margin-bottom: 1rem;
}

.custom-theme .box {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 2rem;
}

.custom-theme .box h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2rem;
}

.custom-theme .box .inner-box {
  border: 1px solid rgba(38, 38, 38, 0.2);
  border-radius: 12px;
  padding: 1rem;
}

.custom-theme .box .inner-box .btn {
  background: #3d3d3d;
  padding: 1rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
}
.custom-theme .box .el-col:nth-of-type(2) .inner-box .btn {
  border-radius: 8px;
}
.custom-theme .box .el-col:nth-of-type(3) .inner-box .btn {
  border-radius: 40px;
}
.custom-theme .box .el-col:nth-of-type(4) .inner-box .btn {
  border: 1px solid #3d3d3d;
  background: transparent;
  color: #3d3d3d;
}
.custom-theme .box .el-col:nth-of-type(5) .inner-box .btn {
  border: 1px solid #3d3d3d;
  border-radius: 8px;
  background: transparent;
  color: #3d3d3d;
}
.custom-theme .box .el-col:nth-of-type(6) .inner-box .btn {
  border: 1px solid #3d3d3d;
  border-radius: 40px;
  background: transparent;
  color: #3d3d3d;
}
.custom-theme .box .el-col:nth-of-type(7) .inner-box .btn {
  background: #3d3d3d;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
  border-radius: 40px;
  color: #fff;
}
.custom-theme .box .el-col:nth-of-type(8) .inner-box .btn {
  background: #3d3d3d;
  border-radius: 40px 0px 0px 40px;
  color: #fff;
}
.custom-theme .box .el-col:nth-of-type(9) .inner-box .btn {
  border: 1px solid #3d3d3d;
  border-radius: 34px 34px 34px 0px;
  background: transparent;
  color: #3d3d3d;
}
.custom-theme .box .el-col:nth-of-type(10) .inner-box .btn {
  border: 1px solid #3d3d3d;
  background: transparent;
  color: #3d3d3d;
  position: relative;
}

.custom-theme
  .box
  .el-col:nth-of-type(10)
  .inner-box
  .btn
  .btn-box:first-of-type {
  background: #f3f3f5;
  border: 1px solid #3d3d3d;
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  left: -7.5px;
  top: -0.5rem;
  border-radius: 0;
}
.custom-theme
  .box
  .el-col:nth-of-type(10)
  .inner-box
  .btn
  .btn-box:nth-of-type(2) {
  background: #f3f3f5;
  border: 1px solid #3d3d3d;
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  right: -7.5px;
  top: -0.5rem;
  border-radius: 0;
}
.custom-theme
  .box
  .el-col:nth-of-type(10)
  .inner-box
  .btn
  .btn-box:nth-of-type(3) {
  background: #f3f3f5;
  border: 1px solid #3d3d3d;
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  left: -7.5px;
  bottom: -0.4rem;
  border-radius: 0;
}
.custom-theme
  .box
  .el-col:nth-of-type(10)
  .inner-box
  .btn
  .btn-box:nth-of-type(4) {
  background: #f3f3f5;
  border: 1px solid #3d3d3d;
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  right: -7.5px;
  bottom: -0.4rem;
  border-radius: 0;
}

.custom-theme .box .el-col:nth-of-type(11) .inner-box .btn {
  border: 1px solid #3d3d3d;
  background: transparent;
  color: #3d3d3d;
  position: relative;
}
.custom-theme .box .el-col:nth-of-type(11) .inner-box .btn .btn-box {
  border: 1px solid #3d3d3d;
  width: 18.4rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -0.5rem;
}
.custom-theme .box .el-col:nth-of-type(12) .inner-box .btn {
  border: 1px solid #3d3d3d;
  background: transparent;
  color: #3d3d3d;
  position: relative;
}
.custom-theme
  .box
  .el-col:nth-of-type(12)
  .inner-box
  .btn
  .btn-box:first-of-type {
  background: #3d3d3d;
  width: 3rem;
  height: 0.8rem;
  transform: rotate(-45deg);
  position: absolute;
  left: -0.9rem;
  top: 2px;
}
.custom-theme
  .box
  .el-col:nth-of-type(12)
  .inner-box
  .btn
  .btn-box:nth-of-type(2) {
  background: #3d3d3d;
  width: 3rem;
  height: 0.8rem;
  transform: rotate(-45deg);
  position: absolute;
  right: -0.9rem;
  bottom: 2px;
}

.custom-theme .box .el-col:nth-of-type(13) .inner-box .btn {
  position: relative;
}

.custom-theme .box .el-col:nth-of-type(13) .inner-box .btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  right: 0;
  background-repeat: repeat;
  height: 8px;
  background-size: 18px 20px;
  background-image: radial-gradient(
    circle at 8px 16px,
    #3d3d3d 12px,
    transparent 13px
  );
  transform: rotate(180deg);
  overflow: visible;
}
.custom-theme .box .el-col:nth-of-type(13) .inner-box .btn::after {
  content: "";
  position: absolute;
  left: 0;
  top: -7px;
  right: 0;
  background-repeat: repeat;
  height: 8px;
  background-size: 18px 20px;
  background-image: radial-gradient(
    circle at 8px 16px,
    #3d3d3d 12px,
    transparent 13px
  );
  overflow: visible;
}
.custom-theme .box .el-col:nth-of-type(14) .inner-box .btn {
  background: #f3f3f5;
  border: 1px solid #3d3d3d;
  box-shadow: 8px 8px 0px #000000;
  color: #3d3d3d;
}
.custom-theme .box .el-col:nth-of-type(15) .inner-box .btn {
  background: #f3f3f5;
  border: 1px solid #3d3d3d;
  box-shadow: 8px 8px 0px #000000;
  border-radius: 12px;
  color: #3d3d3d;
}
</style>