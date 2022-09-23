<template>
  <div class="add-new-content">
    <div class="card">
      <h2>Add new content</h2>
      <div class="card inner-card">
        <div class="top">
          <div class="title">
            <img src="../../assets/profile-photo@2x.png" alt="" />
            <p>Photo</p>
          </div>
          <img
            @click="dialogDelete = true"
            src="../../assets/del@2x.png"
            alt=""
          />
        </div>
        <div class="input-content">
          <img src="../../assets/url-txt@2x.png" alt="" />
          <el-input v-model="photoTitle"></el-input>
        </div>
        <el-upload
          :limit="1"
          :on-exceed="handleExceed"
          method="GET"
          v-model:file-list="fileList"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        >
          <el-button type="primary">Choose Photo</el-button>
        </el-upload>
      </div>

      <div class="card inner-card">
        <div class="top">
          <div class="title">
            <img src="../../assets/profile-link@2x.png" alt="" />
            <p>Link</p>
          </div>
          <img
            @click="dialogDelete = true"
            src="../../assets/del@2x.png"
            alt=""
          />
        </div>
        <div class="input-content">
          <img src="../../assets/url-txt@2x.png" alt="" />
          <el-input v-model="linkTitle"></el-input>
        </div>
        <div class="input-content">
          <img src="../../assets/url-link@2x.png" alt="" />
          <el-input v-model="linkUrl"></el-input>
        </div>
      </div>

      <div class="card inner-card">
        <div class="top">
          <div class="title">
            <img src="../../assets/profile-video@2x.png" alt="" />
            <p>Video</p>
          </div>
          <img
            @click="dialogDelete = true"
            src="../../assets/del@2x.png"
            alt=""
          />
        </div>
        <div class="input-content">
          <img src="../../assets/url-txt@2x.png" alt="" />
          <el-input v-model="videoTitle"></el-input>
        </div>
        <div class="input-content">
          <img src="../../assets/url-link@2x.png" alt="" />
          <el-input v-model="videoLink"></el-input>
        </div>
      </div>

      <div class="card inner-card">
        <div class="top">
          <div class="title">
            <img src="../../assets/profile-video@2x.png" alt="" />
            <p>Video</p>
          </div>
          <img class="check" src="../../assets/check@2x.png" alt="" />
        </div>
        <div class="input-content">
          <img src="../../assets/url-txt@2x.png" alt="" />
          <el-input placeholder="Title" v-model="videoTitle1"></el-input>
        </div>
        <div class="input-content">
          <img src="../../assets/url-link@2x.png" alt="" />
          <el-input placeholder="Url" v-model="videoLink1"></el-input>
        </div>
      </div>
      <el-button @click="dialogVisible = true"
        ><el-icon class="el-icon--right"><Plus /></el-icon> Add new
        content</el-button
      >
    </div>
    <new-content-dialog
      :dialog-visible="dialogVisible"
      @closeDialog="dialogVisible = $event"
    ></new-content-dialog>
    <delete-dialog
      :dialog-delete="dialogDelete"
      @closeDialog="dialogDelete = $event"
    ></delete-dialog>
  </div>
</template>

<script>
import NewContentDialog from "./NewContentDialog.vue";
import DeleteDialog from "./DeleteDialog.vue";
import { Plus } from "@element-plus/icons-vue";

export default {
  components: {
    NewContentDialog,
    DeleteDialog,
    Plus,
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

.add-new-content .card {
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

.add-new-content .card.inner-card {
  padding: 1rem 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.add-new-content .card.inner-card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.add-new-content .card.inner-card .top img {
  width: 1.4rem;
  background: #e9e9eb;
  border-radius: 40px;
  cursor: pointer;
}

.add-new-content .card.inner-card .top img.check {
  background: #1cc861;
  border-radius: 40px;
  cursor: default;
}

.add-new-content .card.inner-card .top .title img {
  width: 1.4rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.add-new-content .card.inner-card .top .title p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #202226;
  display: inline-block;
  vertical-align: middle;
}

.add-new-content .card.inner-card .input-content {
  position: relative;
  margin-bottom: 1rem;
}

.add-new-content .card.inner-card .input-content:last-of-type {
  margin-bottom: 0;
}

.add-new-content .card.inner-card .input-content img {
  width: 1.4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  z-index: 1;
}

.add-new-content .card.inner-card .el-input :deep(.el-input__wrapper) {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 0.3rem 3rem;
}

.add-new-content .card.inner-card .el-upload .el-button.el-button--primary {
  background: #262626;
  border-radius: 20px;
  border-color: #262626;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
}

.add-new-content .upload-demo {
  display: flex;
  align-items: center;
}

.add-new-content .upload-demo :deep(.el-upload-list__item-info) {
  width: 100%;
}
.add-new-content .upload-demo :deep(.el-upload-list.el-upload-list--text) {
  margin: 0;
}

.add-new-content .upload-demo :deep(.el-upload-list__item.is-success) {
  margin: 0;
}

.add-new-content .upload-demo :deep(.el-upload-list__item-status-label) {
  display: none;
}

.add-new-content .el-button {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #0093e9;
  border-radius: 40px;
  padding: 1.8rem 1.5rem;
  margin-left: auto;
  display: flex;
}

.add-new-content .el-button .el-icon.el-icon--right {
  margin-right: 0.5rem;
}

@media screen and (max-width: 991px) {
  .add-new-content .upload-demo {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .add-new-content .card.inner-card .el-upload .el-button {
    margin-bottom: 0.5rem;
  }
}
</style>