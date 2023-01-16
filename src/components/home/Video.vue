<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="video">
    <base-card>
      <!-- <img src="../../assets/video.png" alt="" /> -->
      <video autoplay width="320" height="240" controls>
        <source src="https://www.youtube.com/watch?v=cYIX-xzF8Kw" />
        <!-- <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag. -->
      </video>
    </base-card>
  </section>
</template>

<style scoped>
.video .card {
  background: #f3f3f5;
  min-height: 20.5rem;
}

.video video {
  width: 100%;
}
</style>