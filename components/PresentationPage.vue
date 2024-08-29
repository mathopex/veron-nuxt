<template>
    <div class="container-fluid">
        <modalConnexion :showConexion="showModalConexion" @close="showModalConexion = false"/>
        <modalInscription :showInscription="showModalInscription" @close="showModalInscription = false"/>
        <div class="section" id="section1">
            <div class="grid-container">
                <div class="flex col-md-12 col-sm-12" id="hautPage">
                    <div class="col-md-4 col-sm-4 flex-veron">
                        <p>Ver<img src="cadena.png">n</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 button-container">
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
                <button><img src="applePay.png" class="applePay" /></button>
                <button><img src="googlePlay.png"/></button>
            </div>
        </div>
        <div class="section" id="section2">
            <div class="cadre-dons col-md-9 col-sm-9">
                <div class="col-md-6 col-sm-6 text-dons-haut">
                        <span>Finance the development of the application</span>
                </div>
                <div class="col-md-10 col-sm-10 cadre-don-centre">
                    <div class="col-md-5 col-sm-5 montant-don">
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
                    <button>Faire une donnation</button>
                </div>
            </div>
            <div class="flex-center col-md-12 col-sm-12">
                <div class="col-md-12 col-sm-10 cadre-info">
                    <div class="col-md-12 col-sm-3 container-info" >
                        <div>
                            <div class="col-md-12 col-sm-12 infos sticky-element" id="About" ref="stickyElement" :class="{ fixed: isSticky }">
                                <div class="center"> 
                                    <img src="informations.png">
                                    <span>About</span>
                                </div>
                                    <p>
                                        Pour sauvegarder leur activité lors des différents confinements, les entreprises ont eu besoin de mettre en place très rapidement des solutions de paiements dématérialisées, robustes et sécurisées. 
                                        Pour ce faire, elles ont pu s’appuyer sur le savoir-faire des établissements de monnaie électronique, dont la technologie a permis, au plus vite, d’intégrer la fonction paiement à leur chaîne de valeur. 
                                        La révolution des paiements est aujourd’hui en marche. 
                                        Elle répond à deux impératifs : côté entreprises, il s’agit de disposer de solutions facilement intégrables à leurs applications et conformes à la réglementation. 
                                        Côté consommateurs, l’intégration de solutions de paiement simplifie le parcours d’achats en rendant chaque transaction plus fluide et plus intuitive.  
                                        Le partage des données ne semble plus être un frein, à la condition toutefois que celui-ci offre, en retour, des avantages commerciaux.  
                                        Au-delà des marchands, les fintechs semblent aujourd’hui accélérer leurs propositions de services, grâce aux possibilités offertes par les plateformes BaaS.  
                                        Que leurs offres soient BtoB, BtoC ou BtoBtoC, la finance embarquée est aujourd’hui le point de départ du développement de nouveaux services. 
                                        Pionnier français du BaaS – Banking-as-a-Service - Veron s’emploie à vous accompagner en proposant des solutions agiles et avec un minimum de contraintes opérationnelles.  
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-3 container-info" >
                        <div>
                            <div class="col-md-12 col-sm-12 infos" id="Product">
                                <div class="center"> 
                                    <img src="sauter.png">
                                    <span>Product</span>
                                </div>
                                <p>
                                    Veron est une plateforme qui vous permet d’épargne votre argent. 
                                    Tout comme la définition d’un (coffre-fort qui est généralement un bon endroit pour stocker des documents importants et des objets de valeur auxquels vous ne prévoyez pas d'accéder) Elle vous permettra d’épargne l’argent prévue pour des vacances et d’autres loisir quotidien. 
                                    Comment ça marché ?  
                                    Vous souhaitez mettre de l’argent de cote, vous pensez qu’en le laissant dans votre compte bancaire vous risquerais d’être prélevé par la banque. 
                                    Oubliez la banque également et le sous de matelas pour épargne votre argent. 
                                    Crée un compte chez Veron est épargne seulement l’argent sur lequel vous n’avez pas forcément besoin d’un l'immédiat est récupérer quand cela vous souhaite. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-3 container-info">
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
                    </div>
                    <div class="col-md-12 col-sm-3 container-info">
                        <div>
                            <div class="col-md-12 col-sm-12 infos" id="Security">
                                <div class="center"> 
                                    <h3><strong>Security</strong></h3>
                                    <p>
                                            Les 4 piliers de la sécurité: 
                                            Sécurité est un mot fourre-tout qui peut vouloir dire beaucoup de choses. De notre point de vue, un service sécurisé — c'est à dire dans lequel vous pouvez avoir confiance — repose sur quatre principes clés : 
        
                                            <ul>
                                                <li>Fiabilité du système </li>
                                                <li>Responsabilité de l'entreprise</li>
                                                <li>Protection de la vie privée</li>
                                                <li>Gestion des données</li>
                                            </ul>
                                        
                                            Si une entreprise fait défaut sur l'un de ces domaines, il y a de grandes chances pour que vous ne lui fassiez plus (jamais) confiance. C'est pourquoi nous tenons à être extrêmement à être clairs sur nos exigences en la matière. 
                                    </p>
                                </div>
                                <div class="pilier-container">
                                    <div class="fiabilite">
                                        <h5>Fiabilité du système</h5> 
                                        <p>
                                            C'est notre capacité à délivrer un service stable, durablement, sans problèmes techniques. Concrètement : éviter les pannes, les bugs, les erreurs... 
                                        </p>
                                    </div>
    
                                    <div class="responsabilite">
                                        <h5>Responsabilité de l'entreprise</h5>
                                        <p>
                                            C'est notre engagement envers nos utilisateurs et notre sérieux en cas de problèmes. Concrètement : assurer le suivi client, être en conformité avec la loi... 
                                        </p>
                                    </div>

                                    <div class="protection">
                                        
                                        <h5>Protection de la vie privée </h5>
                                        <p>
                                            C'est notre manière de vous protéger contre des intrusions ou actions malveillantes. Concrètement : sécuriser le service contre la fraude et le piratage... 
                                        </p>
                                    </div>

                                    <div class="gestion">
                                        <h5>Gestion des données </h5>
                                        <p>
                                            C'est notre respect de la confidentialité de vos informations et notre manière de les traiter. Concrètement : ne pas diffuser ni vendre vos données à qui que ce soit, que ce soit avec ou sans votre accord préalable ! 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
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

                    <div class="wize">
                        <img src="wize.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="section1">
            <div class="flex col-md-12">
                <div class="col-md-4 flex-veron">
                    <a href="#hautPage">Ver<img src="cadena.png">n</a>
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
            <div class="button-app-footer col-md-12" > 
                <div class="mentionLegal col-md-6">
                    <div style="margin: 30px 0px;">   
                        <span class="mail">Veron.Appl@hotmail.com</span>
                    </div>

                    <div>  
                        <a @click="mention()"><span class="legal">Legal</span></a> | 
                        <a @click="faq()"><span>FAQ</span></a>
                    </div>
                    <div class="copyright">
                        <p>© Veron | all our rights are reserved | 2024</p>
                    </div>
                </div>
            <div class="button-app col-md-6">
                <button><img src="applePay.png" class="applePay"/></button>
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
            showModalInscription: false,
            isSticky: false,
            stickyPosition: 0,
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
        },
        mention() {
            this.$router.push('/mention')
        },
        faq() {
            this.$router.push('/faq')
        },
        handleScroll() {
            // this.isSticky = window.scrollY > this.stickyPosition;
        },
    },
    mounted() {
    this.stickyPosition = this.$refs.stickyElement.offsetTop;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>


<style>
.sticky-element {
  padding: 10px;
  transition: all 0.3s ease-in-out;
}

.sticky-element.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

</style>