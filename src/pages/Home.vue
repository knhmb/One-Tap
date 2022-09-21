<template>
  <div class="home-banner">
    <base-container>
      <div class="outer-container">
        <el-row :gutter="1">
          <el-col :span="17">
            <base-card>
              <h5>one tap digital business card</h5>
              <h2>
                Protecting <br />
                Our Planet <br />
                Starts with You
              </h2>
              <p>
                One tap digital business card link to all your social media,
                video, <br />
                article, website, contents and new releases
              </p>
              <el-button>Get Started</el-button>
            </base-card>
          </el-col>
          <el-col :span="7">
            <base-card>
              <img
                class="hand-arrow"
                src="../assets/handdraw-arrow@2x.png"
                alt=""
              />
              <img src="../assets/key-visual-combine@2x.png" alt="" />
            </base-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <Features />
          </el-col>
          <el-col :span="8">
            <Contact />
          </el-col>
        </el-row>
      </div>
    </base-container>
  </div>
</template>

<script>
import Features from "@/components/home/Features.vue";
import Contact from "@/components/home/Contact.vue";

export default {
  components: {
    Features,
    Contact,
  },
};
</script>

<style scoped>
.home-banner .outer-container {
  background: #262626;
  padding: 1px 1px 0px;
}

.home-banner .outer-container .card {
  background: #f3f3f5;
}

.home-banner .outer-container .card h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #262626;
}

.home-banner .outer-container .card h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 64px;
  color: #262626;
  margin: 1rem 0;
}

.home-banner .outer-container .card p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 34, 38, 0.8);
}

.home-banner .outer-container .el-button {
  background: linear-gradient(
      81.88deg,
      #c3f7c4 -6.11%,
      rgba(195, 247, 196, 0) 106.43%
    ),
    linear-gradient(0deg, #0093e9, #0093e9), #ffffff;
  box-shadow: inset 8px -8px 40px rgba(255, 255, 255, 0.4);
  border-radius: 80px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.04em;
  color: #262626;
  padding: 2rem;
  margin-top: 1rem;
}

.home-banner .outer-container .el-col:has(img.hand-arrow) .card {
  height: 100%;
}

.home-banner .outer-container img.hand-arrow {
  width: 14rem;
  /* margin-left: -30rem; */
  top: 5rem;
  right: 32rem;
  /* left: 35rem; */
  position: absolute;
}

.home-banner .outer-container img.hand-arrow + img {
  width: 39.9rem;
  position: absolute;
  right: -2.4rem;
  /* left: 44rem; */
  bottom: 0;
}

.home-banner .outer-container .el-col:has(img.hand-arrow) .card {
  display: flex;
  align-items: flex-start;
}
</style>