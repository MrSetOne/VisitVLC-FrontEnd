import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const createEvaluation = async(data) => {
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