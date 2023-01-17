<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="user-profile-content">
    <social-profile-links></social-profile-links>
    <add-new-content></add-new-content>
  </section>
</template>

<script>
import SocialProfileLinks from "@/components/content/SocialProfileLinks.vue";
import AddNewContent from "@/components/content/AddNewContent1.vue";

export default {
  components: {
    SocialProfileLinks,
    AddNewContent,
  },
};
</script>

<style scoped>
.user-profile-content {
  margin-top: 2rem;
}
</style>