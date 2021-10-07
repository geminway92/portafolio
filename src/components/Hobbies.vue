<template>
    <div class="card-hobbies">
            <h2 class="title">Hobbies</h2>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-cooking.jpg" alt="cooking" class="hobbie__image">
            </div>
            <h2 class="hobbie__title">{{ $t('Hobbies.title-cook')}}</h2>
            <p class="hobbie__description">{{ $t('Hobbies.description-cook')}}</p>
        </div>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-gaming.jpg" alt="cooking" class="hobbie__image">
            </div>
            <h2 class="hobbie__title">{{ $t('Hobbies.title-gaming')}}</h2>
            <p class="hobbie__description">{{ $t('Hobbies.description-gaming')}}</p>
        </div>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-cine.jpg" alt="cooking" class="hobbie__image">
            </div>
            <h2 class="hobbie__title">{{ $t('Hobbies.title-film')}}</h2>
            <p class="hobbie__description">{{ $t('Hobbies.description-film')}}</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.card-hobbies {
    background-color: var(--bg-card-color);
    width: 250px;
    padding: 1em;
    border-radius: var(--border-radius);
    transition: var(--transition);    
}

.title {
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.hobbie__image-container {
    width: 332px;
    margin-left: 0px;
}

.hobbie__title {
    font-size: 1em;
    margin-top: 14px;
    color: var(--primary-color);

}

.hobbie__description {
    font-size: 0.9em;
}

.hobbie__image {
    width: 360px;
    height: 120px;
    border-radius: var(--border-radius);
}

@media (max-width: 720px) {
 .card-hobbies {
     width: 95%;
     margin: auto;
     order: 3;
 }   

 .title {
     font-size: 3em;
 }
 
 .hobbie__title {
     font-size: 2.5em;
    margin: 0 1em 1em 1em;
 }

 .hobbie__description {
     font-size: 2.5em;
    margin: 0 1em 1em 1em;

 }
 
 .hobbie__image-container {
    width: 100%;
 }

 .hobbie__image {
     width: 100%;
     height: 400px;
     border-radius: 4em;
     margin: 1em ;
 }
}
</style>