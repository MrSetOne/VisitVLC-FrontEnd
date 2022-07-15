import axios from 'axios'

// * AQUI IRIA LA API DEL .ENV

// const API_URL = process.env.REACT_APP_API_URL

// * EJEMPLO DE LLAMADA A LA API

// const login = async(user) => {
//     const res = await axios.put(API_URL + '/users/login', user)
//     if (res.data) {
//         localStorage.setItem('user', JSON.stringify(res.data.loggedUser))
//         localStorage.setItem('token', JSON.stringify(res.data.token))
//     }
//     return res.data
// }


const authService = {

    // * EXPORTACIONES

    // login,
}

export default authService