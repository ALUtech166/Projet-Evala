<template>
  <div class="footer">

    <div class="row">

      <div class="col-lg-3">
        <h2><img src="../images/blanc.png" alt="" width="200px"></h2>
        <br>
        <p>C'est un portail d'ouverture sur les évenements
          culturels de la préfecture de la Kozah</p>

        <div>
          <a href="https://www.youtube.com/channel/UCClmJlh7QlZJXojYM_OqA3w"><i class="fab fa-youtube"></i></a>
          <a href="https://twitter.com/Karaeventstogo"><i class="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/karaeventstogo"><i class="fab fa-facebook"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/kara-events/about/?viewAsMember=true"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>


      <div class="col-lg-3">
        <h2><b>Liens Directs</b></h2>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/kozah">Kozah</a></li>
          <li><a href="/Gallery">Galerie</a></li>
        </ul>
      </div>

      <div class="col-lg-3">
        <h2><b>Evenements</b></h2>
        <ul>
          <li><a href="/evala">Evala</a></li>
          <li><a href="">Akpema</a></li>
          <li><a href="">Habyé</a></li>
        </ul>
      </div>

      <div class="col-lg-3">
        <h2><b>Gallerie</b></h2>

        <div class="acc">
          <div class="row" id="items">
            <div class="col-lg-4">

              <a href="/gallery"><img class="image" src="../images/evala1.jpg" alt="" width="200px"></a>

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
    background-image: linear-gradient(to right, #006a4a, #FFCE00);
    width: 100%;
    padding: 5rem;
    color: #fff;
    font-family: 'Jost', sans-serif;


  }

  a {
    justify-content: space-between;
    padding: 1rem;
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
  }
</style>