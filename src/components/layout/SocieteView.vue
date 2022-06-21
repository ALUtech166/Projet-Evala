<template>

     <sidebar-menu>

     </sidebar-menu>
     <div :style="{ 'margin-left': sidebarWidth }">
          <router-view />
     </div>
     <div class="body">
          <div class="header-search">
               <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Recherche</button>
               </form>
          </div>


          <div class="main">
               <h1>Enregistrer Votre Société</h1>
               <p>On va ecrire quelque chose ici</p>
          </div>


          <div class="container">
               <form @submit.prevent="create" method="post">
                    <div class="mb-3">
                         <label for="name" class="form-label">Nom de la Société*</label>
                         <input type="text" class="form-control" id="name" v-model="form.raison_social" required>
                    </div>
                    <div class="mb-3">
                         <label for="name" class="form-label">Addresse de la Société*</label>
                         <input type="text" class="form-control" id="name" v-model="form.adresse_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="email" class="form-label">Numéro de la société*</label>
                         <input type="text" class="form-control" id="email" v-model="form.numero_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="number" class="form-label">Email de la société*</label>
                         <input type="text" class="form-control" id="number" v-model="form.email_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="number" class="form-label">Type de Société*</label>
                         <select class="form-select" id="validationCustom04" v-model="form.type_societe_id" required>
                              <option selected disabled value="">Choose...</option>
                              <option value="1">Informatique</option>
                              <option value="2">Hotel</option>
                              <option value="3">Banque</option>
                         </select>
                    </div>
                    <div class="mb-3">
                         <label for="text" class="form-label">NIF de la Societe*</label>
                         <input type="text" class="form-control" id="text" v-model="form.nif_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="text" class="form-label">RCCM de la Societe*</label>
                         <input type="text" class="form-control" id="text" v-model="form.rccm_societe" required>
                    </div>
                     <div class="mb-3">
                         <label for="image" class="form-label">Logo de la Societe*</label>
                         <input type="file" class="form-control" id="image" @change="uploadImage"  required>
                    </div>
                     <div class="mb-3">
                         <label for="image" class="form-label">Photo de la Societe*</label>
                         <input type="file" class="form-control" id="image" @change="uploadImage" required>
                    </div>
                     <div class="mb-3">
                         <label for="text" class="form-label">Note de la société*</label>
                         <input type="text" class="form-control" id="text" v-model="form.note_societe" required>
                    </div>

                    <button type="submit" class="btn btn-warning w-100">Soumettre</button>
               </form>
              
          </div>



     </div>
</template>

<script>
     import SidebarMenu from "../SideBar/SidebarMenu.vue"
     import axios from 'axios'
     import {
          sidebarWidth
     } from '@/components/state'
     export default {
          components: {
               SidebarMenu
          },


          setup() {
               return {
                    sidebarWidth
               }
          },


          data() {
               return {
                    form: {
                         raison_social: '',
                         adresse_societe: '',
                         numero_societe: '',
                         email_societe: '',
                         nif_societe: '',
                         rccm_societe: '',
                         logo_societe: '',
                         photo_societe: '',
                         note_societe: ''

                    }
               }
          },

          methods: {
               uploadImage(event) {
                    this.logo_societe = event.target.files[0],
                    this.photo_societe = event.target.files[0]
               },
               create() {
                    axios.post('api/societe', this.form).then((response) => {
                         localStorage.setItem('token', response.data.access_token)
                         this.$router.push('/portal')
                    }).catch(error => {
                         console.log(error)
                    })
               },


          }

     }
</script>

<style scoped>
     form,
     .input-group {
          padding: 1rem;
     }

     .container {
          margin: 2rem auto;
          max-width: 75rem;
         
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     span {
          font-weight: bold;
          font-size: 45px;
          color: #006A4A;
     }

     h1 {
          color: #006A4A;
          font-size: 45px;
     }

     p {
          color: #006A4A;
          font-size: 20px;
     }

     .header-search {
          background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
          padding: 5rem;
          text-align: center;
     }

     .body {
          font-family: 'jost';
          
     }

     .main {
          padding: 2rem;
          text-align: center;
     }
</style>