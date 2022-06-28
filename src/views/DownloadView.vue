<template>
     <header-bar></header-bar>
     <div class="header">
          <h1 class="titre">
               Download
          </h1>
     </div>


     <div class="body">
          <div class="container">
               <div class="row">

                    <div class="col-lg-6">
                         <h1>Rejoignez plus de <span>5 000</span> clients.</h1>
                         <p>plus de 5000 personnes utilisent Kara Events. Obtenez
                              l'application et commencez à réserver à l'avance.
                         </p>
                         <button type="button" class="btn btn-dark btn-lg"><i class="fab fa-apple"></i>
                              Download</button>
                         <button type="button" class="btn btn-outline-light btn-lg"><i class="fab fa-google-play"></i>
                              Download</button>
                    </div>


                    <div class="col-lg-6">
                         <img class="img-fluid" src="" alt="iphone-mockup">
                    </div>

               </div>
          </div>

     </div>



</template>

<script>
     import axios from "axios";
     import HeaderBar from "../components/partials/HeaderBar.vue";

     export default {
          name: "LoginView",
          data() {
               return {
                    form: this.initForm()
               }
          },

          components: {
               HeaderBar
          },

          methods: {
               login() {
                    axios.post('api/login', this.form).then((response) => {
                         localStorage.setItem('token', response.data.access_token)
                         this.$router.push('/user-profile')
                    }).catch(error => {
                         console.log(error)
                    })
               },

               initForm() {
                    return {
                         email: null,
                         password: null
                    }
               }
          }
     }
</script>

<style scoped>
     .body {
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          padding: 50px;
          text-align: center;
     }

     button {
          margin: 10px;
     }

     span {
          color: red;
     }

     p {
          color: black;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 20px;

     }



     h1 {
          font-size: 30px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
     }


     form {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 2rem;
          background-color: #ffffff;
          font-family: 'Jost';

     }

     .tit {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          background-color: #ffffff;
          border-radius: 12px;
     }

     h2 {
          font-family: 'Jost';
          text-align: center;
          padding: 10px;
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
          /*  animation: moveInRight 10s ease-out;
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