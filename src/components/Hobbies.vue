<template>
    <div class="card-hobbies">
            <h2 class="title">Hobbies</h2>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-cooking.jpg" alt="cooking" class="hobbie__image">
            </div>
            <h2 class="hobbie__title">Cocinar</h2>
            <p class="hobbie__description">Me gusta cocinar todo tipo de platos, pero mi debilidad son los platos salados.</p>
        </div>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-gaming.jpg" alt="cooking" class="hobbie__image">
            </div>
            <h2 class="hobbie__title">Videojuegos</h2>
            <p class="hobbie__description">Mi primer juego instalado en una PC fue The sims, desde ahí supe
                que sería el principio de todo. </p>
        </div>
        <div class="hobbie">
            <div class="hobbie__image-container">
                <img src="../assets/images/photo-hobbie-cine.jpg" alt="cooking" class="hobbie__image">
            </div>
            <h2 class="hobbie__title">Cine / Series</h2>
            <p class="hobbie__description"> Consumidora de casi todos los sitios de servicio en Streaming.</p>
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
    margin-bottom: 1em;
}

.title {
    margin-bottom: 15px;
}

.hobbie__image-container {
    width: 330px;
    height: 150px;
    overflow: hidden;
}

.hobbie__title {
    font-size: 1em;
    margin-top: 14px;
}

.hobbie__description {
    font-size: 0.9em;
}

img.hobbie__image {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
}

</style>