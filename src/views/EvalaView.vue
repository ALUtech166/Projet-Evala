<template>
<annonce-page></annonce-page>
     <div class="kozah">
          <div class="header">
               <h1 class="titre" style="font-size:25px">
                    EVALA
               </h1>
          </div>

          <pub-page></pub-page>
          <div class="programme">
               <h1 style="text-align:center">Programme des évenements</h1>
               <br>

               <table class="table table-bordered border-black">
                    <thead>
                         <tr>
                              <th scope="col">Date</th>
                              <th scope="col">Heure</th>
                              <th scope="col">Match</th>
                              <th scope="col">Lieu</th>
                         </tr>
                    </thead>

                    <tbody>
                         <tr>
                              <th scope="row">09 / 07 / 2022 <br>
                                   <b>SAMEDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Ouverture à Pya Kaganlada</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>

                         <tr>
                              <th scope="row">10 / 07 / 2022 <br>
                                   <b>DIMACHE</b>

                              </th>
                              <td>08H00</td>
                              <td>Demi finale Tchitchao en presence du PR</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>



                         <tr>
                              <th scope="row">11 / 07 / 2022 <br>
                                   <b>LUNDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Finale de Tchitchao, Danses à Pya Hodo</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>


                         <tr>
                              <th scope="row">12 / 07 / 2022 <br>
                                   <b>MARDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Finale de Yadé</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>

                         <tr>
                              <th scope="row">13 / 07 / 2022 <br>
                                   <b>MERCREDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Finale de Bohou</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>

                         <tr>
                              <th scope="row">14 / 07 / 2022 <br>
                                   <b>JEUDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Finale de Pya, Sarakawa et Yaka</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>

                         <tr>
                              <th scope="row">15 / 07 / 2022 <br>
                                   <b>VENDREDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Finale de Kouméa, Lama, Landa, Djamdé</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>
                         <tr>
                              <th scope="row">16 / 07 / 2022 <br>
                                   <b>SAMEDI</b>

                              </th>
                              <td>08H00</td>
                              <td>Finale de Tcharé, Soumdina, Lassa</td>
                              <td><a href="https://goo.gl/maps/P73HYaJUvBQnwKZHA" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>
                    </tbody>
               </table>



          </div>
          <pub-page></pub-page>
          <div class="past">
               <h1>évenements passés</h1>
               <br>
               <div class="">
                    <table class="table table-bordered border-black">
                         <thead>
                              <tr>
                                   <th scope="col">Date</th>
                                   <th scope="col">Heure</th>
                                   <th scope="col">Match</th>
                                   <th scope="col">Score</th>


                              </tr>
                         </thead>
                         <tbody v-if="canton && canton.length">
                              <tr v-for="cat of canton" :key="cat.id">
                                   <th scope="row">{{ cat.nom_canton }}

                                   </th>
                                   <td> {{ cat.description_canton }}</td>
                                   <td>PYA <em>contre</em> TCHITCHAO</td>
                                   <td><em>SCORE</em></td>

                              </tr>

                             

                         </tbody>
                    </table>
               </div>

          </div>
          <pub-page></pub-page>
     </div>
</template>

<script>
     import PubPage from '@/components/partials/PubPage.vue'
     import AnnoncePage from '@/components/ui/AnnoncePage.vue'
     import axios from 'axios'
     export default {
          components: {
               PubPage,
               AnnoncePage
          },
          data() {
               return {
                    canton: [],
                    errors: []
               }
          },

          // Fetches posts when the component is created.
          created(data) {
               axios.get(`api/canton`)
                    .then(response => {
                         // JSON responses are automatically parsed.
                         this.canton = response.data
                         console.log(data)
                    })
                    .catch(e => {
                         this.errors.push(e)
               })
          }
     }
</script>

<style scoped>
     span {
          font-size: 25px;
          color: #006A4A;
     }

     b {
          color: #fff;
          font-weight: bold;
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
          color: #006A4A;
     }

     h1 {
          color: #006A4A;
          text-transform: uppercase;
     }

     h3,
     p {
          color: #006A4A;
          font-size: 15px;
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
          
          font-family: 'Jost', sans-serif;
          border: 2px solid black;
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