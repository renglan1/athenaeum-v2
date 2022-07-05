<template>
  <div class="settings">
    <div class="options">
      <i
        class="toggle-fx-button option" 
        icon="fa-solid fa-wand-magic-sparkles"
      ></i>
      <i
        class="background-select-button option"
        icon="fa-solid fa-image"
      ></i>
      <fa-icon 
        class="volume-button option"
        icon="fa-solid fa-volume-xmark"
      ></fa-icon >
    </div>
    <div class="background-select">
      <div id="background-select-options"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/vars";
@use "~/assets/_font-styles.scss";

.settings {
  @include font-styles.contrast-font(white);

  position: absolute;
  height: vars.$settings-height;
  width: 100%;
  top: 0;
  left: 0;

  margin: 0;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.options {
  flex: 0 0 100%;

  min-height: vars.$settings-height;

  display: flex;
  column-gap: 6vh;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.75s;

  .option {
    font-size: 4vh;
    margin: 0.1em 0em;

    &:hover{
        cursor: pointer;
        transform: scale(1.10);
    }
  }
}
</style>

<script>
export default {
  components: {
    //FontAwesomeIcon
  },
};
</script>
