<template>
      <div class="modal">
        <h1>SignIn/connexion</h1>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email">Identifiant :</label>
            <input type="text" id="email" name="email" v-model="form.email">
          </div>
          <div class="form-group">
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" v-model="form.password">
          </div>
          <button type="submit" class="btn">Connexion</button>
        </form>
      </div>

  </template>
  
  <script>
  import { LOGIN } from '~/store/storeConst/actions.type'
  export default {
    name: 'ModalConnexion',
    props: ['show'],
    data(){
        return {
            form: {
            email: '',
            password: ''
          }
        }
    },
    methods: {
        async onSubmit() {
            this.isLoading = true
            try {
              await this.$store.dispatch(`authModule/${LOGIN}`, {
                email: this.form.email,
                password: this.form.password
              })
            } catch (e) {
              this.isLoading = false
              console.log(e)
            }
          },
      closeModal() {
        this.$emit('close')
      }
    }
  }
  </script>
  
  <style scoped>
   .modal {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    overflow: auto;
    background-color: #8BC34A;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
  </style>
  