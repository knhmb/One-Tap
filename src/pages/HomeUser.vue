<template>
  <section class="home-user">
    <img class="left-dot" src="../assets/digital-dot-left@2x.jpg" alt="" />
    <img class="right-dot" src="../assets/digital-dot-right@2x.jpg" alt="" />
    <base-container>
      <div class="content">
        <img class="avatar" :src="userDetails.item.avatar" alt="" />
        <p class="profile-name">{{ userDetails.item.displayName }}</p>
        <p class="profile-desc">
          {{ userDetails.description }}
        </p>
        <!-- <p class="profile-desc">
          Lorem ipsum dolor sit amet consectetur Tincidunt duis eros turpis
          facilisis sit
        </p> -->
        <div class="icons">
          <!-- <img
            @click="redirect(social.href)"
            v-for="social in userDetails.resources.social"
            :key="social.id"
            src="../assets/display-email-off@2x.png"
            alt=""
          /> -->
          <template
            v-for="social in userDetails.resources.social"
            :key="social.id"
          >
            <img
              v-if="social.media === 'Email'"
              @click="redirect(social.href)"
              src="../assets/display-email-off@2x.png"
              alt=""
            />
            <img
              v-if="social.media === 'Phone'"
              @click="redirect(social.href)"
              src="../assets/display-phone-off@2x.png"
              alt=""
            />
            <img
              v-if="social.media === 'Facebook'"
              @click="redirect(social.href)"
              src="../assets/display-facebook-off@2x.png"
              alt=""
            />
            <img
              v-if="social.media === 'Instagram'"
              @click="redirect(social.href)"
              src="../assets/display-instagram-off@2x.png"
              alt=""
            />
            <img
              v-if="social.media === 'Youtube'"
              @click="redirect(social.href)"
              src="../assets/display-youtube-off@2x.png"
              alt=""
            />
            <img
              v-if="social.media === 'WhatsApp'"
              @click="redirect(social.href)"
              src="../assets/display-whatsapp-off.png"
              alt=""
            />
            <img
              v-if="social.media === 'PayMe'"
              @click="redirect(social.href)"
              src="../assets/display-payme-off.png"
              alt=""
            />
          </template>
        </div>
        <Content />
      </div>
    </base-container>
  </section>
</template>

<script>
import Content from "@/components/home-user/Content.vue";
import { ElNotification } from "element-plus";

export default {
  components: {
    Content,
  },
  computed: {
    currentUserDetails() {
      return this.$store.getters["auth/currentUserDetails"];
    },
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
    protocol() {
      return window.location.protocol;
    },
    hostname() {
      return window.location.hostname;
    },
  },
  methods: {
    redirect(path) {
      console.log(path);
      console.log(`${this.protocol}//${this.hostname}${path}`);
      // window.location.href = `${this.protocol}//${this.hostname}${path}`;
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch(
          "profile/getUserDetails",
          this.currentUserDetails.id
        );
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch(
              "profile/getUserDetails",
              this.currentUserDetails.id
            );
          })
          .catch(() => {
            ElNotification({
              title: "Error",
              message: "Token expired! Please login again.",
              type: "error",
            });
            this.$store.dispatch("auth/logout");
            // this.$router.replace('/')
          });
      });
  },
};
</script>

<style scoped>
.home-user {
  background: #9fcdc2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
}

.home-user .container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.home-user img.left-dot,
.home-user img.right-dot {
  position: absolute;
  width: 13.5rem;
}

.home-user img.right-dot {
  right: 0;
}

.home-user img.left-dot {
  left: 0;
}

.home-user .content {
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
}

.home-user img.avatar {
  border: 2px solid #ffffff;
  filter: drop-shadow(0px 17px 24px rgba(60, 119, 104, 0.24));
  border-radius: 120px;
  width: 5rem;
  height: 5rem;
}

.home-user p.profile-name {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;
}

.home-user p.profile-desc {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 0.5rem 0;
}

.home-user .icons img {
  width: 2rem;
  border: 1px solid white;
  border-radius: 100%;
  padding: 0.3rem;
  margin: 1rem 0 1.5rem 0;
  cursor: pointer;
}

.home-user .icons img:not(:last-of-type) {
  margin-right: 0.7rem;
}

@media screen and (max-width: 991px) {
  .home-user .content {
    width: 21rem;
  }
}
</style>