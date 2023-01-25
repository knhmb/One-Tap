<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="video">
    <base-card>
      <!-- <iframe src="https://www.youtube.com/embed/KCavaV3zTY"> </iframe> -->
      <iframe
        src="https://www.youtube.com/embed/_KCavaV3zTY?autoplay=1&amp;mute=1"
        name="youtube embed"
        allow="autoplay; encrypted-media"
      >
      </iframe>
    </base-card>
  </section>
</template>

<style scoped>
.video {
  height: 100%;
}
.video .card {
  background: #f3f3f5;
  /* min-height: 20.5rem; */
  height: 100%;
}

.video iframe {
  width: 100%;
  height: 15rem;
}
</style>