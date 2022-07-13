<template>
     <div class="menu">
          <nav class="navbar navbar-expand-lg navbar-light" style="">
               <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                         <img class="img-fluid" src="../images/Ok.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                         aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>

                    <br>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown" style="text-align: right">
                         <ul class="navbar-nav">


                              <li><router-link class="dropdown-item" to="/">Accueil</router-link></li>
                              <li><router-link class="dropdown-item" to="/about">Accomodation</router-link></li>
                              <li><router-link class="dropdown-item" to="/events">Evenements</router-link></li>
                              <li><router-link class="dropdown-item" to="/reservation-ticket">Reservation</router-link></li>
                              <li><router-link class="dropdown-item" to="/download">Telecharger</router-link></li>



                              <!--  <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle dropdown-item" to="#"
                                        id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        
                                   </a>
                                   <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a class="dropdown-item" to="/evala">Evala</a></li>
                                        <li><a class="dropdown-item" to="/akpema">Akpema</a></li>
                                        <li><a class="dropdown-item" to="/habye">Habyé</a></li>
                                        <li><a class="dropdown-item" to="/kondona">Kondona</a></li>
                                   </ul>
                              </li> -->
                              <!-- <li><a class="dropdown-item" to="/kozah">La KARA</a></li> -->
                              <li><router-link class="dropdown-item" to="/blog">Actualités</router-link></li>
                              <!--    <li><a class="dropdown-item" to="/contact">Contacts</a></li> -->
                              <li><router-link class="btn btn-white btn-animated" to="/login" role="button">Se Connecter</router-link>
                              </li>

                         </ul>




                    </div>
               </div>
          </nav>
     </div>



</template>

<script>

     export default {
          components: {
               
          }

     }
</script>

<style scoped>


     nav {
          background-color: #006A4A;
          background-color: transparent;

          

     }

     .menu {
          text-align: center
     }


     .modal-content {
          padding: 0.5rem;
     }

     h1 {
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }

     p {
          padding: 10px;
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Jost', sans-serif;
          font-weight: 900;
          color: #006A4A;
          font-size: 20px;


     }

     li {
         
          font-family: 'Jost', sans-serif;
          font-weight: bold;
          text-transform: uppercase;
          padding: 15px;
          

     }



     


     ul,
     .link,
     .dropdown-item,
     .dropdown-toggle {
          list-style: none;
          text-decoration: none;
          font-family: 'Josefin Sans', sans-serif;
          padding: 10px;
          text-align: right;
          margin-right: 15px;
          

     }


     .link,
     .dropdown-item {
          font-size: 12px;
          transition: .5s ease all;
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
          padding: 10px;
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

   
     /* // Large devices (desktops, less than 1200px) */
     @media (max-width: 1199.98px) {
        


     }

     @media (max-width: 1303px) and (max-width: 999px) {
         

         
         
     }

     @media (max-width: 1381px) {
       
     }

     /* 
     // X-Large devices (large desktops, less than 1400px) */
     @media (max-width: 1399.98px) {}

     /* // XX-Large devices (larger desktops)
     // No media query since the xxl breakpoint has no upper bound on its width */
</style>