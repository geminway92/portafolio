<template>
  <div class="container-skills">
    <div
      v-for="skill in skills" :key="skill"
      class="skill">
      <h3>{{skill}}</h3>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'VueJS',
          'Vuex',
          'Vue Router',
          'Vue Test',
          'Bootstrap',
          'Figma',
          'Quasar',
          'Tailwind',
          'Bulma',
          'Storybook',
          'i18n'
        ]
      }
    }
  }

</script>

<style scoped>

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
</style>
