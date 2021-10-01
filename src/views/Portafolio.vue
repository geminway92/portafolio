<template>
        <div :class="[darkMode ? 'dark' : 'toggle-theme']"> 
            <div class="toggle-color" 
            :class="[colorBlue ? 'color-item--blue' : colorGreen ?  'color-item--green' : colorPurple ? 'color-item--purple': colorOrange ? 'color-item--orange' : '']"
            >  
                <toggle :darkMode="darkMode" :textMode="textMode" @toggleTheme="toggleTheme"/>
                <ToggleColor 
                @changeColorBlue="changeColorBlue" 
                @changeColorGreen="changeColorGreen" 
                @changeColorPurple="changeColorPurple" 
                @changeColorOrange="changeColorOrange" 
                :colorBlue="colorBlue" 
                :colorGreen="colorGreen" 
                :colorPurple="colorPurple" 
                :colorOrange="colorOrange" 
                
                />
                <div class="components">
                    <CardProfile />
                    <Projects />
                    <Skills />
                    <Hobbies />
                    <CardExperience />

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
    },
    
    data() {
        return {
            darkMode: false,
            textMode: 'Light Mode',
            colorBlue: false ,
            colorGreen: false,
            colorPurple: false,
            colorOrange: false
            
        }
    },
    methods: {
        toggleTheme() {
            if(this.darkMode) {
                this.textMode = 'Dark Mode'
            } else {
                this.textMode = 'Light Mode'
                
            }
                this.darkMode = !this.darkMode
        },

        changeColorBlue( ) {
            this.colorBlue = !this.colorBlue        
            
            this.colorGreen = false
            this.colorPurple = false
            this.colorOrange = false
            
        },

        changeColorGreen( ) {
            this.colorGreen = !this.colorGreen

            this.colorBlue = false 
            this.colorBlue = false
            this.colorPurple = false
        },  

        changeColorPurple( ) {
            this.colorPurple = !this.colorPurple
            
            this.colorBlue = false 
            this.colorGreen = false
            this.colorOrange = false
        },

        changeColorOrange( ) {
            this.colorOrange = !this.colorOrange
            
            this.colorBlue = false 
            this.colorGreen = false
            this.colorPurple = false
            
        }

        
    }


}   
</script>

<style>
.components {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 250px);
    grid-column-gap:40px;
    margin: 0 10px;
}

.dark {
    width: 1000;
    height: 1500px;
    color: var(--text-color); 
    background-color: var(--bg-color);
    transition: var(--transition);
}

.toggle-color {
    width: 1825px;
    height: 60px;
}

@media screen and (min-width: 250px) {

.components {
    max-width: 1400px;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 550px 250px;
    grid-column-gap:40px;
    grid-row: 4;

}

.dark {
    width: 840px;
    height:  2000px;
}


}

</style>