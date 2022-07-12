<template>
  <div :class="`${type} background`">
    <g-image :src="bgImageUrl" alt="" />
    <video v-show="fxOn" loop autoplay :src="bgVideoUrl"></video>
    <div class="overlay" @click="bgName = 'neptune'"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/vars";
@use '~/assets/_font-styles.scss';

.background {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0em 1em;
  z-index: -1000; 

  @media #{vars.$mobile-and-up} {
    padding: 0em 2.5em;
  }

  .overlay {
    min-height: 100vh;
    background-color: #001629;
    opacity: 0.2;
  }

  * {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}
</style>

<script>
export default {
  data() {
    return {
      get bgName() {
        return localStorage.getItem("bgName") || "neptune";
      },
      set bgName(bgName) {
        return localStorage.setItem("bgName", bgName);
      },
      get fxOn() {
        return localStorage.getItem("fxOn") || false;
      },
      set fxOn(fxOn) {
        return localStorage.setItem("fxOn", fxOn);
      },
    };
  },
  computed: {
    bgImageUrl() {
      return require(`!!assets-loader!@images/backgrounds/${this.bgName}.png`);
    },
    bgVideoUrl() {
      let video = require(`!!assets-loader!@videos/backgrounds/4k/${this.bgName}.mp4`);
      return video.src;
    },
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  }
};
</script>
