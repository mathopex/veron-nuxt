<template>
      <div v-show="showConexion === true" class="modal" @click.self="closeModal">
        <h1>SignIn/connexion</h1>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email" clas="identyfiant">Identifiant :</label>
            <input type="text" id="email" name="email" v-model="form.email">
          </div>
          <div class="form-group">
            <label for="password" class="marginTL">Mot de passe :</label>
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
    props: ['showConexion'],
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
          try {
            await this.$store.dispatch(`authModule/${LOGIN}`, {
              email: this.form.email,
              password: this.form.password
            })
            this.$emit('close')
          } catch (e) {
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
    left: 40%;
    top: 40%;
    width: 551px;
    height: 300px;
    overflow: auto;
    background: linear-gradient(180deg, rgba(146,208,80,1) 0%, rgba(207,234,177,1) 89%, rgba(255,255,255,1) 115%);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid black;
}

.modal h1 {
  margin-bottom: 30px;
}

.modal button {
  background-color: black;
  color: white;
  margin-left:0px;
  margin-left: 109px;
  margin-top: 15px;

}

.identyfiant{
  margin-left: 22px; 
  margin-bottom: 15px;
}

.marginTL{
  margin-left: -24px;
  margin-top: 15px;
}
</style>
  