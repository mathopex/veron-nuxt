<template>
    <div class="container-fluid">
        <modalConnexion :show="showModal" @close="showModal = false"/>
        <modalInscription :show="showModal" @close="showModal = false"/>
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
                    <button @click="modalInscription()" class="noir">Sign Up</button>
                    <button @click="modalConnexion()">Login</button>
                </div>
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
        <div class="cadre-dons col-md-9">
            <div class="col-md-8 text-dons-haut">
                <div class="col-md-5">
                    <span>1000€</span>

                </div>
                <div class="col-md-5">
                    <span>Finance the development of the application</span>
                </div>
            </div>
            <div>
                <progress class="col-md-10" value="20000" max="100000"></progress>
            </div>
            <div class="col-md-10 text-dons-bas">
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
export default {
    components: { modalConnexion, modalInscription},
    name: 'PresentationPage',
    data() {
        return {
            showModal: false
        }
    },

    methods: {
        modalInscription(){
            this.showModal = true
        },
        modalConnexion() {
            this.showModal = true
        }
    }
}
</script>
<style scoped>
.container-fluid {
  width: 98.5vw;
  height: 99vh;
  color: white
}

.section {
    width: 98.5vw;
    height: 99vh;
    overflow: hidden;
}

/* Ajoutez des couleurs ou d'autres styles pour différencier les sections */
#section1 {
 background: linear-gradient(to bottom, #92D050, #FFFFFF);
}

#section2 {
    background-color: rgb(255, 255, 255); 
    display: flex;
    flex-direction: column;
}

.flex {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
}

.flex-ul {
    display: flex;
    justify-content: space-between;
}

.flex-button {
    display: flex;
    justify-content: center;
}

.flex-button button {
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 120px;
    margin: 0 15px;
}

.flex-button .noir {
    background-color: black;
    color: white;
}

.flex-veron {
    display: flex;
    justify-content: space-around;
    font-size: 50px;
    margin-top: -20px;
}

ul li {
    list-style: none;
    font-size: x-large;
    font-weight: 500;
}

.titre {
    margin-top: 30px;
    text-align: center;
    font-size: 100px;
}


.button-app {
    display: flex;
    justify-content: flex-end;
    margin-top: 250px;
}
.button-app-footer {
    display: flex;
    justify-content: space-around;
    margin-top: 250px;
}

.button-app button, .button-app-footer button {
    border-radius: 5px;
    background-color: #92d05000;
    width: 214px;
    font-size: 25px;
}

.google-play {
    margin: 0px 30px;
    font-size: 30px !important;
}

.cadre-dons {
    border: 2px solid black;
    background-color: rgb(146 208 80 / 31%);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    align-self: center;
    margin-top: 60px;
    justify-content: center;
}

progress {
    border: 2px solid black;
      border-radius: 0;
      width: 1600px;
      height: 40px;
}
progress::-webkit-progress-bar {
      background-color: #92d05000;
}

.text-dons-haut {
    display: flex;
    justify-content: flex-start;
}
.text-dons-bas {
    display: flex;
    justify-content: space-between;
}

#section2 span {
    color: #92D050;
    font-weight: 500;
    font-size: 25px;
}

.cadre-info {
    display: flex;
    justify-content: space-between;
}

.infos {
    border: 2px solid #92D050;
    background-color: rgb(146 208 80 / 31%);
    height: 400px;
    margin-top: 30px;
}

.center {
    text-align: center;
}

.flex-end {
    text-align: end;
}

.flex-center {
    display: flex;
    justify-content: center;
    margin-top: 120px;
}

.flex-center img {
    width: 60px;
}
</style>