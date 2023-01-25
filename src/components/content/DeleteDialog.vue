<template>
  <div class="delete-dialog">
    <el-dialog
      :model-value="dialogDelete"
      width="30%"
      @close="$emit('closeDialog', false)"
    >
      <h2>Add new content</h2>
      <p>Are you sure you want to delete the content?</p>
      <div class="btns">
        <el-button @click="$emit('closeDialog', false)" class="cancel"
          >Cancel</el-button
        >
        <el-button @click="deleteContent">Delete</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogDelete"],
  methods: {
    deleteContent() {
      this.$emit("deleteContent");
      this.$emit("closeDialog", false);
    },
  },
};
</script>

<style scoped>
.delete-dialog :deep(.el-dialog) {
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 24px;
}

.delete-dialog :deep(.el-dialog .el-dialog__header) {
  display: none;
}

.delete-dialog h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
}

.delete-dialog p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
  margin-bottom: 2rem;
  margin-top: 0.3rem;
}

.delete-dialog .btns {
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-dialog .el-button.cancel {
  border: 1px solid #000000;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  background: #fff;
  padding: 1.5rem 1.8rem;
  width: 8rem;
}
.delete-dialog .el-button {
  background: #f03738;
  border-radius: 40px;
  width: 8rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding: 1.5rem 1.8rem;

  border-color: #f03738;
}

@media screen and (max-width: 991px) {
  .delete-dialog :deep(.el-dialog) {
    width: 75%;
  }
}
</style>