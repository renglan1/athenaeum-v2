<template>
  <div id="background-container">
    <g-image
      :src="bgImageUrl"
      alt=""
    />
    <video
      v-show="fxOn"
      preload="none"
      loop
      autoplay
      :src="bgVideoUrl"
    ></video>
    <div id="overlay">Hi!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {
    bgName(){
      return localStorage.bgName ? localStorage.bgName : 'neptune';
    },
    fxOn(){
      return localStorage.fxOn ? true : false;
    },
    bgImageUrl(){
      return require(`!!assets-loader!@images/backgrounds/${this.bgName}.png`);
    },
    bgVideoUrl(){
      let video = require(`!!assets-loader!@videos/backgrounds/4k/${this.bgName}.mp4`)
      return video.src;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/vars";

#background-container {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0em 1em;
  z-index: -1000;

  @media only screen and (min-width: 798px) {
    padding: 0em 2.5em;
  }

  &.active {
    bottom: $settings-menu-height;
  }

  #overlay {
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

  img{
    z-index: 1;
  }

  video{
    z-index: 2;
  }

  div {
    z-index: 3;
  }
}
</style>