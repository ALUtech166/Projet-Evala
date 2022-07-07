<template>
  <header-bar></header-bar>
  <annonce-page></annonce-page>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="header">
    <h1 class="titre">ACCOMMODATION</h1>
  </div>
  <pub-page3></pub-page3>

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

    <div class="acc">
      <!-- <div class="header-search">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Recherche</button>
        </form>
      </div> -->
      <div class="row" id="items">
        <div class="col-lg-3">


          <img class="img-fluid image" src="../components/images/hotel-kara1.png" alt="">
          <div class="box1">
            <a href="/hotel">
              <h2 style="color:green">Les Hotels</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/place-victoire.png" alt="">
          <div class="box1">
            <a href="/bar-resto">
              <h2 style="color:green">Les Bars & Restaurants</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo20.png" alt="">
          <div class="box1">
            <a href="/tourisme">
              <h2 style="color:green">Les Lieux Touristiques</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">

          <img class="img-fluid image" src="../components/images/lafia.png" alt="">
          <div class="box2">
            <a href="/pharmacie">
              <h2 style="color:green">Les Pharmacies</h2>
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
              <h2 style="color:green">Les Boites de nuits</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/vie.png" alt="">
          <div class="box2">
            <a href="/sante">
              <h2 style="color:green"> Les Centres de Santé</h2>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo11.png" alt="">
          <div class="box2">
            <a href="/radio">
              <h2 style="color:green">Les Fréquences de Radios</h2>
            </a>
          </div>
        </div>

        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/bank.png" alt="">
          <div class="box2">
            <a href="/banque">
              <h2 style="color:green">Les Agences </h2>
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
              <h2 style="color:green">Les Marchés</h2>
            </a>
          </div>
        </div>


        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/Photo89.png" alt="">
          <div class="box2">
            <a href="/gym">
              <h2 style="color:green">Les Centres de Bien etre</h2>
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


        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/stationn_essence.png" alt="">
          <div class="box2">
            <a href="/station">
              <h2 style="color:green">Les Stations d'essences</h2>
            </a>
          </div>
        </div>


        <div class="col-lg-3">
          <img class="img-fluid image" src="../components/images/guichet.png" alt="">
          <div class="box2">
            <a href="/guichet">
              <h2 style="color:green">Les Guichets Automatiques</h2>
            </a>
          </div>
        </div>

        <!-- <div class="col-lg-3" v-if="services && services.length">
          <template v-for="service of services" :key="service.id">
            <img class="img-fluid image" :src="'http://karaevents.mekengroup.com/upload/service/'+service.photo_service" alt="">
            <div class="box2">
              <a href="/guichet">
                <h2 style="color:green">{{ service.nom_service }}</h2>
              </a>
            </div>
          </template>
        </div> -->

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
  // import axios from 'axios'
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

  // data() {
  //   return {
  //     services: [],
  //     errors: []
  //   }
  // }

//   // Fetches posts when the component is created.
//   created(data) {
//     axios.get(`api/service`)
//       .then(response => {
//         // JSON responses are automatically parsed.
//         this.services = response.data
//         console.log(data)

//       })
//       .catch(e => {
//         this.errors.push(e)
//       })
//   }
// }
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