<template>
     <div class="menu">
          <nav class="navbar navbar-expand-lg navbar-light" style="">
               <div class="container-fluid">
                    <a class="navbar-brand" href="#"><strong>
                              <img src="../images/kara.png" alt="">
                         </strong></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                         aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>

                    <br>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                         <ul class="navbar-nav">


                              <li><a class="dropdown-item" href="/">Accueil</a></li>
                              <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle dropdown-item" href="/about"
                                        id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Accomodation
                                   </a>
                                   <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a class="dropdown-item" href="/hotel">Hotel</a></li>
                                        <li><a class="dropdown-item" href="/bar-resto">Bar & Restaurants</a></li>
                                        <li><a class="dropdown-item" href="/tourisme">Lieux Touristiques</a></li>
                                        <li><a class="dropdown-item" href="/pharmacie">Pharmacies</a></li>
                                        <li><a class="dropdown-item" href="/sante">Santé</a></li>
                                        <li><a class="dropdown-item" href="/banque">Divers</a></li>
                                   </ul>
                              </li>



                              <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle dropdown-item" href="#"
                                        id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Evenements
                                   </a>
                                   <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a class="dropdown-item" href="/evala">Evala</a></li>
                                        <li><a class="dropdown-item" href="/akpema">Akpema</a></li>
                                        <li><a class="dropdown-item" href="/habye">Habyé</a></li>
                                   </ul>
                              </li>
                              <li><a class="dropdown-item" href="/kozah">La KARA</a></li>
                              <li><a class="dropdown-item" href="/blog">Actualités</a></li>
                              <li><a class="dropdown-item" href="/contact">Contacts</a></li>
                         </ul>

                         <div class=""></div>
                         <div class="modal fade" id="exampleModalToggle" aria-hidden="true"
                              aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                              <div class="modal-dialog modal-dialog-centered">
                                   <div class="modal-content" style="width: 100%">
                                        <div class="modal-header">
                                             <!-- <h1 style="color: green">Kozah-Events</h1> -->
                                             <img src="../images/kara.png" alt="">
                                             <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                  aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                             <login-page></login-page>
                                        </div>
                                        <div class="modal-footer">
                                             <p>Vous n'avez pas un compte? Créer un <a class="btn-outline-warning"
                                                       data-bs-target="#exampleModalToggle2"
                                                       data-bs-toggle="modal">Ici</a></p>

                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="modal fade" id="exampleModalToggle2" aria-hidden="true"
                              aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                              <div class="modal-dialog modal-dialog-centered">
                                   <div class="modal-content">
                                        <div class="modal-header">
                                             <h1 style="color: green">Kozah-Events</h1>
                                             <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                  aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                             <singin-page></singin-page>
                                        </div>
                                        <div class="modal-footer">
                                             <p>Vous avez déja un compte? Connectez-vous <a class="btn-outline-warning"
                                                       data-bs-target="#exampleModalToggle"
                                                       data-bs-toggle="modal">Ici</a></p>

                                        </div>
                                   </div>
                              </div>
                         </div>
                         <a class="btn btn-white btn-animated" data-bs-toggle="modal" href="#exampleModalToggle"
                              role="button">Se Connecter</a>



                    </div>
               </div>
          </nav>
     </div>



</template>

<script>
     import LoginPage from "../ui/LoginPage.vue"
     import SinginPage from "../ui/SinginPage.vue"
     export default {
          components: {
               LoginPage,
               SinginPage
          }

     }
</script>

<style scoped>
     nav {
          background-color: #006A4A;
          background-color: transparent;

     }

     /* .navbar-nav {
          margin-left: 95px;
          
     } */

     @media only screen and (max-width: 1920px) {

          .navbar-nav {
               margin-left: 100px;

          }


     }

     /* X-Small devices (portrait phones, less than 576px)  */
     @media (max-width: 575.98px) {}

     /* 
     // Small devices (landscape phones, less than 768px) */
     @media (max-width: 767.98px) {}

     /* // Medium devices (tablets, less than 992px) */
     @media (max-width: 991.98px) {
           nav {
               text-align: left;
          }

          li {
               font-size: 10px;
          }
     }

     /* // Large devices (desktops, less than 1200px) */
     @media (max-width: 1199.98px) {
          nav {
               text-align: left;
          }

          li {
               font-size: 10px;
          }
     }


     @media (max-width: 1381px) {
          .btn {
               padding: 0;
               font-size: medium;
               margin: 0;
          }

          a {
               font-size: 5px;
          }

          .btn:link,
          .btn:visited {
               font-size: 5px;
               text-transform: lowercase;
          }
     }

     /* 
     // X-Large devices (large desktops, less than 1400px) */
     @media (max-width: 1399.98px) {}

     /* // XX-Large devices (larger desktops)
     // No media query since the xxl breakpoint has no upper bound on its width */

     .modal-content {
          padding: 0.5rem;
     }

     h1 {
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }

     p {
          padding: 15px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          font-weight: 900;
          color: #006A4A;
          font-size: 20px;


     }

     li {
          padding: 20px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          font-weight: bold;
          text-transform: uppercase;


     }


     #dropdown {
          text-align: right;
     }



     ul,
     .link,
     .dropdown-item,
     .dropdown-toggle {
          font-weight: 600;
          list-style: none;
          text-decoration: none;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: bold;

     }


     .link,
     .dropdown-item {
          font-size: 14px;
          transition: .5s ease all;
          padding-bottom: px;
          border-bottom: 1px solid transparent;

     }


     .dropdown-item:hover {
          color: #006A4A;
          border-color: #ebd771;
          font-weight: bold;
          background-color: #fff;
     }


     .btn:link,
     .btn:visited {
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          padding: 15px;
          border-radius: 100px;
          transition: all .2s;
          position: relative;
          background-color: #006A4A;
          color: #fff;
          font-family: 'jost', sans-serif;
          font-size: 12px;


     }


     .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgb(0, 0, 0, 2);
     }

     .btn:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgb(0, 0, 0, 2);
     }

     .btn-white {
          background-color: #fff;
          border: 2px solid #006A4A;
          color: #006A4A;
     }

     .btn::after {
          content: "";
          display: inline-block;
          height: 100%;
          width: 100%;
          border-radius: 100px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          transition: all .4s;
     }

     .btn-white::after {
          background-color: #006A4A;
     }

     .btn:hover::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;


     }

     .btn-aminated {
          animation: moveInBottom .10s ease-out .75s;
          animation-fill-mode: backwards;
     }
</style>