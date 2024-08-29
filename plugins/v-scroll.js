// plugins/v-scroll.js
export default {
    inserted(el) {
      // Fonction pour vérifier si l'élément est visible
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      }
  
      // Fonction pour ajouter la classe 'visible'
      function handleScroll() {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      }
  
      // Attacher la fonction handleScroll à l'événement scroll
      window.addEventListener('scroll', handleScroll);
  
      // Vérifier au chargement de la page
      handleScroll();
    },
    unbind() {
      // Nettoyer l'événement lorsque l'élément est retiré du DOM
      window.removeEventListener('scroll', handleScroll);
    }
  };