<template>
  <div class="container-layaout">
    <div class="header">
      <toggle
        :darkMode="darkMode"
        :textMode="textMode"
        @lightMode="lightMode"
      />
      <ToggleColor
        @changeColorBlue="changeColorBlue"
        @changeColorGreen="changeColorGreen"
        @changeColorPurple="changeColorPurple"
        @changeColorOrange="changeColorOrange"
        @audioFocus="audioFocus"
        :colorBlue="colorBlue"
        :colorGreen="colorGreen"
        :colorPurple="colorPurple"
        :colorOrange="colorOrange"
      />
      <Multilanguage :titleLanguage="titleLanguage" @audioFocus="audioFocus" />
    </div>
    <div class="wrapper">
      <div class="left-aside">
        <CardProfile @audioFocus="audioFocus" />
        <Skills />
        <CardExperience />
      </div>
      <main class="right-aside">
        <Projects
          @audioFocus="audioFocus"
          :totalProjects="totalProjects"
          @counterProjects="counterProjects"
        />
      </main>
      <Hobbies />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Portafolio",
  components: {
    CardProfile: defineAsyncComponent(() =>
      import("../components/CardProfile.vue")
    ),
    Toggle: defineAsyncComponent(() => import("../components/Toggle.vue")),
    ToggleColor: defineAsyncComponent(() =>
      import("../components/ToggleColor.vue")
    ),
    CardExperience: defineAsyncComponent(() =>
      import("../components/CardExperience.vue")
    ),
    Skills: defineAsyncComponent(() => import("../components/Skills.vue")),
    Projects: defineAsyncComponent(() => import("../components/Projects.vue")),
    Hobbies: defineAsyncComponent(() => import("../components/Hobbies.vue")),
    Multilanguage: defineAsyncComponent(() =>
      import("../components/Multilanguage.vue")
    ),
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
    lightMode() {
      this.audioFocus();
      if (this.darkMode) {
        document.body.classList.add("lightMode");
        document.body.classList.remove("dark");
        if (window.screen.width >= 700) {
          this.textMode = "Dark Mode";
        } else {
          this.textMode = "";
        }
      } else {
        document.body.classList.add("dark");
        document.body.classList.remove("lightMode");
        if (window.screen.width >= 700) {
          this.textMode = "Ligth Blue";
        } else {
          this.textMode = "";
        }
      }
      this.darkMode = !this.darkMode;
    },

    changeColorBlue() {
      this.audioFocus();
      document.body.classList.add("color-item--blue");

      document.body.classList.remove("color-item--green");
      document.body.classList.remove("color-item--purple");
      document.body.classList.remove("color-item--orange");
    },

    changeColorGreen() {
      this.audioFocus();
      document.body.classList.add("color-item--green");

      document.body.classList.remove("color-item--blue");
      document.body.classList.remove("color-item--purple");
      document.body.classList.remove("color-item--orange");
    },

    changeColorPurple() {
      this.audioFocus();
      document.body.classList.add("color-item--purple");

      document.body.classList.remove("color-item--blue");
      document.body.classList.remove("color-item--green");
      document.body.classList.remove("color-item--orange");
    },

    changeColorOrange() {
      this.audioFocus();
      document.body.classList.add("color-item--orange");

      document.body.classList.remove("color-item--blue");
      document.body.classList.remove("color-item--green");
      document.body.classList.remove("color-item--purple");
    },

    audioFocus() {
      this.focusAudio.src = this.srcFocusAudio;
      this.focusAudio.play();
    },

    changelanguague() {
      const lang = this.$i18n.locale;
    },

    counterProjects() {
      this.totalProjects = document.querySelectorAll(".project_info").length;
    },

    watchScreenWidth() {
      if (window.screen.width >= 700) {
        this.textMode = "Ligth Mode";
      } else {
        this.textMode = "";
      }
    },
  },

  mounted() {
    document.body.classList.add("dark");
    this.watchScreenWidth();
  },
};
</script>

<style>
.container-layaout {
  display: grid;
  grid-template-rows: repeat(3, min-content);
  place-content: center;
  gap: 1em;
  min-height: 100vh;
  margin: auto;
}

.header {
  display: flex;
  background-color: var(--bg-card-color);
  transition: var(--transition);
  height: 70px;
  gap: 1em;
  width: 100vw;
  position: fixed;
  z-index: 1;
}

.wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;
  gap: 1em;
  margin-top: 5.5em;
}

.main {
  gap: 1em;
  background-color: var(--bg-color);
  transition: var(--transition);
}

@media screen and (min-width: 700px) {
  .wrapper {
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1480px;
  }
}

@media screen and (min-width: 1166px) {
  .container-layaout {
    grid-template-rows: min-content 1fr;
    grid-template-rows: repeat(2, 1fr);
    min-height: 100vh;
  }

  .header {
    min-width: 100%;
    height: 80px;
  }

  .wrapper {
    max-width: 1600px;
    grid-template-columns: min-content 50% 1fr;
    gap: 1em;
    margin: 6em 1.5em;
  }

  .left-aside {
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(8, 1fr);
  }

  .right-aside {
    position: relative;
    bottom: 2.2em;
  }
}

@media screen and (min-width: 1900px) {
  .wrapper {
    max-width: 2200px;
    grid-template-columns: min-content auto 300px;
    gap: 1em;
    margin: 6em 1.5em;
  }
}
</style>
