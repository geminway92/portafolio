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
    width: 140px;
    height: 60px;
    cursor: pointer;
    position: relative;
    left: 170px;
}

.toggle-toggle-icon:hover {
  color: var(--primary-color);
  
}

.toggle-toggle-icon {
    color: var(--text-color);
    margin: 22px 0 0 10px;
    left: 100px;

}

.toggle-theme-text {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    color: var(--text-color);
    margin: 20px 0 0 10px
}

@media screen and (max-width: 719px){
    .toggle {
        width: 250px;
        height: 100%;
        top: 1em;
        left: 0;
    }
    
    .toggle-toggle-icon {
        font-size: 2.2em;
        margin-top: 30px;
    }

    .toggle-theme-text {
        font-size: 35px;
    }
}

@media screen and (min-width: 720px) {
    .toggle {
        left: 0;
    }


}
</style>