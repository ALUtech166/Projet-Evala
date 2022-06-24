<template>
     <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>

          </div>
          <div class="carousel-inner">
               <div class="carousel-item active">
               

                  
                    <div class="home">

                         <div class="container" data-aos="fade-left" data-aos-duration="3000">

                              <div class="row">


                                   <div class="col-lg-6">
                                        <img class="image img-fluid" src="../images/Faure-tg.jpg" alt="">
                                   </div>

                                   <div class="col-lg-6">

                                        <hr class="style-two">
                                        <h1><strong>Bienvenue à KARA</strong></h1><br>
                                        <h4>Le Mot du President de la Republique</h4>

                                        <p class="quote">
                                             <i class="fa-solid fa-quote-left"></i>
                                             L’industrie en Afrique est d’abord culturelle et touristique avant de
                                             toucher la transformation des produits locaux

                                             <i class="fa-solid fa-quote-right"></i>
                                             
                                        </p>

                                        <br>
                                        <h2><em>S.E.M Faure E. GNASSINGBE</em></h2>



                                   </div>



                              </div>
                         </div>
                    </div>
               </div>
               <div class="carousel-item">
                    <div class="home">

                         <div class="container" data-aos="fade-left" data-aos-duration="3000">

                              <div class="row">


                                   <div class="col-lg-6">
                                        <img class="image img-fluid" src="../images/Welcome.jpg" alt="">
                                   </div>

                                   <div class="col-lg-6">

                                        <hr class="style-two">
                                        <h1><strong>Bienvenue à KARA</strong></h1><br>
                                        <h4>Kara au Coeur de la Visite du Nord-Togo</h4>

                                        <p class="desc">
                                             Chef-lieu de la préfecture de la Kozah et capitale de la région du même
                                             nom, Kara est une ville en pleine expansion. Elle est devenue rapidement un centre moderne
                                             d’administration et de
                                             production dans le cadre 
                                             
                                        </p>



                                   </div>



                              </div>
                         </div>
                    </div>
               </div>
               
          </div>
     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     .home {
          padding: 50px;
     
          
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

     .image {
          border-radius: 10px;
     }

     .desc,
     .quote {
          color: black;
          text-align: justify;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 19px;

     }

     .quote {
          font-weight: bold;
          margin: 15px;
          font-size: 20px;
     }


     h1 {
          font-size: 35px;
          font-weight: 600;
          font-family: 'Josefin Sans', sans-serif;
          color: #000;
     }


     h3 {
          font-size: 15px;
          font-family: 'Josefin Sans', sans-serif;
          
     }

     p {
        
          font-family: 'Josefin Sans', sans-serif;
          
     }


     h4 {
          color: #fff;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
     }
</style>