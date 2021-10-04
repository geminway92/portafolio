<template>
    <div :class="[darkMode ? 'dark' : 'lightMode']"> 
        <div class="toggle-color" 
        :class="[colorBlue ? 'color-item--blue' : colorGreen ?  'color-item--green' : colorPurple ? 'color-item--purple': colorOrange ? 'color-item--orange' : '']"
        >  

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
            
            <div class="main">
                    <div class="header">
                        <CardProfile @audioFocus="audioFocus"/>
                        <Skills />
                        <CardExperience />

                    </div>
                    <div class="column-center">
                        <Hobbies />
                        <Projects  @audioFocus="audioFocus"/>
                    </div>
                    
            </div>   
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

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
            focusAudio: new Audio()
        }

    },
    methods: {
        
        lightMode() {
            this.audioFocus()
            if(this.darkMode) {
                this.textMode = 'Dark Mode'
            } else {
                this.textMode = 'Light Mode'
                
            }
                this.darkMode = !this.darkMode
        },

        changeColorBlue( ) {
            this.audioFocus()
            this.colorBlue = true        

            this.colorGreen = false
            this.colorPurple = false
            this.colorOrange = false
            
        },

        changeColorGreen( ) {
            this.audioFocus()
            this.colorGreen = true

            this.colorBlue = false 
            this.colorBlue = false
            this.colorPurple = false
        },  

        changeColorPurple( ) {
            this.audioFocus()
            this.colorPurple = true
            
            this.colorBlue = false 
            this.colorGreen = false
            this.colorOrange = false
        },

        changeColorOrange( ) {
            this.audioFocus()
            this.colorOrange = true
            
            this.colorBlue = false 
            this.colorGreen = false
            this.colorPurple = false
            
        },

        audioFocus() {
            this.focusAudio.src = this.srcFocusAudio
            this.focusAudio.play()
        },

        changelanguague() {
            const lang = this.$i18n.locale
            console.log(lang )
            
  
        },

    },

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
    background-color: var(--bg-color);
    width: 100%;    
    transition: var(--transition);
    display: grid;
}

.header {
    display: grid;
    grid-template-columns: min-content repeat(3, 1fr);
    grid-template-rows: min-content;
    gap: 15px;
}

.column-center {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.dark {
    color: var(--text-color); 
    background-color: var(--bg-color);
    transition: var(--transition);
}


</style>