<template>

     <header-bar></header-bar>
     <div class="header">
          <h1 class="titre">
               STATION DETAILS
          </h1>
     </div>


     <div class="body">

          <div class="container">
               <div class="body-header">
                    <h1 class="title">Trouver et Achetez Un Billet <br>

                         Pour Votre Porchain Voyage en Bus en 1 min

                    </h1>
               </div>

               <div class="search-bar">
                    <form class="row g-4">

                         <div class="col-auto">
                              <label for="number" class="visually-hidden">Ville de Départ</label>
                              <select class="form-select" id="validationCustom04" required>
                                   <option ption selected disabled value="">Ville de Départ</option>
                                   <option :value="1">er</option>

                              </select>
                         </div>
                         <div class="col-auto">
                              <label for="number" class="visually-hidden">Ville de D'arrivée</label>
                              <select class="form-select" id="validationCustom04" required>
                                   <option ption selected disabled value="">Ville de D'arrivée</option>
                                   <option :value="1">er</option>

                              </select>
                         </div>
                         <div class="col-auto">
                              <label for="number" class="visually-hidden">Compagnie</label>
                              <select class="form-select" id="validationCustom04" required>
                                   <option ption selected disabled value="">Compagnie</option>
                                   <option :value="1">er</option>

                              </select>
                         </div>
                         <div class="col-auto">
                              <label for="date" class="visually-hidden">Date de Départ</label>
                              <input type="date" class="form-control" id="date" placeholder="Date de Départ">
                         </div>
                         <div class="col-auto">
                              <button type="submit" class="btn btn-danger mb-3">Recherche</button>
                         </div>
                    </form>
               </div>
          </div>


          <div class="container">
               <div class="station_bus">
                    <div class="details">

                         <img class="image img-fluid" src="../components/images/station_bus.jpg" alt="">


                         <div style="margin: 20px">
                              <h1 class="titres">Station Nagode</h1>
                              <br>
                              <h2>AGENCE Agoè - Agbalépédo</h2>
                              <p><span>Lieu de départ:</span> Gare d’Agbalépédo <em>08h00</em></p>
                              <p><span>Lieu d’arrivé:</span> Station Kara <em>08h00</em></p>
                              <p><span>Convocation:</span> </p>
                              <button type="button" class="btn btn-danger">Réserver</button>
                              <br>
                              <br>
                              <button type="button" class="btn btn-success">Aller à la Station <i
                                        class="fa-solid fa-location-dot"></i></button>
                         </div>

                    </div>

                    <div class="ticket_station">
                         <img class="img-fluid" src="../components/images/Ticket.svg" alt="">
                         <img class="img-fluid" src="../components/images/Ticket.svg" alt="">
                         <img class="img-fluid" src="../components/images/Ticket.svg" alt="">

                    </div>


               </div>

          </div>
     </div>

</template>

<script>
     import HeaderBar from "../components/partials/HeaderBar.vue";

     export default {

          components: {
               HeaderBar
          },



     }
</script>

<style scoped>

     .body {
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          padding: 50px;

     }

     .image {
          border-radius: 5px;
          text-align: center;
          margin: 20px;
     }

     h2 {
          text-transform: uppercase;
          font-size: 17px;
          font-weight: bold;
          color: #006a4a;
          font-family: 'Josefin Sans', sans-serif;
          text-align: left;
     }

     .ville {
          font-weight: bold;
          font-size: 15px;
          text-align: left;
          font-family: 'Josefin Sans', sans-serif;
     }

     .address {
          font-weight: bold;
          font-size: 12px;
          text-align: left;
          color: red;
          font-family: 'Josefin Sans', sans-serif;
     }

     span {
          color: red;
          font-family: 'Josefin Sans', sans-serif;
     }

     strong {
          font-size: 12px;
          font-family: 'Josefin Sans', sans-serif;
     }

     .in-out {
          color: #006a4a;
          text-transform: uppercase;
          font-size: 12px;
          padding: 10px;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;

     }

     .prix {
          text-align: left;
          color: #fff;
          background-color: #006a4a;
          width: 40%;
          padding: 5px;
          font-size: 12px;
          font-family: 'Josefin Sans', sans-serif;
     }

     .ticket_bus {
          display: flex;

     }

     .details {
          padding: 50px;
          box-shadow: rgba(0, 0, 0, 0.26);
          background-color: #fff;
          border-radius: 10px;
          width: 100%;
       

     }

     .btn-success, .btn-danger {
          width: 100%;
          text-align: center;
         
     }


     .ticket_pass {
          padding: 10px;
          box-shadow: rgba(0, 0, 0, 0.26);
          background-color: #fff;
          border-radius: 25px;
          font-family: 'Josefin Sans', sans-serif;
     }

     .col-lg-4 {
          padding: 10px;
     }

     .body-header {
          background-color: #006a4ad2;
          padding: 70px;
          border-radius: 5px;
     }

     .title {
          color: #fff;
          text-transform: uppercase;
          font-size: 25px;
          font-family: 'Josefin Sans', sans-serif;



     }

     .titres {
          color: #006a4a;
          text-transform: uppercase;
          font-size: 25px;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: bold;
          background-color: rgba(128, 128, 128, 0.456);
          box-shadow: rgba(0, 0, 0, 0.26);
          text-align: center;
          padding: 10px;
          border-radius: 5px;



     }

     .station_bus {
          padding: 5px;
          display: flex;
          justify-content: space-between;

     }

     .ticket_station {
          text-align: right;
     }


     .bus {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          box-shadow: rgba(0, 0, 0, 0.26);
          background-color: #fff;
          border-radius: 5px;
          justify-content: space-between;


     }

     .big-title {
          text-transform: uppercase;
          color: #006a4a;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          font-family: 'Josefin Sans', sans-serif;
     }

     .search-bar {
          margin: 20px auto;
          margin-top: -50px;
          max-width: 85%;
          top: -25px;
          text-align: center;
          padding: 45px;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          background-color: #fff;
          color: white;

     }






     .form-control,
     .form-select {
          padding: 10px;
          width: 200px;
          font-family: 'Josefin Sans', sans-serif;
     }

     button {
          width: 110px;
          padding: 10px;
     }

     form {
          text-align: center;
     }

     .titre-body {
          text-align: left;
          font-size: 25px;
          font-weight: bold;
     }


     .row {
          text-align: center;
     }

     #col {
          padding-top: 50px;
     }


     a {
          margin: 10px;
     }


     em {
          font-size: 20px;
          color: #006a4a;
          font-weight: bold;
     }

     p {

          color: black;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 20px;

     }


     li {
          color: black;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 20px;
          text-align: justify;


     }



     h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
     }

     .banner {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 10px;
          background-color: red;
          font-family: 'Jost';
          color: #fff;
     }

     .content {

          padding: 10px;
          font-family: 'Jost';
          color: #fff;
     }



     .tit {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          background-color: #ffffff;
          border-radius: 12px;
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
          /*  animation: moveInRight 10s ease-out;
          animation-name: moveInLeft;
          animation-duration: 10s;
          animation-timing-function: ease-in; */
          text-transform: uppercase;
          font-size: 50px;
          font-weight: bold;
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