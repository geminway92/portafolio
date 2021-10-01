<<<<<<< HEAD
<template>
  <div class="projects">
      <img src="../assets/images/photo-projects-pokemon.jpg" alt="Pokemon Page project" class="project_image">
    <div class="project_info">

      <div class="project_tags">
        <span class="project_tag">#HTML</span>
        <span class="project_tag">#CSS</span>
        <span class="project_tag">#JavaScript</span>
        <span class="project_tag">#VueJs</span>
        <span class="project_tag">#Responsive</span>
      </div>
      <h2 class="project__title">Pokemon Page</h2>
      <p class="project__text">
        Proyecto que simula una consola portatil. El juego consiste en que se te muestra 
        un Pokemon oculto y te dan cuatro opciones, tienes que averiguar cual Pokemon es. 
        Una vez elegido el pokemon se te muestra la imagen. Empiezas con 3 vidas, si fallas 3 veces pierdes.
        Si aciertas vas sumando juego, luego puedes añadir tu nombre en la lista de clasificación de puntos.
        Se consumió la Api "PokéApi".
      </p>
        <div class="buttons">
          <a href="#" class="button button--primary">Demo</a>
          <a href="#" class="button button--primary-ghost">Code</a>

        </div>

        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .projects {
  display: flex;
  width: 720px;
  background-color: var(--bg-card-color);
  padding: 1em;
  border-radius: var(--border-radius);   
  transition: var(--transition);
  margin: 0 1em 1em 1em;
  align-items: flex-start;
}

.project__title {
  font-size: 1em;
}

.project__text {
  font-size: 0.9em;
}
.project_image {
  max-width: 30%;
  margin-right: 2em;
  border-radius: var(--border-radius); 
}

.project_info {
  display: flex;
  flex-direction: column;
}

.project_tags {
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 30px 100px;
}

.button {
  display: inline-block;
  width: 100px;
  line-height: 2.5;
  text-align: center;
  border-radius: var(--border-radius); 
}

.button--primary {
  background-color: var(--primary-color);
  color: #fff;

}

.button--primary-ghost {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}


=======
<template>
  <div class="projects">
      <img src="../assets/images/photo-projects-pokemon.jpg" alt="Pokemon Page project" class="project_image">
    <div class="project_info">

      <div class="project_tags">
        <span class="project_tag">#HTML</span>
        <span class="project_tag">#CSS</span>
        <span class="project_tag">#JavaScript</span>
        <span class="project_tag">#VueJs</span>
        <span class="project_tag">#Responsive</span>
      </div>
      <h2 class="project__title">Pokemon Page</h2>
      <p class="project__text">
        Proyecto que simula una consola portatil. El juego consiste en que se te muestra 
        un Pokemon oculto y te dan cuatro opciones, tienes que averiguar cual Pokemon es. 
        Una vez elegido el pokemon se te muestra la imagen. Empiezas con 3 vidas, si fallas 3 veces pierdes.
        Si aciertas vas sumando juego, luego puedes añadir tu nombre en la lista de clasificación de puntos.
        Se consumió la Api "PokéApi".
      </p>
        <div class="buttons">
          <a href="#" class="button button--primary">Demo</a>
          <a href="#" class="button button--primary-ghost">Code</a>

        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .projects {
  display: flex;
  background-color: var(--bg-card-color);
  height: 335px;
  padding: 1em;
  border-radius: var(--border-radius);   
  transition: var(--transition);
  margin-bottom: 1em; 
  align-items: flex-start;
}

.project__title {
  font-size: 1em;
}

.project__text {
  font-size: 0.9em;
}
.project_image {
  max-width: 30%;
  margin-right: 2em;
  border-radius: var(--border-radius); 
}

.project_info {
  display: flex;
  flex-direction: column;
}

.project_tags {
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 30px 100px;
}

.button {
  display: inline-block;
  width: 100px;
  line-height: 2.5;
  text-align: center;
  border-radius: var(--border-radius); 
}

.button--primary {
  background-color: var(--primary-color);
  color: #fff;

}

.button--primary-ghost {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}


>>>>>>> 2c70237b1777e45e2254f1bd3c85948502b08bb3
</style>