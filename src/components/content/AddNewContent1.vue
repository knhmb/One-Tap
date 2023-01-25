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
              <p class="button" @click="addContent('link')">Add</p>
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
              <p class="button" @click="addContent('photo')">Add</p>
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
              <p class="button" @click="addContent('video')">Add</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <template v-if="dynamicContent.length > 0">
        <div class="content-card" v-for="item in dynamicContent" :key="item.id">
          <el-row style="align-items: center" gutter="20">
            <el-col :span="4">
              <div class="image-box">
                <img :src="item.icon" alt="" />
              </div>
            </el-col>
            <el-col :span="18">
              <div class="content-box">
                <div class="top">
                  <img src="../../assets/url-txt.png" alt="" />
                  <el-input
                    v-model="item.title"
                    placeholder="What travel is really like in 2020"
                  ></el-input>
                </div>
                <div class="bottom" v-if="item.format === 'Photo'">
                  <el-upload
                    v-model:file-list="item.content"
                    class="upload-demo"
                    action="#"
                  >
                    <el-button type="primary">Click to upload</el-button>
                    <!-- <template #tip>
                    <div class="el-upload__tip">
                      jpg/png files with a size less than 500KB.
                    </div>
                  </template> -->
                  </el-upload>
                </div>
                <div class="top" v-else>
                  <img src="../../assets/url-link@2x.png" alt="" />
                  <el-input
                    v-model="item.content"
                    :placeholder="item.placeholder"
                  ></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="2" style="text-align: end">
              <img
                @mouseover="changeIcon(1)"
                @mouseout="defaultIcon(1)"
                class="delete-icon"
                @click="deleteContent(item.id)"
                :src="item.deleteIcon"
                alt=""
              />
            </el-col>
          </el-row>
        </div>
      </template>
      <!-- <div class="content-card">
        <el-row style="align-items: center" gutter="20">
          <el-col :span="4">
            <div class="image-box">
              <img src="../../assets/profile-photo@2x.png" alt="" />
            </div>
          </el-col>
          <el-col :span="18">
            <div class="content-box">
              <div class="top">
                <img src="../../assets/url-txt.png" alt="" />
                <el-input
                  v-model="input1"
                  placeholder="What travel is really like in 2020"
                ></el-input>
              </div>
              <div class="bottom">
                <el-upload
                  v-model:file-list="fileList"
                  class="upload-demo"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :limit="3"
                  :on-exceed="handleExceed"
                >
                  <el-button type="primary">Click to upload</el-button>
                </el-upload>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="text-align: end">
            <img
              @mouseover="changeIcon(1)"
              @mouseout="defaultIcon(1)"
              class="delete-icon"
              @click="dialogDelete = true"
              :src="deleteIcon"
              alt=""
            />
          </el-col>
        </el-row>
      </div> -->
      <!-- <div class="content-card">
        <el-row style="align-items: center" gutter="20">
          <el-col :span="4">
            <div class="image-box">
              <img src="../../assets/profile-link@2x.png" alt="" />
            </div>
          </el-col>
          <el-col :span="18">
            <div class="content-box">
              <div class="top">
                <img src="../../assets/url-txt.png" alt="" />
                <el-input
                  v-model="input1"
                  placeholder="What travel is really like in 2020"
                ></el-input>
              </div>
              <div class="top">
                <img src="../../assets/url-link@2x.png" alt="" />
                <el-input
                  v-model="input2"
                  placeholder="http://www.website.com/"
                ></el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="text-align: end">
            <img
              @mouseover="changeIcon(2)"
              @mouseout="defaultIcon(2)"
              class="delete-icon"
              @click="dialogDelete = true"
              :src="deleteIcon2"
              alt=""
            />
          </el-col>
        </el-row>
      </div> -->
      <!-- <div class="content-card">
        <el-row style="align-items: center" gutter="20">
          <el-col :span="4">
            <div class="image-box">
              <img src="../../assets/profile-video@2x.png" alt="" />
            </div>
          </el-col>
          <el-col :span="18">
            <div class="content-box">
              <div class="top">
                <img src="../../assets/url-txt.png" alt="" />
                <el-input
                  v-model="input1"
                  placeholder="What travel is really like in 2020"
                ></el-input>
              </div>
              <div class="top">
                <img src="../../assets/url-link@2x.png" alt="" />
                <el-input
                  v-model="input3"
                  placeholder="http://www.website.com/"
                ></el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="text-align: end">
            <img
              @mouseover="changeIcon(3)"
              @mouseout="defaultIcon(3)"
              class="delete-icon"
              @click="dialogDelete = true"
              :src="deleteIcon3"
              alt=""
            />
          </el-col>
        </el-row>
      </div> -->
    </div>
    <el-button class="update" @click="updateContent">Update</el-button>
    <DeleteDialog
      :dialogDelete="dialogDelete"
      @closeDialog="closeDialog($event)"
      @deleteContent="contentDeleted($event)"
    />
  </div>
</template>
  
  <script>
//   import { Plus } from "@element-plus/icons-vue";
import DeleteDialog from "./DeleteDialog.vue";
import { ElNotification } from "element-plus";

export default {
  components: {
    //   Plus,
    DeleteDialog,
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
      input1: "",
      input2: "",
      input3: "",
      deleteIcon: require("../../assets/del@2x.png"),
      deleteIcon2: require("../../assets/del@2x.png"),
      deleteIcon3: require("../../assets/del@2x.png"),
      dynamicContent: [],
      selectedId: null,
      finalArray: [],
    };
  },
  computed: {
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
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
    changeIcon(num) {
      if (num === 1) {
        this.deleteIcon = require("../../assets/del.png");
      } else if (num === 2) {
        this.deleteIcon2 = require("../../assets/del.png");
      } else if (num === 3) {
        this.deleteIcon3 = require("../../assets/del.png");
      }
    },
    defaultIcon(num) {
      if (num === 1) {
        this.deleteIcon = require("../../assets/del@2x.png");
      } else if (num === 2) {
        this.deleteIcon2 = require("../../assets/del@2x.png");
      } else if (num === 3) {
        this.deleteIcon3 = require("../../assets/del@2x.png");
      }
    },
    deleteContent(id) {
      this.dialogDelete = true;
      this.selectedId = id;
    },
    contentDeleted() {
      this.dynamicContent = this.dynamicContent.filter(
        (item) => item.id !== this.selectedId
      );
    },
    closeDialog(event) {
      this.dialogDelete = event;
    },
    addContent(type) {
      let guid = () => {
        let s4 = () => {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        };
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return (
          s4() +
          s4() +
          "-" +
          s4() +
          "-" +
          s4() +
          "-" +
          s4() +
          "-" +
          s4() +
          s4() +
          s4()
        );
      };
      if (type === "photo") {
        const item = {
          id: guid(),
          icon: require("../../assets/profile-photo@2x.png"),
          title: "",
          content: [],
          deleteIcon: require("../../assets/del@2x.png"),
          format: "Photo",
          placeholder: "",
          href: "",
          view: 0,
        };
        this.dynamicContent.push(item);
      } else if (type === "link") {
        const item = {
          id: guid(),
          icon: require("../../assets/profile-link@2x.png"),
          title: "",
          content: "",
          deleteIcon: require("../../assets/del@2x.png"),
          format: "Link",
          placeholder: "http://www.website.com/",
          href: "",
          view: 0,
        };
        this.dynamicContent.push(item);
      } else if (type === "video") {
        const item = {
          id: guid(),
          icon: require("../../assets/profile-video@2x.png"),
          title: "",
          content: "",
          deleteIcon: require("../../assets/del@2x.png"),
          format: "Video",
          placeholder: "http://www.youtube.com.watch?12398127-3987123",
          href: "",
          view: 0,
        };
        this.dynamicContent.push(item);
      }
      console.log(this.dynamicContent);

      // const finalData = [];

      // this.dynamicContent.forEach((item) => {
      //   finalData.push({
      //     title: item.title,
      //     content: item.content,
      //     format: item.format,
      //     href: item.href,
      //     view: item.view,
      //   });
      // });
      // this.finalArray = finalData;
      // console.log(this.finalArray);
    },
    updateContent() {
      const finalData = [];

      this.dynamicContent.forEach((item) => {
        finalData.push({
          title: item.title,
          content: item.content.toString(),
          format: item.format,
          href: item.href,
          view: item.view,
          icon: item.icon,
        });
      });
      console.log(finalData);

      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/updateUserDetails", {
            id: this.userDetails.item.id,
            data: { content: finalData },
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("profile/updateUserDetails", {
                id: this.userDetails.item.id,
                data: { content: finalData },
              });
              this.dynamicContent = [];
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token expired! Please login again.",
                type: "error",
              });
              this.$store.dispatch("auth/logout");
            });
        });
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

.add-new-content .content-card .content-box {
  border: 1px solid #262626;
  border-radius: 12px;
}

.add-new-content .content-card .content-box .top {
  padding: 0.8rem 2.5rem;
  position: relative;
}

.add-new-content .content-card .content-box .top:first-of-type {
  border-bottom: 1px solid #262626;
}

.add-new-content .content-card .content-box .bottom .top {
  /* padding: 0.8rem 0.5rem; */
  width: 1.7rem;
  position: relative;
  padding: 0 2.5rem;
  border: none;
}

.add-new-content .content-card .content-box .bottom .top img {
  position: absolute;
  top: 47%;
  left: 0.5rem;
  transform: translateY(-50%);
}

.add-new-content
  .content-card
  .content-box
  :deep(.el-input .el-input__wrapper) {
  box-shadow: none;
  background: transparent;
}

.add-new-content .content-card .content-box .top img {
  width: 1.7rem;
  position: absolute;
  top: 47%;
  left: 0.5rem;
  transform: translateY(-50%);
}

.add-new-content .content-card .content-box .bottom :deep(.upload-demo) {
  display: flex;
}
.add-new-content
  .content-card
  .content-box
  .bottom
  :deep(.el-upload-list.el-upload-list--text) {
  width: 100%;
}

.add-new-content
  .content-card
  .content-box
  .bottom
  :deep(.el-button.el-button--primary) {
  background: #d5d5d7;
  border: 1px solid #262626;
  border-radius: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #262626;
}

.add-new-content .content-card .content-box .bottom {
  padding: 0.8rem 0.5rem;
}

.add-new-content .delete-icon {
  width: 2rem;
  cursor: pointer;
  background: #e9e9eb;
  border: 1px solid #262626;
  border-radius: 20px;
  padding: 0.1rem;
}

.add-new-content .delete-icon:hover {
  background: #f03738;
  border-color: #f03738;
}

.add-new-content .image-box {
  background: #e9e9eb;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 2.58rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-new-content .el-button.update {
  background: #0093e9;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-color: #0093e9;
  margin-left: auto;
  padding: 1.3rem 2.5rem;
  margin-top: 2rem;
  display: flex;
}
</style>