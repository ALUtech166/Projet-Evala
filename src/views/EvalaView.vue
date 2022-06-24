<template>
     <header-bar></header-bar>
     <annonce-page></annonce-page>
     <div class="kozah">
          <div class="header">
               <h1 class="titre">
                    EVALA
               </h1>
          </div>

         
          <div class="description">
               <div class="container" data-aos="fade-left" data-aos-duration="3000">

                    <div class="row">


                         <div class="col-lg-6">
                              <img class="image img-fluid" src="../components/images/evala1.jpg"
                                   alt="">
                         </div>

                         <div class="col-lg-6">

                              <hr class="style-two">
                              <h1><strong>Histoire de L'Evala</strong></h1><br>


                              <p class="desc">
                                   Chef-lieu de la préfecture de la Kozah et capitale de la région du même
                                   nom, Kara est une ville en pleine expansion. Elle est devenue rapidement un centre
                                   moderne
                                   d’administration et de
                                   production dans le cadre

                                   Chef-lieu de la préfecture de la Kozah et capitale de la région du même
                                   nom, Kara est une ville en pleine expansion. Elle est devenue rapidement un centre
                                   moderne
                                   d’administration et de
                                   production dans le cadre

                                   Chef-lieu de la préfecture de la Kozah et capitale de la région du même
                                   nom, Kara est une ville en pleine expansion. Elle est devenue rapidement un centre
                                   moderne
                                   d’administration et de
                                   production dans le cadre

                                   Chef-lieu de la préfecture de la Kozah et capitale de la région du même
                                   nom, Kara est une ville en pleine expansion. Elle est devenue rapidement un centre
                                   moderne
                                   d’administration et de
                                   production dans le cadre

                              </p>



                         </div>



                    </div>
               </div>
          </div>


          <div class="programme">
               <hr class="style-two">
               <h1 style="text-align:left">Programme des évenements</h1>
               <br>

               <p>
                    Voici le calendrier officiel des luttes EVALA, Prefecture de la Kozah, Edition 2022
               </p>




               <table class="table table-bordered border-black">
                    <thead>
                         <tr>
                              <th scope="col">Jours et Dates</th>
                              <th scope="col">Rencontre (Competitions)</th>
                              <th scope="col">Lieux</th>
                              <th scope="col">Heures</th>
                              <th scope="col">Observation</th>
                         </tr>
                    </thead>



                    <tbody>
                         <tr>
                              <th scope="row">
                                   <b>Vendredi (KEMEA)</b>
                                   <br>
                                   <span>2022-07-01</span>
                              </th>
                              <td>Descente du souverain sacrificateur(Tchodjo)</td>
                              <td>PYA-LAO</td>
                              <td>08H</td>
                              <td>Dans la soicrée</td>




                         </tr>

                         <tr>
                              <th scope="row">
                                   <b>Samedi (MAZA) / YADE</b>
                                   <br>
                                   <span>2022-07-09</span>
                              </th>
                              <td>
                                   - Préliminaire dans tous les Ahoa(Sanctuaire) -Yaoudé contre Kadayo -Kpéloudè contre
                                   Poulou
                              </td>
                              <td>EPP Yadè-Poulou</td>
                              <td>09H</td>
                              <td>1/8 de finale</td>




                         </tr>


                         <tr>
                              <th scope="row">
                                   <b>Samedi (MAZA) / YADE</b>
                                   <br>
                                   <span>2022-07-09</span>
                              </th>
                              <td>Sodè contre Panadiwa</td>
                              <td>EPP Yadè-Sodé</td>
                              <td>09H</td>
                              <td>1/8 de finale</td>




                         </tr>




                         <tr>
                              <th scope="row">
                                   <b>Samedi (MAZA) / YADE</b>
                                   <br>
                                   <span>2022-07-09</span>
                              </th>
                              <td>LAO-HAUT contre LAO-BAS</td>
                              <td>EPP Kagnalada</td>
                              <td>09H</td>
                              <td>NB: Ouverture officielle des luttes EVALA</td>




                         </tr>


                         
                         <tr>
                              <th scope="row">
                                   <b>Samedi (MAZA) / BOHOU</b>
                                   <br>
                                   <span>2022-07-09</span>
                              </th>
                              <td>-Préliminaires -Waldè bas contre Pyadè bas</td>
                              <td>Patoulidè</td>
                              <td>10H</td>
                              <td>1/4 de finale</td>




                         </tr>



                    </tbody>
               </table>


               <div class="lire-plus"><a href="/program" class="btn btn-success btn-aminated">Lire Plus</a></div>



          </div>


           <pub-page></pub-page>


     </div>
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
          },
          data() {
               return {

               }
          },


     }
</script>

<style scoped>
     span {
          color: #fff;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;
     }

     .image {
          border-radius: 10px;
     }

     hr.style-two {
          border: 10px solid #006A4A;
          border-radius: 15px;
          background-color: #006A4A;
          width: 20%;


     }

     .desc {
          text-align: justify;
          line-height: 25px;
     }


     .description {
          padding: 50px;
     }

     em {
          color: red;

     }

     .icons {
          color: red;
          font-size: 35px;

     }

     td,
     th {
          font-size: 15px;

          font-family: 'Josefin Sans', sans-serif;
     }

     h1 {

          text-transform: uppercase;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: bold;
     }

     h3,
     p {

          font-size: 17px;
          font-family: 'Josefin Sans', sans-serif;
     }

     .box1:hover {
          background-color: #006A4A;
     }

     .programme {
          padding: 10px;
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          text-align: center;
     }

     .table {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          padding: 1px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          border: 3px solid black;
     }

     .table td {
          padding: 1px;
     }



     .past {
          padding: 5px;
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          text-align: center;
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