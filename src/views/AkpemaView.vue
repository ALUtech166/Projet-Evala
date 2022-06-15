<template>
 <annonce-page></annonce-page>
 <div class="header">
          <h1 class="titre">Akpema</h1>
     </div>

     <div class="events">

          <div class="akpema">

               <section class="section-1">
                    <h1 style="text-align:center">A propos de Akpema</h1>
                    <br>
                    <div class="container text-center">
                         <div class="row">
                              <div class="col-md-6 col-12">
                                   <div class="pray">
                                        <img src="../components/images/Ok-1.png" alt="Pray" class="image" height="500px" />
                                   </div>
                              </div>
                              <div class="col-md-6 col-12">
                                   <div class="panel text-left">
                                        <h1 style="color: red">Akpéma</h1>
                                        <p class="pt-4">
                                             C’est une lutte ancestrale. Depuis 1785 les luttes se pratiquaient dans le
                                             mois
                                             de
                                             Juillet.
                                             C’est au milieu du 18ème siècles que les premières manifestations du
                                             challenge
                                             ont eu lieu
                                             en
                                             pays Kabyè avec le sacre de deux personnages dont la lutte a sonné le glas
                                             des
                                             compétitions
                                             inter-villages.
                                        </p>
                                        <p>
                                             La particularité singulière qui a caractérisé ce combat a été recherché à
                                             travers la forme
                                             et
                                             la taille des deux lutteurs, messieurs TCHABLIME du village de KPÉDAW avait
                                             une
                                             taille de
                                             plus
                                             de 2m avec un corpulence herculéenne tandis que son adversaire FAWOKÉZIÉ de
                                             KOLIDÈ ne
                                             mésurait
                                             que 1m40. Si l’on devait comparer les deux protagonistes aux personnes
                                             bibliques
                                             de
                                             l’Histoire,
                                             le premier était Goliath en face du second David. À la fin du combat se fut
                                             le
                                             petit qui
                                             prit
                                             le dessus. Partout dans le village, le costaud TCHABLIME fut hué et moqué.
                                             Pour avoir voulu laver cet affront, le virus de la compétition s’est alors
                                             propagé dans
                                             les
                                             cantons et villages de la Kozah.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>




          </div>

         
     </div>

     <pub-page></pub-page>
</template>

<script>
       import PubPage from '@/components/partials/PubPage.vue'
       import AnnoncePage from '@/components/ui/AnnoncePage.vue'
     export default {
          components: {
               PubPage,
               AnnoncePage
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

</style>