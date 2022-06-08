<template>
     <div class="events">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
               <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                         class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                         aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                         aria-label="Slide 3"></button>
               </div>
               <div class="carousel-inner">
                    <div class="carousel-item active">
                         <section class="section-1 evala">
                              <div class="container text-center">
                                   <div class="row">
                                        <div class="col-md-6 col-12">
                                             <div class="pray">
                                                  <img src="../images/evala1.jpg" alt="Pray" class="image img-fluid" />
                                             </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                             <div class="panel text-left">
                                                  <h1>Evala</h1>
                                                  <p class="pt-4">
                                                       C’est une lutte ancestrale. Depuis 1785 les luttes se
                                                       pratiquaient dans le mois
                                                       de
                                                       Juillet.
                                                       C’est au milieu du 18ème siècles que les premières manifestations
                                                       du challenge
                                                       ont eu lieu
                                                       en
                                                       pays Kabyè avec le sacre de deux personnages dont la lutte a
                                                       sonné le glas des
                                                       compétitions
                                                       inter-villages.
                                                  </p>
                                                  <p>
                                                       La particularité singulière qui a caractérisé ce combat a été
                                                       recherché à
                                                       travers la forme
                                                     
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>


                    </div>
                    <div class="carousel-item">
                         <div class="akpema">

                              <section class="section-1">
                                   <div class="container text-center">
                                        <div class="row">
                                             <div class="col-md-6 col-12">
                                                  <div class="pray">
                                                       <img src="../images/evala1.jpg" alt="Pray"
                                                            class="image img-fluid" />
                                                  </div>
                                             </div>
                                             <div class="col-md-6 col-12">
                                                  <div class="panel text-left">
                                                       <h1 style="color: red">Akpéma</h1>
                                                       <p class="pt-4">
                                                            C’est une lutte ancestrale. Depuis 1785 les luttes se
                                                            pratiquaient dans le
                                                            mois
                                                            de
                                                            Juillet.
                                                            C’est au milieu du 18ème siècles que les premières
                                                            manifestations du
                                                            challenge
                                                            ont eu lieu
                                                            en
                                                            pays Kabyè avec le sacre de deux personnages dont la lutte a
                                                            sonné le glas
                                                            des
                                                            compétitions
                                                            inter-villages.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </section>




                         </div>
                    </div>
                    <div class="carousel-item">
                         <div class="habye">
                              <section class="section-1">
                                   <div class="container text-center">
                                        <div class="row">
                                             <div class="col-md-6 ">
                                                  <div class="pray">
                                                       <img src="../images/evala1.jpg" alt="Pray"
                                                            class="image img-fluid" />
                                                  </div>
                                             </div>
                                             <div class="col-md-6 ">
                                                  <div class="panel text-left">
                                                       <h1 style="color: #ffcc00ed">Habyé</h1>
                                                       <p class="pt-4">
                                                            C’est une lutte ancestrale. Depuis 1785 les luttes se
                                                            pratiquaient dans le
                                                            mois
                                                            de
                                                            Juillet.
                                                            C’est au milieu du 18ème siècles que les premières
                                                            manifestations du
                                                            challenge
                                                            ont eu lieu
                                                            en
                                                            pays Kabyè avec le sacre de deux personnages dont la lutte a
                                                            sonné le glas
                                                            des
                                                            compétitions
                                                            inter-villages.
                                                       </p>
                                                       <p>
                                                            La particularité singulière qui a caractérisé ce combat a
                                                            été recherché à
                                                            travers la forme


                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </section>


                         </div>
                    </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
               </button>
          </div>


     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     .events {
         width: 100%;
         height: 100%;
         margin-bottom: 50px;
        ;

     }

     .desc {
          color: black;
          text-align: justify;
          text-justify: inter-word;
          font-family: 'Jost';
          font-size: 20px;
          font-family: 'Josefin Sans';

     }

     .image {
          border-radius: 10px;


     }

     .section-1 {
          padding: 25vmin 0vmin;
          background-image: linear-gradient(to right, #ffcc00ed, #006a4a);
     }

     .section-1 .row .col-md-6 .pray img {
          opacity: 0.8;
          width: 80%;
          border-radius: 10px;
     }

     .section-1 .row .col-md-6:last-child {
          position: relative;
     }

     .section-1 .row .col-md-6 .panel {
          position: absolute;
          top: 7vmin;
          left: -18vmin;
          background: white;
          border-radius: 3px;
          text-align: left;
          padding: 13vmin 5vmin 20vmin 10vmin;
          box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.2);
          font-family: var(--Rubik);
          z-index: 1;
     }

     .section-1 .row .col-md-6 .panel h1 {
          font-weight: bold;
          padding: 0.4em 0;
          font-size: 2em;
     }

     .section-1 .row .col-md-6 .panel p {
          font-size: 1em;
          color: rgba(0, 0, 0, 0.5);
          font-family: 'Josefin Sans';
     }







     h1 {
          font-size: 60px;
          font-weight: 900;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
          text-align: left;
     }

     @media (max-width: 1199.98px) {
          .section-1 {
               padding: 27vmin 0vmin;

          }
     }


     @media only screen and (max-width: 768px) {

          .section-1 .row .col-md-6 .panel {
               position: initial;
               width: initial;
               height: initial;
          }

          .section-2 .cover {
               background-position: -25vmin -10vmin;
          }



     }
</style>