<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Main />
</template>

<script>
import Main from "@/components/home/Main.vue";

export default {
  components: {
    Main,
  },
  created() {
    this.$store.commit("TOGGLE_DIALOG_VISIBLE", false);
    this.$store.dispatch("dashboard/getContents");
  },
};
</script>