<template>
  <div id="mirror-menu-container">
    <div 
        id="control-container" 
        @mouseenter="translateMirrorMenu(5)"
        @mouseleave="translateMirrorMenu(-5)"
    >
      <fa-icon id="control" icon="fa-solid fa-ellipsis" />
    </div>
    <div id="mirror-menu">
      <div id="mirror-menu-background-container">
        <Background />
        <Settings />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/_font-styles.scss";

#mirror-menu-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-y: clip;
}

#mirror-menu {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: translateY(100vh);
  overflow-y: visible;
}

#control-container {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);

  #control {
    @include font-styles.contrast-font(white);

    font-size: 2vh;
    transform: scale(1.5);
    transition: transform 0.5s;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

<script>
import Background from "~/components/Background.vue";
import Settings from "~/components/mirror-menu-settings/Settings.vue";

export default {
  components: {
    Background,
    Settings,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    translateMirrorMenu(percent) {
      const mirrorMenu = document.getElementById("mirror-menu");
      mirrorMenu.style.transform = `translateY(100vh) translateX(${percent}%)`;
      this.$root.$emit("settings-translated", percent);
    },
  },
};
</script>
