<template>
  <div class="social-profile-links">
    <div class="card">
      <h2>Social profile links</h2>
      <el-form>
        <el-row>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-email@2x.png" alt="" />
            <p class="label">Email</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-phone@2x.png" alt="" />
            <p class="label">Phone</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input
                  placeholder="Your phone number"
                  v-model="ruleForm.phoneNo"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-facebook@2x.png" alt="" />
            <p class="label">Facebook</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <div class="views">
                <p>9798</p>
                <p>Views</p>
              </div>
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input v-model="ruleForm.facebook"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-instagram@2x.png" alt="" />
            <p class="label">Instagram</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <div class="views">
                <p>-</p>
                <p>Views</p>
              </div>
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input
                  placeholder="https://www.instagram.com/<yourIGid>"
                  v-model="ruleForm.instagram"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-youtube@2x.png" alt="" />
            <p class="label">Youtube</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <div class="views">
                <p>-</p>
                <p>Views</p>
              </div>
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input
                  placeholder="http://www.youtube.com/channel/<Yourchannel>"
                  v-model="ruleForm.youtube"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-whatsapp.png" alt="" />
            <p class="label">Whatsapp</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <div class="views">
                <p>-</p>
                <p>Views</p>
              </div>
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input
                  placeholder="https://wa.me/<YourNumber>"
                  v-model="ruleForm.whatsapp"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7"> </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <el-form-item>
                <el-input
                  placeholder="Pre-written Whatsapp message"
                  v-model="ruleForm.whatsapp2"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :sm="24" :md="7">
            <img src="../../assets/profile-payme.png" alt="" />
            <p class="label">Payme</p>
          </el-col>
          <el-col :sm="24" :md="17">
            <div class="input-content">
              <div class="views">
                <p>-</p>
                <p>Views</p>
              </div>
              <img src="../../assets/url-link@2x.png" alt="" />
              <el-form-item>
                <el-input
                  placeholder="https://payme.hsbc/<YourName>"
                  v-model="ruleForm.payme"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col>
            <el-form-item>
              <el-button>Update</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "chantaiman@gmail.com",
        phoneNo: "",
        facebook: "https://www.facebook.com/chantaiman1030",
        instagram: "",
        youtube: "",
        whatsapp: "",
        whatsapp2: "",
        payme: "",
      },
    };
  },
};
</script>

<style scoped>
.social-profile-links .card {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
}

.social-profile-links .card h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2.5rem;
}

.social-profile-links .card .el-form img {
  width: 1.5rem;
  vertical-align: middle;
  margin-right: 1rem;
}

.social-profile-links .card .el-form p.label {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #202226;
  display: inline-block;
  vertical-align: middle;
}

.social-profile-links .el-row {
  align-items: center;
}

.social-profile-links .el-row .el-col {
  margin-bottom: 1.5rem;
}

.social-profile-links .el-form .el-row .el-form-item {
  margin-bottom: 0;
}

.social-profile-links .el-form .el-input :deep(.el-input__wrapper) {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 0.3rem 6rem 0.3rem 3rem;
}

.social-profile-links .el-form .input-content {
  position: relative;
}

.social-profile-links .el-form .input-content img {
  width: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  z-index: 1;
}

.social-profile-links .el-form .input-content .views {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  z-index: 1;
}

.social-profile-links .el-form .input-content .views p:first-of-type {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #0093e9;
  margin-right: 0.3rem;
}

.social-profile-links .el-form .input-content .views p:last-of-type {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: rgba(38, 38, 38, 0.6);
}

.social-profile-links .el-form .el-button {
  background: #0093e9;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-color: #0093e9;
  margin-left: auto;
  padding: 1.3rem 2.5rem;
}

/* @media screen and (max-width: 991px) {
  .social-profile-links .card {
    padding: 1rem;
  }
} */
</style>