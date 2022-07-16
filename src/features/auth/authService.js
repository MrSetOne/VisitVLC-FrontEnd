import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

// * EJEMPLO DE LLAMADA A LA API

// const login = async(user) => {
//     const res = await axios.put(API_URL + '/users/login', user)
//     if (res.data) {
//         localStorage.setItem('user', JSON.stringify(res.data.loggedUser))
//         localStorage.setItem('token', JSON.stringify(res.data.token))
//     }
//     return res.data
// }

const login = async(data) => {
    console.log(`${API_URL}/users/login`)
    console.log(data)
    const res = await axios.post(`${API_URL}/users/login`, data)
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', JSON.stringify(res.data.token))
    }
    return (res.data)
}


const authService = {
    login
}

export default authService