<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="header">
    <h1 class="titre">ACCOMMODATION</h1>
  </div>
  <pub-page></pub-page>

  <div class="bread">
    <nav
      style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
      aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Acommodation</li>
      </ol>
    </nav>
  </div>
  <div class="about">
    <div class="title">
      <h1 style="color:green">ACCOMMODATION</h1>
      <p>Au cours de votre séjour à Kara, osez sortir et profiter de tous les instants.
        Kara dispose des lieux touristiques des Bars-Restaurants, des Boites de nuits, des Marchés etc.
      </p>
    </div>
    <div class="header-search">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Recherche</button>
      </form>
    </div>
    <div class="acc">
      <div class="row" id="items">
        <div class="col-lg-3">


          <img class="img-fluid image" src="../components/images/hotel-kara1.png" alt="">
          <div class="box1">
            <a href="/hotel">
              <h2 style="color:green">Hotels</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/place-victoire.png" alt="">
          <div class="box1">
            <a href="/bar-resto">
              <h2 style="color:green">Bars & Restaurants</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo20.png" alt="">
          <div class="box1">
            <a href="/tourisme">
              <h2 style="color:green">Lieux Touristiques</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">

          <img class="img-fluid image" src="../components/images/lafia.png" alt="">
          <div class="box2">
            <a href="/pharmacie">
              <h2 style="color:green">Pharmacies</h2>
            </a>
          </div>
        </div>

      </div>

    </div>



    <div class="acc">
      <div class="row" id="items">
        <div class="col-lg-3">

          <img class="img-fluid image" src="../components/images/Photo18.png" alt="">
          <div class="box2">
            <a href="/boite">
              <h2 style="color:green">Boites de nuits</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/vie.png" alt="">
          <div class="box2">
            <a href="/sante">
              <h2 style="color:green">Centres de Santé</h2>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo11.png" alt="">
          <div class="box2">
            <a href="/radio">
              <h2 style="color:green">Fréquences de Radios</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/fazao.png" alt="">
          <div class="box2">
            <a href="/banque">
              <h2 style="color:green">Agences de Banques</h2>
            </a>
          </div>
        </div>



      </div>
    </div>


    <div class="acc">
      <div class="row" id="items">
        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo32.png" alt="">
          <div class="box2">
            <a href="/marche">
              <h2 style="color:green">Marchés</h2>
            </a>
          </div>
        </div>
        <div class="col-lg-3">

          <img class="img-fluid image" src="../components/images/Photo34.png" alt="">
          <div class="box2">
            <a href="/marche">
              <h2 style="color:green">Supermarché</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo89.png" alt="">
          <div class="box2">
            <a href="/gym">
              <h2 style="color:green">Centre de Bien etre</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo95.png" alt="">
          <div class="box2">
            <a href="/religion">
              <h2 style="color:green">Les Lieux Religieux</h2>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <pub-page></pub-page>
</template>

<script>
  import PubPage from '@/components/partials/PubPage.vue'

  export default {
    components: {
      PubPage,

    }
  }
</script>



<style scoped>
  .col-lg-3:hover {
    transform: translateY(35px);
    transition: 1s ease-in-out;
  }

  .col-lg-3:hover:before {
    opacity: 1;

  }

  .header-search {

    padding: 4rem;
  }


  a {
    text-decoration: none;
  }

  p {
    text-align: justify;
    font-family: 'Jost';
    font-size: 20px;
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

  .title {
    max-width: 90rem;
    padding: 1rem;

  }

  .lire-plus {
    text-align: center;
    padding: 20px;
  }

  .acc {
    padding: 2rem;


  }

  .about {
    padding: 3rem;
    background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
    max-width: 100%;
    height: 100%;



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
    border: 2px solid green;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .box2 {
    margin: 0.5rem;
    max-width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid #006A4A;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  h2,
  ol {
    font-size: 20px;
  }
</style>