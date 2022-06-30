<template>
  <div>
    <Header/>
    <Background/>
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

export default{
  components: {
    Header,
    Background
  },
};

</script>
