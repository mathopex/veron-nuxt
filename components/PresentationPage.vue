<template>
    <div class="container-fluid">
        <modalConnexion :showConexion="showModalConexion" @close="showModalConexion = false"/>
        <modalInscription :showInscription="showModalInscription" @close="showModalInscription = false"/>
        <div class="section" id="section1Haut">
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
                        <li><a href="#about">About</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#support">Support</a></li>
                        <li><a href="#security">Security</a></li>
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
            <div class="cadre-dons col-md-9 col-12">
                <div class="col-md-6 col-sm-6 text-dons-haut">
                        <span>Finance the development of the application</span>
                </div>
                <div class="col-md-10 col-10 cadre-don-centre">
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
            <div class="flex-center col-md-12 col-12">
                <div class="col-md-12 col-12 cadre-info">
                    <div class="col-md-12 col-12 container-info" >
                        <div>
                            <div class="col-md-12 col-12 infos sticky-element" id="about" ref="stickyElement">
                                <div class="about-container"> 
                                    <div style="text-align: center;">
                                        <img src="aboutIcone.gif">
                                    </div>
                                    <div>
                                        <h3>About</h3>
                                        <div class="about-text">
                                            <p>
                                                Pour sauvegarder leur activité lors des différents confinements, les entreprises ont eu besoin de mettre en place très rapidement des solutions de paiements dématérialisées, robustes et sécurisées.
                                            </p>
                                            <p>
                                                Pour ce faire, elles ont pu s’appuyer sur le savoir-faire des établissements de monnaie électronique, dont la technologie a permis, au plus vite, d’intégrer la fonction paiement à leur chaîne de valeur.
                                            </p>
                                            <p>
                                                La révolution des paiements est aujourd’hui en marche.
                                                Elle répond à deux impératifs : côté entreprises, il s’agit de disposer de solutions facilement intégrables à leurs applications et conformes à la réglementation.
                                                Côté consommateurs, l’intégration de solutions de paiement simplifie le parcours d’achats en rendant chaque transaction plus fluide et plus intuitive. 
                                                Le partage des données ne semble plus être un frein, à la condition toutefois que celui-ci offre, en retour, des avantages commerciaux. 
                                            </p>
                                            <p>
                                                Au-delà des marchands, les fintechs semblent aujourd’hui accélérer leurs propositions de services, grâce aux possibilités offertes par les plateformes BaaS. 
                                                Que leurs offres soient BtoB, BtoC ou BtoBtoC, la finance embarquée est aujourd’hui le point de départ du développement de nouveaux services.
                                                Pionnier français du BaaS – Banking-as-a-Service - Veron s’emploie à vous accompagner en proposant des solutions agiles et avec un minimum de contraintes opérationnelles. 
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-12 container-info" >
                        <div>
                            <div class="col-md-12 col-12 infos" id="product">
                                <div class="product-container">
                                    <div class="product-text">
                                        <h3>Product</h3>
                                        <p>Veron est une plateforme qui vous permet d’épargne votre argent. </p>
                                        <p>Tout comme la définition d’un (coffre-fort qui est généralement un bon endroit pour stocker des documents importants et des objets de valeur auxquels vous ne prévoyez pas d'accéder) Elle vous permettra d’épargne l’argent prévue pour des vacances et d’autres loisir quotidien. </p>
                                        <p>
                                            Comment ça marche ?  
                                            Vous souhaitez mettre de l’argent de cote, vous pensez qu’en le laissant dans votre compte bancaire vous risquerais d’être prélevé par la banque. 
                                            Oubliez la banque également et le sous de matelas pour épargne votre argent. 
                                        </p>
                                        <p>
                                            Crée un compte chez Veron est épargne seulement l’argent sur lequel vous n’avez pas forcément besoin d’un l'immédiat est récupérer quand cela vous souhaite. 
                                        </p>
    
                                    </div>
                                    <div > 
                                        <img src="productIcone.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-12 container-info" >
                        <div>
                            <div class="col-md-12 col-sm-12 infos" id="mobile">
                                <div class="mobile-container">
                                    <div class="mobile-img"> 
                                        <img src="mobileIcone.png">
                                    </div>

                                    <div class="mobile-text">
                                        <div>
                                           <h3>Application Mobile</h3>
                                           <p>
                                             Organisez votre budget et vos virement en ouvrant un comptes avec votre IBAN bancaire. Envoyez de l'argent en quelques clic.
                                         </p>
                                         <a href="#">Télécharge L’APP</a>
                                       </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-12 container-info">
                        <div>
                            <div class="col-md-12 col-sm-12 infos" id="security">
                                <div class="security-img"> 
                                    <h3>Security</h3>
                                    <p>
                                        Les 4 piliers de la sécurité: 
                                    </p>

                                    <img src="securityIcone.png">
                                    </div>
                                    <div class="pilier-container">
                                        <p>Sécurité est un mot fourre-tout qui peut vouloir dire beaucoup de choses. De notre point de vue, un service sécurisé — c'est à dire dans lequel vous pouvez avoir confiance — repose sur quatre principes clés :</p> 
    
                                        <ul>
                                            <li>Fiabilité du système </li>
                                            <li>Responsabilité de l'entreprise</li>
                                            <li>Protection de la vie privée</li>
                                            <li>Gestion des données</li>
                                        </ul>
                                    
                                        <p>Si une entreprise fait défaut sur l'un de ces domaines, il y a de grandes chances pour que vous ne lui fassiez plus (jamais) confiance. C'est pourquoi nous tenons à être extrêmement à être clairs sur nos exigences en la matière.</p> 
                                        <div class="separator"></div>
                                        <h5>Fiabilité du système</h5> 
                                        <p>
                                            C'est notre capacité à délivrer un service stable, durablement, sans problèmes techniques. Concrètement : éviter les pannes, les bugs, les erreurs... 
                                        </p>
                                 
    
                              
                                        <h5>Responsabilité de l'entreprise</h5>
                                        <p>
                                            C'est notre engagement envers nos utilisateurs et notre sérieux en cas de problèmes. Concrètement : assurer le suivi client, être en conformité avec la loi... 
                                        </p>
                                    

                                        
                                        <h5>Protection de la vie privée </h5>
                                        <p>
                                            C'est notre manière de vous protéger contre des intrusions ou actions malveillantes. Concrètement : sécuriser le service contre la fraude et le piratage... 
                                        </p>
                                        <h5>Gestion des données </h5>
                                        <p>
                                            C'est notre respect de la confidentialité de vos informations et notre manière de les traiter. Concrètement : ne pas diffuser ni vendre vos données à qui que ce soit, que ce soit avec ou sans votre accord préalable ! 
                                        </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-12 container-info">
                        <div>
                            <div class="col-md-12 col-sm-12 infos" id="support">
                                <div class="support-container">
                                    <div class="support-text">
                                        <div>
                                            <h3>Support</h3>
                                            <p>
                                                Contrairement à d’autres application comme : 
                                                (Plum, Bankin, Cashbee, Moka, Yeeld, etc…) qui sont plus oriente à des conseils financiers auprès de leurs clientèles. 
                                                Veron n’analysons pas vous rentrée d’argent.
                                            </p>
                                            <p>
                                                L’application n’offre pas de conseils pour aider les utilisateurs à mieux gérer son épargne comme les applications citées si dessus.
                                                Elle est littéralement un portefeuille comme celle que vous porté dans votre poche,
                                            </p>
                                            <p>
                                                En seulement numérique, vous pouvait l’utilisez quand cela vous semble
                                            </p>
    
                                            <a>Télécharge L’APP</a>
                                        </div>
                                    </div>
                                    <div class="support-img"> 
                                        <div class="suppor-img-mobile">
                                            <img src="supportIcone.png">
                                            <div class="support-img-appli">
                                                <img src="googleIcone.png" class="googleIcone">
                                                <img src="appleIcone.png">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-12 container-info">
                    <div>
                        <div class="col-md-12 col-sm-12 infos" id="veron-balance">
                            <div class="veron-container">
                                <!-- Section pour l'image du PC -->
                                <div class="veron-pc">
                                    <img src="flexibleIcone.png" alt="Veron Dashboard PC Image">
                                </div>

                                <!-- Section pour le texte à côté du PC -->
                                <div class="veron-text">
                                    <h3>Flexible et transparent</h3>
                                    <p><strong>sans abonnement et sans engagement.</strong></p>
                                    <p>Le portefeuille numérique qui vous aide dans vos économies d'épargne.</p>
                                    <p>Avec 0 % de frais de garde et seulement 1.18 % de commission pour toute alimentation de compte.</p>
                                    <p>Et avec 0 % de commission pour les retraits sur l'application Veron.</p>
                                    <a href="#">TÉLÉCHARGE L'APP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="partner-container col-md-12 col-12">
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
        <div class="section" id="section1Bas">
            <div class="grid-container">
                <div class="flex col-md-12 col-sm-12">
                    <div class="col-md-4 col-sm-4 flex-veron">
                        <p><a href="#hautPage">Ver<img src="cadena.png">n</a></p>
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
import '@/assets/css/general.css'
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
            this.$router.push('mention')
        },
        faq() {
            this.$router.push('faq')
        }
    }
}
</script>


<style>

</style>