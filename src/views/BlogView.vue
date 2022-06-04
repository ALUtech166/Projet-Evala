<template>

     <div class="header">
          <h1 class="titre">Actualités</h1>
     </div>

     <div class="body">

          <div class="row">
               <div class="col-lg-8">
                    <div class="blog">
                         <img src="./2.jpg" alt="" class="img-fluid image">
                         <br>
                         <div class="context">
                              <h2>Serge Anan. <span>28 Mai 2022</span></h2>
                              <h1>Kara Events Platforme</h1>
                              <p>
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora nemo
                                   quae

                                   omnis. <br>
                                   Dignissimos ipsum alias aspernatur consequuntur odio optio, quis rem at omnis?
                                   Sapiente dolor a hic veritatis error.
                              </p>
                         </div>
                    </div>
                    <br>
                    <div class="blog">
                         <img src="./2.jpg" alt="" class="img-fluid image">
                         <br>
                         <div class="context">
                              <h2>Serge Anan. <span>28 Mai 2022</span></h2>
                              <h1>Kara Events Platforme</h1>
                              <p>
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora nemo
                                   quaeomnis. <br>
                                   Dignissimos ipsum alias aspernatur consequuntur odio optio, quis rem at omnis?
                                   Sapiente dolor a hic veritatis error.
                              </p>
                         </div>
                    </div>
               </div>

               <div class="col-lg-4">
                    <div class="recent">
                         <img src="../components/images/koutammakou.png" alt="" class="img-fluid image" id="img">
                         <h1 style="font-size: 25px">Recents Articles</h1>
                         <h2>
                              Kara Events Platforme
                         </h2>

                         <img src="../components/images/koutammakou.png" alt=""  class="img-fluid image" id="img">
                         <h1 style="font-size: 25px">Recents Articles</h1>
                         <h2>
                              Kara Events Platforme
                         </h2>
                    </div>

                     <div class="recent">
                         <pub-page></pub-page>
                    </div>
                     <div class="recent">
                         <img src="../components/images/4.jpg" class="img-fluid" alt="">
                    </div>
               </div>

          </div>
     </div>




</template>

<script>
       import PubPage from '@/components/partials/PubPage.vue'
     export default {
          components: {
               PubPage
          }
     }
</script>

<style scoped>
     .recent {
          max-width: 90%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 1rem;
          background-color: #ffffff;
          font-family: 'Jost';
     }

     span {
          box-shadow: 0 2px 8px rgba(223, 13, 13, 0.823);
          padding: 1rem;
          border-radius: 10px;
          background-color: red;
          color: #ffffff;
     }

     .context {
          max-width: 99%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 1rem;
          background-color: #ffffff;
          font-family: 'Jost';
     }

     .header {
          height: 30vh;
          background-image: linear-gradient(to right bottom,
                    rgba(126, 213, 111, 0.505),
                    rgba(40, 180, 131, 0.481)),
               url(../components/images/hero.jpg);
          background-size: cover;
          background-position: top;
          position: relative;


     }


     .titre {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #006A4A;
          animation: moveInRight 10s ease-out;
          animation-name: moveInLeft;
          animation-duration: 10s;
          animation-timing-function: ease-in;
          text-transform: uppercase;
          font-weight: 600;
     }


     @keyframes moveInLeft {
          0% {
               opacity: 0;
               transform: translateX(-100px);
          }


          80% {
               transform: translateX(10px);
          }


          100% {
               opacity: 1;
               transform: translate(0) rotate(180deg);
          }
     }



     @keyframes moveInRight {
          0% {
               opacity: 0;
               transform: translateX(100px) rotate(0deg);
          }

          80% {
               transform: translateX(-20px);
          }

          100% {
               opacity: 1;
               transform: translate(0);
          }
     }

     @keyframes moveInBottom {
          0% {
               opacity: 0;
               transform: translateY(30px);
          }

          100% {
               opacity: 1;
               transform: translate(0);
          }
     }



     @media only screen and (max-width: 768px) {
       
          .body {
               text-align: center;
          }


     }

      @media only screen and (max-width: 1920px) {
         
     


     }

     .body {
          padding: 5rem;
     }

     .blog {
          text-justify: inter-word;
          text-align: justify;
     }



     .image {
          border-radius: 15px;
     }

     p {
          text-align: justify;
          font-family: 'Josefin Sans';
          font-size: 17px;

     }

     h2 {
          font-weight: 600;
          color: red;
          font-size: 15px;
          font-family: 'Josefin Sans';
          padding: 0.5rem;
     }

     h1 {
          font-weight: bold;
          color: green
     }
</style>