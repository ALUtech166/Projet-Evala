<template>
     <header-bar></header-bar>
     <annonce-page></annonce-page>
     <div class="kozah">
          <div class="header">
               <h1 class="titre">
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

                    <tbody v-if="program && program.length">
                         <tr v-for="pro of program" :key="pro.id">
                              <th scope="row">
                                   {{ pro.date_programme}}
                              </th>
                              <td>{{ pro.heure_programme}}</td>
                              <td>{{ pro.match_programme}}</td>
                              <td><a href="{{ pro.lieu_programme }}" target="_blank"><i
                                             class="icons fa-solid fa-location-dot"></i></a></td>


                         </tr>


                    </tbody>
               </table>



          </div>
          <pub-page></pub-page>
          <!--  <div class="past">
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
                         <tbody>
                              <tr>
                                   <th scope="row">

                                   </th>
                                   <td> </td>
                                   <td>PYA <em>contre</em> TCHITCHAO</td>
                                   <td><em>SCORE</em></td>

                              </tr>



                         </tbody>
                    </table>
               </div>

          </div>
          <pub-page></pub-page> -->
     </div>
</template>

<script>
     import PubPage from '@/components/partials/PubPage.vue'
     import AnnoncePage from '@/components/ui/AnnoncePage.vue'
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     import axios from 'axios'
     export default {
          components: {
               PubPage,
               AnnoncePage,
               HeaderBar
          },
          data() {
               return {
                    program: [],
                    errors: []
               }
          },

          // Fetches posts when the component is created.
          created(data) {
               axios.get(`api/programme_evenement`)
                    .then(response => {
                         // JSON responses are automatically parsed.
                         this.program = response.data
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