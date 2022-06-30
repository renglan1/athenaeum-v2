<template>
  <div>
    <Header/>
    <Background/>
    <slot />
    <SettingsMenu/>
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
import SettingsMenu from "~/components/settings-menu/SettingsMenu.vue";

export default{
  components: {
    Header,
    Background,
    SettingsMenu
  },
};

</script>
