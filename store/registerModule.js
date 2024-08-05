import { REGISTER_USER } from './storeConst/actions.type'
import ApiService from '~/common/services/api.service'
import { uriHandler } from '~/common/services/uri.service'

export const actions = {
    async [REGISTER_USER](context, datas) {
        try {
                await ApiService.post(uriHandler('user'), datas)
            } catch (e) {   
            return Promise.reject(e)
        }
    },

}
