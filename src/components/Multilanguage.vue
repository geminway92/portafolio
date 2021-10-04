<template>
    <div class="button-languague">
            <i class="fas fa-globe icon-languague"></i>
        <select @click="this.$emit('audioFocus')" v-model="$i18n.locale" class="select-languague">
            <option v-for="locale in locales" :key="locale.key" :value="locale.key">
                {{ locale.label }}
            </option>
        </select>

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
  },
  data() {
      return {
        locales: [
            { key: "es", "label": "Español"},
            { key: "en", "label": "Inglés"}
        ]

      }
    
  }
  
}
</script>

<style scoped>

.button-languague {
    display: flex;
    font-size: 2em;
    position:relative;
    width: 100px;
    height: min-content;
    background-color: var(--bg-card-color);
    transition: var(--transition);
    right: 30px;
    top: 18px;
    cursor: pointer;
}

.select-languague {
  background: var(--bg-color);
  color: var(--text-color);
}

.icon-languague{
    font-size: 0.6em;
    margin-right: 6px;    
}


</style>