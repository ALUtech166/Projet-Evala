<template>

  <router-view />
  <slider-bar></slider-bar>
  <pub-page></pub-page>
  <div class="scores">
    <vue3-marquee :clone="true">
      <div class="yellow-box">
        <h3>PYA</h3>
        <p>vs</p>
        <h3>TCHITCHAO</h3>
      </div>
      <div class="yellow-box">
        <h3>YADE</h3>
        <p>vs</p>
        <h3>BOHOU</h3>
      </div>
      <div class="yellow-box">
        <h3>KOUMEA</h3>
        <p>vs</p>
        <h3>LANDA</h3>
      </div>
       <div class="yellow-box">
        <h3>LAMA</h3>
        <p>vs</p>
        <h3>SARAKAWA</h3>
      </div>
       <div class="yellow-box">
        <h3>DJAMDE</h3>
        <p>vs</p>
        <h3>YAKA</h3>
      </div>


    </vue3-marquee>
  </div>

  <welcome-view></welcome-view>
  <pub-page></pub-page>
  <category-page></category-page>


</template>

<script>
  import SliderBar from '../components/partials/SliderBar.vue'
  import WelcomeView from '../components/ui/WelcomeView.vue'
  import PubPage from '@/components/partials/PubPage.vue'
  import CategoryPage from '@/components/ui/CategoryPage.vue'
  import {
    Vue3Marquee
  } from 'vue3-marquee'
  import 'vue3-marquee/dist/style.css'
  export default {
    components: {
      SliderBar,
      WelcomeView,
      Vue3Marquee,
      PubPage,
      CategoryPage

    }
  }
</script>

<style scoped>
  .col-sm-2:hover {
    transform: translateY(35px);
    transition: 1s ease-in-out;
  }

  .yellow-box {
    border: 2px solid #FFCE00;
    padding: 40px;
    width: 100%;

  }



  img {
    width: 100%;
    transition: transform 1s;
  }

  img:hover {
    transform: translateZ(20px);
  }

  .scores {
    padding: 20px;

  }

  h1 {
    font-size: 15px;
    font-weight: 600;
    font-family: 'Jost', sans-serif;
  }


  h3 {
    font-weight: 600;
    font-size: 15px;
    text-align: center;
  }

  p {
    text-align: center;
  }

</style>