<template>
  <header-bar></header-bar>
  <div class="kozah">
    <div class="header">
      <h1 class="titre">
        Hotels

      </h1>
    </div>

    <div class="bread">
      <nav
        style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
        aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/about">Acommodation</a></li>
          <li class="breadcrumb-item active" aria-current="page">Hotels</li>
        </ol>
      </nav>
    </div>


    <div class="list-hotel">

      <h1>Les Hotels à Kara</h1>

      <div class="header-search">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Recherche</button>
        </form>
      </div>
      <div class="row" v-if="hotel && hotel.length">
        <div class="col-lg-3" v-for="hot of hotel" :key="hot.id">
          <div class="card" style="width: 25rem; height: 37rem;">
            <img :src="'http://karaevents.mekengroup.com/upload/hotel/'+hot.photo_hotel" class="card-img-top img-fluid"
              alt="...">
            <div class="card-body">
              <h3 class="card-title">{{ hot.nom_hotel}}</h3>
              <h5>Addresse: {{ hot.adresse_hotel}}</h5>
              <h5>Contact: {{ hot.contact_hotel}}</h5>
              <p class="card-text">
                <span>Détails:</span> {{ hot.description_hotel}}
              </p>
              <div class="box1">
                <div class="">
                  <a type="button" class="box btn btn-outline-danger" :href="'https://'+hot.site_hotel"
                    target="blank">Voir plus</a>
                </div>

                <div class="">
                  <a type="button" id="btn" class="btn btn-success" :href="'https://wa.me/'+hot.whatsapp_hotel"
                    target="blank"><i class="fa-brands fa-whatsapp"></i></a>
                  <a type="button" id="btn" class="btn btn-primary" :href="'tel:'+hot.contact_hotel" target="blank"><i
                      class="fa-solid fa-phone"></i></a>
                  <a type="button" id="btn" class="btn btn-danger" :href="'mailto:'+hot.email_hotel" target="blank"><i
                      class="fa-solid fa-at"></i></a>
                  <a type="button" id="btn" class="btn btn-warning"
                    :href="'https://goo.gl/maps/'+hot.localisation_hotel" target="blank"><i
                      class="fa-solid fa-location-dot"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>


    </div>



  </div>
</template>

<script>
  import HeaderBar from '@/components/partials/HeaderBar.vue'
  import axios from 'axios'
  export default {
    components: {
      HeaderBar
    },

    data() {
      return {
        hotel: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created(data) {
      axios.get(`api/hotel`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.hotel = response.data
          console.log(data)

        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
<style scoped>
  .row,
  .col-lg-3 {
    padding: 10px;
  }

  .col-lg-4:hover {
    transform: translateY(35px);
    transition: 1s ease-in-out;
  }

  .col-lg-3:hover {
    transform: translateY(35px);
    transition: 1s ease-in-out;
  }

  .bread {
    padding: 20px;
    font-size: 20px;

  }

  .header-search {
    padding: 20px;
  }

  .icon {
    color: red;
  }

  #btn {
    text-decoration: none;
    border-radius: 100%;
    font-size: 10px;


  }

  .box {
    border-radius: 10px;
    text-decoration: none;
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: #ffcc00;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
  }

  #btn {
    font-size: 9px;
  }

  span {
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
  }

  h2 {
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
  }

  .box1 {
    max-width: 100%;
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

  }

  .box2 {
    max-width: 100%;
    text-align: center;
    border-radius: 15px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;

  }



  h3,
  p {
    font-size: 15px;
    font-family: 'jost', sans-serif;
    text-align: left;
    font-family: 'Josefin Sans', sans-serif;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;
  }

  .yellow-box {
    border: 2px solid yellow;
    padding: 10px;
  }

  .row {
    padding: 1rem;

  }

  .list-pub {
    max-width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 25px;
    border: 2px solid yellow;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    padding: 3rem;
    background-color: white;



  }

  .card-img-top {
    border-radius: 5px;
    height: 200px;
  }

  .card {

    max-width: 100%;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .card-title {
    text-align: left;
    color: #006A4A;
    text-transform: uppercase;
    font-size: 20px;
  }

  h1 {
    text-align: center;
    color: #006A4A;
    text-transform: uppercase;
    padding: 1rem;
    font-size: 20px;
  }


  h5 {
    color: red;
    text-align: left;
    font-size: 15px;
  }

  .card-text {
    text-align: left;
    color: #000;

  }

  .list-hotel {
    background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
    padding: 3rem;
  }

  @media only screen and (max-width: 1920px) {
    .list-hotel {
      text-align: center;
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
</style>