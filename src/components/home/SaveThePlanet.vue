<template>
  <div class="save-the-planet">
    <base-card>
      <img src="../../assets/outline-earth@2x.png" alt="" />
      <p>Save the Planet</p>
    </base-card>
  </div>
</template>

<style scoped>
.save-the-planet {
  height: 100%;
}

.save-the-planet .card {
  background: #f3f3f5;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.save-the-planet p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 72px;
  display: flex;
  align-items: center;
  letter-spacing: -0.04em;
  color: #262626;
  z-index: 1;
  position: relative;
}

.save-the-planet img {
  position: absolute;
  width: 20rem;
  right: 0;
  bottom: 0;
}
</style>