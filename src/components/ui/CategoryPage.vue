<template>
     <div class="container">
           <div class="title">
               <h2 style="text-align:center">Photos Galeries</h2>
          </div>

          <body>
               <div class="wrapper">
                    <div class="card">
                         <img src="../images/30.png" alt="" class="img-fluid">
                         <div class="info">
                              <h1>Evala</h1>
                              <a href="#" class="btn">Lire plus</a>
                         </div>
                    </div>


                    <div class="card">
                         <img src="../images/10.png" alt="" class="img-fluid">
                         <div class="info">
                              <h1>Akpema</h1>

                              <a href="/gallery" class="btn">Lire plus</a>
                         </div>
                    </div>


                    <div class="card">
                         <img src="../images/20.png" alt="" class="img-fluid">
                         <div class="info">
                              <h1>Habyé</h1>
                              <a href="#" class="btn">Lire plus</a>
                         </div>
                    </div>
               </div>
          </body>

     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     * {
          box-sizing: border-box;
          font-family: 'jost', sans-serif;
     }

     .title {
          margin: 1rem;
          max-width: 100%;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

     }

      h2 {
          font-size: 27px;
          font-weight: 600;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }

     .container {
          padding: 4rem;
          align-items: center;
     }


     html,
     body {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #222;
     }

     .wrapper {
          display: flex;
          width: 100%;
          justify-content: space-between;

     }

     .card {
          width: 400px;
          height: 300px;
          padding: 2rem 2rem;
          background: #fff;
          position: relative;
          display: flex;
          align-items: flex-end;
          box-shadow: 0px 7px 10px rgb(0, 0, 0, 0, 5);
          transition: 0.5s ease-in-out;
          
     }

     .card:hover {
          transform: translateY(20px);
     }

     .card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #ffcc00, #006a4a3d);
          z-index: 2;
          transition: 0.5s all;
          opacity: 0;

     }

     .card:hover:before {
          opacity: 1;

     }


     .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          
          
     }

     img {
          border-radius: 15px;
          
     }

     .card .info {
          position: relative;
          z-index: 3;
          color: #fff;
          opacity: 0;
          transform: translateY(30px);
          transition: 0.5s all;

     }

     .card:hover .info {
          opacity: 1;
          transform: translateY(0px);
     }
</style>