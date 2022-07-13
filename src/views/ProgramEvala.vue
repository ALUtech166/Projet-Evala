<template>
     <header-bar></header-bar>
     <annonce-page></annonce-page>
     <div class="kozah">
          <div class="header">
               <h1 class="titre">
                    Programmes d'EVALA
               </h1>
          </div>



          <div class="bread">
               <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item"><a href="/evala">Evala</a></li>
                         <li class="breadcrumb-item active" aria-current="page">Programme</li>
                    </ol>
               </nav>
          </div>


          <div class="programme">
               <h1 style="text-align:center">Programme de l'évala</h1>
               <br>

               <table class="table table-bordered border-black">
                    <thead>
                         <tr>
                              <th scope="col">Jours et Dates</th>
                              <th scope="col">Rencontre(Competitions)</th>
                              <th scope="col">Heures</th>
                              <th scope="col">Observation</th>
                              <th scope="col">Lieux</th>

                         </tr>
                    </thead>



                    <tbody v-if="program && program.length">
                         <template v-for="pro of program" :key="pro.id">


                              <tr v-if="pro.status_programme_evala == 1">
                                   <th scope="row">
                                        <b>{{ pro.jour_programme_evala}}</b>
                                        <br>
                                        <span>{{ pro.date_programme_evala }}</span>
                                   </th>
                                   <td>{{ pro.rencontre_programme_evala}}</td>
                                   <td>{{ pro.heure_programme_evala}}</td>
                                   <td>{{ pro.observation_programme_evala}}</td>
                                   <td>
                                        {{ pro.lieu_programme_evala}} <br>
                                        <a :href="'https://goo.gl/maps/'+pro.localisation_programme_evala"
                                             target="_blank" rel="noopener noreferrer"><i
                                                  class="icons fa-solid fa-location-dot"></i></a>
                                   </td>





                              </tr>
                         </template>

                    </tbody>
               </table>



          </div>


     </div>
</template>

<script>
     import AnnoncePage from '@/components/ui/AnnoncePage.vue'
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     import axios from 'axios'
     export default {
          components: {
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
               axios.get(`api/programme_evala`)
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
          color: #fff;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;
     }

     em {
          color: red;

     }

     .icons {
          color: red;
          font-size: 25px;

     }

     a {
          text-decoration: none;
          color: #ffcc00
     }

     .bread {
          padding: 20px;
     }

     

     li {
          font-size: 17px;
     }

     td,
     th {
          font-size: 15px;
          font-family: 'Josefin Sans', sans-serif;
     }

     h1 {
          color: #006A4A;
          text-transform: uppercase;
          font-family: 'Josefin Sans', sans-serif;
     }

     h3,
     p {
          color: #006A4A;
          font-size: 15px;
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
          
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          border: 2px solid black;
     }

     .table {
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