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
            textMode: 'Light Mode',
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
            } else {
                 document.body.classList.add('dark')
                 document.body.classList.remove('lightMode')
                
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
            console.log(lang )
            
  
        },

        counterProjects() {
           this.totalProjects = document.querySelectorAll('.project_info').length
            console.log(this.totalProjects)
        }
 },

    mounted(){
        document.body.classList.add('dark')
       
    }
}   
</script>

<style>


.mode-color-container {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color: var(--bg-card-color);
    transition: var(--transition);
}

.main {
    display: grid;
    background-color: var(--bg-color);
    align-items: flex-start;
    padding-bottom: 2em;
    margin: 1em;
    transition: var(--transition);

}

.column {
    display: grid;
    gap: .5em;
}

.dark {
    color: var(--text-color); 
    background-color: var(--bg-color);
    transition: var(--transition);
}
@media screen and (min-width: 720px) {
    .main{
        grid-template-columns:  min-content repeat(2, 1fr);
        grid-template-columns: repeat(3, min-content);
        justify-content: center;
        gap: 0.6em;
    }

    .column--left {
        grid-template-columns: min-content;
        grid-template-rows: min-content;
        align-items: flex-start;
    }

    .column--right{
        grid-template-columns:  305px 1fr;
        align-items: flex-start;
    }

}




@media screen and (max-width: 719px) {
    #app {
        width: min-content;
        height: min-content;

    }

    .mode-color-container {
        height: min-content;
        padding-bottom: 3em;
    }
    
    section {
        margin: 0em 2em;
    }

    .main {
        gap: 2em;
    }


}

@media screen and (min-width: 720px) {
    
    #app {
        width: min-content;
        height: min-content;

    }

   

    .main {
        grid-template-columns: min-content min-content;
        grid-template-rows: min-content;
        margin: 1em;
    }
}

@media screen and (min-width: 1260px) {
    

     .mode-color-container {
        width: 100vw;
    }

}
</style>