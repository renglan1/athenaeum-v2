<template>
  <div>
    <header>
      <span class="icon-athenaeum"></span>
      <h1 title="Ah-thuh-nee-im">
        <span v-for="char in $static.metadata.siteName">{{char}}</span>
      </h1>
    </header>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
    export default{
        name: 'Header',
    };
</script>

<style lang="scss" scoped>
@import '~/assets/vars.scss';
@import '~/assets/font-styles.scss';

header {
  position: absolute;
  top: 1em;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3em;
  font-weight: 700;

  text-transform: uppercase;

  h1 {
    flex: 0 0 60%;
    display: flex;
    justify-content: space-between;
  }

  span {
    &:hover {
      cursor: default;
    }
  }

  .icon-athenaeum:before {
    font-size: 2em;
  }

  .icon-athenaeum {
    margin-right: 0.5em;
  }

  @media #{$large-and-down} {
    font-size: 3.5em;
  }

  @media #{$above-large} {
    font-size: 4.5em;
  }

  @media #{$small-and-down} {
    font-size: 2em;
  }
}
</style>