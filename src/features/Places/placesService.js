import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const getAllPlaces = async(user) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(`${API_URL}/places`, {
        headers: {
            authorization: token ? token : null
        },
    })
    return res.data
}

const PlacesService = {
    getAllPlaces,
}

export default PlacesService