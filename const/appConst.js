let BASE_URL

// if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'https://api.pro-choc.com'
// } else {
// }
// // __ URI des routes API
BASE_URL = 'https://127.0.0.1:8000'
export const URI = {
  user: `${BASE_URL}/api/users`,
  authenticationToken: `${BASE_URL}/authentication_token`,
  refreshToken: `${BASE_URL}/api/refresh-token`,
  emailPassWord: `${BASE_URL}/api/password/generator`,

}
