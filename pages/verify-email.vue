<template>
    <div>
      <h1>Vérification de l'email</h1>
      <p v-if="loading">Vérification en cours...</p>
      <p v-if="error">Erreur de vérification: {{ error }}</p>
      <p v-if="success">Votre compte a bien été vérifié !</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true,
        error: null,
        success: false,
      };
    },
    async mounted() {
      const token = this.$route.query.token;
  
      if (token) {
        try {
          // Appel au backend pour vérifier le token
          const response = await this.$axios.$post('/api/verify-email', { token });
  
          if (response.success) {
            this.success = true;
          } else {
            this.error = 'La vérification a échoué.';
          }
        } catch (e) {
          this.error = "Erreur lors de la vérification.";
        } finally {
          this.loading = false;
        }
      } else {
        this.error = 'Token non trouvé.';
        this.loading = false;
      }
    }
  };
  </script>
  