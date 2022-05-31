<template>
     <div class="contact">
          <div class="header">
               <h1 class="titre">
                    CONTACTS
               </h1>
          </div>


          <div class="title">
               <h1 style="color:green">Contactez-Nous</h1>
          </div>


          <div class="form">

               <div class="row">
                    <div class="col-lg-6">
                         <div class="sub-title">
                              <h2 style="color:green">NOUS CONTACTER POUR <br>
                                   PLUS D'INFORMATION</h2>
                              <br>

                              <div>
                         
                              <a href=""><i class="fab fa-linkedin"></i></a>
                              <a href=""><i class="fab fa-twitter"></i></a>
                              <a href=""><i class="fab fa-facebook"></i></a>
                              <a href=""><i class="fab fa-instagram"></i></a>
                         </div>
                         </div>


                         
                    </div>
                    <div class="col-lg-6">
                         <FormPage></FormPage>

                    </div>
               </div>

          </div>

          <div class="mapouter">
               <div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas"
                         src="https://maps.google.com/maps?q=Rue%20275,%20Lom%C3%A9%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                         frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

               </div>

          </div>




     </div>


</template>

<script>
     import FormPage from '../components/ui/FormPage.vue'
     export default {
          components: {
               FormPage
          }

     }
</script>

<style scoped>


a {
    padding: 1rem;
    color: #fff;
    text-decoration: none;
    font-size: 25px;

  }

  a:hover,
  a:active {
    color: #FFCE00;

  }
     .sub-title {
          background-color: rgba(0, 106, 74, 0.536);
          height: 90%;
          border-radius: 15px;
          padding: 5rem;
     }

     .form {
          margin: 0.5rem;
          max-width: 100vw;
          padding: 3rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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

     .title {
          margin: 1rem;
          max-width: 100%;
          text-align: center;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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




     .mapouter {
          position: relative;
          text-align: center;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
     }

     .gmap_canvas {
          overflow: hidden;
          background: none !important;
          text-align: left;
          height: 100%;
          width: 100%;
     }

     .overview {
          background-color: #fff;
          width: 100%;
     }
</style>