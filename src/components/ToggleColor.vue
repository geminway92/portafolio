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
  right: 200px;
  cursor: pointer;
}

</style>





