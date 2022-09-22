<template>
  <section class="user-profile">
    <base-container>
      <div class="top-section">
        <div class="pill">
          <img src="../assets/profile-on-off@2x.png" alt="" />
          <p>Profile</p>
        </div>
        <div class="pill">
          <img src="../assets/content-off@2x.png" alt="" />
          <p>Content</p>
        </div>
        <div class="pill">
          <img src="../assets/logout-on-off@2x.png" alt="" />
          <p>Logout</p>
        </div>
        <div class="pill">
          <div class="text">
            <p>My Link</p>
            <p>https://www.xxxxxxxxxxxxxxxxxxxxx.com</p>
          </div>
          <el-button>Copy</el-button>
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped>
.user-profile {
  background: #f3f3f5;
  border-top: 1px solid #000000;
}

.user-profile .container {
  padding-right: 18rem;
  padding-left: 18rem;
}

.user-profile .top-section {
  display: flex;
  gap: 0.5rem;
}

.user-profile .top-section .pill {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
}

.user-profile .top-section .pill:last-of-type {
  width: 100%;
  justify-content: space-between;
}

.user-profile .top-section .pill img {
  width: 1.8rem;
}

.user-profile .top-section .pill p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #262626;
}

.user-profile .pill .text p:first-of-type {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #262626;
}

.user-profile .pill .text p:nth-of-type(2) {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0093e9;
}

.user-profile .pill .el-button {
  background: #f3f3f5;
  border: 1px solid #000000;
  border-radius: 80px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #262626;
}
</style>