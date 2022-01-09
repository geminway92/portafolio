<template>
<main>
  <div class="container-contact">
    <h1>Contacto</h1>
    <div class="container-email">
      <span class="fas fa-envelope"></span>
      <a href="mailto:geminway@live.com" target="_blank">geminway@live.com</a>
    </div>
    <div class="container-github">
      <span class="fab fa-github"></span>
      <a href="https://github.com/geminway92" target="_blank">github.com/geminway92</a>
    </div>
    <div class="container-linkelind">
      <span class="fab fa-linkedin-in"></span>
      <a href="https://www.linkedin.com/in/gemamartínrodríguez" target="_blank">in/gemamartínrodríguez</a>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>


a{
  color: black;
  font-size: 18px;
  width: 200px;
  text-decoration: none;

}

main{
  width: 100%;
  display: flex;
  justify-content: center;
  height: 300px;
}

.container-contact{
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  background: #e9ebed;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #dbdddf;
}

.container-contact h1 {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-email,
.container-github,
.container-linkelind {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
}

@media screen and (min-width: 400px) {
main {
  height: calc(100vh - 100px);
  align-items: center;
}

.container-contact{
  width: 50%;
  height: 40%;
}

}


@media screen and (min-width: 900px) {
  .container-contact{
    width: 30%;
  }
}
</style>
