<template>
    <div class="card-hobbies">
            <h2 class="title">Hobbies</h2>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-cooking.jpg" alt="cooking" class="hobbie__image">
            </div>
            <div class="hobbie_information">
                <h2 class="hobbie__title">{{ $t('Hobbies.title-cook')}}</h2>
                <p class="hobbie__description">{{ $t('Hobbies.description-cook')}}</p>
            </div>
        </div>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-gaming.jpg" alt="cooking" class="hobbie__image">
            </div>
            <div class="hobbie_information">
                <h2 class="hobbie__title">{{ $t('Hobbies.title-gaming')}}</h2>
                <p class="hobbie__description">{{ $t('Hobbies.description-gaming')}}</p>
            </div>
        </div>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-cine.jpg" alt="cooking" class="hobbie__image">
            </div>
            <div class="hobbie_information">
                <h2 class="hobbie__title">{{ $t('Hobbies.title-film')}}</h2>
                <p class="hobbie__description">{{ $t('Hobbies.description-film')}}</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped >


.card-hobbies {
    max-width: 90%;
    padding: 1em;
    background-color: var(--bg-card-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
    position: relative;
    bottom:  1em;
}

.title {
    font-size: 1.3em;
    margin: 0% 35% 5%;
}

.hobbie__image-container {
    width: 95%;
    height: min-content;
    margin: auto;
    background-color: var(--bg-card-color);
    transition: var(--transition);
}

img.hobbie__image {
    max-width: 100%;
    border-radius: var(--border-radius);
}
.hobbie_information {
    display: flex;
    align-items: center;
    flex-direction: column;

}

.hobbie__title {
    font-size: 1.1em;
    margin-top: 14px;
    color: var(--primary-color);

}


.hobbie__description {
    margin-left: 1em;
}

@media screen and (min-width: 700px) {
    .title {
        margin: 0 30% 5%;
    }

    .hobbie_information {
        align-items: flex-start;

    }

    .hobbie__description {
        font-size: 0.9em;
        margin: 0.9em 0;
    }


}

@media screen and (min-width: 1166px) {

    .card-hobbies {
        width: 100%;
        height: min-content;
        margin-top: 1em;
    }

    .hobbie__image-container {
        width: 95%;
        height: min-content;
        margin: auto;

    }

    .title {
        font-size: 1.2rem;
        margin: 0 5% 5%;
    }

    .hobbie_information {
        align-items: flex-start;
    }

    .hobbie__title {
        font-size: 1em;

    }

    .hobbie__description {
        font-size: 0.9em;
        margin: 0.9em 0;
    }


}

</style>
