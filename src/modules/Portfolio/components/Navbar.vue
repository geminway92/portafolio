<template>
  <header>
      <div class="container-navbar">

        <div class="container-logo">
          <img src="../../../assets/logos/Logo-gema.svg" alt="">
        </div>

        <nav>
          <router-link :to="{name: 'Home'}">Gema Martín</router-link>
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
  width: 100px;
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

@media screen and (max-width: 500px) {

header {
  height: 350px;
}

.container-navbar {
  flex-direction: column;
  align-items: center;
}

.container-logo {
  align-self: flex-start;
}

.container-logo img {
  width: 70%;
}

.container-logo a {
  font-size: 18px;
  width: 200px;
}

nav {
  flex-direction: column;
  height: 80%;

}

}

@media screen and (min-width: 500px) and (max-width: 885px) {

  nav{
    width: 100%;
  }
}
</style>
