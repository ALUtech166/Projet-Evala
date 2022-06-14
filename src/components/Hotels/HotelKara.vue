<template>
     <div class="hotel">
          <div class="header">
               <h1 class="titre" style="font-size:25px">
                    Hotel Kara
               </h1>
          </div>


          <div class="rooms">
               <h1 class="text-header">Hotel Kara</h1>
               <hr class="style-two">
               <div class="cat-room">
                    <div class="room-1">
                         <img src="../images/room4.jpg" class="img-fluid" alt="">
                         <h1 class="text-header">Chambre - Climatisée</h1>
                         <p>
                              <span>800 000fr / jour</span> <br>
                              Chambre Climatisé avec Salon - WIFI disponible
                         </p>
                         <div class="button">
                              <a type="button" class="btn btn-success" href="https://wa.me/91584474">Voir La Disponibilité</a> <br>
                              <!-- <a type="button" class="btn btn-success" href="/reservation">Réserver</a> -->
                         </div>
                    </div>


                    <div class="room-2">
                         <img src="../images/hotel3.jpg" class="img-fluid" alt="">
                         <h1 class="text-header">Chambre - Climatisée</h1>
                         <p>
                              <span>800 000fr / jour</span> <br>
                              Chambre Climatisé avec Salon - WIFI disponible
                         </p>
                         <div class="button">
                              <a type="button" class="btn btn-success" href="https://wa.me/91584474">Voir La Disponibilité</a> <br>
                              <!-- <a type="button" class="btn btn-success" href="/reservation">Reserver</a> -->
                         </div>
                    </div>

               </div>

               <div class="cat-room">
                    <div class="room-1">
                         <img src="../images/hotel1.jpg" class="img-fluid" alt="">
                         <h1 class="text-header">Chambre - Climatisée</h1>
                         <p>
                              <span>800 000fr / jour</span> <br>
                              Chambre Climatisé avec Salon - WIFI disponible
                         </p>
                         <div class="button">
                              <a type="button" class="btn btn-success" href="https://wa.me/91584474">Voir La Disponibilité</a> <br>
                              <!-- <a type="button" class="btn btn-success" href="/reservation">Réserver</a> -->
                         </div>
                    </div>


                    <div class="room-2">
                         <img src="../images/hotel2.jpg" class="img-fluid" alt="">
                         <h1 class="text-header">Chambre - Climatisée</h1>
                         <p>
                              <span>800 000fr / jour</span> <br>
                              Chambre Climatisé avec Salon - WIFI disponible
                         </p>
                         <div class="button">
                              <a type="button" class="btn btn-success" href="https://wa.me/91584474">Voir La Disponibilité</a> <br>
                              <!-- <a type="button" class="btn btn-success" href="/reservation">Reserver</a> -->
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
     .rooms {
          padding: 50px;
     }

     img {
          border-radius: 15px;
         
     }

     hr.style-two {
          border: 10px solid #006A4A;
          border-radius: 15px;
          background-color: #006A4A;
          width: 10%;
          text-align: center;


     }

     .cat-room {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          padding: 50px;
     }

     .button {
          display: flex;
          flex-direction: column;
          text-transform: uppercase;
          font-family: 'jost', sans-serif;
          font-weight: bold;
     }

     span {
          color: red;
          font-family: 'jost', sans-serif;
          font-weight: bold;
          font-size: 15px;
     }

     .text-header {
          text-transform: uppercase;
          color: #006A4A;
          
     }

     p,
     h1 {
          font-family: 'jost', sans-serif;
          font-weight: bold;
          

     }

     p {
          font-size: 15px;
     }

     h1 {
          font-size: 30px;
     }

     .header {
          height: 30vh;
          background-image: linear-gradient(to right bottom,
                    rgba(126, 213, 111, 0.505),
                    rgba(40, 180, 131, 0.481)),
               url(../images/hero.jpg);
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