import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const getAllRoutes = async(user) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(`${API_URL}/routes`, {
        headers: {
            authorization: token ? token : null
        },
    })
    return res.data
}

const RoutesService = {
    getAllRoutes,
}

export default RoutesService