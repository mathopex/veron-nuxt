import jwtDecode from 'jwt-decode'
import { CHECK_AUTH, LOGIN, LOGOUT } from './storeConst/actions.type'
import { SET_ERROR, SET_AUTH, PURGE_AUTH } from './storeConst/mutations.type'
import ApiService from '~/common/services/api.service'
import JwtService from '~/common/services/jwt.service'
import { uriHandler } from '~/common/services/uri.service'


// State
export const state = () => {
    return {
      errors: null,
      user: {},
      isAuthenticated: false
    }
  }

   // Getters
   export const getters = {
    getUser(state) {
        return state.user
    },
    isAuthenticated(state) {
        return state.isAuthenticated && !!state.user
    }
}

// Mutations
export const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error
    },

    [SET_AUTH](state, payload) {
        state.isAuthenticated = true
        state.user = payload.user
        state.errors = {}

        if (!JwtService.getToken() || payload.token) {
            state.token = payload.token
            JwtService.saveToken(payload.token)
        }
    },

    [PURGE_AUTH](state) {
        state.isAuthenticated = false
        state.user = {}
        state.token = null
        state.errors = {}
        JwtService.destroyToken()
    }
}


export const actions = {
    async [LOGIN](context, datas) {
        try {
                const dataToken = await ApiService.post(uriHandler('authenticationToken'), {
                    email: datas.email,
                    password: datas.password
                })
                const userId = jwtDecode(dataToken.data.token).id
                JwtService.saveToken(dataToken.data.token)

                const dataUser = await ApiService.get(uriHandler('user'), userId)
                
                const data = {
                    user: dataUser,
                    token: dataToken.data.token
                }
            context.commit(SET_AUTH, data)
        } catch (e) {
            context.commit(PURGE_AUTH)
            if (e.response && e.response.status === 401) {
                context.commit(SET_ERROR, "Mot de passe ou nom d'utilisateur invalide")
            } else if (e.message) {
                context.commit(SET_ERROR, e.message)
            } else {
                context.commit(SET_ERROR, "Une erreur inattendue s'est produite")
            }
            return Promise.reject(e)
        }
    },

    async [LOGOUT](context) {
        await context.commit(PURGE_AUTH)
    },

    async [CHECK_AUTH](context) {
        const jwtToken = JwtService.getToken()
        localStorage.clear()
        if (jwtToken) {
            const userId = jwtDecode(jwtToken).id

            return await ApiService.get(uriHandler('user'), userId)
                .then(({ data }) => {
                    context.commit(SET_AUTH, { user: data, token: jwtToken })
                })
                .catch(({ response }) => {
                    context.commit(PURGE_AUTH)
                })
        } else {
            context.commit(PURGE_AUTH)
            return false
        }
    }
}
