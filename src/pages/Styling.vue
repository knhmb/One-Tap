<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="styling">
    <h1>Theme Library</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur Interdum nisl aliquam amet ipsum
      tempus et nisl
    </p>
    <CreateYourOwn />
    <CustomTheme />
    <Font />
    <Background />
    <Share />
    <IconLibrary />
  </div>
</template>

<script>
import CreateYourOwn from "@/components/styling/CreateYourOwn.vue";
import CustomTheme from "@/components/styling/CustomTheme.vue";
import Font from "@/components/styling/Font.vue";
import Background from "@/components/styling/Background.vue";
import Share from "@/components/styling/Share.vue";
import IconLibrary from "@/components/styling/IconLibrary.vue";
import { ElNotification } from "element-plus";

export default {
  components: {
    CreateYourOwn,
    CustomTheme,
    Font,
    Background,
    Share,
    IconLibrary,
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getButtons");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getButtons");
          })
          .catch(() => {
            ElNotification({
              title: "Error",
              message: "Token expired! Please login again.",
              type: "error",
            });
            this.$store.dispatch("auth/logout");
          });
      });
  },
};
</script>

<style scoped>
.styling {
  margin-top: 2rem;
}

.styling h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #262626;
}

.styling p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  margin-top: 0.5rem;
}
</style>