<template>
     <div class="header">
          <h1 class="titre" style="font-size:25px">
               Se Connecter
          </h1>
     </div>


     <div class="login">
          <div class="container">
               <div class="form-signin">

                    <h2 class="tit">Se Connecter</h2>

                    <form @submit.prevent="login">
                         <div class="mb-3">
                              <label for="email" class="form-label">Email *</label>
                              <input type="email" class="form-control" id="email" v-model="form.email">
                         </div>
                         <div class="mb-3">
                              <label for="password" class="form-label">Mot de Passe *</label>
                              <input type="password" class="form-control" id="password" v-model="form.password">
                         </div>

                         <div class="mb-3">
                              vous avez pas encore un compte? creer ton compte <a href="/register"  rel="noopener noreferrer">ici</a>
                         </div>
                         <button type="submit" class="btn btn-warning w-100">Login</button>
                    </form>
               </div>
          </div>
     </div>

</template>

<script>
     import axios from "axios";

     export default {
          name: "LoginView",
          data() {
               return {
                    form: this.initForm()
               }
          },

          methods: {
               login() {
                    axios.post('http://karaevents.mekengroup.com/api/login', this.form).then((response) => {
                         localStorage.setItem('token', response.data.access_token)
                         this.$store.dispatch('user', response.data)
                         this.$router.push('/')
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
     .form-signin {
          width: 100%;
          max-width: 600px;
          height: 100%;
          padding: 15px;
          margin: 5rem auto 0;
     }

     .login {
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          padding: 50px;
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
          background-image: linear-gradient(to right bottom,
                    rgba(126, 213, 111, 0.505),
                    rgba(40, 180, 131, 0.481)),
               url(../images/hero.jpg);
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
</style>