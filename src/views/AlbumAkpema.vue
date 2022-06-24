<template>
     <header-bar></header-bar>
     <div class="header">
          <div class="titre">
               <h1>Album <span>Akpema</span></h1>
          </div>

     </div>

     <body>
          <div class="container">
               <div class="heading">
                    <h3>Album <span>Akpema</span></h3>

               </div>
               <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                         <a class="navbar-brand" href="/gallery">Toutes les Photos</a>
                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                              aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                         </button>
                         <div class="collapse navbar-collapse" id="navbarNav">
                              <ul class="navbar-nav">
                                   <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/album-evala">Album
                                             Evala</a>
                                   </li>
                                   <li class="nav-item">
                                        <a class="nav-link" href="#">Album Akpema</a>
                                   </li>
                                   <li class="nav-item">
                                        <a class="nav-link" href="/album-habye">Album Habyé</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>

               <div class="box">
                    <div class="dream">
                         <img src="./1.jpg" alt="" width="500px">
                         <img src="./7.jpg" alt="" width="500px">
                         <img src="./2.jpg" alt="" width="500px">
                         s

                    </div>

                    <div class="dream">
                         <img src="./6.jpg" alt="" width="500px">
                         <img src="./7.jpg" alt="" width="500px">
                         <img src="./3.jpg" alt="" width="500px">


                    </div>

                    <div class="dream">
                         <img src="./7.jpg" alt="" width="500px">
                         <img src="./6.jpg" alt="" width="500px">
                         <img src="./2.jpg" alt="" width="500px">


                    </div>
               </div>
          </div>
     </body>
</template>

<script>
     import HeaderBar from '@/components/partials/HeaderBar.vue'
     export default {
          components: {
               HeaderBar
          }
     }
</script>

<style scoped>
     * {
          font-family: 'Times New Roman', Times, serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     img:hover {
          transform: translateY(25px);
          transition: 1s ease-in-out;

     }

     nav {
          padding: 2rem;

     }

     .nav-link {
          color: #000;
          font-family: 'jost', sans-serif;
          font-size: 18px;
     }

     .nav-link:hover {
          color: green;
          border-color: #EBD671;
     }


     body {
          text-align: center;
          width: 100%;
          align-items: center;
     }

     .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin: 40px 20px 0 20px;
     }

     .container,
     .heading {
          text-align: center;
          align-content: center;
     }

     .container .heading h3 {
          font-size: 3em;
          font-weight: bolder;
          padding-bottom: 10px;
          border-bottom: 1px solid;
     }

     .container,
     .heading h3 span {
          font-weight: 100;
     }

     .container .box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
     }

     .container .box .dream {
          display: flex;
          flex-direction: column;
          width: 32.5%;
     }


     .container .box .dream img {
          width: 100%;
          padding-bottom: 15px;
          border-radius: 5px;
     }

     @media only screen and (max-width: 769px) {
          .container .box {
               flex-direction: column;

          }

          .container .box .dream {
               width: 100%;
          }


     }

     @media only screen and (max-width: 643px) {

          .container,
          .heading {
               width: 75%;

          }

          .container .heading h3 {
               font-size: 1rem;

          }

     }


     @media only screen and (max-width: 3000px) {
          .container {
               display: flex;
               flex-direction: column;
               justify-content: center;
               text-align: center;
               margin: 40px 20px 0 100px;
          }


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
</style>