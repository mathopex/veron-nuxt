let BASE_URL

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://api.veron-app.com/'
} else {
  BASE_URL = 'https://127.0.0.1:8000'
}
// __ URI des routes API
export const URI = {
  user: `${BASE_URL}/api/users`,
  authenticationToken: `${BASE_URL}/authentication_token`,
  refreshToken: `${BASE_URL}/api/refresh-token`,
  emailPassWord: `${BASE_URL}/api/password/generator`,

}
