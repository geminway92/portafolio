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
  width: min-content;
  margin: 1em 0;
}

.colors-item {
  border: 1px solid var(--text-color );
  background-color: var(--primary-color);
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-left: .5em;  
}


@media screen and (min-width: 360px) {
    .colors {
      margin: auto;
  } 

  .colors-item {
    width: 20px;
    height: 20px;
  }
}

@media screen and (min-width: 1166px) {

  .colors {
    margin: auto
  }

  .colors-item {
    width: 30px;
    height: 30px; 
  }

}







</style>





