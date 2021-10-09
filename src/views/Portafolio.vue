<template>
    <div class="container-layaout">
        <div class="header">
        
            <toggle :darkMode="darkMode" :textMode="textMode" @lightMode="lightMode"/>
            <ToggleColor 
            @changeColorBlue="changeColorBlue" 
            @changeColorGreen="changeColorGreen" 
            @changeColorPurple="changeColorPurple" 
            @changeColorOrange="changeColorOrange"
            @audioFocus="audioFocus"
            :colorBlue="colorBlue" 
            :colorGreen="colorGreen" 
            :colorPurple="colorPurple" 
            :colorOrange="colorOrange"                 
        />
            <Multilanguage
            :titleLanguage="titleLanguage"
            @audioFocus="audioFocus"
            />
        </div>
        <div class="wrapper">

            <div class="left-aside">
                    <CardProfile @audioFocus="audioFocus"/>
                    <Hobbies />
            </div>
            <main class="main">
                    <Skills />
                    <Projects  @audioFocus="audioFocus"  :totalProjects="totalProjects" @counterProjects="counterProjects"/>                    
            </main>   
            <div class="right-aside">
                <CardExperience />

            </div>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';

export default {
    name: 'Portafolio',
    components: {
        CardProfile: defineAsyncComponent(() => import('../components/CardProfile.vue')),
        Toggle: defineAsyncComponent(() => import('../components/Toggle.vue')),
        ToggleColor: defineAsyncComponent(() => import('../components/ToggleColor.vue')),
        CardExperience: defineAsyncComponent(() => import('../components/CardExperience.vue')),
        Skills: defineAsyncComponent(() => import('../components/Skills.vue')),
        Projects: defineAsyncComponent(() => import('../components/Projects.vue')),
        Hobbies: defineAsyncComponent(() => import('../components/Hobbies.vue')),
        Multilanguage: defineAsyncComponent(() => import('../components/Multilanguage.vue')),
    },
    

    data() {
        return {
            darkMode: true,
            textMode: '',
            titleLanguage: 'Inglés',
            colorBlue: false ,
            colorGreen: false,
            colorPurple: false,
            colorOrange: false,
            srcFocusAudio: require('../assets/audios/audio-click.mp3'),
            focusAudio: new Audio(),
            totalProjects: 0,
        }

    },
    methods: {
        
        lightMode() {
            this.audioFocus()
            if(this.darkMode) {
                 document.body.classList.add('lightMode')
                 document.body.classList.remove('dark')
                 if(window.screen.width >= 700) {
                     this.textMode = 'Dark Mode'
                 } else {
                     this.textMode = ''
                 }

            } else {
                 document.body.classList.add('dark')
                 document.body.classList.remove('lightMode')
                if(window.screen.width >= 700) {
                    this.textMode = 'Ligth Blue'
                } else {
                    this.textMode = ''
                }
            }
                this.darkMode = !this.darkMode
        },

        changeColorBlue( ) {
            this.audioFocus()
            document.body.classList.add('color-item--blue')        

            document.body.classList.remove('color-item--green')   
            document.body.classList.remove('color-item--purple')   
            document.body.classList.remove('color-item--orange')               
        },

        changeColorGreen( ) {
            this.audioFocus()
            document.body.classList.add('color-item--green')   

            document.body.classList.remove('color-item--blue')   
            document.body.classList.remove('color-item--purple')   
            document.body.classList.remove('color-item--orange')   
        },  

        changeColorPurple( ) {
            this.audioFocus()
            document.body.classList.add('color-item--purple')   
            
            document.body.classList.remove('color-item--blue')   
            document.body.classList.remove('color-item--green')   
            document.body.classList.remove('color-item--orange')   
        },

        changeColorOrange( ) {
            this.audioFocus()
            document.body.classList.add('color-item--orange')   
            
            document.body.classList.remove('color-item--blue')   
            document.body.classList.remove('color-item--green')   
            document.body.classList.remove('color-item--purple')   
        },

        audioFocus() {
            this.focusAudio.src = this.srcFocusAudio
            this.focusAudio.play()
        },

        changelanguague() {
            const lang = this.$i18n.locale
        },

        counterProjects() {
           this.totalProjects = document.querySelectorAll('.project_info').length
            console.log(this.totalProjects)
        },

        watchScreenWidth() {
            if(window.screen.width >= 700) {
                this.textMode = 'Ligth Mode'
            } else {
                this.textMode = ''
            }
        }

 },

    mounted(){
        document.body.classList.add('dark')
        this.watchScreenWidth()
       
    }
}   
</script>

<style>

 .container-layaout {
    display: grid;
    grid-template-rows: repeat(3, min-content); 
    gap: 1em;
    min-height: 100vh;
}

.header {
    display: flex;
    background-color: var(--bg-card-color);
    transition: var(--transition);
    height: 70px;
    gap: 1em;
    width: 100vw;
    position: fixed;
    z-index: 1;
}

.wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    gap: 1em;
    margin-top: 5.5em;
}


.main {
    gap: 1em;
    background-color: var(--bg-color);
    transition: var(--transition);
}


@media screen and (max-width: 320px) {
    .wrapper {
        grid-template-columns: 90%;
    }
}

@media screen and (min-width: 700px) {
    .wrapper {
        grid-template-columns: min-content 1fr;
        grid-template-rows: 1410px;
    }
}

@media screen and (min-width: 1166px) {

     .container-layaout {
        grid-template-rows: min-content;
        min-height: 100vh;
    }


    .header {
        min-width: 100%;
        height: 80px;
    }

.wrapper {
    max-width: 1600px;
    grid-template-columns: min-content 1fr 400px;
    gap: 1em;
    margin-left: auto;
    margin-right: auto;
}

.main {
    display: grid;
    
    grid-template-columns: 300px;
    grid-template-rows: 400px;
    grid: 1em;
}


}




</style>