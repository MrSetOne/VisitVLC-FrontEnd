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

const createEvaluation = async (data) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.post(`${API_URL}/evaluations/RouteId/${data.id}`, data, {
        headers: {
            authorization: token ? token : null
        },
    })
    return (res.data)
}


const evaluationService = {
    createEvaluation
}

export default evaluationService