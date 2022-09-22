<template>
  <personal-information></personal-information>
  <change-password></change-password>
</template>

<script>
import PersonalInformation from "@/components/user-profile/PersonalInformation.vue";
import ChangePassword from "@/components/user-profile/ChangePassword.vue";

export default {
  components: {
    PersonalInformation,
    ChangePassword,
  },
};
</script>