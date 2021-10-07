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
    width: 250px;
    padding: 1em;
    border-radius: .3em;   
    transition: var(--transition);
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
.email, .github, .linkedin {
    margin-bottom: 5px;
}
.card-profile-description {
    padding: 1em 0;
    font-size: 0.9em;
}

@media (max-width: 720px) {
 .card-profile {
     display: flex;
     width: 95%;
     flex-direction: column;
    margin: auto;
    order: 1;
 }   

 .card-profile-image-container {
    height: min-content;
    width: 500px;
 }
 
 .card-profile-image {
     width: 80%;
     height: 100%;
     margin: auto;
 }

 .title {
     font-size: 3em;
     margin-left: .7em;
 }

 .subtitle {
    font-size: 2em;
    margin-left: 1em;

 }

 .card-profile-info {
    height: min-content;
    margin: 0 10px 0 2em;
 }

 .email,
 .github,
 .linkedin,
 .card-profile-description {
     font-size: 2.5em;
 }


}

</style>