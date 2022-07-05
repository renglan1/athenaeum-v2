<template>
  <div>
    <MirrorMenu type="settings"/>

    <Header/>

    <div id="background" @settings-menu-translated="translateBackground">
      <Background/>
    </div>

    <slot />

    
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>

</style>

<script>
import Header from "~/components/Header.vue";
import Background from "~/components/Background.vue";
import MirrorMenu from "~/components/MirrorMenu.vue";

export default{
  components: {
    Header,
    Background,
    MirrorMenu
  },
  methods: {
    translateBackground(percent) {
      const background = document.getElementById("background");
      background.style.transform = `translateX(${percent}%)`;
    },
  },
};

</script>
