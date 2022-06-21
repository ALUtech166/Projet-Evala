<template>
     <div class="container">
          <form action="" @submit.prevent="create">
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Nom de la Société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.raison_social" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Addresse de la Société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.adresse_societe" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Numéro de la société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.numero_societe" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Email de la société</span>
                    <input type="email" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.email_societe" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Type de Société</span>
                    <select class="form-select" id="inputGroupSelect01" required>
                         <option selected>Choose...</option>
                         <option value="1">Informatique</option>
                         <option value="2">Hotel</option>
                         <option value="3">Banque</option>
                    </select>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">NIF de la Societe</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.nif_societe" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">RCCM de la Societe</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.rccm_societe" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Logo de la société</span>
                    <input type="file" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Photos de la société</span>
                    <input type="file" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" required>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Note de la société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg" v-model="form.note_societe" required>
               </div>
               <!-- <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Nom de votre Agence</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Photo de l'Agence</span>
                    <input type="file" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Localisation</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Description</span>
                    <textarea class="form-control" aria-label="With textarea" rows="5"></textarea>
               </div>
 -->
               <div style="text-align: right">
                    <button type="button" class="btn btn-danger">Soumettre</button>
               </div>
          </form>
     </div>
</template>

<script>
     import axios from 'axios'
     export default {
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
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     span {
          font-weight: bold;
          font-size: 45px;
          color: #006A4A;
     }
</style>