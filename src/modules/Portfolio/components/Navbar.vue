<template>
  <header>
      <div class="container-navbar">

        <div class="container-logo">
          <img src="../../../assets/logos/Logo-gema.svg" alt="">
          <router-link :to="{name: 'Home'}">Gema Martín</router-link>
        </div>

        <nav>
          <a href="https://www.linkedin.com/in/gemart%C3%ADn/" target="_blank">Linkelind</a>
          <a href="https://github.com/geminway92" target="_blank">GitHub</a>
          <router-link :to="{name: 'Contact'}">Contactar</router-link>
          <router-link :to="{name: 'Projects'}" class="projects">Proyectos</router-link>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>

<style scoped>
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

.container-logo a {
  color: black;
  font-size: 18px;
  width: 200px;
  text-decoration: none;
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
