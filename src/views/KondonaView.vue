<template>
     <header-bar></header-bar>
     <div class="header">
          <h1 class="titre">Kondona</h1>
     </div>

     <div class="events">

          <div class="akpema">

               <section class="section-1">
                    <h1 style="text-align:center">A propos de Kondona</h1>
                    <br>
                    <div class="container text-center">
                         <div class="row">
                              <div class="col-md-6 col-12">
                                   <div class="pray">
                                        <img src="../components/images/Ok-2.png" alt="Pray" class="image"
                                             height="500px" />
                                   </div>
                              </div>
                              <div class="col-md-6 col-12">
                                   <div class="panel text-left">
                                        <h1 style="color: red">Kondona</h1>
                                        <p class="pt-4">
                                             Au lendemain de la clôture des Evala, le jeune garçon, Evalou, devenu ainsi
                                             Kondo, le jeune homme, avec ces signes distinctifs, peut librement circuler
                                             dans le milieu. Le jour de l’apothéose, il se distingue par la danse,
                                             l’escalade de la butte et surtout la frappe du gong. Cette cérémonie
                                             initiatique est un véritable test pour permettre aux jeunes leur
                                             intégration dans la classe des adultes (Kondona), en leur conférant qualité
                                             et dignité. Elle leur donne, le pouvoir de prendre part aux décisions
                                             concernant la vie de la communauté. Tous les rituels évoqués ici ont un
                                             sens culturel très significatif.
                                        </p>

                                   </div>
                              </div>
                         </div>
                    </div>
               </section>




          </div>


     </div>
</template>

<script>
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     export default {
          components: {
               HeaderBar
          }
     }
</script>

<style scoped>
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     .events {
          text-align: center;
     }

     .desc {
          color: black;
          text-align: justify;
          text-justify: inter-word;
          font-family: 'Jost';
          font-size: 20px;
          font-family: 'Josefin Sans';

     }

     .image {
          border-radius: 10px;
          margin-left: 4rem;

     }

     .section-1 {
          padding: 18vmin 0vmin;
          background-image: linear-gradient(to right, #ffcc00ed, #006a4a);
     }

     .section-1 .row .col-md-6 .pray img {
          opacity: 0.8;
          width: 80%;
          border-radius: 10px;
     }

     .section-1 .row .col-md-6:last-child {
          position: relative;
     }

     .section-1 .row .col-md-6 .panel {
          position: absolute;
          top: 7vmin;
          left: -18vmin;
          background: white;
          border-radius: 3px;
          text-align: left;
          padding: 13vmin 5vmin 20vmin 10vmin;
          box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.2);
          font-family: var(--Rubik);
          z-index: 1;
     }

     .section-1 .row .col-md-6 .panel h1 {
          font-weight: bold;
          padding: 0.4em 0;
          font-size: 2em;
     }

     .section-1 .row .col-md-6 .panel p {
          font-size: 1em;
          color: rgba(0, 0, 0, 0.5);
          font-family: 'Josefin Sans';
     }

     .a-propos {
          padding: 0.5rem;
          text-align: center;



     }


     h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          font-family: 'Josefin Sans', sans-serif;
          color: #006A4A;
          text-align: left;
     }



     .header {
          height: 30vh;
          background-image:
               url(../components/images/banner.jpg);
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
          color: #fff;
          /* animation: moveInRight 10s ease-out;
    animation-name: moveInLeft;
    animation-duration: 10s;
    animation-timing-function: ease-in; */
          font-weight: bold;
          font-size: 50px;
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

          .section-1 .row .col-md-6 .panel {
               position: initial;
               width: initial;
               height: initial;
          }

          .section-2 .cover {
               background-position: -25vmin -10vmin;
          }



     }
</style>