<template>
  <div class="signup-container" v-show="showInscription === true"  @click.self="closeModal">
    <div class="form-box">
      <h1>Create new Account</h1>
      <p>Already Registered? <a href="#">Log in here.</a></p>

      <form @submit.prevent="onSubmit">
        <label for="firstName" class="firstName">First Name :</label>
        <input type="text" id="firstName" name="firstName" v-model="form.firstName" required>

        <label for="lastName" class="lastName">Last Name :</label>
        <input type="text" id="lastName" name="lastName" v-model="form.lastName" required>

        <label for="address" >Address :</label>
        <input type="text" id="address" name="address" v-model="form.address" required>

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="hello@reallygreatsite.com" required  v-model="form.email"/>

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="••••••" required  v-model="form.plainPassword"/>

        <button type="submit">Sign up</button>
      </form>
    </div>
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
/* Le fond semi-transparent avec un dégradé pour tout l'écran */
.signup-container {
  position: fixed;
  top: 18%;
  left: 39%;
  right: 0;
  bottom: 0;
  display: flex;
  width: 560px;
  height: 850px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0a0b1e, #29365c, #3b4180);
  z-index: 1000;
  border-radius: 10px;
}

/* Le modal contenant le formulaire, centré */
.form-box {
  
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: white;
}

/* Titre et étiquette du formulaire */
h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
}

p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 8px;
  text-transform: uppercase; /* Pour correspondre au style de la photo */
}

input {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  outline: none;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

button {
  padding: 15px;
  background-color: #1b1f1f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase; /* Correspond au style de la photo */
}

button:hover {
  background-color: #292c2c;
}

a {
  color: #b3b6ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Modal centré sur grand écran */
@media (min-width: 768px) {
  .form-box {
    position: fixed;
    max-width: 400px;
    width: 400px;
  }
}

/* Pour les tablettes et mobiles : 100% de l'écran */
@media (max-width: 767px) {
  .signup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0a0b1e, #29365c, #3b4180);
  z-index: 1000;
  border-radius: 10px;
}
  .form-box {
    width: 100%;
    height: 100%;
    max-width: none;
    border-radius: 0;
    padding: 20px;
  }
}
</style>
