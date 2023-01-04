<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="copyright">
    <base-card>
      <el-row>
        <el-col :span="2">
          <img src="../../assets/brand-logo@2x.png" alt="" />
        </el-col>
        <el-col :span="22">
          <div class="links">
            <span @click="$router.push('/about-us')">About us</span>
            <span @click="$router.push('/contact-us')">Contact us</span>
            <span @click="$router.push('/terms-and-conditions')"
              >Terms & Conditions</span
            >
          </div>
          <p class="text">
            One Tap Digital Business Card is a new, easy-to-use business card
            that's environmentally friendly, high tech, and will improve your
            business. One Tap is the future of business cards. We've taken the
            traditional idea of a business card and made it digital—so you can
            save space in your wallet by not carrying around physical cards all
            the time. Every time you meet someone who could be useful to your
            business, simply tap our card with their phone and all of your
            contact information will appear on your screen. No more fumbling for
            paper or trying to remember everything when you go to write it down
            later!
          </p>
          <p class="copyright-text">
            Copyright © 2022 One Tap International Limited. All Rights Reserved
          </p>
        </el-col>
      </el-row>
    </base-card>
  </section>
</template>

<style scoped>
.copyright img {
  width: 3.5rem;
}

.copyright .card {
  background: #f3f3f5;
  height: 100%;
}

.copyright .links {
  display: flex;
}

.copyright .links span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #262626;
  cursor: pointer;
}

.copyright .links span:nth-of-type(2) {
  margin: 0 3rem;
}

.copyright p.text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 34, 38, 0.8);
  margin: 1rem 0;
}

.copyright p.copyright-text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 34, 38, 0.8);
}
</style>