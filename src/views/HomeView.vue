<template>
  <div>
    <header-bar>

    </header-bar>
    <annonce-page>

    </annonce-page>
    <slider-bar></slider-bar>
    <br>
    <div class="scores">
      <vue3-marquee :clone="true" v-if="score && score.length">
        <div class="yellow-box" v-for="sco of score" :key="sco.id">
          <h3>{{ sco.nom_canton1}}: <span>{{ sco.point_score1}}</span></h3>
          <p>contre</p>
          <h3>{{ sco.nom_canton2}}: <span>{{ sco.point_score2}}</span></h3>
        </div>



      </vue3-marquee>
    </div>
    <br>
    <pub-page></pub-page>

    <welcome-view></welcome-view>
    <pub-page2></pub-page2>
    <category-page></category-page>

    <div class="app-store">
      <div class="container">
        <div class="row">

          <div id="col" class="col-lg-6">
            <h6><span>Téléchargez </span> maintenant l’App et <span>Utilisez-la</span> gratuitement..</h6>
            <h6>
              Avec <span>KARA EVENTS</span> toujours pour vous, <span>Simplifiez</span> tous vos déplacements à
              Kara !
            </h6>

            <a type="button" class="btn btn-dark btn-lg"
              href="https://play.google.com/store/apps/details?id=com.mekeng.karaevents" target="blank"><i
                class="fab fa-apple"></i> Telecharger</a>
            <a type="button" class="btn btn-light btn-lg"
              href="https://play.google.com/store/apps/details?id=com.mekeng.karaevents" target="blank"><i
                class="fab fa-google-play"></i>
              Telecharger</a>
          </div>


          <div class="col-lg-6">
            <img class="img-fluid" src="../components/images/MAIN.png" alt="iphone-mockup">
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import HeaderBar from '../components/partials/HeaderBar.vue'
  import SliderBar from '../components/partials/SliderBar.vue'
  import WelcomeView from '../components/ui/WelcomeView.vue'
  import PubPage from '@/components/partials/PubPage.vue'
  import PubPage2 from '@/components/partials/PubPage2.vue'
  import CategoryPage from '@/components/ui/CategoryPage.vue'
  import AnnoncePage from '@/components/ui/AnnoncePage.vue'
  import {
    Vue3Marquee
  } from 'vue3-marquee'
  import 'vue3-marquee/dist/style.css'
  import axios from 'axios'
  export default {
    components: {
      SliderBar,
      WelcomeView,
      Vue3Marquee,
      PubPage,
      PubPage2,
      CategoryPage,
      AnnoncePage,
      HeaderBar

  },

    data() {
      return {
        score: [],
        errors: []
      }
    },

    created(data) {
      axios.get(`api/score`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.score = response.data
          console.log(data)

        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>

<style scoped>
  .col-sm-2:hover {
    transform: translateY(35px);
    transition: 1s ease-in-out;
  }

  .btn-light:hover {
    background-color: transparent;
    border-color: #000;
  }

  #col {
    padding-top: 100px;
  }

  p {
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    text-align: center;
    font-weight: 400;

  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
  }

  a {
    margin: 10px;
  }

  span {
    color: red;
    font-size: 25px;
    font-family: 'Jost', sans-serif;

  }



  h6 {
    font-size: 25px;
    font-weight: bold;
    font-family: 'Jost', sans-serif;
    color: #000;
  }

  .yellow-box {
    border: 3px solid #FFCE00;
    padding: 20px;
    font-weight: bold;
    color: black;
    text-align: justify;
    font-family: 'Josefin Sans', sans-serif;


  }

  .app-store {
    background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
    padding: 10px;
    margin: 10px;
    text-align: center;
  }

  button {
    margin: 10px;
  }



  img {
    width: 100%;
    transition: transform 1s;
  }

  img:hover {
    transform: translateZ(20px);
  }

  .scores {
    padding: 20px;

  }

  h1 {
    font-size: 15px;
    font-weight: 600;
    font-family: 'Jost', sans-serif;
  }
</style>