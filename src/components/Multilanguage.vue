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

@media (max-width: 719px) {

    .button-languague {
        width: 220px;
        height: 100%;
        top: 1.3em;
        right: 0;
    }

    .icon-languague {
        font-size: 1.2em;
        margin-top: .1em;
    }
    

    .select-languague {
        width: 220px;
        font-size: 1.2em;
        margin-left: 10px;
    
    }
    .select-languague option {
        font-size: 0.3em;
    }
}

@media (min-width: 720px) {

    .button-languague {
        width: min-content;
    }

    .select-languague {
        font-size: .6em;
    }
    .select-languague option {
        font-size: 0.6em;
    }
}

@media (min-width: 1260px) {
    .select-languague {
        font-size: .5em;
    }

    .select-languague option {
        font-size: 1em;
    }
}
</style>