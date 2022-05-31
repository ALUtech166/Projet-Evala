<template>

     <div class="divider">
          <div class="form">

               <form class="mb-5" @submit="addUser">
                    <h1>S'identifer</h1>
                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Prénoms *</label>
                              <input type="text" class="form-control" name="nom" id="name" placeholder="Votre Nom"
                                   required v-model="name">
                         </div>

                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Nom *</label>
                              <input type="text" class="form-control" name="nom" id="name" placeholder="Votre Nom"
                                   required v-model="name">
                         </div>

                    </div>

                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Numéro de Téléphone *</label>
                              <input type="number" class="form-control" name="password" id="phone"
                                   placeholder="Numéro de Téléphone" required v-model="password">
                         </div>
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Addresse mail *</label>
                              <input type="email" class="form-control" name="email" id="email"
                                   placeholder="Addresse mail" required v-model="email">
                         </div>

                    </div>

                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Adresse de provenance *</label>
                              <input type="text" class="form-control" name="password" id="phone"
                                   placeholder="Numéro de Téléphone" required v-model="password">
                         </div>
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Adresse résidente *</label>
                              <input type="text" class="form-control" name="remember_token" placeholder="Objet" required
                                   v-model="remember_token">
                         </div>
                    </div>


                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Pays de provenance *</label>
                              <input type="text" class="form-control" name="password" id="phone"
                                   placeholder="Numéro de Téléphone" required v-model="password">
                         </div>
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Date de Naissance *</label>
                              <input type="date" class="form-control" name="remember_token" placeholder="Objet" required
                                   v-model="remember_token">
                         </div>
                    </div>

                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Mot de Passe *</label>
                              <input type="password" class="form-control" name="email" id="email"
                                   placeholder="Mot de Passe" required>
                         </div>

                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Confirmer le mot de Passe *</label>
                              <input type="password" class="form-control" name="email" id="email"
                                   placeholder="Mot de Passe" required>
                         </div>
                    </div>

                    <div class="row">
                         <div class="col-md-12 form-group">
                              <input type="submit" value="Créer un compte" class="btn btn-success btn-animated">
                              <span class="submitting"></span>
                         </div>
                    </div>
               </form>



          </div>

     </div>
</template>

<script>
     export default {

          data() {
               return {
                    name: '',
                    email: '',
                    password: '',
                    remember_token: '',
                    create_at: '',
                    update_at: ''

               }
          },

          methods: {
               addUser() {

                    fetch('https://app-control-f04f4-default-rtdb.firebaseio.com//users.json', {
                              // It is to post data like send a data
                              method: 'POST',
                              mode: "no-cors",
                              headers: {
                                   'Content-Type': 'application/json',
                              },

                              body: JSON.stringify({
                                   name: this.name,
                                   email: this.email,
                                   password: this.password,
                                   remember_token: this.remember_token,
                                   create_at: this.create_at,
                                   update_at: this.update_at


                              }),
                         }).then(res => res.json())
                         .then(res => console.log(res));


               }
          },

     }
</script>
<style scoped>
     .modal-title,
     label {
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }

    h1 {
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          color: #006A4A;
     }


     label {
          font-size: 15px;
     }

     .modal-body {
          width: 100%;
          padding: 2rem;
     }

     form {
          max-width: 90rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
          padding: 2rem;
          background-color: #ffffff;
          font-family: 'Jost';
     }



     .btn:link,
     .btn:visited {
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 40px;
          display: inline-block;
          border-radius: 100px;
          transition: all .2s;
          position: relative;

     }


     .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgb(0, 0, 0, 2);
     }

     .btn:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgb(0, 0, 0, 2);
     }

     .btn-success {
          background-color: #ffcc00; 
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

    

     .btn:hover::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;


     }

     .btn-animated {
          animation: moveInBottom .5ss ease-out .75s;
          animation-fill-mode: backwards;
     }
</style>