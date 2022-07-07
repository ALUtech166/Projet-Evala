<template>
  <div class="pub" data-aos="fade-right"  data-aos-duration="2000">
          <vue3-marquee :clone="true">
          <a href="#" target="_blank" rel="noopener noreferrer"><p>Welcome to Kara Event</p></a> 
          <a href="#" target="_blank" rel="noopener noreferrer"><p>Bienvenue à Kara</p></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><p>Kabtè Kara daa</p></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><p>Woezon va Kara</p></a>
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
          font-size: 20px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          color: #000;
          margin: 10px;
          padding-right: 3px;
          
     }

     a {
          text-decoration: none;
          text-align: center;
         
     }


     .pub {
          border-radius: 5px;
          box-shadow: 0 5px 10px #0005;
          overflow: hidden;
          background-image: linear-gradient(to right, #ffcc00, #ffcc00);

     }

</style>