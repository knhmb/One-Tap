<template>
  <section class="user-profile-content">
    <social-profile-links></social-profile-links>
  </section>
</template>

<script>
import SocialProfileLinks from "@/components/content/SocialProfileLinks.vue";

export default {
  components: {
    SocialProfileLinks,
  },
};
</script>

<style scoped>
.user-profile-content {
  margin-top: 2rem;
}
</style>