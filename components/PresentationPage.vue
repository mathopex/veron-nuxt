<template>
    <div class="container-fluid">
        <modalConnexion :showConexion="showModalConexion" @close="showModalConexion = false"/>
        <modalInscription :showInscription="showModalInscription" @close="showModalInscription = false"/>
        <div class="section" id="section1">
            <div class="flex col-md-12 col-sm-12" id="hautPage">
            <div class="col-md-4 col-sm-4 flex-veron">
                <p>Ver<font-awesome-icon icon="lock"/>n</p>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="flex-button">
                    <button @click="modalInscription()" class="noir">Sign Up</button>
                    <button @click="modalConnexion()">Login</button>
                </div>
            </div>
        </div>
        <div class="navBar col-md-12 col-sm-12">
            <div class="col-md-4 col-sm-4 marginTop">
                <ul class="flex-ul">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Product">Product</a></li>
                    <li><a href="#Support">Support</a></li>
                    <li><a href="#Security">Security</a></li>
                </ul>
            </div>
        </div>
        <div class="titre">
            <p>Get Started !</p>
            <p>The first digital saving safe </p>
        </div>
        <div class="button-app">
            <button><img src="applePay.jpg" /></button>
            <button><img src="googlePlay.png"/></button>
        </div>
    </div>
    <div class="section" id="section2">
        <div class="cadre-dons col-md-9 col-sm-9">
            <div class="col-md-6 col-sm-6 text-dons-haut">
                    <span>Finance the development of the application</span>
            </div>
            <div class="col-md-10 col-sm-10 cadre-don-centre">
                <div class="col-md-5 col-sm-5">
                    <span>1000€</span>

                </div>
                <div class="col-md-10 col-sm-10">
                    <progress class="col-md-12 col-sm-12" value="20000" max="100000"></progress>
                </div>
                <div class="col-md-10 col-sm-10 text-dons-bas">
                    <span>Objectif : 100 000€</span>
                    <span>en cours</span>
                </div>
            </div>
            <div class="cadre-don-centre-img col-md-12">
                <div>
                    <button><img src="paypal.png"></button>
                </div>
                <div>
                    <button><img src="cartes.png"></button>
                </div>
            </div>
        </div>
        <div class="flex-center col-md-12 col-sm-12">
            <div class="col-md-10 col-sm-10 cadre-info">
                <div class="col-md-5 col-sm-3 container-info">
                    <div>
                        <div class="col-md-12 col-sm-12 infos" id="About">
                            <div class="center"> 
                                <img src="informations.png">
                                <span>About</span>
                            </div>
                            <p>La crise sanitaire a fait émerger de nouveaux paradigmes.</p>
                            <p>Pour sauvegarder leur activité lors des différents confinements, les entreprises ont eu besoin de mettre en place très rapidement des solutions de paiements dématérialisées, robustes et sécurisées.</p>
                            <p>Pour ce faire, elles ont pu s’appuyer sur le savoir-faire des établissements de monnaie électronique, dont la technologie a permis, au plus vite, d’intégrer la fonction paiement à leur chaîne de valeur. La révolution des paiements est aujourd’hui en marche.</p>
                            <p>Elle répond à deux impératifs : côté entreprises, il s’agit de disposer de solutions facilement intégrables à leurs applications et conformes à la réglementation.</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="logoHomme1.png"/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-3 container-info">
                    <div>
                        <div class="col-md-12 col-sm-12 infos" id="Product">
                            <div class="center"> 
                                <img src="sauter.png">
                                <span>Product</span>
                            </div>
                            <p>Veron est une plateforme qui vous permet d’épargne votre argent.</p> 
                            <p>Tout comme la définition d’un (coffre-fort qui est généralement un bon endroit pour stocker des documents importants et des objets de valeur auxquels vous ne prévoyez pas d'accéder) Elle vous permettra d’épargne l’argent prévue pour des vacances et d’autres loisir quotidien.Comment ça marché ?</p>
                            <p>Vous souhaitez mettre de l’argent de cote, vous pensez quand le laissant dans votre compte bancaire vous risquerais d’être prélevé </p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="logoHomme2.png"/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-3 container-info" >
                    <div>
                        <div class="col-md-12 col-sm-12 infos" id="Support">
                            <div  class="center"> 
                                <img src="service.png">
                                <span>Support </span>
                            </div>
                            <p>Contrairement à d’autres application comme { Plum, Bankin , Cashbee , Moka, Yeeld, etc…} qui sont plus oriente à des conseils financier auprès de leurs clientèles.</p>
                            <p>Veron n ’a pas pour but tout cela nous analysons pas les rentrée d’argent de nos clients, l’appli offre pas de conseils pour aider l’utilisateurs à mieux gérer son épargne comme les application cité.</p>
                            <p>Veron est littéralement un portefeuille comme celle que vous porté dans votre poche,En seulement numérique, vous pouvait l’utilisez quand cela vous semble.</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="logoHomme3.png"/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-3 container-info">
                    <div>
                        <div class="col-md-12 col-sm-12 infos" id="Security">
                            <div class="center"> 
                                <img src="fermer-a-cle.png">  
                                <span>Security</span>
                            </div>
                            <p>Les 4 piliers de la sécurité</p>
                                <p>Sécurité est un mot fourre-tout qui peut vouloir dire beaucoup de choses. De notre point de vue, un service sécurisé — c'est à dire dans lequel vous pouvez avoir confiance — repose sur quatre principes clés :</p>
                                <ul>
                                    <li>Fiabilité du système</li>
                                    <li>Responsabilité de l'entreprise</li>
                                    <li>Protection de la vie privée</li>
                                    <li>Gestion des données</li>
                                </ul>
                                <p>Si une entreprise fait défaut sur l'un de ces domaines, il y a de grande chances pour que vous ne lui fassiez plus (jamais) confiance. C'est pourquoi nous tenons à être extrêmement clairs sur nos exigences en la matière.</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="logoHomme4.png"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="partner-container col-md-12 col-sm-12">
            <h2>Partner</h2>
            <div class="partner">
                <div class="quonto">
                    <img src="qonto.png">
                </div>
                <div class="paypal">
                    <img src="Paypal-appli.png">
                </div>
            </div>
        </div>
    </div>
    <div class="section" id="section1">
        <div class="flex col-md-12">
            <div class="col-md-4 flex-veron">
                <a href="#hautPage">Ver<font-awesome-icon icon="lock"/>n</a>
            </div>
            <div class="col-md-4">
                <ul class="flex-ul">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Product">Product</a></li>
                    <li><a href="#Support">Support</a></li>
                    <li><a href="#Security">Security</a></li>
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
           <div class="button-app">
            <button><img src="applePay.jpg" /></button>
            <button><img src="googlePlay.png"/></button>
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