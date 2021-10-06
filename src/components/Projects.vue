<template>
  <div class="projects-container">
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
          {{ $t('Projects.text-pokemonPage')}}
        </p>
          <div class="buttons">
            <a href="https://gameboy-pokemon.netlify.app/" target="_blank" class="button button--primary" @click="this.$emit('audioFocus')">Demo</a>
            <a href="https://github.com/geminway92/gamepokemon2" class="button button--primary-ghost" target="_blank" @click="this.$emit('audioFocus')">Code</a>

          </div>
      </div>
    </div>
    <div class="projects">
        <img src="../assets/images/photo-projects-questionme.jpg" alt="Pokemon Page project" class="project_image">
      <div class="project_info">

        <div class="project_tags project_tags--questionme">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JavaScript</span>
          <span class="project_tag">#VueJs</span>
        </div>
        <h2 class="project__title">Question me</h2>
        <p class="project__text">
          {{ $t('Projects.text-questionme')}}
        </p>
          <div class="buttons">
            <a href="https://questionme.netlify.app/" target="_blank" class="button button--primary" @click="this.$emit('audioFocus')">Demo</a>
            <a href="https://github.com/geminway92/questionme" class="button button--primary-ghost" target="_blank" @click="this.$emit('audioFocus')">Code</a>
          </div>
      </div>
    </div>
    <div class="projects">
        <img src="../assets/images/photo-projects-journal.jpg" alt="Pokemon Page project" class="project_image project_image--journal">
      <div class="project_info">

        <div class="project_tags project_tags--journal">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#SCSS</span>
          <span class="project_tag">#JavaScript</span>
          <span class="project_tag">#VueJs</span>
          <span class="project_tag">#Responsive</span>
        </div>
        <h2 class="project__title">Journal</h2>
        <p class="project__text">
          {{ $t('Projects.text-journal')}}
        </p>
          <div class="buttons">
            <a href="https://journal-vue.netlify.app/" target="_blank" class="button button--primary" @click="this.$emit('audioFocus')">Demo</a>
            <a href="https://github.com/geminway92/vue-journal-vuex" class="button button--primary-ghost" target="_blank" @click="this.$emit('audioFocus')">Code</a>

          </div>
      </div>
    </div>
    <div class="projects">
        <img src="../assets/images/photo-projects-blacklist.jpg" alt="Pokemon Page project" class="project_image project_image--journal">
      <div class="project_info">

        <div class="project_tags project_tags--journal">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JavaScript</span>
        </div>
        <h2 class="project__title">Blacklist</h2>
        <p class="project__text">
          {{ $t('Projects.text-blacklist')}}
        </p>
          <div class="buttons">
            <a href="https://blacklist-js.netlify.app/" target="_blank" class="button button--primary" @click="this.$emit('audioFocus')">Demo</a>
            <a href="https://github.com/geminway92/blackjack" class="button button--primary-ghost" target="_blank" @click="this.$emit('audioFocus')">Code</a>

          </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  
  }
</script>

<style scoped>
.projects-container {
  display: grid;
  align-items: flex-start;
  gap: 10px;

}
 .projects {
   display: flex;
  width: 820px;
  height: 300px;
  background-color: var(--bg-card-color);
  padding: 1em;
  border-radius: var(--border-radius);   
  transition: var(--transition);
}

.project__title {
  font-size: 1em;
  color: var(--primary-color);

}

.project__text {
  font-size: 0.9em;
  padding-right: 1em;
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

.project_tags--questionme {
  justify-content: flex-start;
  gap: .8em;
}

.project_image--journal {
  width: 100%;
}

.project_tags--journal {
  justify-content: flex-start;
  gap: .8em;
}
.buttons {
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 250px;
  margin: 230px 0 0 110px;
}

.button {
  display: inline-block;
  width: 100px;
  line-height: 2.5;
  text-align: center;
  border-radius: var(--border-radius); 
  background-color: var(--primary-color);
  color: #fff; 
}

.button--primary {
  background-color: var(--primary-color);
  color: #fff;

}

.button:hover {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

</style>