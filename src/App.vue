<template>
  <Navbar/>
    <router-view/>


</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import(/*webpackChunkName: "Navbar"*/ './modules/Portfolio/components/Navbar.vue'))
  },
  name: 'app',

};
</script>

