<template>
  <div>
    <div id="control-container">
      <fa-icon id="control" icon="fa-solid fa-ellipsis"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/_font-styles.scss';

#control-container {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);

  #control {
    @include font-styles.contrast-font(white);

    font-size: 2vh;
    transform: scale(1.5);
    transition: transform 0.5s;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

<script>
export default {
    components: {
        //FontAwesomeIcon
    }
};
</script>