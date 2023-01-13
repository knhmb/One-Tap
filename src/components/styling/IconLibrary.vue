<template>
  <div class="icon-library">
    <h1>Icon Library</h1>
    <p>Change the Social Media, Social Links, or other website links icon</p>
    <div class="box">
      <el-upload class="avatar-uploader" action="#" :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <!-- <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
        <div v-else class="img-content">
          <img class="img-icon" src="../../assets/icon-1.png" alt="" />
          <p>Upload Image</p>
          <p>( PNG/GIF format)</p>
        </div>
      </el-upload>
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in 18" :key="item">
          <div class="inner-box">
            <img src="../../assets/profile-photo@2x.png" alt="" />
          </div>
        </el-col>
      </el-row>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
    <el-button class="update">Update</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
};
</script>

<style scoped>
.icon-library {
  margin-top: 2rem;
}

.icon-library h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #262626;
}

.icon-library p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  margin-top: 0.5rem;
}

.icon-library .box {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 2rem;
}

.icon-library .img-content {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-library .img-icon {
  width: 2rem;
}

.icon-library :deep(.el-upload.el-upload--text) {
  width: 100%;
  height: 10rem;
}

.icon-library .img-content p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #202226;
}

.icon-library .img-content p:last-of-type {
  font-size: 14px;
  line-height: 20px;
  color: rgba(32, 34, 38, 0.4);
  margin-top: 0.5rem;
}

.icon-library .inner-box {
  background: #e9e9eb;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
}

.icon-library .inner-box img {
  width: 2rem;
}

.icon-library .el-row {
  margin-top: 2rem;
}

.icon-library .el-row .el-col {
  margin-bottom: 1rem;
}

.icon-library .el-pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.icon-library .el-pagination :deep(.number) {
  border: 1px solid #262626;
  border-radius: 12px;
}

.icon-library .el-pagination :deep(.number.is-active) {
  border: none;
}

.icon-library .el-button.update {
  background: #0093e9;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  margin-left: auto;
  padding: 1.5rem 3rem;
  margin-top: 2rem;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>