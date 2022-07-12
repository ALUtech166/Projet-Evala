<template>

     <header-bar></header-bar>
     <div class="kozah">
          <div class="header">
               <h1 class="titre">
                    Frequences Radios
               </h1>

          </div>

          <div class="bread">
               <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item"><a href="/about">Acommodation</a></li>
                         <li class="breadcrumb-item active" aria-current="page">Frequences Radios</li>
                    </ol>
               </nav>
          </div>



          <div class="list-hotel">


               <div class="list-pub">
                    <h1>Les Frequences Radios à Kara</h1>

                    <div class="row" v-if="radio && radio.length">
                         <div class="col-lg-3" v-for="rad of radio" :key="rad.id">
                              <div class="yellow-box">
                                   <h3>{{ rad.nom_radio}}</h3>
                                   <p></p>
                                   <p><strong>Frequence:</strong> {{ rad.contact_radio }}</p>
                              </div>
                         </div>

                    </div>
               </div>



          </div>


          <div class="arrow">


               <div style="text-align:">
                    <a href="/banque" type="button" class="btn btn-outline-success"><i
                              class="fa-solid fa-arrow-left"></i> Previous</a>
               </div>
               <div style="text-align:">
                    <a href="/boite" type="button" class="btn btn-outline-success">Next <i
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
                    radio: [],
                    errors: []
               }
          },

          // Fetches posts when the component is created.
          created(data) {
               axios.get(`api/frequence_radio`)
                    .then(response => {
                         // JSON responses are automatically parsed.
                         this.radio = response.data
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

     ol {
          font-size: 20px;
     }

     a {
          text-decoration: none;
          color: #ffcc00;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;
     }

     .col-lg-3 {
          padding: 10px;
     }

     .col-lg-3:hover {
          transform: translateY(35px);
          transition: 1s ease-in-out;
     }

     .arrow {
          padding: 4rem;
          display: flex;
          justify-content: space-between;
     }

     h2 {
          font-size: 15px;
     }


     h3,
     p {
          font-size: 15px;
          font-family: 'jost', sans-serif;
          color: #006A4A;
          text-align: left;
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

          text-align: center;
          border-radius: 25px;
          border: 2px solid yellow;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          padding: 3rem;
          background-color: white;
     }

     .card-img-top {
          border-radius: 15px;
     }

     .card {
          border-radius: 20px;
          max-width: 100rem;
          text-align: center;
          border-radius: 22px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     h3 {
          text-align: left;
          color: #006A4A;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: bold;
     }

     h1 {
          text-align: center;
          color: #006A4A;
          text-transform: uppercase;
          padding: 1rem
     }



     h5 {
          color: #006A4A;
          text-align: left;
          font-size: 25px;
          padding: 0.25rem;
     }

     .card-text {
          text-align: left;
          color: #006A4A;

     }

     .list-hotel {
          background-image: linear-gradient(to right, #006a4a85, #ffcc00e6);
          padding: 3rem;
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


     /*   @media only screen and (max-width: 1920px) {
           .list-hotel {
               text-align: center;
           }

           .list-pub {
                text-align: center;
                margin-left: 250px;
           }

     } */
</style>