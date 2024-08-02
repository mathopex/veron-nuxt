import { URI } from '~/const/appConst'

export function uriHandler(name, id) {
    if (!URI[name]) {
        return null
    }
    return `${ URI[name]}${ id ? '/' + id : '' }`
}
