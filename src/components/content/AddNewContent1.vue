<template>
  <div class="add-new-content">
    <div class="card">
      <h2>Add new content</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="inner-card">
            <img src="../../assets/profile-link@2x.png" alt="" />
            <div class="context">
              <div class="text">
                <p>Link</p>
                <p>Add link to your One tap</p>
              </div>
              <p class="button">Add</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-card">
            <img src="../../assets/profile-photo@2x.png" alt="" />
            <div class="context">
              <div class="text">
                <p>Photo</p>
                <p>Add photo to your One tap</p>
              </div>
              <p class="button">Add</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="inner-card">
            <img src="../../assets/profile-video@2x.png" alt="" />
            <div class="context">
              <div class="text">
                <p>Video</p>
                <p>Add videos to your One tap</p>
              </div>
              <p class="button">Add</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="content-card"></div>
    </div>
  </div>
</template>
  
  <script>
//   import { Plus } from "@element-plus/icons-vue";

export default {
  components: {
    //   Plus,
  },
  data() {
    return {
      photoTitle: "What travel is really like in 2020",
      linkUrl: "http://www.website.com/",
      linkTitle: "One Tap International Limited",
      videoTitle: "What travel is really like in 2020",
      videoLink: "http://www.youtube.com.watch?12398127-3987123",
      fileList: [],
      videoTitle1: "",
      videoLink1: "",
      dialogVisible: false,
      dialogDelete: false,
      upload: "",
    };
  },
  methods: {
    handleExceed(files, uploadFiles) {
      console.log(files);
      console.log(uploadFiles);

      //   this.upload.clearFiles();
      //   const file = files[0];
      //   file.uid = genFileId;
      //   this.upload.handleStart(file);
    },
  },
};
</script>
  
  <style scoped>
.add-new-content {
  margin-top: 2rem;
}

.add-new-content .card,
.add-new-content .inner-card {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
}

.add-new-content .card h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2rem;
}

.add-new-content img {
  width: 2rem;
}

.add-new-content .context {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 1rem;
}

.add-new-content .context .text p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
}

.add-new-content .context .text p:last-of-type {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(38, 38, 38, 0.6);
}

.add-new-content .context p.button {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0093e9;
  cursor: pointer;
}

.add-new-content .content-card {
  background: #e9e9eb;
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
}
</style>