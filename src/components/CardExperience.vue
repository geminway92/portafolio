<template>
  <div class="card card--experience">
          <h2 class="card__title">Experiences</h2>
          <div class="experience">
            <img
              src="../assets/images/photo-experiences-academiajalon.png"
              alt="logo"
              class="experience_image"
            />
            <div class="experience__info">
              <p
                class="experience__time"
              > 
                {{ $t('CardExperience.date-jalon')}}
              </p>
              <h3
                class="experience__job"
              >
              {{ $t('CardExperience.job-jalon')}}

              </h3>
              
            </div>
          </div>
          <div class="experience">
            <img
              src="../assets/images/photo-experiences-lacampana.png"
              alt="logo"
              class="experience_image"
            />
            <div class="experience__info">
              <p
                class="experience__time"
              >
                {{ $t('CardExperience.date-campana')}}
              </p>
              <h3
                class="experience__job"
              >
                {{ $t('CardExperience.job-campana')}}
              </h3>
              
            </div>
          </div>
          <div class="experience">
            <img
              src="../assets/images/photo-experiences-txoco.png"
              alt="logo"
              class="experience_image"
            />
            <div class="experience__info">
              <p
                class="experience__time"
              >
                {{ $t('CardExperience.date-txoco')}}
              </p>
              <h3
                class="experience__job"
              >
                {{ $t('CardExperience.job-txoco')}}
              </h3>
              
            </div>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card--experience {
  background-color: var(--bg-card-color);
  border-radius: var(--border-radius); 
  transition: var(--transition);
}

.experience {
  display: flex;
  padding: 1em .6em ;
  margin: auto;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius); 

}

.experience_image {
  max-width: 30%;
  margin-right: 2em;
}

.card__title {
  font-size: 1.2rem;
  margin: .5em 0.5em;
}

.experience__time {
  font-size: .9rem;
  margin: 0px 0px 15px 10px;
}

.experience__job {
  font-size: 1rem;
  margin: 0px 0px 10px 10px;
  color: var(--primary-color);
}

@media screen and (max-width: 430px) {
  .card--experience {
   padding: .9em;
   margin-top: 2em;
 }   

 .card__title {
   font-size: 3em;
   margin-bottom: .6em;
 }

 .experience {
   width: 80%;
   margin-top: 1em;
 }

 .experience__time,
 .experience__job {
   font-size: 2.4em;
   margin: .5em .1em;
 }

}
</style>