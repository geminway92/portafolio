<<<<<<< HEAD
<template>
        <div @click="this.$emit('lightMode')" class="toggle">
          <i 
          class="fa toggle-toggle-icon"
          :class="[!darkMode ? ' fa-sun' : 'fa-moon' ]"
          >
          </i>
          <p class="toggle-theme-text">{{textMode}}</p>
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
    height: 60px;
}

.toggle-toggle-icon {
    color: var(--text-color);
    margin: 22px 0 0 10px;
}

.toggle-theme-text {
    margin: 20px 0 0 10px
}

=======
<template>
        <div @click="this.$emit('toggleTheme')" id="toggle-theme">
          <i id="toggle-icon" 
          class="fa toggle-theme-icon"
          :class="[!darkMode ? ' fa-sun' : 'fa-moon' ]"
          >
          </i>
          <p class="toggle-theme-text">{{textMode}}</p>
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
    data(){
        return{
           
        }
    },

    methods: {
        
    }

}
</script>

<style scoped>
#toggle-theme {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    transition: var(--transition);
    margin-left: 5px;
    cursor: pointer;
}
#toggle-icon {
    color: var(--text-color);
}
.toggle-theme-text {
    margin-left: 5px;
}

>>>>>>> 2c70237b1777e45e2254f1bd3c85948502b08bb3
</style>