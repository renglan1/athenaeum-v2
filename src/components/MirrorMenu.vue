<template>
  <div :class="`${type} mirror-menu`">
    <div 
        class="control-container" 
        @mouseenter="translateMirrorMenu(0.75)"
        @mouseleave="translateMirrorMenu(0)"
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
  transition: transform 0.5s;
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
  transition: transform 0.5s;

  .control {
    @include font-styles.contrast-font(white);

    font-size: 2vh;
    transform: scale(1.5);

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
  computed: {
    axis(){
      return this.type === 'settings' ? 'y' : 'x';
    },
  },
  methods: {
    translateMirrorMenu(percent){
      const control = document.querySelector(`.${this.type} .control-container`);
      const items = document.querySelector(`.${this.type} .items`);

      this.translateElement(control, -percent, 'translateX(-50%)');
      this.translateElement(items, -percent, 'translateY(100vh)');
      this.$root.$emit(`${this.type}-translated`, percent);
    },
    translateElement(element, percent, transforms){
      element.style.transform = `${transforms} translate${this.axis.toUpperCase()}(${percent}v${this.axis === 'x' ? 'w' : 'h'})`;
    },
    translateItems(percent, axis) {
      const items = document.querySelector(`.${this.type} .items`);
      items.style.transform = `translate${axis.toUpperCase()}(calc(100vh - ${percent}vh))`;
    },
  },
};
</script>
