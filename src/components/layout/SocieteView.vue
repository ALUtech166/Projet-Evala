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
                         <input type="text" class="form-control" id="name" v-model="raison_social" required>
                    </div>
                    <div class="mb-3">
                         <label for="name" class="form-label">Addresse de la Société*</label>
                         <input type="text" class="form-control" id="name" v-model="adresse_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="email" class="form-label">Numéro de la société*</label>
                         <input type="text" class="form-control" id="email" v-model="numero_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="number" class="form-label">Email de la société*</label>
                         <input type="text" class="form-control" id="number" v-model="email_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="number" class="form-label" v-if="program && program.length">Type de
                              Société*</label>
                         <select class="form-select" id="validationCustom04" v-model="type_societe_id" required>
                              <option selected disabled value="">Choose...</option>
                              <option :value="pro.id" v-for="pro of program" :key="pro.id">{{ pro.nom_type_societe}}
                              </option>

                         </select>
                    </div>
                    <div class="mb-3">
                         <label for="text" class="form-label">NIF de la Societe*</label>
                         <input type="text" class="form-control" id="text" v-model="nif_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="text" class="form-label">RCCM de la Societe*</label>
                         <input type="text" class="form-control" id="text" v-model="rccm_societe" required>
                    </div>
                    <div class="mb-3">
                         <label for="image" class="form-label">Logo de la Societe*</label>
                         <input type="file" class="form-control" id="image" @change="uploadImage" required>
                         <div id="preview">
                              <img style="width: 100px" v-if="imageUrl" :src="imageUrl" />
                         </div>
                    </div>
                    <div class="mb-3">
                         <label for="image" class="form-label">Photo de la Societe*</label>
                         <input type="file" class="form-control" id="image" @change="uploadPhoto" required>
                         <div id="preview">
                              <img style="width: 100px" v-if="photoUrl" :src="photoUrl" />
                         </div>
                    </div>
                    <div class="mb-3">
                         <label for="text" class="form-label">Note de la société*</label>
                         <input type="text" class="form-control" id="text" v-model="note_societe" required>
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
                    program: [],
                    errors: [],

                    raison_social: '',
                    adresse_societe: '',
                    numero_societe: '',
                    email_societe: '',
                    nif_societe: '',
                    rccm_societe: '',
                    logo_societe: '',
                    photo_societe: '',
                    note_societe: '',
                    imageUrl: '',
                    photoUrl: ''


               }
          },


          created(data) {
               axios.get(`api/type_societe`)
                    .then(response => {
                         // JSON responses are automatically parsed.
                         this.program = response.data
                         console.log(data)
                    })
                    .catch(e => {
                         this.errors.push(e)
                    })
          },

          methods: {
               uploadImage(e) {
                    const file = e.target.files[0]
                    this.logo_societe = file
                    this.imageUrl = URL.createObjectURL(file)
               },

               uploadPhoto(e) {
                    const file = e.target.files[0]
                    this.photo_societe = file
                    this.photoUrl = URL.createObjectURL(file)
               },

               create() {

                    const data = new FormData();
                    data.append('image', this.logo_societe, this.logo_societe.name)
                    const db = new FormData();
                    db.append('image', this.photo_societe, this.photo_societe.name)
                    axios.post('api/societe', {
                         raison_social: this.raison_social,
                         adresse_societe: this.adresse_societe,
                         numero_societe: this.numero_societe,
                         email_societe: this.email_societe,
                         nif_societe: this.nif_societe,
                         rccm_societe: this.rccm_societe,
                         logo_societe: data,
                         photo_societe: db,
                         note_societe: this.note_societe,


                    }).then(() => {
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