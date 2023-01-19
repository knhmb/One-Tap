<template>
  <div class="personal-information">
    <div class="card">
      <h2>Personal Information</h2>
      <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
        <el-row>
          <el-col :sm="24" :md="8">
            <p>Account Type</p>
          </el-col>
          <el-col :sm="24" :md="16" style="display: block">
            <div class="options">
              <div
                @click="setOption('Personal')"
                :class="{ 'is-selected': profileType === 'Personal' }"
                class="option"
              >
                Personal
              </div>
              <div
                @click="setOption('Business')"
                :class="{ 'is-selected': profileType === 'Business' }"
                class="option"
              >
                Business
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Avatar</p>
          </el-col>
          <el-col :sm="24" :md="16" class="avatar-content">
            <img class="avatar" :src="userDetails.item.avatar" alt="" />
            <!-- <el-button class="select-photo">Choose photo</el-button> -->
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            >
              <el-button type="primary">Choose photo</el-button>
              <!-- <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template> -->
            </el-upload>
            <img class="delete" src="../../assets/del@2x.png" alt="" />
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Username</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Email</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Phone</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Display name</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item prop="displayName">
              <el-input v-model="ruleForm.displayName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Address</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <p>Description</p>
          </el-col>
          <el-col :sm="24" :md="16">
            <el-form-item>
              <el-input
                type="textarea"
                rows="5"
                v-model="ruleForm.description"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button class="update" @click="updateUser">Update</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      profileType: null,
      fileList: [],
      ruleForm: {
        username: "taimanchan",
        email: "chantaiman@gmail.com",
        displayName: "Chan Tai Man",
        phone: "9876 5432",
        address:
          "Unit 3, 6/F., Tower B, Regent Centre, 63 Wo Yi Hop Road, Kwai Chung, Hong Kong",
        description:
          "Lorem ipsum dolor sit amet consectetur Tincidunt duis eros turpis facilisis sit",
      },
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email is required!", trigger: "blur" },
          { type: "email", message: "Please enter a valid email" },
        ],
        displayName: [
          { required: true, message: "Name is required!", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "Phone is required!", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    userDetails() {
      return this.$store.getters["profile/userDetails"];
    },
  },
  methods: {
    setOption(option) {
      this.profileType = option;
    },
    handleAvatarSuccess(response, uploadFile) {
      console.log(response);
      this.imgSrc = response.item.name;
      // this.getImageFilename(this.imgSrc);
      this.sendAvatar(this.imgSrc);
      console.log(uploadFile);
    },
    sendAvatar(data) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store
            .dispatch("profile/updateUserAvatar", {
              avatar: `${this.protocol}//${this.hostname}/api/v1/system/uploads/${data}`,
              id: this.currentUserDetails.id,
            })
            .then(() => {
              this.avatarLoaded = false;
              this.$store
                .dispatch("profile/getUser", this.currentUserDetails.id)
                .then(() => {
                  this.avatarLoaded = true;

                  // this.imgSrc = this.userDetails.avatar;
                });
            });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store
                .dispatch("profile/updateUserAvatar", {
                  avatar: `${this.protocol}//${this.hostname}/api/v1/system/uploads/${data}`,
                  id: this.currentUserDetails.id,
                })
                .then(() => {
                  this.$store
                    .dispatch("profile/getUser", this.currentUserDetails.id)
                    .then(() => {
                      // this.imgSrc = this.userDetails.avatar;
                    });
                });
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login Again.",
                type: "error",
              });
              this.$store.dispatch("auth/logout");
            });
        });
    },
    updateUser() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          // Object.keys(this.ruleForm).forEach(
          //   (k) => this.ruleForm[k] == null && delete this.ruleForm[k]
          // );

          const data = {
            username: this.ruleForm.username,
            email: this.ruleForm.email,
            displayName: this.ruleForm.displayName,
            phoneno: this.ruleForm.phone,
            address: this.ruleForm.address,
            description: this.ruleForm.description,
            type: this.profileType,
          };

          Object.keys(data).forEach((k) => data[k] == null && delete data[k]);

          console.log(data);

          this.$store
            .dispatch("auth/checkAccessToken")
            .then(() => {
              this.userData(data);
            })
            .catch(() => {
              this.$store
                .dispatch("auth/checkAccessToken")
                .then(() => {
                  this.userData(data);
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
        }
      });
    },
    userData(data) {
      this.$store
        .dispatch("profile/updateUserDetails", {
          id: this.userDetails.item.id,
          data,
        })
        .then(() => {
          this.$store
            .dispatch("profile/getUserDetails", this.userDetails.item.id)
            .then(() => {
              ElNotification({
                title: "Success",
                message: "Information updated!",
                type: "success",
              });
            });
        });
    },
  },
  created() {
    this.ruleForm.username = this.userDetails.item.username;
    this.ruleForm.email = this.userDetails.item.email;
    this.ruleForm.displayName = this.userDetails.item.displayName;
    this.ruleForm.address = this.userDetails.item.address;
    this.ruleForm.description = this.userDetails.item.description;
    this.ruleForm.phone = this.userDetails.item.phoneno;
    this.profileType = this.userDetails.item.type;
  },
};
</script>

<style scoped>
.personal-information {
  margin-top: 2rem;
}

.personal-information .card {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
}

.personal-information .el-row {
  align-items: center;
}

.personal-information .el-row .el-col {
  margin-bottom: 1.5rem;
}

.personal-information .el-row .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
}

.personal-information .el-form .el-row :deep(.el-form-item) {
  margin-bottom: 0;
}

.personal-information p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
}

.personal-information h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  margin-bottom: 2.5rem;
}

.personal-information .options {
  display: flex;
}

.personal-information .options .option {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 1rem;
  width: 50%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.personal-information .options .option:first-of-type {
  margin-right: 1rem;
}

.personal-information .options .option:hover,
.personal-information .options .option.is-selected {
  background: #0093e9;
  color: #fff;
  border-color: #0093e9;
}

.personal-information img.avatar {
  width: 4rem;
  border-radius: 100%;
}

.personal-information img.delete {
  width: 1.3rem;
  cursor: pointer;
  background: #e9e9eb;
  border-radius: 40px;
}

.personal-information .el-button.select-photo {
  background: #262626;
  border-radius: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 1rem;
}

.personal-information .el-input :deep(.el-input__wrapper) {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 0.3rem 1rem;
}

.personal-information .el-textarea :deep(.el-textarea__inner) {
  background: #f3f3f5;
  border: 1px solid #262626;
  border-radius: 12px;
  /* padding: 0.3rem 1rem; */
}

.personal-information .el-button.update {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* color: rgba(255, 255, 255, 0.8); */
  /* background: rgba(160, 166, 169, 0.4); */
  border-radius: 40px;
  margin-left: auto;
  display: flex;
  padding: 1.5rem;
  background: #0093e9;
  border-color: #0093e9;
  color: #fff;
}

.personal-information :deep(.el-upload-list.el-upload-list--text) {
  display: none;
}

.personal-information .el-col.avatar-content {
  display: flex;
  align-items: center;
}

.personal-information .upload-demo {
  margin: 0 1rem;
}
</style>