import axios from 'axios'
import JwtService from '~/common/services/jwt.service'
import { uriHandler } from '~/common/services/uri.service'

const cancelTokens = {}
const whitelist = ['/api/users']

const ApiService = {
    setHeader() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        if (JwtService.getToken()) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${ JwtService.getToken() }`
        } else {
            axios.defaults.headers.common['Authorization'] = ''
        }
    },

    query(resource, params) {
        this.setHeader()
        return axios.get(resource, params).catch((error) => {
            throw new Error(`[RWV] ApiService ${ error }`)
        })
    },

    get(resource, slug = '') {
        this.setHeader()
        
        const url = slug ? `${resource}/${slug}` : resource
        
        const shouldCancel = !whitelist.some(whitelistedUrl => url.startsWith(whitelistedUrl))
        
        if (shouldCancel && cancelTokens[resource]) {
          cancelTokens[resource].cancel('Operation canceled due to new request.')
        }
        
        cancelTokens[resource] = axios.CancelToken.source()
        
        return axios.get(url, {
          cancelToken: cancelTokens[resource].token
        })
      },
      

    post(resource, params, config = {}) {
        this.setHeader()
        return axios.post(`${ resource }`, params, config)
    },

    update(resource, slug, params) {
        this.setHeader()
        return axios.put(`${ resource }/${ slug }`, params)
    },

    patch(resource, params) {
        this.setHeader()
        return axios.patch(`${ resource }`, params, { headers: { 'Content-Type': 'application/json' } })
    },

    delete(resource) {
        this.setHeader()
        return axios.delete(resource).catch((error) => {
            throw new Error(`[RWV] ApiService ${ error }`)
        })
    }
}

export default ApiService

export const ApiUser = {
    editUser(id, user) {
        return ApiService.patch(`${ uriHandler('user', id) }`, user)
    },
    async getUsers() {
        const { data } = await ApiService.get(`${ uriHandler('user') }`)
        return data['hydra:member']
    },
     async getUser(id) {
        const { data } = await ApiService.get(`${ uriHandler('user', id) }`)
        return data
    },
      deleteUser(id) {
        return ApiService.delete(`${ uriHandler('user', id) }`)
    },
}

