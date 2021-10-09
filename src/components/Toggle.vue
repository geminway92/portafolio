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
    height: min-content;
    top: 1.5em; 
    left: 1em;   
}

.toggle-toggle-icon {
        color: var(--text-color);
        width: min-content;
        height: min-content;
        margin-left: 1em;
}

.toggle-toggle-icon:hover {
        color: var(--primary-color);
}

.toggle-theme-text {
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        color: var(--text-color);
        margin-left: 0.5em;
    }


@media screen and (width: 320px) {
    .toggle-toggle-icon {
        margin: 0;

    }
}
@media screen and (min-width: 700px) {
    .toggle {
        margin-top: .5em;

    }
    .toggle-toggle-icon {
        width: 100%;
    }

}

@media screen and (min-width: 1166px) {


    .toggle-toggle-icon {
        color: var(--text-color);
        width: 100%;
        margin-left: 1em;
    }



}



</style>