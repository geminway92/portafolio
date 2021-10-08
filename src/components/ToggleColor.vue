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
  border: 1px solid var(--text-color );
  background-color: var(--primary-color);
  cursor: pointer;
}

@media screen and (max-width: 430px) {
  .colors {
    position: relative;
    width: 300px;
    height: 100%;
    right: 5em;
    top: 1.2em;
  }

  .colors-item {
    left: 3em;
    top: 2.5em;
    width: 40px;
    height: 40px;
    margin-left: 1.5em;
  }
}


@media screen and (min-width: 700px) and (max-width: 1000px){
  .colors {
    width: min-content;
    position: relative;
    top: .5em;
  }

  .colors-item {
    width: 30px;
    height: 30px;
    margin-left: 1em;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1600px) {
    .colors {
    width: min-content;
    position: relative;
    top: .5em;
  }

  .colors-item {
    width: 30px;
    height: 30px;
    margin-left: 1em;
  }

}


@media screen and (min-width: 1600px) {
    .colors {
    width: min-content;
    position: relative;
    top: .5em;
  }

  .colors-item {
    width: 30px;
    height: 30px;
    margin-left: 1em;
  }

}
</style>





