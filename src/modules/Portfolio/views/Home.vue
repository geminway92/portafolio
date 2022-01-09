import { defineAsyncComponent } from 'vue';
<template>
  <main>
    <div class="container-introduction">
      <div class="container-img">
        <img src="@/assets/images/photo-portafolio.jpg" alt="Foto perfil">
      </div>
      <div class="container-intro">
      <h1>FRONTEND DEVELOPED</h1>
      <p>Soy una persona flexible, disciplinada, comunicativa y responsable. Con capacidad de integración y grandes deseos de aprendizaje.</p>
      </div>
    </div>
    <div class="container-section-formation">

      <div class="container-formation">
        <h2>Mi formación...</h2>
        <p>2022 - Programación y Diseño Web Front-End (265 horas) <br>
          2021 - Vue.js De cero a experto <br>
          2021 - JavaScript Moderno: Guía para dominar el lenguaje <br>
          2021 - Introducción a API REST <br>
          2020 - Programación desde cero
        </p>
      </div>
      <div class="container-skills">
        <div class="skill">
          <h3>HTML</h3>
        </div>
        <div class="skill">
          <h3>CSS</h3>
        </div>
        <div class="skill">
          <h3>JavaScript</h3>
        </div>
        <div class="skill">
          <h3>VueJS</h3>
        </div>
        <div class="skill">
          <h3>Vuex</h3>
        </div>
        <div class="skill">
          <h3>Bootstrap</h3>
        </div>
        <div class="skill">
          <h3>Figma</h3>
        </div>
        <div class="skill">
          <h3>Quasar</h3>
        </div>
        <div class="skill">
          <h3>Tailwind</h3>
        </div>
        <div class="skill">
          <h3>i18n</h3>
        </div>
        <div class="skill">
          <h3>Axios</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-introduction {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 500px;
}

.container-img {
  width: 465px;
}

.container-img img {
  width: 100%;
  border-radius: 50%;
}

.container-intro {
  transform: translateY(-20px);
}

.container-section-formation{
  bottom: 5em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container-formation {
  width: 50%;
}

.container-intro h1, .container-formation h2 {
  font-family: 'Press Start 2P', cursive;
}
.container-intro p, .container-formation p {
  font-family: 'PT Mono', monospace;
  width: 630px;
  font-size: 25px;
}

.container-formation p {
  width: 100%;
}

.container-skills {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  width: 18%;
  height: min-content;
  gap:  .5em;
}

.skill  {
  border: #919191 2px solid;
  border-radius: 10px;
  width: 100%;
  height: min-content;
}

.skill h3 {
  margin: 0;
  font-weight: normal;
  text-align: center;
  padding: .3em 0;
}

@media screen and (max-width: 885px) {

.container-introduction {
  width: 100%;
  flex-direction: column;
  height: min-content;
}

.container-img {
  width: 300px;
}

.container-section-formation{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-intro {
  transform: translate(0);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-formation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-intro h1, .container-formation h2 {
  text-align: center;
}
.container-formation h2 {
  font-size: 1.4em;
}

.container-intro p, .container-formation p {
  width: 90%;
  line-height: 35px;
}

.container-formation p {
  margin: 10px 0;
}

.container-skills {
  width: 100%;
  place-content: center;
  padding: 1em 0;
}

.skill  {
  border: #919191 2px solid;
  border-radius: 10px;
  width: 100%;
  height: min-content;
}


}

@media screen and (min-width: 500px){
  .container-img{
    padding: 2em;
  }
}
</style>
