<template>
    <div class="card-profile">
        <div class="card-profile-image-container">
            <img src="../assets/images/photo-portafolio.jpg" alt="profile" class="card-profile-image">
        </div>
        <h2 class="title">Gema Martín</h2>
        <p class="subtitle"> Frontend developer</p>
        <div class="card-profile-info">
            <div class="email">
                <i class="fas fa-envelope icon" ></i>
                <a href="mailto:geminway@live.com"> geminway@live.com</a>  
                <!-- TODO: comprobar si esta forma es correcta o tengo que usar un link -->
            </div>
<<<<<<< HEAD
            <div class="github">
                <i class="fab fa-github"></i>
                <a href="https://github.com/geminway92" target="_blank"> GitHub</a>  
                <!-- TODO: comprobar si esta forma es correcta o tengo que usar un link -->
            </div>
                <div class="linkedin">
                <i class="fab fa-linkedin-in"></i>
                <a href="https://www.linkedin.com/in/gemart%C3%ADn" target="_blank"> Linkelind</a>  
                <!-- TODO: comprobar si esta forma es correcta o tengo que usar un link -->
            </div>
=======
                
>>>>>>> 3b0743d889b32ec636101dc9f988afa01208d61a
            <div class="card-profile-description">
                Apasionada de la programación, responsable, con
                facilidad para trabajar en equipo y con ganas de
                aprendizaje constante .

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProfile',

}
</script>

<style scoped>

a{
    margin-left: 5px;
}

.card-profile {
    background-color: var(--bg-card-color);
    width: 250px;
    padding: 1em;
    border-radius: .3em;   
    transition: var(--transition);
<<<<<<< HEAD
    margin: 0 0 1em 150px;
=======
    margin: 0 0 1em 1em;
>>>>>>> 3b0743d889b32ec636101dc9f988afa01208d61a
}

.card-profile-image-container {
    height: 225px;
    width: 250px;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--bg-color);
}

.card-profile-image {
    width: inherit;
    height: inherit;
    display: block;
    object-fit: cover;
    margin-left: 30px;
}

.title {
    font-size: 1.2rem;
    margin-top: 5px;
}

.subtitle{
    font-size: .9rem;
}
<<<<<<< HEAD
.email, .github, .linkedin {
=======
.email {
>>>>>>> 3b0743d889b32ec636101dc9f988afa01208d61a
    margin-bottom: 5px;
}
.card-profile-description {
    padding: 1em 0;
    font-size: 0.9em;
}


</style>