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

</style>