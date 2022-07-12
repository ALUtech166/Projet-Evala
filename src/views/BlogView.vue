<template>
     <header-bar></header-bar>
     <annonce-page></annonce-page>
     <div class="header">
          <h1 class="titre">Actualités</h1>
     </div>

     <div class="body">

          <div class="container">

               <div class="row">
                    <div class="col-lg-8" v-if="program && program.length">
                         <div class="blog" v-for="pro of program" :key="pro.id">
                              <img :src="'http://karaevents.mekengroup.com/upload/actualite/'+pro.photo_actualite"
                                   alt="" class="img-fluid image">
                              <br>
                              <div class="context">
                                   <div class="box" style="display: flex">
                                        <div class="">
                                             <h2>{{ pro.nom_acteur}} {{ pro.prenom_acteur}}</h2>
                                        </div>
                                        <div class=""><span>{{ pro.date_actualite }}</span></div>
                                   </div>
                                   <h1>{{ pro.titre_actualite}}</h1>
                                   <p>
                                        {{ pro.description_actualite }} <a
                                             href="https://togodailynews.com/togo-kara-event-application/"
                                             target="_blank" rel="noopener noreferrer">voir plus</a>
                                   </p>
                              </div>
                         </div>

                    </div>

                    <div class="col-lg-4">

                         <div class="recent">
                              <pub-blog></pub-blog>
                         </div>
                         <br>
                         <div class="recent">
                              <img src="../components/images/MAYI.jpg" class="img-fluid" alt="">
                         </div>

                    </div>

               </div>
          </div>
     </div>



</template>

<script>
     import PubBlog from '@/components/partials/PubBlog.vue'
     import AnnoncePage from '@/components/ui/AnnoncePage.vue'
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     import axios from 'axios'
     export default {
          components: {

               AnnoncePage,
               HeaderBar,
               PubBlog
          },
          data() {
               return {
                    program: [],
                    errors: []
               }
          },

          // Fetches posts when the component is created.
          created(data) {
               axios.get(`api/actualite`)
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

     .recent {
          max-width: 90%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 1rem;
          background-color: #ffffff;
          font-family: 'Jost';
     }

     .box {
          justify-content: space-between;
     }

     a {
          font-size: 15px;
          text-decoration: none;
          color: #ffcc00;
     }

     span {
          box-shadow: 0 2px 8px rgba(223, 13, 13, 0.823);
          padding: 10px;
          border-radius: 10px;
          background-color: red;
          color: #ffffff;
          font-size: 15px;
     }

     .context {
          max-width: 99%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 1rem;
          background-color: #ffffff;
          font-family: 'Jost';
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
          animation-timing-function: ease-in;
          text-transform: uppercase; */
          font-weight: bold;
          text-transform: uppercase;
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



     @media only screen and (max-width: 768px) {

          .body {
               text-align: center;
          }


     }

     @media only screen and (max-width: 1920px) {}

     .body {
          padding: 50px;

     }

     .blog {
          text-justify: inter-word;
          text-align: justify;
     }



     .image {
          border-radius: 15px;
     }

     p {
          text-align: justify;
          font-family: 'Josefin Sans';
          font-size: 15px;

     }

     h2 {
          font-weight: 600;
          color: red;
          font-size: 15px;
          font-family: 'Josefin Sans';
          padding: 0.5rem;
     }

     h1 {
          font-weight: bold;
          color: green;
          font-size: 20px;
     }

     @media (max-width: 300px) {
          .box {
               display: flex;
               flex-direction: column;
               padding: 2px;
          }

          h1 {
               font-size: 10px;
          }
     }
</style>