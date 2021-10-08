<template>
        <div @click="this.$emit('lightMode')" class="toggle">
          <i 
          class="fa toggle-toggle-icon"
          :class="[!darkMode ? ' fa-sun' : 'fa-moon' ]"
          >
          <span class="toggle-theme-text">{{textMode}}</span>
          </i>
        </div>

</template>

<script>
export default {
    name: 'Toggle',
    props: {
        darkMode: {
            type: Boolean,
            default: false
        },
        textMode: {
            type: String,
            default: 'Light Mode',
        },
    },

}
</script>

<style scoped>

.toggle {
    display: flex;
    cursor: pointer;
    position: relative;
}

.toggle-toggle-icon:hover {
  color: var(--primary-color);
  
}

.toggle-toggle-icon {
    color: var(--text-color);
}

.toggle-theme-text {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    color: var(--text-color);
}

@media screen and (max-width: 430px){
    .toggle {
        width: 20%;
        height: 100%;
        left: 0;
    }
    
    .toggle-toggle-icon {
        font-size: 2.2em;
        position: relative;
        margin: 1em;
        top: .8em;
    }
}

@media screen and (min-width: 700px) and (max-width: 1000px){
    .toggle {
        width: 120px;
    }
    
    .toggle-toggle-icon {
        position: relative;
        top: 1em;
        margin-left: 10px;

    }
    
    .toggle-theme-text {
        margin-left: 10px;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1600px){
    .toggle {
        width: 120px;
    }
    
    .toggle-toggle-icon {
        position: relative;
        top: 1em;
        margin-left: 10px;

    }
    
    .toggle-theme-text {
        margin-left: 10px;
    }
}

@media screen and (min-width: 1600px){
    .toggle {
        width: 120px;
    }
    
    .toggle-toggle-icon {
        position: relative;
        top: 1em;
        margin-left: 10px;

    }
    
    .toggle-theme-text {
        margin-left: 10px;
    }
}
</style>