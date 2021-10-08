<template>
  
    <div class="mode-color-container">
    
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
    
    <main class="main">
        <section class="column column--left">
            <CardProfile @audioFocus="audioFocus"/>
            <Hobbies />
        </section>
        <section class="column column--right">
            <Skills />
            <CardExperience />
            <Projects  @audioFocus="audioFocus"  :totalProjects="totalProjects" @counterProjects="counterProjects"/>                    

    </section>
    </main>   
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

#app {
    width: min-content;
    height: min-content;
    margin-bottom: 2em;
}
.mode-color-container {
    display: flex;
    justify-content: space-between;
    background-color: var(--bg-card-color);
    transition: var(--transition);
}

.main {
    display: grid;
    background-color: var(--bg-color);
    transition: var(--transition);

}

.column {
    display: grid;
}

@media screen and (max-width: 430px) {
    
    .main {
        width: 100%;
        gap: 2em
    }

    .mode-color-container {
        height: min-content;
        padding-bottom: 3em;
    }

}


@media screen and (min-width: 700px) and (max-width: 1000px) {
    .mode-color-container {
        width: 100%;
        height: 50px;
    }
    .main{
        margin: 1.5em;
        grid-template-columns: repeat(3, min-content);
        justify-content: center;
        gap: 0.6em;
    }

    .column--left {
        grid-template-columns: min-content;
        grid-template-rows: min-content;
        align-items: flex-start;

        gap: 1em;
    
    }   

    .column--right{
        grid-template-columns: 220px 230px;
        grid-template-rows: 420px;
        align-items: flex-start;
        gap: .5em;
    }

}


@media screen and (min-width: 1000px) and (max-width: 1600px) {
    .mode-color-container {
        width: 100%;
        height: 50px;
    }

    .main{
        margin: 1.5em;
        grid-template-columns: repeat(3, min-content);
        justify-content: center;
        gap: 1em;
    }

    .column--left {
        grid-template-columns: min-content;
        grid-template-rows: min-content;
        align-items: flex-start;

        gap: 1em;
    
    }   

    .column--right{
        grid-template-columns: 300px 350px;
        grid-template-rows: 420px;
        align-items: flex-start;
        gap: 1em;
    }

}


@media screen and (min-width: 1600px) {
    .mode-color-container {
        width: 100vw;
        height: 50px;
    }

    .main{
        margin: 1.5em;
        grid-template-columns: repeat(3, min-content);
        justify-content: center;
        gap: 1em;
    }

    .column--left {
        grid-template-columns: min-content;
        grid-template-rows: min-content;
        align-items: flex-start;

        gap: 1em;
    
    }   

    .column--right{
        grid-template-columns: 300px 350px;
        grid-template-rows: 420px;
        align-items: flex-start;
        gap: 1em;
    }

}


</style>