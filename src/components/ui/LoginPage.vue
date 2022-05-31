<template>

     <div class="divider">
          <div class="form">

               <form class="mb-5" @submit="addUser">
                    <h1 class="modal-title" id="exampleModalToggleLabel" style="color: #006A4A">Se Connecter</h1>
                    <br>
                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Nom d'utilisateur *</label>
                              <input type="text" class="form-control" name="nom" id="name"
                                   placeholder="Nom d'utilisateur" required>
                         </div>

                    </div>

                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <label for="" class="col-form-label">Mot de Passe *</label>
                              <input type="password" class="form-control" name="email" id="email"
                                   placeholder="Mot de Passe" required>
                         </div>
                    </div>


                    <div class="row">
                         <div class="col-md-6 form-group mb-5">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                   Se rappeler de moi
                              </label>
                         </div>

                         <div class="col-md-6 form-group mb-5">
                              <a href="#" class="btn-outline-success">Mot de passe oublié?</a>
                         </div>
                    </div>

                    <br>


                    <div class="row">
                         <div class="col-md-12 form-group">
                              <input id="button" type="submit" value="Se Connecter" class="btn btn-success btn-animated" href="/profil">
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

     label {
          font-size: 19px;
     }

     #button {
          width: 100%;
          color: #006A4A;
          background-color: #ffcc00;
          font-size: 20px;
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
          background-color: #006A4A;
          color: #fff;
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

     .btn-success::after {
          background-color: #006A4A;
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