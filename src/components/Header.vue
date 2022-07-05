<template>
  <div class="header">
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

<style lang="scss" scoped>
@use "~/assets/_vars.scss";
@use "~/assets/_font-styles";
@use "~/assets/icomoon/icomoon.scss";

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
    font-size: font-styles.$logo-font-size;
  }
}

@media #{vars.$mobile-and-up} {
  .icon-athenaeum:before {
    font-size: font-styles.scale-font(font-styles.$logo-font-size, 1);
  }
}

@media #{vars.$desktop-small-and-up}{
  .icon-athenaeum:before {
    font-size: font-styles.scale-font(font-styles.$logo-font-size, 2);
  }
}

@media #{vars.$desktop-and-up}{
  .icon-athenaeum:before {
    font-size: font-styles.scale-font(font-styles.$logo-font-size, 3);
  }
}
</style>

<script>
export default {
  name: "Header",
};
</script>
