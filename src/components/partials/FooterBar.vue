<template>
  <div class="footer">

    <div class="row">

      <div class="col-lg-3">
        <a href="/"><img class="img-fluid" src="../images/blanc.png" alt="" width="200px"></a>

        <br>
        <div>
          <p>
            C'est un portail d'ouverture sur les évenements
            culturels de la préfecture de la Kozah

          </p>
          <a href="https://www.youtube.com/channel/UCClmJlh7QlZJXojYM_OqA3w" target="blank"><i
              class="fab fa-youtube"></i></a>
          <a href="https://twitter.com/Karaeventstogo" target="blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/karaeventstogo" target="blank"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/eventskaratogo/"><i class="fab fa-instagram" target="blank"></i></a>
          <a href="https://www.linkedin.com/company/kara-events/about/?viewAsMember=true" target="blank"><i
              class="fab fa-linkedin"></i></a>
        </div>
      </div>


      <div class="col-lg-3">
        <h2><b>Liens Directs</b></h2>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/Gallery">Galerie</a></li>
          <li><a href="/about">Accommodation</a></li>
          <li><a href="/events">Evenements</a></li>
        </ul>
      </div>

      <div class="col-lg-3">
        <h2><b>Evenements</b></h2>
        <ul>
          <li><a href="/evala">Evala</a></li>
          <li><a href="/akpema">Akpema</a></li>
          <li><a href="/habye">Habyé</a></li>
          <li><a href="/kondona">Kondona</a></li>
        </ul>
      </div>

      <div class="col-lg-3">
        <h2><b>Galerie</b></h2>

        <div class="acc">
          <div class="row" id="items">
            <div class="col-lg-4">

              <div class="" style="display:grid">
                <a href="/gallery"><img class="img-fluid image" src="../images/evala1.jpg" alt=""></a>
                <a href="/gallery"><img class="img-fluid image" src="../images/evala1.jpg" alt=""></a>

              </div>

            </div>


          </div>

        </div>
      </div>






    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .col-lg-4:hover {
    transform: translateY(15px);
    transition: 0.5s ease-in-out;
  }


  .image {
    border-radius: 5px;
  }

  .footer {
    background-image: url(../images/FOOTERS.png);
    width: 100%;
    padding: 50px;
    color: #fff;
    font-family: 'Jost', sans-serif;


  }

  a {
    justify-content: space-between;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;

  }


  a:hover,
  a:active {
    color: #FFCE00;

  }

  p {
    text-align: justify;
    text-justify: inter-word;
    font-size: 18px;
    margin: 10px;
  }
</style>