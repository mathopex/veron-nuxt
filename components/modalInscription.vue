<template>
    <div v-show="showInscription === true" class="modal" @click.self="closeModal" >
      <h1>SignIn/connexion</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group ">
          <label for="email" class="email">Email :</label>
          <input type="text" id="email" name="email" v-model="form.email">
        </div>
        <div class="form-group ">
          <label for="password" class="password">Mot de passe :</label>
          <input type="password" id="password" name="password" v-model="form.plainPassword">
        </div>
        <div class="form-group ">
          <label for="firstName" class="firstName">First Name :</label>
          <input type="text" id="firstName" name="firstName" v-model="form.firstName">
        </div>

        <div class="form-group">
          <label for="lastName" class="lastName">Last Name :</label>
          <input type="text" id="lastName" name="lastName" v-model="form.lastName">
        </div>

        <div class="form-group address">
          <label for="address" >Address :</label>
          <input type="text" id="address" name="address" v-model="form.address">
        </div>
        <button type="submit" class="btn">Inscription</button>
      </form>
    </div>

</template>

<script>
import { REGISTER_USER } from '~/store/storeConst/actions.type'
export default {
  props: ['showInscription'],
  data(){
      return {
          form: {
            email: '',
            plainPassword: '',
            firstName: '',
            lastName: '',
            address: ''
        }
      }
  },
  methods: {
    async onSubmit() {
        try {
            this.$store.dispatch(`registerModule/${[REGISTER_USER]}`, {
                email: this.form.email,
                plainPassword: this.form.plainPassword,
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                address: this.form.address      
            })
          this.$emit('close')
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
  color: white;
  display: block;
  position: fixed;
  left: 40%;
  top: 40%;
  width: 551px;
  height: 400px;
  overflow: auto;
  background: radial-gradient(circle, rgba(30,186,188,1)0%, rgba(34,50,75,1)100%);
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

.email {
  margin-left: 18px;
}

.password {
  margin-left: -39px;
}

.firstName {
  margin-left: -20px;

}
.lastName {
  margin-left: -18px;
}

form div{
  margin-bottom: 10px;
}
</style>
