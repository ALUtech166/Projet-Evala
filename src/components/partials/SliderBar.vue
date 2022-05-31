<template>
     <div class="home">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                         aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                         aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                         aria-label="Slide 3"></button>
                   <!--   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                         aria-label="Slide 4"></button>
                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                         aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                         aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                         aria-label="Slide 7"></button> -->
               </div>
               <div class="carousel-inner">
                    <div class="carousel-item active">
                         <img src="../images/Evala.png" class="d-block w-100" alt="..." height="700px">
                         <div class="carousel-caption" style="text-align: center">
                              <div class="">
                                   <h1 class="heading-primary">
                                        <span class="heading-primary-main">Evala</span>

                                   </h1>

                                   <p class="heading-primary-sub ">
                                        L'Evala est une forme traditionnelle de lutte
                                        dont le but est de renverser son adversaire et qui a lieu chaque année à
                                        Kara, au Togo.<br>
                                        <br>
                                        <a href="/evala" class="btn btn-white btn-aminated">Lire Plus</a>

                                   </p>




                              </div>
                         </div>
                    </div>
                    <div class="carousel-item">
                         <img src="../images/Akpema.png" class="d-block w-100" alt="..." height="700px">
                         <div class="carousel-caption">
                              <div class="">
                                   <h1 class="heading-primary">
                                        <span class="heading-primary-main">Akpema</span>
                                   </h1>

                                   <p class="heading-primary-sub">
                                        Les cérémonies d'Akpéma commencent la semaine après Evala. L'idée est que ces
                                        <br>
                                        cérémonies renforcent les filles et leur accordent du courage tout en aidant à
                                        <br>
                                        préserver certaines de leurs vertus. <br>

                                        <br>
                                        <a href="/akpema" class="btn btn-white btn-aminated">Lire Plus</a>
                                   </p>



                              </div>
                         </div>
                    </div>
                    <div class="carousel-item">
                         <img src="../images/HABYÈ.png" class="d-block w-100" alt="..." height="700px">
                         <div class="carousel-caption">
                              <div class="">
                                   <h1 class="heading-primary">
                                        <span class="heading-primary-main">Habye</span>
                                   </h1>


                                   <p class="heading-primary-sub ">
                                        Habye est une fête religieuse des Kabyè de la région de Kozah. C'est une <br>
                                        démonstration de danse de pouvoirs magiques. Il a lieu tous les cinq ans au mois
                                        <br>
                                        de novembre. <br>
                                        <br>
                                        <a href="/habye" class="btn btn-white btn-aminated">Lire Plus</a>
                                   </p>



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
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }


     .heading-primary {
          color: #fff;
          text-transform: uppercase;
          backface-visibility: hidden;



     }

     .heading-primary-main {
          display: block;
          font-size: 70px;
          font-weight: 500;
          letter-spacing: 5px;
          animation-name: moveInLeft;
          animation-duration: 3s;
          /* animation-delay: 3s; */
          animation-timing-function: ease-in;
          color: #FFCE00;

     }

     .heading-primary-sub {
          padding-bottom: 200px;
          letter-spacing: 1.5px;
          font-size: 20px;
          font-weight: 600;
          animation: moveInRight 3s ease-out;
          text-align: center;
          align-content: center;


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


     .btn {
          align-content: center;
     }

     .btn:link,
     .btn:visited {
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 40px;
          display: inline-block;
          border-radius: 100px;
          transition: all .2s;
          position: relative;


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
          color: #777;

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
          background-color: #fff;
     }

     .btn:hover::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;


     }

     .btn-aminated {
          animation: moveInBottom .5s ease-out .75s;
          animation-fill-mode: backwards;
     }
</style>