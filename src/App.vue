<template>
  <the-header v-if="$route.path !== '/home-user'"></the-header>
  <router-view></router-view>
  <!-- <the-footer v-if="$route.path !== '/home-user'"></the-footer> -->
</template>

<script>
import TheHeader from "./components/common/TheHeader.vue";
// import TheFooter from "./components/common/TheFooter.vue";

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
