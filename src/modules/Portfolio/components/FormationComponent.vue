<template>
  <div class="container-formation">
        <h2>Mi formación...</h2>
        <p>2022 - Programación y Diseño Web Front-End (392 horas) <br>
          2021 - Vue.js De cero a experto <br>
          2021 - JavaScript Moderno: Guía para dominar el lenguaje <br>
          2021 - Introducción a API REST <br>
          2020 - Programación desde cero
        </p>
      </div>
</template>

<style scoped>
.container-formation {
  width: 50%;
}
.container-formation p {
  width: 100%;
}
.container-formation h2 {
  font-family: 'Press Start 2P', cursive;
}
.container-formation p {
  font-family: 'PT Mono', monospace;
  width: 630px;
  font-size: 25px;
}

@media screen and (max-width: 885px) {
  .container-formation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .container-formation p {
    margin: 10
  }

  .container-formation h2 {
   font-size: 1.4em;
   text-align: center;
  }

  .container-formation p {
    width: 90%;
    line-height: 35px;
  }




}

</style>
