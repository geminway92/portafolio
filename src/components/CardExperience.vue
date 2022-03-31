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
  padding: .1em 1em;
  margin-top: 1em;
}

.card__title {
  margin: .5em 34%;
  font-size: 1.3em;
}

.experience {
  display: flex;
  padding: 1em .6em ;
  margin-bottom: 1em;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);

}

.experience_image {
  max-width: 30%;
  margin-right: 2em;
}


@media screen and (min-width: 1166px) {
  .card--experience {
    width: 300px;
  }

.experience {
  padding: 1em .6em ;
  margin-bottom: 1em;
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

}

</style>
