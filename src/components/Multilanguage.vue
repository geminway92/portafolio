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
        font-size: 2em;
        width: 120px;
        transition: var(--transition);
        color: var(--text-color);
        cursor: pointer;
    }

    .icon-languague {
        font-size: .7em;
        padding-right: .3em;
        background-color: var(--bg-card);
    }

    .select-languague {
        font-size: .5em;
        background-color: var(--card-color);
        color: var(--text-color);
    }

    option {
        background-color: var(--bg-card-color);
        color: var(--text-color);
        font-size: .6em;
    }

@media screen and (min-width: 360px) {
    .button-languague {
        margin: 0.2em;
        position: relative;
        right: .5em;
    }
}


@media screen and (min-width: 1166px) {
    
    .icon-languague {
        font-size: .6em;
        padding-right: .3em;
        background-color: var(--bg-card);
    }

}   
</style>