<template>
  <div class="create-your-own">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <p>
              Create <br />
              Your <br />
              Own
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="single-style">
          <div class="inner-style">
            <div class="content">
              <img src="../../assets/avatar-default.png" alt="" />
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<style scoped>
.create-your-own {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 2rem;
}

.create-your-own .el-row .el-col {
  margin-bottom: 1rem;
}

.create-your-own .single-style {
  border: 1px solid rgba(38, 38, 38, 0.2);
  border-radius: 12px;
  padding: 1rem;
  height: 20rem;
  width: 100%;
}

.create-your-own .el-col .single-style .inner-style {
  background: #ffffff;
  border: 1px dashed #333333;
  border-radius: 16px;
  padding: 1rem;
  height: 100%;
}

.create-your-own .el-col:nth-of-type(2) .single-style .inner-style {
  background: #ffffff;
  border: none;
}

.create-your-own .single-style .inner-style:first-of-type {
  display: flex;
  justify-content: center;
  align-items: center;
}

.create-your-own .single-style .inner-style p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #262626;
}

.create-your-own .single-style .inner-style .content img {
  width: 4rem;
  margin: 0 auto;
  display: block;
  margin-bottom: 1rem;
}

.create-your-own .single-style .inner-style .content .btn {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 80px;
  width: 12rem;
  height: 2rem;
  margin-bottom: 1rem;
}

.create-your-own .el-col:nth-of-type(3) .single-style .inner-style {
  background: #2288e5;
  border: none;
}

.create-your-own
  .el-col:nth-of-type(3)
  .single-style
  .inner-style
  .content
  .btn {
  border-radius: 8px;
  border: none;
}
.create-your-own .el-col:nth-of-type(4) .single-style .inner-style {
  background: linear-gradient(205.3deg, #f88f8f 0%, #a9413a 100%);
  border: none;
}

.create-your-own
  .el-col:nth-of-type(4)
  .single-style
  .inner-style
  .content
  .btn {
  border-radius: 20px 20px 20px 0px;
  border: none;
}
.create-your-own .el-col:nth-of-type(5) .single-style .inner-style {
  background: linear-gradient(
    205.3deg,
    #556691 0%,
    #3c2149 98.44%,
    #331b65 98.45%
  );
  border: none;
}

.create-your-own
  .el-col:nth-of-type(5)
  .single-style
  .inner-style
  .content
  .btn {
  border-radius: 0px;
  border: none;
  position: relative;
}
.create-your-own
  .el-col:nth-of-type(5)
  .single-style
  .inner-style
  .content
  .btn::before {
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
    #fff 12px,
    transparent 13px
  );
  transform: rotate(180deg);
}

.create-your-own
  .el-col:nth-of-type(5)
  .single-style
  .inner-style
  .content
  .btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 32px;
  right: 0;
  background-repeat: repeat;
  height: 8px;
  background-size: 18px 20px;
  background-image: radial-gradient(
    circle at 8px 17px,
    #fff 12px,
    transparent 13px
  );
}

.create-your-own .el-col:nth-of-type(6) .single-style .inner-style {
  background: #aa937d;
  border: none;
}

.create-your-own
  .el-col:nth-of-type(6)
  .single-style
  .inner-style
  .content
  .btn {
  border: 1px solid #ffffff;
  border-radius: 8px;
  background: transparent;
}
.create-your-own .el-col:nth-of-type(7) .single-style .inner-style {
  background: linear-gradient(205.3deg, #d68ff8 0%, #863aa9 100%);
  border: none;
}

.create-your-own
  .el-col:nth-of-type(7)
  .single-style
  .inner-style
  .content
  .btn {
  border: 1px solid #3d175a;
  border-radius: 40px;
  background: transparent;
}
.create-your-own .el-col:nth-of-type(8) .single-style .inner-style {
  background: #57ae6a;
  border: none;
}

.create-your-own
  .el-col:nth-of-type(8)
  .single-style
  .inner-style
  .content
  .btn {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
  border-radius: 40px;
  border: none;
}
.create-your-own .el-col:nth-of-type(9) .single-style .inner-style {
  background: linear-gradient(205.3deg, #ea9445 0%, #9220c8 100%);
  border: none;
}

.create-your-own
  .el-col:nth-of-type(9)
  .single-style
  .inner-style
  .content
  .btn {
  background: #ffffff;
  border-radius: 8px;
  border: none;
}

.create-your-own .el-pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.create-your-own .el-pagination :deep(.number) {
  border: 1px solid #262626;
  border-radius: 12px;
}

.create-your-own .el-pagination :deep(.number.is-active) {
  border: none;
}
</style>