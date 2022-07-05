<template>
  <div :class="`${type} mirror-menu`">
    <div 
        class="control-container" 
        @mouseenter="translateMirrorMenu(12)"
        @mouseleave="translateMirrorMenu(-12)"
    >
      <fa-icon :class="`${type} control`" icon="fa-solid fa-ellipsis" />
    </div>
    <div :class="`${type} items`">
      <div class="background-container">
        <Background :type="`${type}`"/>
        <Settings />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/_font-styles.scss";

.mirror-menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-y: clip;
}

.items {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: translateY(100vh);
  overflow-y: visible;
}

.control-container {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);

  .control {
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
    translateMirrorMenu(percent){
      //this.translateControl(percent);
      this.translateItems(percent);
      this.$root.$emit(`${this.type}-translated`, percent);
    },
    translateControl(percent){
      const control = document.querySelector(`.${this.type}.control`);
      control.style.transform = `translateY(${percent}%)`;
    },
    translateItems(percent) {
      const items = document.querySelector(`.${this.type}.items`);
      items.style.transform = `translateY(calc(100vh - ${percent}%))`;
    },
  },
};
</script>
