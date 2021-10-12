<template>
  <div class="skills">
      <h2 class="skills_title">Front End</h2>
          <div class="skills_item">
              <p class="skills_tech">HTML/CSS</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--50"></div>
              </div>
              
            </div>
            <div class="skills_item">
              <p class="skills_tech">JavaScript</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--40"></div>
              </div>
              
            </div>
            <div class="skills_item">
              <p class="skills_tech">VueJS</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--50"></div>
              </div>
              
            </div>
            <div class="skills_item">
              <p class="skills_tech">Git</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--25"></div>
              </div>
              
            </div>
            <div class="skills_item">
              <p class="skills_tech">TDD</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--25"></div>
              </div>
            </div>
            <div class="skills_item">
              <p class="skills_tech">Axios</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--35"></div>
              </div>
            </div>
            <div class="skills_item">
              <p class="skills_tech">Bootstrap</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--40"></div>
              </div>
            </div>
            <div class="skills_item">
              <p class="skills_tech">Quasar</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--25"></div>
              </div>
            </div>
            <div class="skills_item">
              <p class="skills_tech">i18n</p>
              <div class="skills_bar">
                  <div class="skills_level skills_level--25"></div>
              </div>
            </div>
  </div>
</template>

<script>
export default {

} 
</script>

<style scoped>


.skills {
    background-color: var(--bg-card-color);
    border-radius: var(--border-radius); 
    transition: var(--transition);
    padding: 1em ;
    margin-bottom: 1em;
    max-width: 90%;
    margin: auto;
}

.skills h2 {
    font-size: 1.2rem;
    margin: 0 35%;
}

.skills_item {
    display: flex;
    justify-content: space-between;
}

.skills_tech {
    font-size: 1em;
}

.skills_bar {
    margin-top: 17px;
}
.skills_bar, .skills_level {
    position: relative;
    width: 175px;
    height: 8px;
    background-color: #888;
    border-radius: var(--border-radius); 
    overflow: hidden;
}

.skills_level {
    position: absolute;
    left: 0;
    transform-origin: left;
    background-color: var(--primary-color);
}

.skills_level--35 {
    transform: translateX(65%);
}


.skills_level--25 {
    transform: translateX(75%);
}
.skills_level--40 {
    transform: translateX(60%);
}

.skills_level--50 {
    transform: translateX(50%);
}

@media screen and (min-width: 1166px) {

    .skills {
        max-width: 100%;   
        margin-bottom: 1em;
        height: min-content;
    }

    .skills h2 {
        margin: 0;
    }

}


</style>