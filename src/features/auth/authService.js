import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const login = async(data) => {
    const res = await axios.post(`${API_URL}/users/login`, data)
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', JSON.stringify(res.data.token))
    }
    return (res.data)
}

const signUp = async(data) => {
    console.log(data)
    const res = await axios.post(`${API_URL}/users`, data)
    console.log(res)
    return (res.data)
}

const logOut = async() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(`${API_URL}/users/logout`, {
        headers: {
            authorization: token ? token : null
        },
    })
    if (res.data) {
        localStorage.removeItem("user");
        localStorage.removeItem("token")
    }
    return (res.data)
}

const getFavoritesRoutes = async() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(`${API_URL}/users/favoriteRoutes`, {
        headers: {
            authorization: token ? token : null
        },
    })
    return (res.data)
}

const getCurrentUser = async() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(`${API_URL}/users/currentUser`, {
        headers: {
            authorization: token ? token : null
        },
    })
    return res.data
}

const authService = {
    login,
    signUp,
    logOut,
    getFavoritesRoutes,
    getCurrentUser
}

export default authService