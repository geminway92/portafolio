<template>
  <header>
    <div class="container-navbar">

      <div class="container-logo">
        <img src="../assets/logos/Logo-gema.svg" alt="">
        <h1>Gema Martín</h1>
      </div>

      <nav>
        <a href="https://www.linkedin.com/in/gemart%C3%ADn/" target="_blank">Linkelind</a>
        <a href="https://github.com/geminway92" target="_blank">GitHub</a>
        <a href="">Contactar</a>
        <a href="" class="projects">Proyectos</a>
      </nav>
    </div>
  </header>

</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Portafolio",
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue"))
  },

  data() {
    return {
      darkMode: true,
      textMode: "",
      titleLanguage: "Inglés",
      colorBlue: false,
      colorGreen: false,
      colorPurple: false,
      colorOrange: false,
      srcFocusAudio: require("../assets/audios/audio-click.mp3"),
      focusAudio: new Audio(),
      totalProjects: 0,
    };
  },
  methods: {

    audioFocus() {
      this.focusAudio.src = this.srcFocusAudio;
      this.focusAudio.play();
    },

  },

};
</script>

<style>
.container-navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

header {
  font-family: 'Press Start 2P', cursive;
  display: flex;
  height: 100px;
  width: 100%;
  position: fixed;
}

.container-logo {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-logo img {
  height: 70%;
}

.container-logo h1 {
  font-size: 16px;
  width: 200px;
}

nav {
  display: flex;
  width: 60%;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;

}

nav a {
  color: black;
  text-decoration: none;

}

.projects {
  background: #B8A8FF;
  padding: 1em 2em;
  border-radius: 15px;
}

</style>
