import axios from 'axios'

const getAllRoutes = async(user) => {
    const res = await axios.get('https://pilgrimtests.000webhostapp.com/mockapi/getall/')
    return res.data
}

const RoutesService = {
    getAllRoutes,
}

export default RoutesService