<template>
  <div class="pub" data-aos="fade-right"  data-aos-duration="2000">
          <vue3-marquee :clone="true">
          <p>Welcome to Kara Event</p> 
          <p>Bienvenue à Kara</p>
          </vue3-marquee>
  </div>
</template>

<script>
     import {
          Vue3Marquee
     } from 'vue3-marquee'
     import 'vue3-marquee/dist/style.css'
     import AOS from "aos";
  
     export default {
          components: {
               Vue3Marquee,
               
          },
          setup() {
               AOS.init();

          },

     }
</script>

<style scoped>

     p {
          font-size: 12px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          padding: 10px;
          font-weight: 500;
     }


     .pub {
          border-radius: 5px;
          box-shadow: 0 5px 10px #0005;
          overflow: hidden;
     }

</style>