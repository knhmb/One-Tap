<template>
  <the-header></the-header>
  <Home />
</template>

<script>
import TheHeader from "./components/common/TheHeader.vue";
import Home from "./pages/Home.vue";

export default {
  components: {
    TheHeader,
    Home,
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
