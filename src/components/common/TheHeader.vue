<template>
  <header>
    <base-container>
      <el-row>
        <el-col :span="3">
          <img
            @click="$router.push('/')"
            class="logo"
            src="../../assets/brand-logo@2x.png"
            alt=""
          />
        </el-col>
        <el-col :span="21">
          <el-dropdown popper-class="language-dropdown">
            <span class="el-dropdown-link">
              English
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>Chinese</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-button @click="openDialog" round>Get Started</el-button>
        </el-col>
      </el-row>
    </base-container>
    <auth-dialog
      :dialog-visible="dialogVisible"
      @closeDialog="dialogVisible = $event"
    ></auth-dialog>
  </header>
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
import AuthDialog from "./AuthDialog.vue";

export default {
  components: {
    ArrowDown,
    AuthDialog,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.$store.commit("TOGGLE_DIALOG_VISIBLE", true);
      // this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
header {
  background: #f3f3f5;
}

img.logo {
  width: 3.5rem;
  cursor: pointer;
}

.el-row {
  align-items: center;
}

.el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.el-button.is-round {
  margin-left: 1rem;
  background: #262626;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
  padding: 1.2rem 1.5rem;
}

.el-dropdown-link.el-tooltip__trigger.el-tooltip__trigger {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #262626;
}
</style>

<style>
.language-dropdown .el-dropdown-menu__item {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #262626;
}
</style>