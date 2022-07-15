import axios from 'axios'

// * AQUI IRIA LA API DEL .ENV

// const API_URL = process.env.REACT_APP_API_URL

// * EJEMPLO DE LLAMADA A LA API

const getAllRoutes = async(user) => {
    const res = await axios.get('https://pilgrimtests.000webhostapp.com/mockapi/getall/')
    if (res.data) {
        console.log(res.data)
    }
    // return res.data
}


const RoutesService = {
    getAllRoutes,
}

export default RoutesService