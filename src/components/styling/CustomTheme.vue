<template>
  <div class="custom-theme">
    <h1>Custom Theme</h1>
    <p>Choosing your customize the Button, Colors, Font & Background</p>
    <div class="box">
      <h2>Buttons</h2>
      <el-row>
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
    </div>
  </div>
</template>

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
</style>