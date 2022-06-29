<template>
  <div id="background-container">
    <g-image
      :src="require(`!!assets-loader!@images/backgrounds/${bgName}.png`)"
      alt=""
    />
    <video
      v-if="true"
      preload="none"
      loop
      autoplay
      :src="require(`!!assets-loader!@videos/backgrounds/4k/${bgName}.mp4`)"
    ></video>
    <div id="overlay"></div>
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
}
</style>