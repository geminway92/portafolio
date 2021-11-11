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
                <a href="mailto:geminway@live.com" @click="this.$emit('audioFocus')"> geminway@live.com</a>  
                <!-- TODO: comprobar si esta forma es correcta o tengo que usar un link -->
            </div>
            <div class="github">
                <i class="fab fa-github"></i>
                <a href="https://github.com/geminway92" target="_blank" @click="this.$emit('audioFocus')"> GitHub</a>  
                <!-- TODO: comprobar si esta forma es correcta o tengo que usar un link -->
            </div>
                <div class="linkedin">
                <i class="fab fa-linkedin-in"></i>
                <a href="https://www.linkedin.com/in/gemart%C3%ADn" target="_blank" @click="this.$emit('audioFocus')"> Linkelind</a>  
                <!-- TODO: comprobar si esta forma es correcta o tengo que usar un link -->
            </div>
            <div class="card-profile-description">
                {{ $t('CardProfile.description')}}
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
        max-width: 90%;
        margin-bottom: 1em;
        padding: 1em;
        border-radius: .3em;   
        object-fit: cover;
        transition: var(--transition);
    }

    .card-profile-image-container {
        height: min-content;
        margin: auto;
        border-radius: inherit;
        overflow: hidden;
        background-color: var(--bg-color);
    }

    .card-profile-image {
        width: 70%;
        margin-left: 15%;
    }
    
    .title {
        font-size: 1.2rem;
        margin-top: 5px;
    }

    .subtitle{
        font-size: .9rem;
    }
    .email, .github, .linkedin {
        margin-bottom: 5px;
    }
    .card-profile-description {
        padding: 1em 0;
        font-size: 0.9em;
    }

@media screen and (min-width: 1166px) {

    
    .card-profile-image-container {
        height: 225px;
        width: 250px;
    }

}

</style>