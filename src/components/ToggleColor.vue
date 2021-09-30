<<<<<<< HEAD
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
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 20px;
  width: 100px;
  bottom: 40px;
  left: 140px;
}

.colors-item {
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid var(--text-color );
  background-color: var(--primary-color);
  margin-left: 4px;
  cursor: pointer;
}


</style>





=======
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
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 20px;
  width: 100px;
  bottom: 37px;
  left: 130px;
}

.colors-item {
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid var(--text-color );
  background-color: var(--primary-color);
  margin-left: 4px;
  cursor: pointer;
}


</style>





>>>>>>> 2c70237b1777e45e2254f1bd3c85948502b08bb3
