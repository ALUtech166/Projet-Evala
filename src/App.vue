<template>
<div class="container-fluid">
  <header-bar></header-bar>
  <div class="app">




    <router-view />
  </div>

  <footer-bar></footer-bar>
</div>

</template>

<script>
  import HeaderBar from './components/partials/HeaderBar.vue'
  import FooterBar from './components/partials/FooterBar.vue'

  export default {
    components: {
      HeaderBar,
      FooterBar

    },


  }
</script>



