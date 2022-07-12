<template>
  <header-bar></header-bar>
  <div class="kozah">
    <div class="header">
      <h1 class="titre">
        Bars & Restaurants
      </h1>

    </div>

    <div class="bread">
      <nav
        style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
        aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/about">Acommodation</a></li>
          <li class="breadcrumb-item active" aria-current="page">Bars & Restaurants</li>
        </ol>
      </nav>
    </div>



    <div class="list-bar">

      <h1>Les Bars & Restaurants à Kara</h1>

      <div class="header-search">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
          <button class="btn btn-success" type="submit">Recherche</button>
        </form>
      </div>
      <div class="row" v-if="bars && bars.length">
        <div class="col-lg-3" v-for="bar of bars" :key="bar.id">
          <div class="card" style="width: 25rem; height: 30rem;">
            <img :src="'http://karaevents.mekengroup.com/upload/barResto/'+bar.photo_bar_resto"
              class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h3 class="card-title">{{ bar.nom_bar_resto }}</h3>
              <h5>Address: {{ bar.adresse_bar_resto }}</h5>
              <h5>Contact: {{ bar.contact_bar_resto }}</h5>
              <div class="box1">
                <div class="">
                  <a type="button" id="btn" class="btn btn-danger" :href="'https://'+bar.site_bar_resto">Voir plus</a>
                </div>

                <div class="">
                  <a type="button" id="btn" class="btn btn-success" :href="'https://wa.me/'+bar.contact_bar_resto"
                    target="blank"><i class="fa-brands fa-whatsapp"></i></a>
                  <a type="button" id="btn" class="btn btn-primary" :href="'tel:'+bar.adresse_bar_resto"
                    target="blank"><i class="fa-solid fa-phone"></i></a>
                  <a type="button" class="btn btn-danger" :href="'mailto:'+bar.email_bar_resto" target="blank"><i
                      class="fa-solid fa-at"></i></a>
                  <a type="button" class="btn btn-warning" :href="'https://goo.gl/maps/'+bar.localisation_bar_resto"
                    target="blank"><i class="fa-solid fa-location-dot"></i></a>
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
        bars: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created(data) {
      axios.get(`api/bar_resto`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.bars = response.data
          console.log(data)

        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style scoped>
  .col-lg-3 {
    padding: 10px;
  }

  ol {
    font-size: 20px;
  }

  .header-search {
    padding: 40px;
  }

  .bread {
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: #ffcc00;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
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
    font-size: 30px;
    font-family: 'jost'sans-serif;
    color: #006A4A;

  }



  .icon {
    color: red;
  }

  h2 {
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
  }

  h5 {
    font-family: 'Josefin Sans', sans-serif;
  }

  .box1 {
    max-width: 100%;
    text-align: center;
    border-radius: 15px;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
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

  .btn {
    border-radius: 15px;
    font-size: 10px;

  }

  h3,
  p {
    font-size: 15px;
    font-family: 'jost', sans-serif;
    color: #006A4A;
    text-align: left;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;
  }

  .yellow-box {
    border: 2px solid yellow;
    padding: 1rem;
  }

  .row {
    padding: 1rem;
  }

  .list-pub {
    max-width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 20px;
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
    border-radius: 15px;
    max-width: 100%;
    text-align: center;
    border-radius: 20px;
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
    padding: 20px;
  }


  .card-title {
    color: #006A4A;
    font-family: 'Josefin Sans', sans-serif;
  }

  h5 {

    text-align: left;
    font-size: 15px;
  }

  .card-text {
    text-align: left;
    color: #006A4A;
    font-family: 'Josefin Sans', sans-serif;

  }

  .list-bar {
    background-image: linear-gradient(to right, #006a4a85, #ffcc00e6);
    padding: 3rem;
    max-width: 100%;
    height: 100%;
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