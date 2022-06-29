<template>
     <header-bar></header-bar>
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
                                        <img src="../components/images/Ok-1.png" alt="Pray" class="image"
                                             height="500px" />
                                   </div>
                              </div>
                              <div class="col-md-6 col-12">
                                   <div class="panel text-left">
                                        <h1 style="color: red">Akpéma</h1>
                                        <p class="pt-4">
                                             Akpéma est un rite qui permet aux jeunes filles Kabyè de sauvegarder
                                             certaines vertus qui lui donnent un statut particulier. Parmi ces vertus,
                                             la plus est capitale est sa virginité avant le mariage.
                                             Ainsi, la jeune fille, très dévêtue, la tête rasée, un collier en fer au
                                             cou, part avec ses autres camarades en file indienne dans la forêt sacrée
                                             où se poursuivent les cérémonies. Tout au long de l’initiation, elles sont
                                             accompagnées et prises en charge par des femmes adultes expérimentées. Il
                                             faut souligner que dans la forêt, au cours des rituels, les Akpéma auront à
                                             s’asseoir sur une pierre sacrée pour prouver leur pureté. La réussite à ce
                                             test donne le privilège d’avoir accès à la petite case sacrée. Une étape
                                             déterminante qui, lorsqu’elle est franchie, fait l’honneur de leur famille.
                                             C’est à la fin de ce processus initiatique que la jeune fille Kabyè est
                                             déclarée apte à la vie adulte et au mariage. Après les cérémonies, elles
                                             sortiront toutes nues de la forêt sacrée et entreprendront le voyage du
                                             retour en passant par un autre chemin que celui emprunté pour y arriver. Le
                                             risque pour celles qui vont s’entêter est de voir la porte de la petite
                                             case se rétrécir devant elles, les empêchant d’y entrer.

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
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     export default {
          components: {
               PubPage,
               AnnoncePage,
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
</style>