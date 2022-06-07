<template>

     <div class="pub">
          <div class="header">
               <h1 class="titre">Reservation</h1>
          </div>
          <div class="bread">
               <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item"><a href="/about">Accommodation</a></li>
                         <li class="breadcrumb-item active" aria-current="page">Hotel</li>
                    </ol>
               </nav>
          </div>

          <div class="pub-form">
               <div class="title">
                    <h1>Formulaire de Reservation</h1>
               </div>
               <div class="container">
                    <form action="">
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Nom</span>
                              <input type="text" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Prenom</span>
                              <input type="text" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Numéro de Telephone</span>
                              <input type="number" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                          <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Email</span>
                              <input type="email" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Nombre de Personne</span>
                              <select class="form-select" id="inputGroupSelect01">
                                   <option selected>Choose...</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                              </select>
                         </div>
                           <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Type de Reservation</span>
                              <select class="form-select" id="inputGroupSelect01">
                                   <option selected>Choose...</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                              </select>
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Date de début de Séjour</span>
                              <input type="date" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Date de Fin de Séjour</span>
                              <input type="date" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                       
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Prix Journalier de la chambre</span>
                              <input type="text" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Nombre de Jours</span>
                              <input type="number" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                         <div class="input-group input-group-lg">
                              <span class="input-group-text" id="inputGroup-sizing-lg">Prix Total</span>
                              <input type="number" class="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg">
                         </div>
                        

                         <div style="text-align: right">
                              <button type="button" class="btn btn-danger" to="/portal">Payer</button>
                         </div>
                    </form>
               </div>

          </div>
     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     .bread {
          padding: 2rem;
          background-color: #fff;
     }

     a {
          text-decoration: none;
     }

     .pub-form {
          padding: 2rem;
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

     
     .title {
          margin: 1rem;
          max-width: 100%;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

     }

       h1 {
          font-size: 27px;
          font-weight: 600;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
          text-align: center;
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
          text-transform: uppercase;
     }

     form,
     .input-group {
          padding: 1rem;
     }

     .container {
          margin: 2rem auto;
          max-width: 75rem;
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     span {
          font-weight: bold;
          font-size: 45px;
          color: #006A4A;
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