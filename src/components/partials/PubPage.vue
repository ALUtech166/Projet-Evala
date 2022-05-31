<template>
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
               <div class="carousel-item active">
                    <div class="banner-container">

                         <div class="banner">
                              <div class="shoe">
                                   <img src="../images/hp-face.jpg" alt="">
                              </div>
                              <div class="content">
                                   <span>HP Probook</span>
                                   <h3>10% de reduction</h3>
                                   <p>Validité de 5 jours</p>
                                   <a href="https://mekengroup.com/" class="btn">Voir plus</a>
                              </div>
                              <div class="women">
                                   <img src="../images/pc.png" alt=""  >
                              </div>
                         </div>

                    </div>
               </div>
               <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <div class="shoe">
                                   <img src="../images/hp-face.jpg" alt="">
                              </div>
                            <div class="content">
                                   <span>HP Probook</span>
                                   <h3>10% de reduction</h3>
                                   <p>Validité de 5 jours</p>
                                   <a href="https://mekengroup.com/" class="btn">Voir plus</a>
                              </div>
                              <div class="women">
                                   <img src="../images/pc.png" alt="">
                              </div>
                         </div>

                    </div>
               </div>
               <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <div class="shoe">
                                   <img src="../images/hp-face.jpg" alt="">
                              </div>
                            <div class="content">
                                   <span>HP Probook</span>
                                   <h3>10% de reduction</h3>
                                   <p>Validité de 5 jours</p>
                                   <a href="https://mekengroup.com/" class="btn">Voir Plus</a>
                              </div>
                              <div class="women">
                                   <img src="../images/pc.png" alt="">
                              </div>
                         </div>

                    </div>
               </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
               data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
               data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
          </button>
     </div>
</template>

<script>
     export default {

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