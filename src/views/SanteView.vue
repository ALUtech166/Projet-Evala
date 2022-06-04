<template>
     <div class="body">
          <div class="header">
               <h1 class="titre" style="font-size:50px">
                    Santé
               </h1>
          </div>

          <div class="bread">
               <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item"><a href="/about">Acommodation</a></li>
                         <li class="breadcrumb-item active" aria-current="page">Centres de Santé</li>
                    </ol>
               </nav>
          </div>




          <div class="list-hotel">

               <h1>Les Centres de Santé à Kara</h1>
               <div class="header-search">
                    <form class="d-flex" role="search">
                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                         <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
               </div>

               <div class="row">
                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/cbt.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">croix-rouge</h3>
                                   <h5>Contact: +228 90100882</h5>


                              </div>
                         </div>
                    </div>


                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/chu-kara.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">CHU Kara</h3>
                                   <h5>Contact: +228 26606048</h5>

                              </div>
                         </div>
                    </div>


                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/chr-kara.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">Hopital Chinois</h3>
                                   <h5>Contact: +228 26600246</h5>

                              </div>
                         </div>
                    </div>

               </div>

               <div class="row">

                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/chr-kara.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">CHR Kara</h3>
                                   <h5>Contact: +228 2660246</h5>


                              </div>
                         </div>
                    </div>


                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/pmi.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">PMI - SOS</h3>
                                   <h5>Contact: +228 26601159</h5>


                              </div>
                         </div>
                    </div>

                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/cbt.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">CBT Med Hippocrate</h3>
                                   <h5>Contact: +228 26600516</h5>


                              </div>
                         </div>
                    </div>
               </div>









               <div class="row">

                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/vie.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">Clinique ma Vie</h3>
                                   <h5>Contact: +228 26606028</h5>


                              </div>
                         </div>
                    </div>


                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/grace.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">Clinique Tout est grace</h3>
                                   <h5>Contact: +228 24458352</h5>


                              </div>
                         </div>
                    </div>

                    <div class="col-lg-4">
                         <div class="card" style="width: 25rem; height: 27rem;">
                              <img src="../components/images/vie.png" class="card-img-top" alt="...">
                              <div class="card-body">
                                   <h3 class="card-title">Polychimie</h3>
                                   <h5>Contact: +228 26606081</h5>


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
     .bread {
          padding: 2rem;

     }

     ol {
          font-size: 20px;
     }

     a {
          text-decoration: none;
     }

     .col-lg-4:hover {
          transform: translateY(35px);
          transition: 1s ease-in-out;
     }

     .col-lg-3:hover {
          transform: translateY(35px);
          transition: 1s ease-in-out;
     }

     .sub-nav {
          padding: 2rem;
          text-align: center;

     }

     .body {
          margin: 0;

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
          max-width: 100rem;
          height: 100%;
          text-align: center;
          border-radius: 25px;
          border: 2px solid yellow;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          padding: 3rem;
          background-color: white;
          margin: 1rem;
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

     .card-title {
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
          font-size: 15px;
          padding: 0.25rem;
     }

     .card-text {
          text-align: left;
          color: #006A4A;

     }

     .list-hotel {
          background-image: linear-gradient(to right, #006a4a85, #ffcc00e6);
          padding: 3rem;
     }


     h1 {
          text-transform: uppercase;
     }

     .header {
          height: 30vh;
          background-image: linear-gradient(to right bottom,
                    rgba(126, 213, 111, 0.505),
                    rgba(40, 180, 131, 0.481)),
               url(../components/images/hero.jpg);
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