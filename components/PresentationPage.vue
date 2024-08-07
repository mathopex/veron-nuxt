<template>
    <div class="container-fluid">
        <modalConnexion :showConexion="showModalConexion" @close="showModalConexion = false"/>
        <modalInscription :show="showModalInscription" @close="showModalInscription = false"/>
        <div class="section" id="section1">
            <div class="flex col-md-12">
            <div class="col-md-4 flex-veron">
                <p>Ver<font-awesome-icon icon="lock"/>n</p>
            </div>
            <div class="col-md-4">
                <div class="flex-button">
                    <button @click="modalInscription()" class="noir">Sign Up</button>
                    <button @click="modalConnexion()">Login</button>
                </div>
            </div>
        </div>
        <div class="navBar col-md-12">
            <div class="col-md-4 marginTop">
                <ul class="flex-ul">
                    <li>About</li>
                    <li>Product</li>
                    <li>Support</li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
        <div class="titre">
            <p>Get Started !​</p>
            <p>The first digital saving safe ​</p>
        </div>
        <div class="button-app">
            <button>Download on the ​App Store</button>
            <button class="google-play">Get in on Google play ​</button>
        </div>
    </div>
    <div class="section" id="section2">
        <div class="cadre-dons col-md-9 col-sm-11">
            <div class="col-md-8 text-dons-haut">
                <div class="col-md-5">
                    <span>1000€</span>

                </div>
                <div class="col-md-5">
                    <span>Finance the development of the application</span>
                </div>
            </div>
            <div class="col-md-10 col-sm-10">
                <progress class="col-md-12 col-sm-12" value="20000" max="100000"></progress>
            </div>
            <div class="col-md-10 col-sm-10 text-dons-bas">
                <span>Objectif : 100 000€</span>
                <span>en cours</span>
            </div>
        </div>
        <div class="flex-center col-md-12">
            <div class="col-md-10 cadre-info">
                <div class="col-md-2">
                    <div  class="center"> 
                        <img src="informations.png">
                        <span>About</span>
                    </div>
                    <div class="col-md-12 infos">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="center"> 
                        <img src="sauter.png">
                        <span>Product</span>
                    </div>
                    <div class="col-md-12 infos">
                    </div>
                </div>
                <div class="col-md-2">
                    <div  class="center"> 
                        <img src="service.png">
                        <span>Support </span>
                    </div>
                    <div class="col-md-12 infos ">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="center"> 
                        <img src="fermer-a-cle.png">  
                        <span>Security</span>
                    </div>
                    <div class="col-md-12 infos">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section" id="section1">
        <div class="flex col-md-12">
            <div class="col-md-4 flex-veron">
                <p>Ver<font-awesome-icon icon="lock"/>n</p>
            </div>
            <div class="col-md-4">
                <ul class="flex-ul">
                    <li>About</li>
                    <li>Product</li>
                    <li>Support</li>
                    <li>Security</li>
                </ul>
            </div>

            <div class="col-md-4">
                <div class="flex-button">
                    <button class="noir">Sign Up</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
        <div class="button-app-footer" > 
            <div>  
                <span>Veron.App@hotmail.com</span>
            </div>
           <div>
            <button>Download on the ​App Store</button>
            <button class="google-play">Get in on Google play ​</button>
           </div>
           
        </div>
    </div>
  </div>
</template>
<script>
import modalConnexion from './modalConnexion.vue'
import modalInscription from './modalInscription.vue'
import '@/assets/css/smartphone.css'
import '@/assets/css/pc.css'
export default {
    components: { modalConnexion, modalInscription},
    name: 'PresentationPage',
    data() {
        return {
            showModalConexion: false,
            showModalInscription: false
        } 
    },

    methods: {
        modalInscription(){
            this.showModalInscription = true
            this.showModalConexion = false
            
        },
        modalConnexion() {
            this.showModalConexion = true
            this.showModalInscription =  false
        }
    }
}
</script>