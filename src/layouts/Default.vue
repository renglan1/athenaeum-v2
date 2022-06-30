<template>
  <div>
    <Header/>
    
    <div id="page" @settings-menu-translated="translatePage">
      <Background/>
    </div>

    <slot />

    <MirrorMenu type="settings"/>
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
    translatePage(percent) {
      const page = document.getElementById("page");
      page.style.transform = `translateX(-${percent}%)`;
    },
  },
};

</script>
