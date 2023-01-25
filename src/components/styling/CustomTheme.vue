<template>
  <div class="custom-theme">
    <h1>Custom Theme</h1>
    <p>Choosing your customize the Button, Colors, Font & Background</p>
    <div class="box">
      <h2>Buttons</h2>
      <el-row :gutter="20">
        <el-col v-for="button in buttons" :key="button.id" :span="8">
          <div class="inner-box">
            <div :class="`btn-${button.id}`">Buttons</div>
          </div>
        </el-col>
        <!-- <el-col :span="8">
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
        </el-col> -->
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
  computed: {
    buttons() {
      return this.$store.getters["profile/buttons"];
    },
  },
  mounted() {
    // const btns = document.querySelectorAll(".btn");
    // console.log(btns);
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

/* .custom-theme .box .inner-box .btn {
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
} */

/* API CSS STYLES */

/** f3015299-eb0f-473b-90c2-641ef06faa7c **/
.btn-f3015299-eb0f-473b-90c2-641ef06faa7c {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc3NDMpIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgZmlsbD0iIzBGNzNFOCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc4Nl83NzQzIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 72dde89d-1407-4e4f-9204-ac39a4398a8e **/
.btn-72dde89d-1407-4e4f-9204-ac39a4398a8e {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc3OTYpIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgcng9IjgiIGZpbGw9IiMwRjczRTgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83ODZfNzc5NiI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** d6403450-0a44-4e08-8b7c-43d9f5614cfe **/
.btn-d6403450-0a44-4e08-8b7c-43d9f5614cfe {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4MTgpIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgcng9IjM1IiBmaWxsPSIjMEY3M0U4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzg2Xzc4MTgiPgo8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
  border-image-slice: 35 36 36 35 fill;
  border-image-repeat: round;
  border-image-width: 36px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** c3497c1c-242a-4999-85ce-b618bf17b62c **/
.btn-c3497c1c-242a-4999-85ce-b618bf17b62c {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4MzEpIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMzkiIGhlaWdodD0iNzEiIHN0cm9rZT0iIzBGNzNFOCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc4Nl83ODMxIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 40f2d476-5445-491e-b4a1-589eaca55f82 **/
.btn-40f2d476-5445-491e-b4a1-589eaca55f82 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4NDIpIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMzkiIGhlaWdodD0iNzEiIHJ4PSI3LjUiIHN0cm9rZT0iIzBGNzNFOCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc4Nl83ODQyIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 6d0c3ec4-2254-485d-b3ff-15c93e1d4580 **/
.btn-6d0c3ec4-2254-485d-b3ff-15c93e1d4580 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4NTMpIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMzkiIGhlaWdodD0iNzEiIHJ4PSIzNC41IiBzdHJva2U9IiMwRjczRTgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83ODZfNzg1MyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
  border-image-slice: 35 36 36 35 fill;
  border-image-repeat: round;
  border-image-width: 36px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 1ba04d1d-dd12-4585-830f-1c73847a5bef **/
.btn-1ba04d1d-dd12-4585-830f-1c73847a5bef {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4NjkpIj4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgcng9IjM1IiBmaWxsPSIjMEY3M0U4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzg2Xzc4NjkiPgo8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
  border-image-slice: 35 36 36 35 fill;
  border-image-repeat: round;
  border-image-width: 36px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 4e0fdcdd-51e3-4ec5-8289-8929896e3535 **/
.btn-4e0fdcdd-51e3-4ec5-8289-8929896e3535 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4NzcpIj4KPHBhdGggZD0iTTAgMzVDMCAxNS42NyAxNS42NyAwIDM1IDBIMjQwVjcySDM1QzE1LjY3IDcyIDAgNTYuMzMgMCAzN1YzNVoiIGZpbGw9IiMwRjczRTgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83ODZfNzg3NyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
  border-image-slice: 35 36 36 35 fill;
  border-image-repeat: round;
  border-image-width: 36px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 58784988-d3b9-4518-9eab-6b56d7f8a152 **/
.btn-58784988-d3b9-4518-9eab-6b56d7f8a152 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4ODUpIj4KPHBhdGggZD0iTTM1IDAuNUgyMDVDMjI0LjA1NCAwLjUgMjM5LjUgMTUuOTQ2MiAyMzkuNSAzNVYzN0MyMzkuNSA1Ni4wNTM4IDIyNC4wNTQgNzEuNSAyMDUgNzEuNUgwLjVWMzVDMC41IDE1Ljk0NjIgMTUuOTQ2MiAwLjUgMzUgMC41WiIgc3Ryb2tlPSIjMEY3M0U4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzg2Xzc4ODUiPgo8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
  border-image-slice: 35 36 36 35 fill;
  border-image-repeat: round;
  border-image-width: 36px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 61b1b599-936e-4f07-a8b5-a0111de5f320 **/
.btn-61b1b599-936e-4f07-a8b5-a0111de5f320 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc4OTMpIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgc3Ryb2tlPSIjMEY3M0U4Ii8+CjxyZWN0IHg9IjAuNSIgeT0iNTYuNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBzdHJva2U9IiMwRjczRTgiLz4KPHJlY3QgeD0iMjI0LjUiIHk9IjAuNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBzdHJva2U9IiMwRjczRTgiLz4KPHJlY3QgeD0iMjI0LjUiIHk9IjU2LjUiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgc3Ryb2tlPSIjMEY3M0U4Ii8+CjxwYXRoIGQ9Ik03IDE1LjVINi41VjE2VjU2VjU2LjVIN0gxNS41VjY1VjY1LjVIMTZIMjI0SDIyNC41VjY1VjU2LjVIMjMzSDIzMy41VjU2VjE2VjE1LjVIMjMzSDIyNC41VjdWNi41SDIyNEgxNkgxNS41VjdWMTUuNUg3WiIgc3Ryb2tlPSIjMEY3M0U4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzg2Xzc4OTMiPgo8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 903f1a0c-57bc-4a40-865b-ec247cd13aa3 **/
.btn-903f1a0c-57bc-4a40-865b-ec247cd13aa3 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg2Xzc5MjEpIj4KPHJlY3QgeD0iMC41IiB5PSIxMi41IiB3aWR0aD0iMjM5IiBoZWlnaHQ9IjQ3IiBzdHJva2U9IiMwRjczRTgiLz4KPHJlY3QgeD0iMTIuNSIgeT0iMC41IiB3aWR0aD0iMjE1IiBoZWlnaHQ9IjcxIiBzdHJva2U9IiMwRjczRTgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83ODZfNzkyMSI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 11a00172-fc51-400f-ae98-dcfe6fc85893 **/
.btn-11a00172-fc51-400f-ae98-dcfe6fc85893 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSI4LjUiIHk9IjguNSIgd2lkdGg9IjIyMyIgaGVpZ2h0PSI1NSIgc3Ryb2tlPSIjMEY3M0U4Ii8+CjxwYXRoIGQ9Ik0yMzIuMzkxIDM2TDIwNSA2My4zOTEzTDIxMi42MDkgNzFMMjQwIDQzLjYwODdMMjMyLjM5MSAzNloiIGZpbGw9IiMwRjczRTgiLz4KPHBhdGggZD0iTTI3LjM5MTMgMEwwIDI3LjM5MTNMNy42MDg3IDM1TDM1IDcuNjA4N0wyNy4zOTEzIDBaIiBmaWxsPSIjMEY3M0U4Ii8+Cjwvc3ZnPgo=");
  border-image-slice: 35 36 36 35 fill;
  border-image-repeat: round;
  border-image-width: 36px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 1055e692-c415-4137-a915-61b0fe865605 **/
.btn-1055e692-c415-4137-a915-61b0fe865605 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg5XzgwNTYpIj4KPHJlY3QgeT0iNCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI2NCIgZmlsbD0iIzFDNjNDRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0IDBDMjUuMzcxOSAwIDI2Ljc0MzkgMC40ODkyNTkgMjcuOTk1IDEuNDY3NzdDMzAuNDk4NyAzLjQyNDggMzMuNDgxMyAzLjQyNDggMzUuOTg1IDEuNDY3NzdDMzguNDg4NyAtMC40ODkyNTcgNDEuNDcxNCAtMC40ODkyNTcgNDMuOTc1IDEuNDY3NzdDNDQuMzYxNSAxLjc2OTgxIDQ0Ljc1OTMgMi4wMjUyNCA0NS4xNjUgMi4yMzQwNUM0Ny4yODM1IDMuMzI0NDQgNDkuNjE3MiAzLjE0MzY3IDUxLjY2NDQgMS42OTE3NUM1MS43NjU0IDEuNjIwMTggNTEuODY1NiAxLjU0NTUyIDUxLjk2NTEgMS40Njc3N0M1My4yMTY2IDAuNDg5NDk2IDU0LjU4NzggMC4wMDAyMzg5MTYgNTUuOTU5IDBINTUuOTYwOUw1NiAwLjAwMDEzODQ4N1Y0TDI0IDRWMFpNNTYgMEM1Ny4zNzIgMCA1OC43NDM5IDAuNDg5MjU5IDU5Ljk5NTEgMS40Njc3N0M2Mi40OTg3IDMuNDI0OCA2NS40ODE0IDMuNDI0OCA2Ny45ODUxIDEuNDY3NzdDNzAuNDg4NyAtMC40ODkyNTcgNzMuNDcxNCAtMC40ODkyNTcgNzUuOTc1MSAxLjQ2Nzc3Qzc2LjM2MTUgMS43Njk4MSA3Ni43NTkzIDIuMDI1MjQgNzcuMTY1IDIuMjM0MDVDNzkuMjgzNiAzLjMyNDQ0IDgxLjYxNzIgMy4xNDM2NyA4My42NjQ1IDEuNjkxNzVDODMuNzY1NCAxLjYyMDE4IDgzLjg2NTYgMS41NDU1MiA4My45NjUxIDEuNDY3NzdDODUuMjE2NiAwLjQ4OTQ5NiA4Ni41ODc4IDAuMDAwMjM4OTE2IDg3Ljk1OTEgMEg4Ny45NjA5TDg4IDAuMDAwMTM4MTc2VjBDODkuMzcxOSAwIDkwLjc0MzggMC40ODkyNTkgOTEuOTk1IDEuNDY3NzdDOTQuNDk4NiAzLjQyNDggOTcuNDgxMyAzLjQyNDggOTkuOTg1IDEuNDY3NzdDMTAyLjQ4OSAtMC40ODkyNTcgMTA1LjQ3MSAtMC40ODkyNTcgMTA3Ljk3NSAxLjQ2Nzc3QzEwOC4zNjEgMS43Njk4MSAxMDguNzU5IDIuMDI1MjQgMTA5LjE2NSAyLjIzNDA1QzExMS4yODMgMy4zMjQ0NCAxMTMuNjE3IDMuMTQzNjcgMTE1LjY2NCAxLjY5MTc1QzExNS43NjUgMS42MjAxOCAxMTUuODY2IDEuNTQ1NTIgMTE1Ljk2NSAxLjQ2Nzc3QzExNy4yMTcgMC40ODk0OTYgMTE4LjU4OCAwLjAwMDIzODkxNiAxMTkuOTU5IDBIMTE5Ljk2MUwxMjAgMC4wMDAxMzg0ODdWNEg4OEw4OCA0SDU2VjBaTTEyMCAwQzEyMS4zNzIgMCAxMjIuNzQ0IDAuNDg5MjU5IDEyMy45OTUgMS40Njc3N0MxMjYuNDk5IDMuNDI0OCAxMjkuNDgxIDMuNDI0OCAxMzEuOTg1IDEuNDY3NzdDMTM0LjQ4OSAtMC40ODkyNTcgMTM3LjQ3MSAtMC40ODkyNTcgMTM5Ljk3NSAxLjQ2Nzc3QzE0MC4zNjEgMS43Njk4MSAxNDAuNzU5IDIuMDI1MjQgMTQxLjE2NSAyLjIzNDA1QzE0My4yODQgMy4zMjQ0NCAxNDUuNjE3IDMuMTQzNjcgMTQ3LjY2NCAxLjY5MTc1QzE0Ny43NjUgMS42MjAxOCAxNDcuODY2IDEuNTQ1NTIgMTQ3Ljk2NSAxLjQ2Nzc3QzE0OS4yMTcgMC40ODk0OTYgMTUwLjU4OCAwLjAwMDIzODkxNiAxNTEuOTU5IDBIMTUxLjk2MUwxNTIgMC4wMDAxMzg0ODdWNEwxMjAgNFYwWk0xNTUuOTk1IDEuNDY3NzdDMTU0Ljc0NCAwLjQ4OTI1OSAxNTMuMzcyIDAgMTUyIDBWNEwxODQgNEgyMTZWMC4wMDAxMzg0ODdMMjE1Ljk2MSAwSDIxNS45NTlDMjE0LjU4OCAwLjAwMDIzODkxNiAyMTMuMjE3IDAuNDg5NDk2IDIxMS45NjUgMS40Njc3N0MyMTEuODY2IDEuNTQ1NTIgMjExLjc2NSAxLjYyMDE4IDIxMS42NjQgMS42OTE3NUMyMDkuNjE3IDMuMTQzNjcgMjA3LjI4MyAzLjMyNDQ0IDIwNS4xNjUgMi4yMzQwNUMyMDQuNzU5IDIuMDI1MjQgMjA0LjM2MSAxLjc2OTgxIDIwMy45NzUgMS40Njc3N0MyMDEuNDcxIC0wLjQ4OTI1NyAxOTguNDg5IC0wLjQ4OTI1NyAxOTUuOTg1IDEuNDY3NzdDMTkzLjQ4MSAzLjQyNDggMTkwLjQ5OSAzLjQyNDggMTg3Ljk5NSAxLjQ2Nzc3QzE4Ni43NDQgMC40ODkyNTkgMTg1LjM3MiAwIDE4NCAwSDE4My45NjFIMTgzLjk1OUMxODIuNTg4IDAuMDAwMjM4OTE2IDE4MS4yMTcgMC40ODk0OTYgMTc5Ljk2NSAxLjQ2Nzc3QzE3OS44NjYgMS41NDU1MiAxNzkuNzY1IDEuNjIwMTggMTc5LjY2NCAxLjY5MTc1QzE3Ny42MTcgMy4xNDM2NyAxNzUuMjg0IDMuMzI0NDQgMTczLjE2NSAyLjIzNDA1QzE3Mi43NTkgMi4wMjUyNCAxNzIuMzYxIDEuNzY5ODEgMTcxLjk3NSAxLjQ2Nzc3QzE2OS40NzEgLTAuNDg5MjU3IDE2Ni40ODkgLTAuNDg5MjU3IDE2My45ODUgMS40Njc3N0MxNjEuNDgxIDMuNDI0OCAxNTguNDk5IDMuNDI0OCAxNTUuOTk1IDEuNDY3NzdaIiBmaWxsPSIjMUM2M0NEIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNzJDMjUuMzcxOSA3MiAyNi43NDM5IDcxLjUxMDcgMjcuOTk1IDcwLjUzMjJDMzAuNDk4NyA2OC41NzUyIDMzLjQ4MTMgNjguNTc1MiAzNS45ODUgNzAuNTMyMkMzOC40ODg3IDcyLjQ4OTMgNDEuNDcxNCA3Mi40ODkzIDQzLjk3NSA3MC41MzIyQzQ0LjM2MTUgNzAuMjMwMiA0NC43NTkzIDY5Ljk3NDggNDUuMTY1IDY5Ljc2NkM0Ny4yODM1IDY4LjY3NTYgNDkuNjE3MiA2OC44NTYzIDUxLjY2NDQgNzAuMzA4M0M1MS43NjU0IDcwLjM3OTggNTEuODY1NiA3MC40NTQ1IDUxLjk2NTEgNzAuNTMyMkM1My4yMTY2IDcxLjUxMDUgNTQuNTg3OCA3MS45OTk4IDU1Ljk1OSA3Mkg1NS45NjA5TDU2IDcxLjk5OTlWNjhMMjQgNjhWNzJaTTU2IDcyQzU3LjM3MiA3MiA1OC43NDM5IDcxLjUxMDcgNTkuOTk1MSA3MC41MzIyQzYyLjQ5ODcgNjguNTc1MiA2NS40ODE0IDY4LjU3NTIgNjcuOTg1MSA3MC41MzIyQzcwLjQ4ODcgNzIuNDg5MyA3My40NzE0IDcyLjQ4OTMgNzUuOTc1MSA3MC41MzIyQzc2LjM2MTUgNzAuMjMwMiA3Ni43NTkzIDY5Ljk3NDggNzcuMTY1IDY5Ljc2NkM3OS4yODM2IDY4LjY3NTYgODEuNjE3MiA2OC44NTYzIDgzLjY2NDUgNzAuMzA4M0M4My43NjU0IDcwLjM3OTggODMuODY1NiA3MC40NTQ1IDgzLjk2NTEgNzAuNTMyMkM4NS4yMTY2IDcxLjUxMDUgODYuNTg3OCA3MS45OTk4IDg3Ljk1OTEgNzJIODcuOTYwOUw4OCA3MS45OTk5VjcyQzg5LjM3MTkgNzIgOTAuNzQzOCA3MS41MTA3IDkxLjk5NSA3MC41MzIyQzk0LjQ5ODYgNjguNTc1MiA5Ny40ODEzIDY4LjU3NTIgOTkuOTg1IDcwLjUzMjJDMTAyLjQ4OSA3Mi40ODkzIDEwNS40NzEgNzIuNDg5MyAxMDcuOTc1IDcwLjUzMjJDMTA4LjM2MSA3MC4yMzAyIDEwOC43NTkgNjkuOTc0OCAxMDkuMTY1IDY5Ljc2NkMxMTEuMjgzIDY4LjY3NTYgMTEzLjYxNyA2OC44NTYzIDExNS42NjQgNzAuMzA4M0MxMTUuNzY1IDcwLjM3OTggMTE1Ljg2NiA3MC40NTQ1IDExNS45NjUgNzAuNTMyMkMxMTcuMjE3IDcxLjUxMDUgMTE4LjU4OCA3MS45OTk4IDExOS45NTkgNzJIMTE5Ljk2MUwxMjAgNzEuOTk5OVY2OEg4OEw4OCA2OEg1NlY3MlpNMTIwIDcyQzEyMS4zNzIgNzIgMTIyLjc0NCA3MS41MTA3IDEyMy45OTUgNzAuNTMyMkMxMjYuNDk5IDY4LjU3NTIgMTI5LjQ4MSA2OC41NzUyIDEzMS45ODUgNzAuNTMyMkMxMzQuNDg5IDcyLjQ4OTMgMTM3LjQ3MSA3Mi40ODkzIDEzOS45NzUgNzAuNTMyMkMxNDAuMzYxIDcwLjIzMDIgMTQwLjc1OSA2OS45NzQ4IDE0MS4xNjUgNjkuNzY2QzE0My4yODQgNjguNjc1NiAxNDUuNjE3IDY4Ljg1NjMgMTQ3LjY2NCA3MC4zMDgzQzE0Ny43NjUgNzAuMzc5OCAxNDcuODY2IDcwLjQ1NDUgMTQ3Ljk2NSA3MC41MzIyQzE0OS4yMTcgNzEuNTEwNSAxNTAuNTg4IDcxLjk5OTggMTUxLjk1OSA3MkgxNTEuOTYxTDE1MiA3MS45OTk5VjY4TDEyMCA2OFY3MlpNMTU1Ljk5NSA3MC41MzIyQzE1NC43NDQgNzEuNTEwNyAxNTMuMzcyIDcyIDE1MiA3MlY2OEwxODQgNjhIMjE2VjcxLjk5OTlMMjE1Ljk2MSA3MkgyMTUuOTU5QzIxNC41ODggNzEuOTk5OCAyMTMuMjE3IDcxLjUxMDUgMjExLjk2NSA3MC41MzIyQzIxMS44NjYgNzAuNDU0NSAyMTEuNzY1IDcwLjM3OTggMjExLjY2NCA3MC4zMDgzQzIwOS42MTcgNjguODU2MyAyMDcuMjgzIDY4LjY3NTYgMjA1LjE2NSA2OS43NjZDMjA0Ljc1OSA2OS45NzQ4IDIwNC4zNjEgNzAuMjMwMiAyMDMuOTc1IDcwLjUzMjJDMjAxLjQ3MSA3Mi40ODkzIDE5OC40ODkgNzIuNDg5MyAxOTUuOTg1IDcwLjUzMjJDMTkzLjQ4MSA2OC41NzUyIDE5MC40OTkgNjguNTc1MiAxODcuOTk1IDcwLjUzMjJDMTg2Ljc0NCA3MS41MTA3IDE4NS4zNzIgNzIgMTg0IDcySDE4My45NjFIMTgzLjk1OUMxODIuNTg4IDcxLjk5OTggMTgxLjIxNyA3MS41MTA1IDE3OS45NjUgNzAuNTMyMkMxNzkuODY2IDcwLjQ1NDUgMTc5Ljc2NSA3MC4zNzk4IDE3OS42NjQgNzAuMzA4M0MxNzcuNjE3IDY4Ljg1NjMgMTc1LjI4NCA2OC42NzU2IDE3My4xNjUgNjkuNzY2QzE3Mi43NTkgNjkuOTc0OCAxNzIuMzYxIDcwLjIzMDIgMTcxLjk3NSA3MC41MzIyQzE2OS40NzEgNzIuNDg5MyAxNjYuNDg5IDcyLjQ4OTMgMTYzLjk4NSA3MC41MzIyQzE2MS40ODEgNjguNTc1MiAxNTguNDk5IDY4LjU3NTIgMTU1Ljk5NSA3MC41MzIyWiIgZmlsbD0iIzFDNjNDRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xNjggMEMtMTY2LjYyOCAwIC0xNjUuMjU2IDAuNDg5MjU5IC0xNjQuMDA1IDEuNDY3NzdDLTE2MS41MDEgMy40MjQ4IC0xNTguNTE5IDMuNDI0OCAtMTU2LjAxNSAxLjQ2Nzc3Qy0xNTMuNTExIC0wLjQ4OTI1NyAtMTUwLjUyOSAtMC40ODkyNTcgLTE0OC4wMjUgMS40Njc3N0MtMTQ3LjYzOSAxLjc2OTgxIC0xNDcuMjQxIDIuMDI1MjQgLTE0Ni44MzUgMi4yMzQwNUMtMTQ0LjcxNiAzLjMyNDQ0IC0xNDIuMzgzIDMuMTQzNjcgLTE0MC4zMzYgMS42OTE3NUMtMTQwLjIzNSAxLjYyMDE4IC0xNDAuMTM0IDEuNTQ1NTIgLTE0MC4wMzUgMS40Njc3N0MtMTM4Ljc4MyAwLjQ4OTQ5NiAtMTM3LjQxMiAwLjAwMDIzODkxNiAtMTM2LjA0MSAwSC0xMzYuMDM5TC0xMzYgMC4wMDAxMzg0ODdWNEwtMTY4IDRWMFpNLTEzNiAwQy0xMzQuNjI4IDAgLTEzMy4yNTYgMC40ODkyNTkgLTEzMi4wMDUgMS40Njc3N0MtMTI5LjUwMSAzLjQyNDggLTEyNi41MTkgMy40MjQ4IC0xMjQuMDE1IDEuNDY3NzdDLTEyMS41MTEgLTAuNDg5MjU3IC0xMTguNTI5IC0wLjQ4OTI1NyAtMTE2LjAyNSAxLjQ2Nzc3Qy0xMTUuNjM5IDEuNzY5ODEgLTExNS4yNDEgMi4wMjUyNCAtMTE0LjgzNSAyLjIzNDA1Qy0xMTIuNzE2IDMuMzI0NDQgLTExMC4zODMgMy4xNDM2NyAtMTA4LjMzNiAxLjY5MTc1Qy0xMDguMjM1IDEuNjIwMTggLTEwOC4xMzQgMS41NDU1MiAtMTA4LjAzNSAxLjQ2Nzc3Qy0xMDYuNzgzIDAuNDg5NDk2IC0xMDUuNDEyIDAuMDAwMjM4OTE2IC0xMDQuMDQxIDBILTEwNC4wMzlMLTEwNCAwLjAwMDEzODE3NlYwQy0xMDIuNjI4IDAgLTEwMS4yNTYgMC40ODkyNTkgLTEwMC4wMDUgMS40Njc3N0MtOTcuNTAxNCAzLjQyNDggLTk0LjUxODcgMy40MjQ4IC05Mi4wMTUgMS40Njc3N0MtODkuNTExNCAtMC40ODkyNTcgLTg2LjUyODcgLTAuNDg5MjU3IC04NC4wMjUgMS40Njc3N0MtODMuNjM4NiAxLjc2OTgxIC04My4yNDA4IDIuMDI1MjQgLTgyLjgzNTEgMi4yMzQwNUMtODAuNzE2NSAzLjMyNDQ0IC03OC4zODI5IDMuMTQzNjcgLTc2LjMzNTYgMS42OTE3NUMtNzYuMjM0NyAxLjYyMDE4IC03Ni4xMzQ1IDEuNTQ1NTIgLTc2LjAzNSAxLjQ2Nzc3Qy03NC43ODM1IDAuNDg5NDk2IC03My40MTIzIDAuMDAwMjM4OTE2IC03Mi4wNDEgMEgtNzIuMDM5MkwtNzIgMC4wMDAxMzg0ODdWNEgtMTA0TC0xMDQgNEgtMTM2VjBaTS03MiAwQy03MC42MjgxIDAgLTY5LjI1NjEgMC40ODkyNTkgLTY4LjAwNSAxLjQ2Nzc3Qy02NS41MDEzIDMuNDI0OCAtNjIuNTE4NyAzLjQyNDggLTYwLjAxNSAxLjQ2Nzc3Qy01Ny41MTEzIC0wLjQ4OTI1NyAtNTQuNTI4NiAtMC40ODkyNTcgLTUyLjAyNDkgMS40Njc3N0MtNTEuNjM4NSAxLjc2OTgxIC01MS4yNDA3IDIuMDI1MjQgLTUwLjgzNSAyLjIzNDA1Qy00OC43MTY1IDMuMzI0NDQgLTQ2LjM4MjggMy4xNDM2NyAtNDQuMzM1NSAxLjY5MTc1Qy00NC4yMzQ2IDEuNjIwMTggLTQ0LjEzNDQgMS41NDU1MiAtNDQuMDM0OSAxLjQ2Nzc3Qy00Mi43ODM0IDAuNDg5NDk2IC00MS40MTIyIDAuMDAwMjM4OTE2IC00MC4wNDEgMEgtNDAuMDM5MUwtNDAgMC4wMDAxMzg0ODdWNEwtNzIgNFYwWk0tMzYuMDA0OSAxLjQ2Nzc3Qy0zNy4yNTYxIDAuNDg5MjU5IC0zOC42MjggMCAtNDAgMFY0TC03Ljk5OTk1IDRIMjRWMC4wMDAxMzg0ODdMMjMuOTYwOCAwSDIzLjk1OUMyMi41ODc3IDAuMDAwMjM4OTE2IDIxLjIxNjUgMC40ODk0OTYgMTkuOTY1IDEuNDY3NzdDMTkuODY1NSAxLjU0NTUyIDE5Ljc2NTMgMS42MjAxOCAxOS42NjQ0IDEuNjkxNzVDMTcuNjE3MSAzLjE0MzY3IDE1LjI4MzUgMy4zMjQ0NCAxMy4xNjQ5IDIuMjM0MDVDMTIuNzU5MiAyLjAyNTI0IDEyLjM2MTQgMS43Njk4MSAxMS45NzUgMS40Njc3N0M5LjQ3MTMxIC0wLjQ4OTI1NyA2LjQ4ODYyIC0wLjQ4OTI1NyAzLjk4NSAxLjQ2Nzc3QzEuNDgxMzEgMy40MjQ4IC0xLjUwMTM3IDMuNDI0OCAtNC4wMDUwNCAxLjQ2Nzc3Qy01LjI1NjIgMC40ODkyNTkgLTYuNjI4MTEgMCAtOC4wMDAwNSAwSC04LjAzOTA4SC04LjA0MDkyQy05LjQxMjE5IDAuMDAwMjM4OTE2IC0xMC43ODM0IDAuNDg5NDk2IC0xMi4wMzQ5IDEuNDY3NzdDLTEyLjEzNDQgMS41NDU1MiAtMTIuMjM0NiAxLjYyMDE4IC0xMi4zMzU1IDEuNjkxNzVDLTE0LjM4MjggMy4xNDM2NyAtMTYuNzE2NCAzLjMyNDQ0IC0xOC44MzUgMi4yMzQwNUMtMTkuMjQwNyAyLjAyNTI0IC0xOS42Mzg1IDEuNzY5ODEgLTIwLjAyNDkgMS40Njc3N0MtMjIuNTI4NiAtMC40ODkyNTcgLTI1LjUxMTMgLTAuNDg5MjU3IC0yOC4wMTQ5IDEuNDY3NzdDLTMwLjUxODYgMy40MjQ4IC0zMy41MDEzIDMuNDI0OCAtMzYuMDA0OSAxLjQ2Nzc3WiIgZmlsbD0iIzFDNjNDRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xNjggNzJDLTE2Ni42MjggNzIgLTE2NS4yNTYgNzEuNTEwNyAtMTY0LjAwNSA3MC41MzIyQy0xNjEuNTAxIDY4LjU3NTIgLTE1OC41MTkgNjguNTc1MiAtMTU2LjAxNSA3MC41MzIyQy0xNTMuNTExIDcyLjQ4OTMgLTE1MC41MjkgNzIuNDg5MyAtMTQ4LjAyNSA3MC41MzIyQy0xNDcuNjM5IDcwLjIzMDIgLTE0Ny4yNDEgNjkuOTc0OCAtMTQ2LjgzNSA2OS43NjZDLTE0NC43MTYgNjguNjc1NiAtMTQyLjM4MyA2OC44NTYzIC0xNDAuMzM2IDcwLjMwODNDLTE0MC4yMzUgNzAuMzc5OCAtMTQwLjEzNCA3MC40NTQ1IC0xNDAuMDM1IDcwLjUzMjJDLTEzOC43ODMgNzEuNTEwNSAtMTM3LjQxMiA3MS45OTk4IC0xMzYuMDQxIDcySC0xMzYuMDM5TC0xMzYgNzEuOTk5OVY2OEwtMTY4IDY4VjcyWk0tMTM2IDcyQy0xMzQuNjI4IDcyIC0xMzMuMjU2IDcxLjUxMDcgLTEzMi4wMDUgNzAuNTMyMkMtMTI5LjUwMSA2OC41NzUyIC0xMjYuNTE5IDY4LjU3NTIgLTEyNC4wMTUgNzAuNTMyMkMtMTIxLjUxMSA3Mi40ODkzIC0xMTguNTI5IDcyLjQ4OTMgLTExNi4wMjUgNzAuNTMyMkMtMTE1LjYzOSA3MC4yMzAyIC0xMTUuMjQxIDY5Ljk3NDggLTExNC44MzUgNjkuNzY2Qy0xMTIuNzE2IDY4LjY3NTYgLTExMC4zODMgNjguODU2MyAtMTA4LjMzNiA3MC4zMDgzQy0xMDguMjM1IDcwLjM3OTggLTEwOC4xMzQgNzAuNDU0NSAtMTA4LjAzNSA3MC41MzIyQy0xMDYuNzgzIDcxLjUxMDUgLTEwNS40MTIgNzEuOTk5OCAtMTA0LjA0MSA3MkgtMTA0LjAzOUwtMTA0IDcxLjk5OTlWNzJDLTEwMi42MjggNzIgLTEwMS4yNTYgNzEuNTEwNyAtMTAwLjAwNSA3MC41MzIyQy05Ny41MDE0IDY4LjU3NTIgLTk0LjUxODcgNjguNTc1MiAtOTIuMDE1IDcwLjUzMjJDLTg5LjUxMTQgNzIuNDg5MyAtODYuNTI4NyA3Mi40ODkzIC04NC4wMjUgNzAuNTMyMkMtODMuNjM4NiA3MC4yMzAyIC04My4yNDA4IDY5Ljk3NDggLTgyLjgzNTEgNjkuNzY2Qy04MC43MTY1IDY4LjY3NTYgLTc4LjM4MjkgNjguODU2MyAtNzYuMzM1NiA3MC4zMDgzQy03Ni4yMzQ3IDcwLjM3OTggLTc2LjEzNDUgNzAuNDU0NSAtNzYuMDM1IDcwLjUzMjJDLTc0Ljc4MzUgNzEuNTEwNSAtNzMuNDEyMyA3MS45OTk4IC03Mi4wNDEgNzJILTcyLjAzOTJMLTcyIDcxLjk5OTlWNjhILTEwNEwtMTA0IDY4SC0xMzZWNzJaTS03MiA3MkMtNzAuNjI4MSA3MiAtNjkuMjU2MSA3MS41MTA3IC02OC4wMDUgNzAuNTMyMkMtNjUuNTAxMyA2OC41NzUyIC02Mi41MTg3IDY4LjU3NTIgLTYwLjAxNSA3MC41MzIyQy01Ny41MTEzIDcyLjQ4OTMgLTU0LjUyODYgNzIuNDg5MyAtNTIuMDI0OSA3MC41MzIyQy01MS42Mzg1IDcwLjIzMDIgLTUxLjI0MDcgNjkuOTc0OCAtNTAuODM1IDY5Ljc2NkMtNDguNzE2NSA2OC42NzU2IC00Ni4zODI4IDY4Ljg1NjMgLTQ0LjMzNTUgNzAuMzA4M0MtNDQuMjM0NiA3MC4zNzk4IC00NC4xMzQ0IDcwLjQ1NDUgLTQ0LjAzNDkgNzAuNTMyMkMtNDIuNzgzNCA3MS41MTA1IC00MS40MTIyIDcxLjk5OTggLTQwLjA0MSA3MkgtNDAuMDM5MUwtNDAgNzEuOTk5OVY2OEwtNzIgNjhWNzJaTS0zNi4wMDQ5IDcwLjUzMjJDLTM3LjI1NjEgNzEuNTEwNyAtMzguNjI4IDcyIC00MCA3MlY2OEwtNy45OTk5NSA2OEgyNFY3MS45OTk5TDIzLjk2MDggNzJIMjMuOTU5QzIyLjU4NzcgNzEuOTk5OCAyMS4yMTY1IDcxLjUxMDUgMTkuOTY1IDcwLjUzMjJDMTkuODY1NSA3MC40NTQ1IDE5Ljc2NTMgNzAuMzc5OCAxOS42NjQ0IDcwLjMwODNDMTcuNjE3MSA2OC44NTYzIDE1LjI4MzUgNjguNjc1NiAxMy4xNjQ5IDY5Ljc2NkMxMi43NTkyIDY5Ljk3NDggMTIuMzYxNCA3MC4yMzAyIDExLjk3NSA3MC41MzIyQzkuNDcxMzEgNzIuNDg5MyA2LjQ4ODYyIDcyLjQ4OTMgMy45ODUgNzAuNTMyMkMxLjQ4MTMxIDY4LjU3NTIgLTEuNTAxMzcgNjguNTc1MiAtNC4wMDUwNCA3MC41MzIyQy01LjI1NjIgNzEuNTEwNyAtNi42MjgxMSA3MiAtOC4wMDAwNSA3MkgtOC4wMzkwOEgtOC4wNDA5MkMtOS40MTIxOSA3MS45OTk4IC0xMC43ODM0IDcxLjUxMDUgLTEyLjAzNDkgNzAuNTMyMkMtMTIuMTM0NCA3MC40NTQ1IC0xMi4yMzQ2IDcwLjM3OTggLTEyLjMzNTUgNzAuMzA4M0MtMTQuMzgyOCA2OC44NTYzIC0xNi43MTY0IDY4LjY3NTYgLTE4LjgzNSA2OS43NjZDLTE5LjI0MDcgNjkuOTc0OCAtMTkuNjM4NSA3MC4yMzAyIC0yMC4wMjQ5IDcwLjUzMjJDLTIyLjUyODYgNzIuNDg5MyAtMjUuNTExMyA3Mi40ODkzIC0yOC4wMTQ5IDcwLjUzMjJDLTMwLjUxODYgNjguNTc1MiAtMzMuNTAxMyA2OC41NzUyIC0zNi4wMDQ5IDcwLjUzMjJaIiBmaWxsPSIjMUM2M0NEIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjE2IDBDMjE3LjM3MiAwIDIxOC43NDQgMC40ODkyNTkgMjE5Ljk5NSAxLjQ2Nzc3QzIyMi40OTkgMy40MjQ4IDIyNS40ODEgMy40MjQ4IDIyNy45ODUgMS40Njc3N0MyMzAuNDg5IC0wLjQ4OTI1NyAyMzMuNDcxIC0wLjQ4OTI1NyAyMzUuOTc1IDEuNDY3NzdDMjM2LjM2MSAxLjc2OTgxIDIzNi43NTkgMi4wMjUyNCAyMzcuMTY1IDIuMjM0MDVDMjM5LjI4NCAzLjMyNDQ0IDI0MS42MTcgMy4xNDM2NyAyNDMuNjY0IDEuNjkxNzVDMjQzLjc2NSAxLjYyMDE4IDI0My44NjYgMS41NDU1MiAyNDMuOTY1IDEuNDY3NzdDMjQ1LjIxNyAwLjQ4OTQ5NiAyNDYuNTg4IDAuMDAwMjM4OTE2IDI0Ny45NTkgMEgyNDcuOTYxTDI0OCAwLjAwMDEzODQ4N1Y0TDIxNiA0VjBaTTI0OCAwQzI0OS4zNzIgMCAyNTAuNzQ0IDAuNDg5MjU5IDI1MS45OTUgMS40Njc3N0MyNTQuNDk5IDMuNDI0OCAyNTcuNDgxIDMuNDI0OCAyNTkuOTg1IDEuNDY3NzdDMjYyLjQ4OSAtMC40ODkyNTcgMjY1LjQ3MSAtMC40ODkyNTcgMjY3Ljk3NSAxLjQ2Nzc3QzI2OC4zNjEgMS43Njk4MSAyNjguNzU5IDIuMDI1MjQgMjY5LjE2NSAyLjIzNDA1QzI3MS4yODQgMy4zMjQ0NCAyNzMuNjE3IDMuMTQzNjcgMjc1LjY2NCAxLjY5MTc1QzI3NS43NjUgMS42MjAxOCAyNzUuODY2IDEuNTQ1NTIgMjc1Ljk2NSAxLjQ2Nzc3QzI3Ny4yMTcgMC40ODk0OTYgMjc4LjU4OCAwLjAwMDIzODkxNiAyNzkuOTU5IDBIMjc5Ljk2MUwyODAgMC4wMDAxMzgxNzZWMEMyODEuMzcyIDAgMjgyLjc0NCAwLjQ4OTI1OSAyODMuOTk1IDEuNDY3NzdDMjg2LjQ5OSAzLjQyNDggMjg5LjQ4MSAzLjQyNDggMjkxLjk4NSAxLjQ2Nzc3QzI5NC40ODkgLTAuNDg5MjU3IDI5Ny40NzEgLTAuNDg5MjU3IDI5OS45NzUgMS40Njc3N0MzMDAuMzYxIDEuNzY5ODEgMzAwLjc1OSAyLjAyNTI0IDMwMS4xNjUgMi4yMzQwNUMzMDMuMjgzIDMuMzI0NDQgMzA1LjYxNyAzLjE0MzY3IDMwNy42NjQgMS42OTE3NUMzMDcuNzY1IDEuNjIwMTggMzA3Ljg2NiAxLjU0NTUyIDMwNy45NjUgMS40Njc3N0MzMDkuMjE3IDAuNDg5NDk2IDMxMC41ODggMC4wMDAyMzg5MTYgMzExLjk1OSAwSDMxMS45NjFMMzEyIDAuMDAwMTM4NDg3VjRIMjgwTDI4MCA0SDI0OFYwWk0zMTIgMEMzMTMuMzcyIDAgMzE0Ljc0NCAwLjQ4OTI1OSAzMTUuOTk1IDEuNDY3NzdDMzE4LjQ5OSAzLjQyNDggMzIxLjQ4MSAzLjQyNDggMzIzLjk4NSAxLjQ2Nzc3QzMyNi40ODkgLTAuNDg5MjU3IDMyOS40NzEgLTAuNDg5MjU3IDMzMS45NzUgMS40Njc3N0MzMzIuMzYxIDEuNzY5ODEgMzMyLjc1OSAyLjAyNTI0IDMzMy4xNjUgMi4yMzQwNUMzMzUuMjg0IDMuMzI0NDQgMzM3LjYxNyAzLjE0MzY3IDMzOS42NjQgMS42OTE3NUMzMzkuNzY1IDEuNjIwMTggMzM5Ljg2NiAxLjU0NTUyIDMzOS45NjUgMS40Njc3N0MzNDEuMjE3IDAuNDg5NDk2IDM0Mi41ODggMC4wMDAyMzg5MTYgMzQzLjk1OSAwSDM0My45NjFMMzQ0IDAuMDAwMTM4NDg3VjRMMzEyIDRWMFpNMzQ3Ljk5NSAxLjQ2Nzc3QzM0Ni43NDQgMC40ODkyNTkgMzQ1LjM3MiAwIDM0NCAwVjRMMzc2IDRINDA4VjAuMDAwMTM4NDg3TDQwNy45NjEgMEg0MDcuOTU5QzQwNi41ODggMC4wMDAyMzg5MTYgNDA1LjIxNyAwLjQ4OTQ5NiA0MDMuOTY1IDEuNDY3NzdDNDAzLjg2NiAxLjU0NTUyIDQwMy43NjUgMS42MjAxOCA0MDMuNjY0IDEuNjkxNzVDNDAxLjYxNyAzLjE0MzY3IDM5OS4yODMgMy4zMjQ0NCAzOTcuMTY1IDIuMjM0MDVDMzk2Ljc1OSAyLjAyNTI0IDM5Ni4zNjEgMS43Njk4MSAzOTUuOTc1IDEuNDY3NzdDMzkzLjQ3MSAtMC40ODkyNTcgMzkwLjQ4OSAtMC40ODkyNTcgMzg3Ljk4NSAxLjQ2Nzc3QzM4NS40ODEgMy40MjQ4IDM4Mi40OTkgMy40MjQ4IDM3OS45OTUgMS40Njc3N0MzNzguNzQ0IDAuNDg5MjU5IDM3Ny4zNzIgMCAzNzYgMEgzNzUuOTYxSDM3NS45NTlDMzc0LjU4OCAwLjAwMDIzODkxNiAzNzMuMjE3IDAuNDg5NDk2IDM3MS45NjUgMS40Njc3N0MzNzEuODY2IDEuNTQ1NTIgMzcxLjc2NSAxLjYyMDE4IDM3MS42NjQgMS42OTE3NUMzNjkuNjE3IDMuMTQzNjcgMzY3LjI4NCAzLjMyNDQ0IDM2NS4xNjUgMi4yMzQwNUMzNjQuNzU5IDIuMDI1MjQgMzY0LjM2MSAxLjc2OTgxIDM2My45NzUgMS40Njc3N0MzNjEuNDcxIC0wLjQ4OTI1NyAzNTguNDg5IC0wLjQ4OTI1NyAzNTUuOTg1IDEuNDY3NzdDMzUzLjQ4MSAzLjQyNDggMzUwLjQ5OSAzLjQyNDggMzQ3Ljk5NSAxLjQ2Nzc3WiIgZmlsbD0iIzFDNjNDRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxNiA3MkMyMTcuMzcyIDcyIDIxOC43NDQgNzEuNTEwNyAyMTkuOTk1IDcwLjUzMjJDMjIyLjQ5OSA2OC41NzUyIDIyNS40ODEgNjguNTc1MiAyMjcuOTg1IDcwLjUzMjJDMjMwLjQ4OSA3Mi40ODkzIDIzMy40NzEgNzIuNDg5MyAyMzUuOTc1IDcwLjUzMjJDMjM2LjM2MSA3MC4yMzAyIDIzNi43NTkgNjkuOTc0OCAyMzcuMTY1IDY5Ljc2NkMyMzkuMjg0IDY4LjY3NTYgMjQxLjYxNyA2OC44NTYzIDI0My42NjQgNzAuMzA4M0MyNDMuNzY1IDcwLjM3OTggMjQzLjg2NiA3MC40NTQ1IDI0My45NjUgNzAuNTMyMkMyNDUuMjE3IDcxLjUxMDUgMjQ2LjU4OCA3MS45OTk4IDI0Ny45NTkgNzJIMjQ3Ljk2MUwyNDggNzEuOTk5OVY2OEwyMTYgNjhWNzJaTTI0OCA3MkMyNDkuMzcyIDcyIDI1MC43NDQgNzEuNTEwNyAyNTEuOTk1IDcwLjUzMjJDMjU0LjQ5OSA2OC41NzUyIDI1Ny40ODEgNjguNTc1MiAyNTkuOTg1IDcwLjUzMjJDMjYyLjQ4OSA3Mi40ODkzIDI2NS40NzEgNzIuNDg5MyAyNjcuOTc1IDcwLjUzMjJDMjY4LjM2MSA3MC4yMzAyIDI2OC43NTkgNjkuOTc0OCAyNjkuMTY1IDY5Ljc2NkMyNzEuMjg0IDY4LjY3NTYgMjczLjYxNyA2OC44NTYzIDI3NS42NjQgNzAuMzA4M0MyNzUuNzY1IDcwLjM3OTggMjc1Ljg2NiA3MC40NTQ1IDI3NS45NjUgNzAuNTMyMkMyNzcuMjE3IDcxLjUxMDUgMjc4LjU4OCA3MS45OTk4IDI3OS45NTkgNzJIMjc5Ljk2MUwyODAgNzEuOTk5OVY3MkMyODEuMzcyIDcyIDI4Mi43NDQgNzEuNTEwNyAyODMuOTk1IDcwLjUzMjJDMjg2LjQ5OSA2OC41NzUyIDI4OS40ODEgNjguNTc1MiAyOTEuOTg1IDcwLjUzMjJDMjk0LjQ4OSA3Mi40ODkzIDI5Ny40NzEgNzIuNDg5MyAyOTkuOTc1IDcwLjUzMjJDMzAwLjM2MSA3MC4yMzAyIDMwMC43NTkgNjkuOTc0OCAzMDEuMTY1IDY5Ljc2NkMzMDMuMjgzIDY4LjY3NTYgMzA1LjYxNyA2OC44NTYzIDMwNy42NjQgNzAuMzA4M0MzMDcuNzY1IDcwLjM3OTggMzA3Ljg2NiA3MC40NTQ1IDMwNy45NjUgNzAuNTMyMkMzMDkuMjE3IDcxLjUxMDUgMzEwLjU4OCA3MS45OTk4IDMxMS45NTkgNzJIMzExLjk2MUwzMTIgNzEuOTk5OVY2OEgyODBMMjgwIDY4SDI0OFY3MlpNMzEyIDcyQzMxMy4zNzIgNzIgMzE0Ljc0NCA3MS41MTA3IDMxNS45OTUgNzAuNTMyMkMzMTguNDk5IDY4LjU3NTIgMzIxLjQ4MSA2OC41NzUyIDMyMy45ODUgNzAuNTMyMkMzMjYuNDg5IDcyLjQ4OTMgMzI5LjQ3MSA3Mi40ODkzIDMzMS45NzUgNzAuNTMyMkMzMzIuMzYxIDcwLjIzMDIgMzMyLjc1OSA2OS45NzQ4IDMzMy4xNjUgNjkuNzY2QzMzNS4yODQgNjguNjc1NiAzMzcuNjE3IDY4Ljg1NjMgMzM5LjY2NCA3MC4zMDgzQzMzOS43NjUgNzAuMzc5OCAzMzkuODY2IDcwLjQ1NDUgMzM5Ljk2NSA3MC41MzIyQzM0MS4yMTcgNzEuNTEwNSAzNDIuNTg4IDcxLjk5OTggMzQzLjk1OSA3MkgzNDMuOTYxTDM0NCA3MS45OTk5VjY4TDMxMiA2OFY3MlpNMzQ3Ljk5NSA3MC41MzIyQzM0Ni43NDQgNzEuNTEwNyAzNDUuMzcyIDcyIDM0NCA3MlY2OEwzNzYgNjhINDA4VjcxLjk5OTlMNDA3Ljk2MSA3Mkg0MDcuOTU5QzQwNi41ODggNzEuOTk5OCA0MDUuMjE3IDcxLjUxMDUgNDAzLjk2NSA3MC41MzIyQzQwMy44NjYgNzAuNDU0NSA0MDMuNzY1IDcwLjM3OTggNDAzLjY2NCA3MC4zMDgzQzQwMS42MTcgNjguODU2MyAzOTkuMjgzIDY4LjY3NTYgMzk3LjE2NSA2OS43NjZDMzk2Ljc1OSA2OS45NzQ4IDM5Ni4zNjEgNzAuMjMwMiAzOTUuOTc1IDcwLjUzMjJDMzkzLjQ3MSA3Mi40ODkzIDM5MC40ODkgNzIuNDg5MyAzODcuOTg1IDcwLjUzMjJDMzg1LjQ4MSA2OC41NzUyIDM4Mi40OTkgNjguNTc1MiAzNzkuOTk1IDcwLjUzMjJDMzc4Ljc0NCA3MS41MTA3IDM3Ny4zNzIgNzIgMzc2IDcySDM3NS45NjFIMzc1Ljk1OUMzNzQuNTg4IDcxLjk5OTggMzczLjIxNyA3MS41MTA1IDM3MS45NjUgNzAuNTMyMkMzNzEuODY2IDcwLjQ1NDUgMzcxLjc2NSA3MC4zNzk4IDM3MS42NjQgNzAuMzA4M0MzNjkuNjE3IDY4Ljg1NjMgMzY3LjI4NCA2OC42NzU2IDM2NS4xNjUgNjkuNzY2QzM2NC43NTkgNjkuOTc0OCAzNjQuMzYxIDcwLjIzMDIgMzYzLjk3NSA3MC41MzIyQzM2MS40NzEgNzIuNDg5MyAzNTguNDg5IDcyLjQ4OTMgMzU1Ljk4NSA3MC41MzIyQzM1My40ODEgNjguNTc1MiAzNTAuNDk5IDY4LjU3NTIgMzQ3Ljk5NSA3MC41MzIyWiIgZmlsbD0iIzFDNjNDRCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc4OV84MDU2Ij4KPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSI3MiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** 506c06de-1a7c-4dfc-856b-95c373b2fd9a **/
.btn-506c06de-1a7c-4dfc-856b-95c373b2fd9a {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg5XzgwMjEpIj4KPHBhdGggZD0iTTggNjNWNzJIMjQwVjhIMjMxVjYzSDhaIiBmaWxsPSIjMEY3M0U4Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMjMxIiBoZWlnaHQ9IjYzIiBzdHJva2U9IiMwRjczRTgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83ODlfODAyMSI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}

/** b1783c13-aea2-4a60-8145-f8aece76fd83 **/
.btn-b1783c13-aea2-4a60-8145-f8aece76fd83 {
  border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMjQwIDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNzg5XzgwNDApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUxNDE2IDYzLjQ4NTlDMTAuMDA3NiA2OC40MTMyIDE0LjU4NDkgNzIgMjAgNzJIMjI4QzIzNC42MjcgNzIgMjQwIDY2LjYyNzQgMjQwIDYwVjIwQzI0MCAxNC41ODQ5IDIzNi40MTMgMTAuMDA3NiAyMzEuNDg2IDguNTE0MTZDMjMxLjgyIDkuNjE3MzIgMjMyIDEwLjc4NzcgMjMyIDEyVjUyQzIzMiA1OC42Mjc0IDIyNi42MjcgNjQgMjIwIDY0SDEyQzEwLjc4NzcgNjQgOS42MTczMiA2My44MjAyIDguNTE0MTYgNjMuNDg1OVoiIGZpbGw9IiMwRjczRTgiLz4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMzEiIGhlaWdodD0iNjMiIHJ4PSIxMS41IiBzdHJva2U9IiMwRjczRTgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83ODlfODA0MCI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
  border-image-slice: 24 fill;
  border-image-repeat: round;
  border-image-width: 24px;
  padding: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* color: #ffffff; */
}
</style>