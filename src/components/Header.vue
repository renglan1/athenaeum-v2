<template>
  <div>
    <header>
      <a href="/">
        <span class="icon-athenaeum"></span>
        <h1 title="Ah-thuh-nee-im">
          <span v-for="(char, i) in $static.metadata.siteName" :key="i">
            {{ char }}
          </span>
        </h1>
      </a>
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
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "~/assets/vars";
@import "~/assets/font-styles";
@import "~/assets/icomoon/icomoon";

header {
  position: absolute;
  top: 7.5%;
  width: 100%;

  text-transform: uppercase;
  user-select: none;
  overflow: hidden;

  h1{
    display: flex;
    flex: 0 0 60%;
    justify-content: space-between;
  }

  a {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    column-gap: 2.25%;
    margin: 0 2.5%;

    &:hover {
      cursor: pointer;
    }

    &:visited {
      color: inherit;
    }
  }
}

.icon-athenaeum {
  &::before {
    font-size: $logo-font-size;
  }
}

@media #{$mobile-and-up} {
  .icon-athenaeum:before {
    font-size: scale-font($logo-font-size, 1);
  }
}

@media #{$desktop-small-and-up}{
  .icon-athenaeum:before {
    font-size: scale-font($logo-font-size, 2);
  }
}

@media #{$desktop-and-up}{
  .icon-athenaeum:before {
    font-size: scale-font($logo-font-size, 3);
  }
}
</style>