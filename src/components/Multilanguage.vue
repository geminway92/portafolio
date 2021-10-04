<template>
    <div class="button-languague" @click="this.$emit('audioFocus')">
        <i class="fas fa-globe icon-languague">
        <span class="title-languague">{{titleLanguage}}</span>
        </i>
    </div>

</template>

<script>
export default {
  name: 'locale-changer',
  props: {
    titleLanguage: {
        type: String,
        default: 'Inglés',
    }
  }
}
</script>

<style scoped>

.button-languague {
    font-size: 2em;
    position:relative;
    height: min-content;
    background-color: var(--bg-card-color);
    transition: var(--transition);
    top: 5px;
    cursor: pointer;
}

.button-languague:hover {
  color: var(--primary-color);
  
}

.icon-languague{
    font-size: 0.6em;
    
}

.title-languague {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    width: 100px;
    height: 100px;
    color: var(--text-color);
    margin-left: 10px;
    position: relative;
    transition: var(--transition);
}
</style>