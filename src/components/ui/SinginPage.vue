<template>
     <header-bar></header-bar>
     <div class="header">
          <h1 class="titre" style="font-size:25px">
               S'inscrire
          </h1>
     </div>

     <div class="login">
          <div class="form-signin">
               <div class="container">
                    <h2 class="tit">S'inscrire</h2>


                    <form @submit.prevent="register" method="post">
                         <div class="mb-3">
                              <label for="name" class="form-label">Nom*</label>
                              <input type="text" class="form-control" id="name" v-model="form.name">
                         </div>
                         <div class="mb-3">
                              <label for="name" class="form-label">Prenom*</label>
                              <input type="text" class="form-control" id="name" v-model="form.prenom">
                         </div>
                         <div class="mb-3">
                              <label for="email" class="form-label">Email*</label>
                              <input type="email" class="form-control" id="email" v-model="form.email">
                         </div>
                         <div class="mb-3">
                              <label for="number" class="form-label">Telephone*</label>
                              <input type="number" class="form-control" id="number" v-model="form.telephone">
                         </div>
                         <div class="mb-3">
                              <label for="password" class="form-label">Mot de Passe*</label>
                              <input type="password" class="form-control" id="password" v-model="form.password">
                         </div>
                         <div class="mb-3">
                              <label for="password_confirmation" class="form-label">Confirmer le Mot de Passe*</label>
                              <input type="password" class="form-control" id="password_confirmation"
                                   v-model="form.password_confirmation">
                         </div>
                         <button type="submit" class="btn btn-warning w-100">Register</button>
                    </form>
               </div>

          </div>
     </div>
</template>

<script>
     import axios from 'axios'
     import HeaderBar from '../partials/HeaderBar.vue'
     export default {
          name: "RegisterView",
          data() {
               return {
                    form: this.initForm()
               }
          },
          components: {
               HeaderBar
          },
          methods: {
               register() {
                    axios.post('api/register', this.form).then(() => {
                         this.form = this.initForm()
                         this.$router.push('/login')
                    }).catch(error => {
                         console.log(error)
                    })
               },

               initForm() {
                    return {
                         name: null,
                         prenom: null,
                         email: null,
                         telephone: null,
                         password: null,
                         password_confirmation: null
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