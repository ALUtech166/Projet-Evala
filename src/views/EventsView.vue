<template>
  <header-bar></header-bar>
  <annonce-page></annonce-page>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="header">
    <h1 class="titre">Evenements</h1>
  </div>
  <pub-page3></pub-page3>

  <div class="bread">
    <nav
      style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
      aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Evenements</li>
      </ol>
    </nav>
  </div>
  <div class="about">
    <div class="title">
      <h1 style="color:red">Evenements</h1>
      <p>
        Au cours de votre séjour à Kara, osez sortir et profiter de tous les instants.
        Kara dispose des lieux touristiques des Bars-Restaurants, des Boites de nuits, des Marchés etc.
      </p>
    </div>

    <div class="acc" data-aos="flip-right" data-aos-duration="3000">
      
      <div class="row" id="items">
        <div class="col-lg-4">


          <img class="img-fluid image" src="../components/images/EVALA.jpg" alt="">
          <div class="box1">
            <a href="/evala">
              <h2 style="color:red">Evala</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-4">
          <img class="img-fluid image" src="../components/images/AKPEMA.jpg" alt="">
          <div class="box1">
            <a href="/akpema">
              <h2 style="color:red">Akpema</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-4">
          <img class="img-fluid image" src="../components/images/FDKM1x.jpg" alt="">
          <div class="box1">
            <a href="/kondona">
              <h2 style="color:red">Kondona</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-4">

          <img class="img-fluid image" src="../components/images/HABYE.jpg" alt="">
          <div class="box2">
            <a href="/habyé">
              <h2 style="color:red">Habyé</h2>
            </a>
          </div>
        </div>



          <div class="col-lg-4">
          <img class="img-fluid image" src="../components/images/FDKM1x.jpg" alt="">
          <div class="box1">
            <a href="">
              <h2 style="color:red">Miss Kara</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-4">

          <img class="img-fluid image" src="../components/images/CONCERTS.jpg" alt="">
          <div class="box2">
            <a href="">
              <h2 style="color:red">Concerts</h2>
            </a>
          </div>
        </div>

      </div>

    </div>





  </div>

  <pub-page4></pub-page4>
</template>

<script>
  import PubPage3 from '@/components/partials/PubPage3.vue'
  import PubPage4 from '@/components/partials/PubPage4.vue'
  import AnnoncePage from '@/components/ui/AnnoncePage.vue';
  import HeaderBar from '../components/partials/HeaderBar.vue'
  import AOS from "aos";
  export default {
    components: {
      PubPage3,
      PubPage4,
      AnnoncePage,
      HeaderBar

    },
    setup() {
      AOS.init();

    },
  }
</script>



<style scoped>
  .col-lg-4:hover {
    transform: translate(35px);
    transition: 1s ease-in-out all;
  }

  h2 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 40px;
  }

  .col-lg-4:hover:before {
    opacity: 1;

  }

  .row {
       padding: 10px;
  }

  .header-search {

    padding: 40px;
  }


  a {
    text-decoration: none;
    font-size: 12px;
  }

  p {
    text-align: justify;
    font-family: 'Jost';
    font-size: 20px;
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

  .title {
    max-width: 90rem;
    padding: 1rem;

  }

  .lire-plus {
    text-align: center;
    padding: 20px;
  }

  .acc {
    padding: 20px;


  }

  .about {
    padding: 30px;
    background-image: linear-gradient(to right, #ffcc00, #006a4a3d);





  }

  .bread {
    padding: 2rem;
    background-color: #fff;
  }

  .image {
    border-radius: 10px;

  }


  .box1 {
    margin: 0.5rem;
    max-width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background: #fff;
  }

  .box2 {
    margin: 0.5rem;
    max-width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background: #fff;
  }

  h2,
  ol {
    font-size: 20px;
  }
</style>