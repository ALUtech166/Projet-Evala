<template>

  <header-bar></header-bar>
  <div class="app">
    



    <router-view />
  </div>

  <footer-bar></footer-bar>

</template>

<script>
  import HeaderBar from './components/partials/HeaderBar.vue'
  import FooterBar from './components/partials/FooterBar.vue'
  import {mapGetters} from 'vuex'


  export default {
    components: {
      HeaderBar,
      FooterBar

    },

    computed: {
    ...mapGetters(['user'])
  }


  }
</script>

<style>
@import './global-style.css';

</style>



