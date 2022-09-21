<template>
  <div class="contact">
    <base-card>
      <p>Have questions about our products and services?</p>
      <el-button :icon="Right"
        >Contact us <el-icon><Right /></el-icon
      ></el-button>
    </base-card>
  </div>
</template>

<script>
import { Right } from "@element-plus/icons-vue";

export default {
  components: {
    Right,
  },
  //   data() {
  //     return {
  //       Right,
  //     };
  //   },
};
</script>
  
  <style scoped>
.contact {
  height: 100%;
}

.contact .card {
  background: #f3f3f5;
  height: 100%;
}

.contact p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #262626;
}

.contact .el-button {
  background: #f3f3f5;
  border-radius: 24px;
  margin-top: 1rem;
}

.contact .el-button :deep(.el-icon) {
  margin-left: 0.5rem;
}
</style>