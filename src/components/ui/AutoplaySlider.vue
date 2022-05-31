<template>

     <body>

          <div class="slider">
               <div class="slide-track">
                    <div class="slide">
                         <img src="../images/hero.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/hero.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/hero2.jpg" alt="" width="500px">
                    </div>
                      <div class="slide">
                         <img src="../images/hero2.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/pexels-mentatdgt-1185440.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/hero2.jpg" alt="" width="500px">
                    </div>

                     <div class="slide">
                         <img src="../images/hero.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/hero.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/hero2.jpg" alt="" width="500px">
                    </div>
                      <div class="slide">
                         <img src="../images/hero2.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/pexels-mentatdgt-1185440.jpg" alt="" width="500px">
                    </div>
                    <div class="slide">
                         <img src="../images/hero2.jpg" alt="" width="500px">
                    </div>
                   
                
                   


                



               </div>
          </div>

     </body>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     body {
          display: grid;
          place-items: center;

     }

     .slider {
          height: 250px;
          margin: auto;
          position: relative;
          width: 90%;
          display: grid;
          place-items: center;

     }

     .slide-track {
          display: flex;
          width: calc(250px * 18);
          animation: scroll 40s linear infinite;
     }

     @keyframes scroll {
          0% {
               transform: translateX(0);
          }

          100% {
               transform: translateX(calc(-250px * 9));
          }
     }

     .slide {
          height: 200px;
          width: 250px;
          display: flex;
          align-items: center;
          padding: 15px;
          perspective: 100px;
     }

     img {
          width: 100%;
          transition: transform 1s;
     }

     img:hover {
          transform: translateZ(20px);
     }

     .slider::before,
     .slider::after {
          content: "";
          height: 100%;
          position: absolute;
          width: 15%;
          z-index: 2;

     }

     .slider::before {
          left: 0;
          top: 0;
          transform: rotateZ(180deg);
     }
</style>