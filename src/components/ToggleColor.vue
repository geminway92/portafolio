<template>
  <div class="colors">
          <div @click="this.$emit('changeColorBlue')"
            class="colors-item color-item--blue"
          ></div>
          <div @click="this.$emit('changeColorGreen')"
            class="colors-item color-item--green"
          ></div>
          <div @click="this.$emit('changeColorPurple')"
            class="colors-item color-item--purple"
          ></div>
          <div @click="this.$emit('changeColorOrange')"
            class="colors-item color-item--orange"
          ></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.colors {
  display: flex;
  height: 20px;
  width: 100px;
}

.colors-item {
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid var(--text-color );
  background-color: var(--primary-color);
  margin-left: 4px;
  top: 18px;
  left: 480px;
  cursor: pointer;
}

@media (max-width: 720px) {
  .colors {
    position: relative;
    width: 300px;
    height: 100%;
    right: 50px;
  }

  .colors-item {
    left: 3em;
    top: 2.5em;
    width: 40px;
    height: 40px;
    margin-left: 1.5em;
  }
}


@media (min-width: 721px) {
  .colors {
    bottom: 0em;
    top: 4em;
  }

  .colors-item {
    width: 20px;
    height: 20px;
    left: 1em;
  }
}


</style>





