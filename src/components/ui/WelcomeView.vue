<template>
     <div class="home">

          <div class="row">

               <div class="col-lg-6">
                    <img class="image" src="../images/Bienvenue.png" alt="">
               </div>

               <div class="col-lg-6">

                    <hr class="style-two">
                    <h1 class="title animate__animated animate__fadeInDown"><strong>Bienvenue à KARA</strong></h1><br>
                    <h4>Kara au Coeur de la Visite du Nord-Togo</h4>

                    <p class="desc">
                         Chef-lieu de la préfecture de la Kozah et capitale de la région du même nom, Kara est une ville
                         en pleine expansion. Elle est devenue rapidement un centre moderne d’administration et de
                         production dans le cadre des objectifs du gouvernement de créer des infrastructures dans toutes
                         les régions du pays.

                         La ville permet de rayonner vers les nombreux sites naturels et culturelles de la région dont
                         le paysage Koutammakou, classé au patrimoine mondiale de l’UNESCO. Kara dispose d’une
                         importante structure hôtelière et de nombreux restaurants. D’un point de vue touristique, Kara
                         est centrale pour la visite de la region. C’est dans la région de la Kara qu’on trouve un des
                         groupes ethniques les plus nombreux du Togo, les Kabiyè.

                    </p>

               </div>



          </div>
     </div>



     <div class="video-pub">

          <div class="play-button">
               <a href=""><img src="../images/play-button.png" alt="" height="100px"></a>
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
                                        <img height="200" src="../images/hp.jpg" />
                                        <img height="200" src="../images/hp-face.jpg" />
                                        <img height="200" src="../images/hp.jpg" />
                                        <img height="200" src="../images/pc.png" />
                                   </vue3-marquee>

                              </div>
                         </div>

                    </div>

               </div>

          </div>

     </div>



     <div class="a-propos">
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
     <div class="accomodation">

          <div class="title">
               <h1 style="text-align:center">Accommodations</h1>
          </div>
          <div class="row">
               <div class="col-lg-3">

                    <img class="image" src="../images/hotel-kara.jpg" alt="" width="300px" height="200px">
                    <div class="box1">
                         <a href="/hotel">
                              <h2>Hotels</h2>
                         </a>

                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="image" src="../images/Photo84.png" alt="" width="300px" height="200px">
                    <div class="box1">
                         <a href="/bar-resto">
                              <h2>Bars & Restaurants</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="image" src="../images/Photo19.png" alt="" width="300px" height="200px">
                    <div class="box1">
                         <a href="/boite">
                              <h2>Boites de nuits</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="image" src="../images/Photo10.png" alt="" width="300px" height="200px">
                    <div class="box1">
                         <a href="/marche">
                              <h2>Marchés</h2>
                         </a>
                    </div>
               </div>


          </div>

     </div>



     <div class="accomodation">
          <div class="row" id="items">
               <div class="col-lg-3">

                    <img class="image" src="../images/fazao.png" alt="" width="300px" height="200px">
                    <div class="box2">
                         <a href="/tourisme">
                              <h2 style="color:green">Lieux Touristiques</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="image" src="../images/lafia.png" alt="" width="300px" height="200px">
                    <div class="box2">
                         <a href="/pharmacie">
                              <h2 style="color:green">Pharmacies</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="image" src="../images/cbt.png" alt="" width="300px" height="200px">
                    <div class="box2">
                         <a href="/sante">
                              <h2 style="color:green">Centres de Santé</h2>
                         </a>
                    </div>
               </div>

               <div class="col-lg-3">
                    <img class="image" src="../images/Photo11.png" alt="" width="300px" height="200px">
                    <div class="box2">
                         <a href="/radio">
                              <h2 style="color:green">Fréquences de Radios</h2>
                         </a>
                    </div>
               </div>


          </div>

          <div class="lire-plus"><a href="/about" class="btn btn-white btn-aminated">Lire Plus</a></div>

     </div>


     <div class="ref">
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
                    <button type="button" class="btn btn-warning">Cliquez Ici</button>
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
          padding: 2rem;
     }

     .title {
          margin: 1rem;
          max-width: 100%;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

     }

     .box1 {
          margin: 0.5rem;
          max-width: 21rem;
          text-align: center;
          padding: 0.5rem;
          border-radius: 10px;
          border: 2px solid red;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     .box2 {
          margin: 0.5rem;
          max-width: 21rem;
          text-align: center;
          padding: 0.5rem;
          border-radius: 10px;
          border: 2px solid #006A4A;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }


     h2 {
          color: #D21034;
          font-size: 20px;
     }




     .desc {
          color: black;
          text-align: justify;
          text-justify: inter-word;
          font-family: 'Jost', sans-serif;
          font-size: 19px;
     }

     .home {
          padding: 7rem;
          background-image: linear-gradient(to right, #006a4a, #FFCE00);
     }



     .a-propos {
          padding: 0.5rem;
          text-align: center;
          background-image: linear-gradient(to right, #ffcc00ed, #006a4a);
          padding-top: 5rem;


     }

     .accomodation {
          padding: 2rem;
          margin-left: 85px;

     }


     @media (max-width: 375px) {

          .accomodation {
               padding: 0rem;
               margin-left: 0px;
               text-align: left;

          }

          .home{
               padding: 0;
               display: flex;
               flex-direction: column;
          }

          img {
               width: 100px;
               height: 100px;
          }

          .title {
               text-align: center;
               margin: 0;
               padding: 0;
               max-width: 50%;
            
               
          }

          h1 {
               font-size: 20px;
          }
     }


     /* X-Small devices (portrait phones, less than 576px)  */
     @media (max-width: 575.98px) {

          .accomodation {
               padding: 0rem;
               margin-left: 0px;
               text-align: center;

          }
     }

     /* 
     // Small devices (landscape phones, less than 768px) */
     @media (max-width: 767.98px) {

          .accomodation, .box1, .box2 {
               padding: 0rem;
               margin-left: 0px;
               text-align: center;

          }

     }

     /* // Medium devices (tablets, less than 992px) */
     @media (max-width: 991.98px) {

          .accomodation {
               padding: 0rem;
               margin-left: 0px;
               text-align: center;


          }

     }

     /* // Large devices (desktops, less than 1200px) */
     @media (max-width: 1199.98px) {

          .accomodation{
               padding: 0rem;
               margin-left: 0px;
               text-align: center;

          }

     }

     /* 
     // X-Large devices (large desktops, less than 1400px) */
     @media (max-width: 1399.98px) {

          .accomodation {
               padding: 2rem;
               margin-left: 85px;

          }
     }

     .ref {
          padding: 7rem;


     }


     .sub-welcome {
          padding: 2rem;
          text-align: center;


     }

     .video-pub {
          padding: 5rem;
          background: #fff;



     }

     .play-button {
          text-align: center;

     }



     .pub {
          color: #D21034;
          font-family: 'Jost';
          font-size: 20px;
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
          padding: 2rem;

     }

     h1 {
          font-size: 40px;
          font-weight: 900;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }


     .image {
          border-radius: 10px;
          width: 350px;


     }



     h3 {
          font-size: 15px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
     }

     p {
          font-size: 20px;
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
          padding: 15px 40px;
          display: inline-block;
          border-radius: 100px;
          transition: all .2s;
          position: relative;
          margin-right: 150px;


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
</style>