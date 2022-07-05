<template>
  <div>
    <MirrorMenu type="settings" v-on:settings-translated="translateBackground($event)"/>

    <Header/>

    <div class="background-container">
      <Background type="main"/>
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
      const background = document.querySelector("div.main.background");
      background.style.transform = `translateY(${percent}%)`;
    },
  },
};

</script>
