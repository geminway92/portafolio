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

</style>