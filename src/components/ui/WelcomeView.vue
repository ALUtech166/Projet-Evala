<template>


     <welcome-slider></welcome-slider>

     <event-page></event-page>
     <div class="accomodation">

          <div class="title">
               <h1 style="text-align:center">Accommodations</h1>
          </div>
          <div class="row">
               <div class="col-lg-3">

                    <img class="img-fluid image" src="../images/hotel-kara1.png" alt="">
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



     <div class="accomodation">
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


     <div class="ref" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
          <div class="title">
               <h1 style="text-align:center">Nos partenaires</h1>
          </div>
          <br>
          <vue3-marquee :clone="true">
               <img class="images" height="100" src="../images/LOGO.jpg" />
               <img class="images" height="100" src="../images/logo-2FEVRIER-lome.png" />
               <img class="images" height="100" src="../images/SBC.png" />
               <img class="images" height="100" src="../images/AACG.jpg" />
               <img class="images" height="100" src="../images/dowoto.jpeg" />
               <img class="images" height="100" src="../images/mayi_SarlU.jpg" />
               <img class="images" height="100" src="../images/ttibp.jpg" />



          </vue3-marquee>
     </div>



     <!-- <div class="sub-welcome">



          <div class="row">

               <div class="col-lg-6">
                    <p class="pub">Vous avez envie de donner de la visibilité à votre entreprise/société</p>
               </div>


               <div class="col-lg-6">
                    <a type="button" class="btn btn-warning" href="/pub">Cliquez Ici</a>
               </div>

          </div>
     </div> -->

</template>

<script>
     import {
          Vue3Marquee
     } from 'vue3-marquee'
     import 'vue3-marquee/dist/style.css'
     import AOS from "aos";
     import EventPage from './EventPage.vue';
     import WelcomeSlider from './WelcomeSlider.vue';

     export default {
          components: {
               Vue3Marquee,
               EventPage,
               WelcomeSlider
          },
          setup() {
               AOS.init();

          },

     }
</script>

<style scoped>
     .images {
          margin: 5px;
     }

     .image {
          border-radius: 15px;
     }

     /* .col-lg-3:hover {
          transform: translateY(35px);
          transition: 1s ease-in-out;
     } */

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
          border: 1px solid #006A4A;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          background: #fff;
     }

     .box2 {
          margin: 2px;
          width: 95%;
          text-align: center;
          padding: 5px;
          border-radius: 10px;
          border: 1px solid #006A4A;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          background: #fff;
     }


     h2 {
          color: #006A4A;
          font-size: 20px;
     }




     .desc {
          color: black;
          text-align: justify;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;

     }





     .accomodation {
          padding: 50px;
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);

     }



     .ref {
          padding: 10px;


     }


     .sub-welcome {
          padding: 20px;
          text-align: center;


     }

     .video-pub {
          padding: 20px;
          background: #fff;



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
          font-size: 30px;
          font-weight: 600;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }


     .image {
          border-radius: 10px;

     }


     h3 {
          font-size: 20px;
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