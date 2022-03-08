import { defineAsyncComponent, ref } from 'vue';
<template>
  <div class="projects-container">
    <div class="projects__title-projects">
      <h2 class="card_title">Projects ({{ totalProjects }})</h2>
    </div>
    <div class="projects">
      <img
        src="../assets/images/photo-projects-todo.png"
        alt="Pokemon Page project"
        class="project_image"
      />
      <div class="project_info">
        <div class="project_tags">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JS</span>
          <span class="project_tag">#VueJs</span>
          <span class="project_tag">#Responsive</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Todo</h2>
          <p class="project__text">
            {{ $t("Projects.text-todo") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://todo-vue-gemartin.netlify.app/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/todo-vue"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>

    <div class="projects">
      <img
        src="../assets/images/photo-projects-cultura-y-ocio.png"
        alt="Pokemon Page project"
        class="project_image project_image--journal"
      />
      <div class="project_info">
        <div class="project_tags ">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JS</span>
          <span class="project_tag">#Vue</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Cultura y Ocio</h2>
          <p class="project__text">
            {{ $t("Projects.text-culturayocio") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://cultura-y-ocio.netlify.app/#/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/cultura-y-ocio-malaga"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>

    <div class="projects">
      <img
        src="../assets/images/photo-projects-timedashboard.jpg"
        alt="Pokemon Page project"
        class="project_image project_image--journal"
      />
      <div class="project_info">
        <div class="project_tags ">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#VUE</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Time Dashboard</h2>
          <p class="project__text">
            {{ $t("Projects.text-timedashboard") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://time-dashboard-vue.netlify.app/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/time-tracking-dashboard"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="projects">
      <img
        src="../assets/images/photo-projects-pokemon.jpg"
        alt="Pokemon Page project"
        class="project_image"
      />
      <div class="project_info">
        <div class="project_tags">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JS</span>
          <span class="project_tag">#VueJs</span>
          <span class="project_tag">#Responsive</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Pokemon Page</h2>
          <p class="project__text">
            {{ $t("Projects.text-pokemonPage") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://gameboy-pokemon.netlify.app/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/gamepokemon2"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="projects">
      <img
        src="../assets/images/photo-projects-journal.jpg"
        alt="Pokemon Page project"
        class="project_image project_image--journal"
      />
      <div class="project_info">
        <div class="project_tags">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#SCSS</span>
          <span class="project_tag">#JS</span>
          <span class="project_tag">#VueJs</span>
          <span class="project_tag">#Responsive</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Journal</h2>
          <p class="project__text">
            {{ $t("Projects.text-journal") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://journal-vue.netlify.app/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/vue-journal-vuex"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>
    <div class="projects">
      <img
        src="../assets/images/photo-projects-pokeball.png"
        alt="Pokemon Page project"
        class="project_image"
      />
      <div class="project_info">
        <div class="project_tags">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Pokeball</h2>
          <p class="project__text">
            {{ $t("Projects.text-pokeball") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://codepen.io/geminway92/pen/porGdpq/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/pokeball"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>

    <div class="projects">
      <img
        src="../assets/images/photo-projects-gameboy-eoi.png"
        alt="Pokemon Page project"
        class="project_image project_image--journal"
      />
      <div class="project_info">
        <div class="project_tags ">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Gameboy-EOI</h2>
          <p class="project__text">
            {{ $t("Projects.text-gameboy-eoi") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://codepen.io/geminway92/pen/LYzLOQp"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/gameboy-anec"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>


    <div class="projects">
      <img
        src="../assets/images/photo-projects-questionme.jpg"
        alt="Pokemon Page project"
        class="project_image"
      />
      <div class="project_info">
        <div class="project_tags">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JS</span>
          <span class="project_tag">#VueJs</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Question me</h2>
          <p class="project__text">
            {{ $t("Projects.text-questionme") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://questionme.netlify.app/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/questionme"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>

    <div class="projects">
      <img
        src="../assets/images/photo-projects-blacklist.jpg"
        alt="Pokemon Page project"
        class="project_image project_image--journal"
      />
      <div class="project_info">
        <div class="project_tags ">
          <span class="project_tag">#HTML</span>
          <span class="project_tag">#CSS</span>
          <span class="project_tag">#JS</span>
        </div>
        <div class="project-description-container">
          <h2 class="project__title">Blacklist</h2>
          <p class="project__text">
            {{ $t("Projects.text-blacklist") }}
          </p>
        </div>
        <div class="buttons">
          <a
            href="https://blacklist-js.netlify.app/"
            target="_blank"
            class="button button--primary"
            @click="this.$emit('audioFocus')"
            >Demo</a
          >
          <a
            href="https://github.com/geminway92/blackjack"
            class="button button--primary-ghost"
            target="_blank"
            @click="this.$emit('audioFocus')"
            >Code</a
          >
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    totalProjects: {
      type: Number,
      default: 1,
    },
  },

  mounted() {
    this.$emit("counterProjects");
  },
};
</script>

<style scoped>
.projects__title-projects {
  border-radius: var(--border-radius);
  background-color: var(--bg-card-color);
  transition: var(--transition);
  padding: 1em;
  margin-bottom: 1em;
  font-size: 0.8em;
}

.card_title {
  margin: 0 35%;
}

.projects {
  display: flex;
  background-color: var(--bg-card-color);
  padding: 1em;
  border-radius: var(--border-radius);
  transition: var(--transition);
  flex-direction: column;
  margin-bottom: 1em;
}

.project_tags {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-start;
}

.project_tag {
  margin-right: 3px;
}

.project-description-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
}

.project__title {
  font-size: 1.2em;
  color: var(--primary-color);
}

.project__text {
  margin: 0.5em;
}

.project_image {
  max-width: 100%;
  border-radius: var(--border-radius);
}

.button:hover {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.buttons {
  display: flex;
  position: relative;
  gap: 2em;
  width: 250px;
  margin-left: 22%;
}

.button {
  display: inline-flex;
  width: 80px;
  line-height: 2.5;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: var(--primary-color);
  color: #fff;
}

.button--primary {
  background-color: var(--primary-color);
  color: #fff;
}

@media screen and (width: 320px) {
  .card_title {
    width: 100px;
  }
  .project_tags {
    font-size: 0.9em;
  }
  .project_tag {
    margin-right: 3px;
  }
}

@media screen and (min-width: 700px) {
  .buttons {
    margin-left: 30%;
  }
}

@media screen and (min-width: 1166px) {
  .projects__title-projects {
    margin-bottom: 0em;
  }

  .card_title {
    margin: 0;
  }

  .projects-container {
    display: grid;
    min-width: 300px;
    align-items: flex-start;
    gap: 1em;
    margin: 2em 0;
  }

  .project__title {
    font-size: 1em;
    margin-left: 0.5em;
  }

  .projects {
    margin-bottom: 0em;
  }

  .project-description-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .project__text {
    font-size: 0.9em;
  }

  .buttons {
    margin-left: 35%;
  }
}
</style>
