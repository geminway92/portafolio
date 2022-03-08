import { defineAsyncComponent } from 'vue';
<template>
  <main>
    <div class="container-introduction">
        <img src="@/assets/images/photo-portafolio.jpg" alt="Foto perfil">

      <div class="container-intro">
        <h1>FRONTEND DEVELOPED</h1>
        <p>Soy una persona flexible, disciplinada, comunicativa y responsable. Con capacidad de integración y grandes deseos de aprendizaje.</p>
      </div>

    </div>

    <div class="container-section-formation">
      <FormationComponent></FormationComponent>
      <SkillComponents></SkillComponents>
    </div>

  </main>
</template>

<script>
import SkillComponents from '../components/SkillComponents.vue'
import FormationComponent from '../components/FormationComponent.vue'
export default {
  name: 'Home',
  components: {
    SkillComponents,
    FormationComponent
  }
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
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 500px;
}

img {
  width: 40%;
  border-radius: 50%;
}

.container-section-formation{
  bottom: 5em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container-intro{
  width: 50%;
}
.container-intro h1{
  font-family: 'Press Start 2P', cursive;
}
.container-intro p{
  font-family: 'PT Mono', monospace;

  font-size: 25px;
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

.container-intro h1 {
  text-align: center;
}

.container-intro p{
  width: 90%;
  line-height: 35px;
}


}

@media screen and (min-width: 500px){
  .container-img{
    padding: 2em;
  }
}
</style>
