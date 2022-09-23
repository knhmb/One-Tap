<template>
  <div class="new-content-dialog">
    <el-dialog
      :model-value="dialogVisible"
      width="30%"
      @close="$emit('closeDialog', false)"
    >
      <h2>Add new content</h2>
      <p>Share your content</p>
      <div class="card">
        <div class="content">
          <div class="left-section">
            <img src="../../assets/profile-link@2x.png" alt="" />
            <div class="text">
              <p class="link">Link</p>
              <p class="description">Add link to your One tap</p>
            </div>
          </div>
          <p class="add">Add</p>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="left-section">
            <img src="../../assets/profile-photo@2x.png" alt="" />
            <div class="text">
              <p class="link">Photo</p>
              <p class="description">Add photo to your One tap</p>
            </div>
          </div>
          <p class="add">Add</p>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="left-section">
            <img src="../../assets/profile-video@2x.png" alt="" />
            <div class="text">
              <p class="link">Video</p>
              <p class="description">Add videos to your One tap</p>
            </div>
          </div>
          <p class="add">Add</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogVisible"],
};
</script>

<style scoped>
.new-content-dialog :deep(.el-dialog) {
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 24px;
}

.new-content-dialog :deep(.el-dialog .el-dialog__header) {
  display: none;
}

.new-content-dialog :deep(.el-dialog h2) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
}

.new-content-dialog :deep(.el-dialog p) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
}

.new-content-dialog :deep(.el-dialog .card) {
  background: #fff;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 1rem;
}

.new-content-dialog :deep(.el-dialog .card .content img) {
  width: 1.4rem;
  vertical-align: middle;
  margin-right: 1rem;
}

.new-content-dialog :deep(.el-dialog .card .content .text) {
  display: inline-block;
  vertical-align: middle;
}

.new-content-dialog :deep(.el-dialog .card .content p.link) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
}

.new-content-dialog :deep(.el-dialog .card .content p.description) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(38, 38, 38, 0.6);
}

.new-content-dialog :deep(.el-dialog .card .content p.add) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0093e9;
  cursor: pointer;
}

.new-content-dialog :deep(.el-dialog .card .content) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1125px) {
  .new-content-dialog :deep(.el-dialog) {
    width: 95%;
  }
}
</style>