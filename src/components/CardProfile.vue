<<<<<<< HEAD
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
    margin: 0 0 1em 1em;
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
.email {
    margin-bottom: 5px;
}
.card-profile-description {
    padding: 1em 0;
    font-size: 0.9em;
}


=======
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
            <div class="phone">
                <i class="fas fa-phone-alt icon"></i>
                <a href="tel:+34722177335"> 722177335</a>
            </div>
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
    margin-bottom: 1em;
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
.email {
    margin-bottom: 5px;
}
.card-profile-description {
    padding: 1em 0;
    font-size: 0.9em;
}


>>>>>>> 2c70237b1777e45e2254f1bd3c85948502b08bb3
</style>