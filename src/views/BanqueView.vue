<template>
     <header-bar></header-bar>
     <div class="kozah">
          <div class="header">
               <h1 class="titre">
                    Agences de Banques
               </h1>
          </div>


          <div class="bread">
               <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item"><a href="/about" style="color: #ffcc00;">Acommodation</a></li>
                         <li class="breadcrumb-item active" aria-current="page">Agences de Banques</li>
                    </ol>
               </nav>
          </div>

          <div class="list-hotel">

               <h1>Les Agences de Banques à Kara</h1>
               <div class="header-search">
                    <form class="d-flex" role="search">
                         <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                         <button class="btn btn-outline-success" type="submit">Recherche</button>
                    </form>
               </div>

               <div class="row" v-if="banque && banque.length">
                    <div class="col-lg-3" v-for="ban of banque" :key="ban.id">
                         <div class="card" style="width: 25rem; height: 30rem;">
                              <img :src="'http://karaevents.mekengroup.com/upload/agence/'+ban.photo_agence"
                                   class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">{{ ban.nom_agence }}</h3>
                                   <h5>Contact: {{ ban.contact_agence}}</h5>
                                   <h5>Lieu: {{ ban.adresse_agence }}</h5>
                                   <br>
                                   <a type="button" class="btn btn-success"
                                        :href="'https://goo.gl/maps/'+ban.localisation_agence">Aller sur Place <i
                                             class="icons fa-solid fa-location-dot"></i></a>

                              </div>
                         </div>
                    </div>


               </div>


          </div>


          <div class="arrow">


               <div style="text-align: right">
                    <a href="/radio" type="button" class="btn btn-outline-success">Next <i
                              class="fa-solid fa-arrow-right"></i></a>
               </div>

          </div>



     </div>
</template>

<script>
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     import axios from 'axios'
     export default {
          components: {
               HeaderBar
          },

           data() {
               return {
                    banque: [],
                    errors: []
               }
          },

          // Fetches posts when the component is created.
          created(data) {
               axios.get(`api/agent`)
                    .then(response => {
                         // JSON responses are automatically parsed.
                         this.banque = response.data
                         console.log(data)

                    })
                    .catch(e => {
                         this.errors.push(e)
                    })
          }
     }
</script>


<style scoped>


     .bread {
          padding: 2rem;

     }

     .col-lg-3 {
          padding: 10px;
     }

     .btn {
          text-decoration: none;
          border-radius: 13px;
          font-size: 12px;


     }

     .header-search {
          padding: 4rem;
     }

     ol {
          font-size: 20px;
     }

     a {
          text-decoration: none;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;
     }


     .arrow {
          padding: 2rem;
     }

     h2 {
          font-size: 15px;
          font-family: 'Josefin Sans', sans-serif;
     }


     h3,
     p {
          font-size: 15px;
          font-family: 'jost', sans-serif;
          color: #006A4A;
          text-align: left;
          font-family: 'Josefin Sans', sans-serif;
     }

     .yellow-box {
          border: 2px solid yellow;
          padding: 1rem;
     }

     .row {
          padding: 1rem;
     }

     .list-pub {
          max-width: 100%;
          height: 100%;
          text-align: center;
          border-radius: 25px;
          border: 2px solid yellow;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          padding: 3rem;
          background-color: white;
          margin: 1rem;
     }

    

     .card {
          border-radius: 10px;
          max-width: 100%;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }



     h1 {
          text-align: center;
          color: #006A4A;
          text-transform: uppercase;
          padding: 1rem;
          font-size: 30px;
     }



     .card-title {
          text-align: left;
          color: #006A4A;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: bold;
     }

     h5 {
          color: #000;
          text-align: left;
          font-size: 15px;
          padding: 2px;
          font-family: 'Josefin Sans', sans-serif;
     }

     .card-text {
          text-align: left;
          color: #006A4A;

     }

     .list-hotel {
          background-image: linear-gradient(to right, #006a4a85, #ffcc00e6);
          padding: 3rem;
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