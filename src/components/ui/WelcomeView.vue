<template>
     <div class="home">

          <div class="container" data-aos="fade-left" data-aos-duration="3000">

               <div class="row">


                    <div class="col-lg-6">
                         <img class="image img-fluid" src="../images/Faure-tg.jpg" alt="">
                    </div>

                    <div class="col-lg-6">

                         <hr class="style-two">
                         <h1><strong>Bienvenue à KARA</strong></h1><br>
                         <h4>Kara au Coeur de la Visite du Nord-Togo</h4>

                         <p class="desc">
                              Chef-lieu de la préfecture de la Kozah et capitale de la région du même nom, Kara est une
                              ville
                              en pleine expansion. Elle est devenue rapidement un centre moderne d’administration et de
                              production dans le cadre des objectifs du gouvernement de créer des infrastructures dans
                              toutes
                              les régions du pays.

                         </p>

                         <p class="desc">
                              La ville permet de rayonner vers les nombreux sites naturels et culturelles de la région
                              dont
                              le paysage Koutammakou, classé au patrimoine mondiale de l’UNESCO. Kara dispose d’une
                              importante structure hôtelière et de nombreux restaurants. D’un point de vue touristique,
                              Kara
                              est centrale pour la visite de la region. C’est dans la région de la Kara qu’on trouve un
                              des
                              groupes ethniques les plus nombreux du Togo, les Kabiyè.
                         </p>

                    </div>



               </div>
          </div>
     </div>



     <div class="video-pub" data-aos="fade-left" data-aos-duration="3000">

          <div class="play-button">
               <a href=""><img src="" class="img-fluid" alt=""></a>
          </div>

          <div class="carou-sel">
               <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                              class="active" aria-current="true" aria-label="Slide 1"></button>
                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                              aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                         <div class="carousel-item active">

                              <div class="scores">

                                   <vue3-marquee :clone="true">
                                        <img height="100" src="../images/hp.jpg" />
                                        <img height="100" src="../images/hp-face.jpg" />
                                        <img height="100" src="../images/hp.jpg" />
                                        <img height="100" src="../images/pc.png" />
                                        <img height="100" src="../images/hp.jpg" />
                                        <img height="100" src="../images/pc.png" />
                                        <img height="100" src="../images/hp.jpg" />
                                        <img height="100" src="../images/pc.png" />
                                   </vue3-marquee>

                              </div>
                         </div>

                    </div>

               </div>

          </div>

     </div>



     <div class="a-propos" data-aos="fade-left" data-aos-duration="3000">
          <div class="title">
               <h1>A propos des Evenements</h1>
          </div>

          <p class="desc" style="text-align: center">
               Dans la région de la Kara on dispose de plusieurs évenements culturelles à savoir Evala (Lutte), Akpéma
               <br>
               (Initiation de la jeune fille) et Habyè(la danse mystique des Kabyè) etc... tous ces évenements se <br>
               déroulent dans les 15 cantons de la préfecture de la Kozah et 1 dans le canton Agbadjiyaka. <br>

          </p>

     </div>

     <event-page></event-page>
     <div class="accomodation" data-aos="flip-left" data-aos-duration="3000">

          <div class="title">
               <h1 style="text-align:center">Accommodations</h1>
          </div>
          <div class="row">
               <div class="col-lg-3">

                    <img class="img-fluid" src="../images/hotel-kara1.png" alt="">
                    <div class="box1">
                         <a href="/hotel">
                              <h2>Hotels</h2>
                         </a>

                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="img-fluid" src="../images/Photo84.png" alt="">
                    <div class="box1">
                         <a href="/bar-resto">
                              <h2>Bars & Restaurants</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="img-fluid" src="../images/Photo19.png" alt="">
                    <div class="box1">
                         <a href="/boite">
                              <h2>Boites de nuits</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="img-fluid" src="../images/Photo10.png" alt="">
                    <div class="box1">
                         <a href="/marche">
                              <h2>Marchés</h2>
                         </a>
                    </div>
               </div>


          </div>

     </div>



     <div class="accomodation" data-aos="flip-left" data-aos-duration="3000">
          <div class="row" id="items">
               <div class="col-lg-3">

                    <img class="img-fluid" src="../images/fazao.png" alt="">
                    <div class="box2">
                         <a href="/tourisme">
                              <h2 style="color:green">Lieux Touristiques</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="img-fluid" src="../images/lafia.png" alt="">
                    <div class="box2">
                         <a href="/pharmacie">
                              <h2 style="color:green">Pharmacies</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="img-fluid" src="../images/cbt.png" alt="">
                    <div class="box2">
                         <a href="/sante">
                              <h2 style="color:green">Centres de Santé</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="img-fluid" src="../images/Photo11.png" alt="">
                    <div class="box2">
                         <a href="/radio">
                              <h2 style="color:green">Radios</h2>
                         </a>
                    </div>
               </div>


          </div>

          <div class="lire-plus"><a href="/about" class="btn btn-success btn-aminated">Lire Plus</a></div>

     </div>


     <div class="ref"  data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
          <div class="title">
               <h1 style="text-align:center">Nos partenaires</h1>
          </div>
          <br>
          <vue3-marquee :clone="true">
               <img height="100" src="../images/Photo1.png" />
               <img height="100" src="../images/brs.png" />
               <img height="100" src="../images/orabank.png" alt="" />
               <img height="100" src="../images/croix-rouge.png" alt="" />
               <img height="100" src="../images/bia.png" alt="" />
               <img height="100" src="../images/atlantique.png" alt="" />
               <img height="100" src="../images/coris.png" alt="" />
               <img height="100" src="../images/poste.png" alt="" />
          </vue3-marquee>
     </div>



     <div class="sub-welcome">



          <div class="row">

               <div class="col-lg-6">
                    <p class="pub">Vous avez envie de donner de la visibilité à votre entreprise/société</p>
               </div>


               <div class="col-lg-6">
                    <a type="button" class="btn btn-warning" href="/pub">Cliquez Ici</a>
               </div>

          </div>
     </div>

</template>

<script>
     import {
          Vue3Marquee
     } from 'vue3-marquee'
     import 'vue3-marquee/dist/style.css'
     import AOS from "aos";
     import EventPage from './EventPage.vue';

     export default {
          components: {
               Vue3Marquee,
               EventPage
          },
          setup() {
               AOS.init();

          },

     }
</script>

<style scoped>
     .col-lg-3:hover {
          transform: translateY(35px);
          transition: 1s ease-in-out;
     }

     a {
          text-decoration: none;
     }



     .lire-plus {
          text-align: center;
          padding: 20px;
     }

     .title {
          margin: 1rem;
          max-width: 100%;
          padding: 1rem;


     }

     .box1 {
          margin: 2px;
          width: 95%;
          text-align: center;
          padding: 5px;
          border-radius: 10px;
          border: 1px solid red;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     .box2 {
          margin: 2px;
          width: 95%;
          text-align: center;
          padding: 5px;
          border-radius: 10px;
          border: 1px solid #006A4A;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }


     h2 {
          color: #D21034;
          font-size: 20px;
     }




     .desc {
          color: black;
          text-align: justify;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;

     }

     .home {
          padding: 50px;
          background-image: linear-gradient(to right, #006a4a, #FFCE00);
     }



     .a-propos {
          padding: 10px;
          text-align: center;
          background-image: linear-gradient(to right, #ffcc00ed, #006a4a);
          padding-top: 50px;


     }

     .accomodation {
          padding: 50px;

     }



     .ref {
          padding: 100px;


     }


     .sub-welcome {
          padding: 20px;
          text-align: center;


     }

     .video-pub {
          padding: 20px;
          background: #fff;



     }

     .play-button {
          text-align: center;

     }



     .pub {
          color: #D21034;
          font-family: 'Jost';
          font-size: 15px;
          letter-spacing: 5px;
          font-weight: 900;
     }


     hr.style-two {
          border: 10px solid white;
          border-radius: 15px;
          background-color: white;
          width: 20%;


     }

     .scores {
          padding: 10px;

     }

     h1 {
          font-size: 25px;
          font-weight: 600;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }


     .image {
          border-radius: 10px;

     }



     h3 {
          font-size: 15px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
     }

     p {
          font-size: 15px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
     }


     h4 {
          color: #fff;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
     }




     .btn:link,
     .btn:visited {
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 100px;
          transition: all .2s;
          position: relative;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;




     }


     .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgb(0, 0, 0, 2);
     }

     .btn:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgb(0, 0, 0, 2);
     }

     .btn-white {
          background-color: #fff;
          border: 2px solid #006A4A;
          color: #006A4A;
     }

     .btn::after {
          content: "";
          display: inline-block;
          height: 100%;
          width: 100%;
          border-radius: 100px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          transition: all .4s;
     }

     .btn-white::after {
          background-color: #006A4A;
     }

     .btn:hover::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;


     }

     .btn-aminated {
          animation: moveInBottom .10s ease-out .75s;
          animation-fill-mode: backwards;
     }

     @media (max-width: 350px) {
          .accomodation {
               text-align: center;
          }
     }



    /*  /* // X-Small devices (portrait phones, less than 576px) */
    /*  @media (max-width: 400px) {
          .box1, .box2 {
               width: 100%;
          }
     } */

     /* // Small devices (landscape phones, less than 768px) */
    /*  @media (max-width: 767.98px) {
          .box1, .box2 {
               width: 100%;
          }
     }
 */
     /* // Medium devices (tablets, less than 992px) */
    /*  @media (max-width: 991.98px) {
          .box1, .box2 {
               width: 100%;
          }
     } */

     /* // Large devices (desktops, less than 1200px) */
   /*   @media (max-width: 1199.98px) {
          .box1, .box2 {
               width: 100%;
          }
     }
 */
     /* // X-Large devices (large desktops, less than 1400px) */
    /*  @media (max-width: 2992px) {
          .box1, .box2 {
               width: 50%;
          }
     } */ 


</style>