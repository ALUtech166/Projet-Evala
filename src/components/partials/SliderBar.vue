<template>
     <div class="home">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
               <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                         aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                         aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                         aria-label="Slide 3"></button>
               </div>
               <div class="carousel-inner">
                    <div class="carousel-item active">
                         <img src="../images/1.jpg" class="d-block w-100 img-fluid" alt="...">
                         <div class="carousel-caption d-none d-md-block">
                              <h5>Evala</h5>
                              <p>
                                   L'Evala est une forme traditionnelle de lutte
                                   dont le but est de renverser son adversaire et qui a lieu chaque année à
                                   Kara, au Togo. <br>
                                   <a href="/evala" class="btn btn-white btn-aminated">Lire Plus</a>
                              </p>
                              
                         </div>
                    </div>
                    <div class="carousel-item">
                         <img src="../images/2.jpg" class="d-block w-100 img-fluid" alt="...">
                         <div class="carousel-caption d-none d-md-block">
                              <h5>Akpema</h5>
                              <p>
                                   Les cérémonies d'Akpéma commencent la semaine après Evala. L'idée est que ces
                                   cérémonies renforcent les filles et leur accordent du courage tout en aidant à
                                   préserver certaines de leurs vertus. <br>
                                   <a href="/akpema" class="btn btn-white btn-aminated">Lire Plus</a>

                              </p>
                               
                         </div>
                    </div>
                    <div class="carousel-item">
                         <img src="../images/3.jpg" class="d-block w-100 img-fluid" alt="...">
                         <div class="carousel-caption d-none d-md-block">
                              <h5>Habyé</h5>
                                      <p>
                                   Habye est une fête religieuse des Kabyè de la région de Kozah. C'est une
                                   démonstration de danse de pouvoirs magiques. Il a lieu tous les cinq ans au mois
                                   de novembre. <br>
                                   <a href="/habye" class="btn btn-white btn-aminated">Lire Plus</a>
                              </p>
                              

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


     h5 {
          font-size: 25px;
          animation-name: moveInLeft;
          animation-duration: 3s;
          animation-timing-function: ease-in-out;
          color: #FFCE00;
          font-weight: 600;
          font-family: 'Jost', sans-serif;
          text-transform: uppercase;

     }

     p {
          font-size: 20px;
          animation: moveInRight 3s ease-out;
          font-weight: 400;
          margin-bottom: 100px;
          text-align: center;
          font-family: 'Jost';


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
          text-decoration: none;
          display: inline-block;
          border-radius: 15px;
          transition: all .2s;
          position: relative;
          padding: 10px 15px;
          margin: 10px;


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
          border-radius: 15px;
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