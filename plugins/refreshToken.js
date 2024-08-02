import { uriHandler } from '~/common/services/uri.service'

export default function({ $axios, store }) {
    $axios.onError(async (error) => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        // On récupère un nouveau token avec notre endpoint de rafraîchissement
        const response = await $axios.post(uriHandler('refreshToken'))
        
        // On sauvegarde le nouveau token
        store.commit('SET_AUTH', { user: store.state.user, token: response.data.token })
  
        // On réessaye la requête originale avec le nouveau token
        error.config.headers.Authorization = `Bearer ${response.data.token}`
        return $axios.request(error.config)
      }
    })
  }
