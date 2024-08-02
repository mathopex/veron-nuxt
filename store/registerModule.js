import { REGISTER_USER } from './storeConst/actions.type'
import ApiService from '~/common/services/api.service'
import { uriHandler } from '~/common/services/uri.service'

export const actions = {
    async [REGISTER_USER](context, datas) {
        try {
               const response = await ApiService.post(uriHandler('user'), datas)
               datas.address.user = `/api/users/${response.data.id}`
              await ApiService.post(uriHandler('address'), datas.address)
            } catch (e) {   
            return Promise.reject(e)
        }
    },

}
