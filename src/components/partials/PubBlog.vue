<template>
     <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel" data-aos="zoom-in-left"
     data-aos-easing="linear"
     data-aos-duration="3000">
          <div class="carousel-inner">
               <div class="carousel-item active">
                    <div class="banner-container">

                          <div class="banner">
                             <img src="../images/AACG_SITE.jpg" class="img-fluid" alt="">
                         </div>

                    </div>
               </div>
               <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                             <img src="../images/2MEG.jpg" class="img-fluid" alt="">
                         </div>


                    </div>
               </div>
               <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <img src="../images/SLIDERS_FDKM1.jpg" class="img-fluid" alt="">  
                         </div>

                    </div>
               </div>

                <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <img src="../images/pub-tg.jpeg" class="img-fluid" alt="">  
                         </div>

                    </div>
               </div>

                 <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <img src="../images/TIBTP_Carré.jpg" class="img-fluid" alt="">  
                         </div>

                    </div>
               </div>

                   <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <img src="../images/zilla.jpeg" class="img-fluid" alt="">  
                         </div>

                    </div>
               </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3"
               data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3"
               data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
          </button>
     </div>
</template>

<script>
import AOS from "aos";
     export default {
           setup() {
               AOS.init();

          },
     }
</script>

<style scoped>
     .banner-container {
          display: flex;
          align-items: center;
          justify-content: center;
     }

     .banner-container .banner {
          background: linear-gradient(-55deg, #ff7675 29%, #d63031 29.1%, #d63031 68%, #ff7675 68.1%);
          border-radius: 5px;
          margin: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          box-shadow: 0 5px 10px #0005;
          overflow: hidden;
     }

     .banner-container .banner .shoe {
          flex: 1 1 250px;
          padding: 15px;
          text-align: center;
     }

     .banner-container .banner .shoe img {
          width: 40%;
          border-radius: 10px;
     }

     .banner-container .banner .content {
          flex: 1 1 250px;
          text-align: center;
          padding: 10px;
          text-transform: uppercase;
     }

     .banner-container .banner .content span {
          color: #eee;
          font-size: 25px;
     }

     .banner-container .banner .content h3 {
          color: #fff;
          font-size: 40px;
     }

     .banner-container .banner .content p {
          color: #eee;
          font-size: 20px;
          padding: 10px 0;
     }

     .banner-container .banner .content .btn {
          display: block;
          height: 40px;
          width: 150px;
          line-height: 40px;
          background: #fff;
          color: #d63031;
          margin: 5px auto;
          text-decoration: none;
     }

     .banner-container .banner .women {
          position: relative;
          bottom: -33px;
          padding: 10px;
          flex: 1 1 250px;
     }

     .banner-container .banner .women img {
          width: 100%;
          border-radius: 10px;
     }

     @media (max-width:768px) {
          .banner-container .banner .women {
               display: none;
          }
     }
</style>