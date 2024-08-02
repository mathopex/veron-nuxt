const ID_TOKEN_KEY = 'id_token'

export const getToken = () => {
    return window.sessionStorage.getItem(ID_TOKEN_KEY)
}

export const saveToken = (token) => {
    window.sessionStorage.setItem(ID_TOKEN_KEY, token)
}

export const destroyToken = () => {
    window.sessionStorage.removeItem(ID_TOKEN_KEY)
}

export default { getToken, saveToken, destroyToken }
