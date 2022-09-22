<template>
  <section class="user-profile">
    <base-container>
      <div class="top-section">
        <div
          :class="{ 'is-active': $route.path === '/user-profile/profile' }"
          @click="navigate('profile')"
          class="pill"
        >
          <img :src="profileImg" alt="" />
          <p>Profile</p>
        </div>
        <div
          :class="{ 'is-active': $route.path === '/user-profile/content' }"
          @click="navigate('content')"
          class="pill"
        >
          <img :src="contentImg" alt="" />
          <p>Content</p>
        </div>
        <div @click="$router.replace('/')" class="pill">
          <img src="../assets/logout-on-off@2x.png" alt="" />
          <p>Logout</p>
        </div>
        <div class="pill">
          <div class="text">
            <p>My Link</p>
            <p>https://www.xxxxxxxxxxxxxxxxxxxxx.com</p>
          </div>
          <el-button>Copy</el-button>
        </div>
      </div>
      <router-view></router-view>
      <!-- <personal-information></personal-information>
      <change-password></change-password> -->
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profileImg: require("../assets/profile-on-off@2x.png"),
      contentImg: require("../assets/content-off@2x.png"),
    };
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.$route.path === "/user-profile/profile"
          ? (this.profileImg = require("../assets/profile-on@2x.png"))
          : (this.profileImg = require("../assets/profile-on-off@2x.png"));

        this.$route.path === "/user-profile/content"
          ? (this.contentImg = require("../assets/content-on@2x.png"))
          : (this.contentImg = require("../assets/content-off@2x.png"));
      },
    },
  },
  methods: {
    navigate(path) {
      this.$router.push({ name: path });
    },
  },
  created() {
    this.$route.path === "/user-profile/profile"
      ? (this.profileImg = require("../assets/profile-on@2x.png"))
      : (this.profileImg = require("../assets/profile-on-off@2x.png"));

    this.$route.path === "/user-profile/content"
      ? (this.contentImg = require("../assets/content-on@2x.png"))
      : (this.contentImg = require("../assets/content-off@2x.png"));
  },
};
</script>

<style scoped>
.user-profile {
  background: #f3f3f5;
  border-top: 1px solid #000000;
  min-height: 100vh;
}

.user-profile .container {
  padding-right: 15rem;
  padding-left: 15rem;
}

.user-profile .top-section {
  display: flex;
  gap: 0.5rem;
}

.user-profile .top-section .pill {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
}

.user-profile .top-section .pill.is-active {
  background: #0093e9;
  border-color: #0093e9;
}

.user-profile .top-section .pill:last-of-type {
  width: 100%;
  justify-content: space-between;
}

.user-profile .top-section .pill img {
  width: 1.8rem;
}

.user-profile .top-section .pill p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #262626;
}

.user-profile .top-section .pill.is-active p {
  color: #fff;
}

.user-profile .pill .text p:first-of-type {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #262626;
}

.user-profile .pill .text p:nth-of-type(2) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0093e9;
  word-break: break-all;
}

.user-profile .pill .el-button {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 80px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #262626;
}

@media screen and (max-width: 1140px) {
  .user-profile .container {
    padding-right: 2rem;
    padding-left: 3rem;
  }

  .user-profile .top-section {
    flex-wrap: wrap;
  }
}
</style>