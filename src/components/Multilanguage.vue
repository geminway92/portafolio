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
        width: min-content;
        height: min-content;
        justify-content: space-between;
        background-color: var(--bg-card-color);
        transition: var(--transition);
        cursor: pointer;
}

@media (max-width: 720px) {
    .button-languague {
        font-size: 2em;
        right: 30px;
        top: 1.2em;
    }
    
    .select-languague {
        width: 220px;
        font-size: 1.2em;
        margin-left: 10px;
        background: var(--bg-color);
        color: var(--text-color);
    }

    .icon-languague {
        position: relative;
        font-size: 1em;
        margin-right: .4em;
        top: .1em;
    }
    
    .select-languague option {
        font-size: 0.3em;
    }
    
}


@media (min-width: 721px) {
    .button-languague {
        width: min-content;
        height: min-content;
        font-size: 2em;
        top: .5em;
        right: 1em;
        
    }
    .select-languague {
        font-size: .5em;
    }

    .icon-languague {
        position: relative;
        font-size: .6em;
        margin-right: .4em;
        top: .1em;
    }
    .select-languague option {
        font-size: .6em;
    }
}


</style>