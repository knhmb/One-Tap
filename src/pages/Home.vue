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
  },
};
</script>