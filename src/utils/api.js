import axios from "axios"



const api = axios.create({
    baseURL: 'https://covid-193.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '95ad9bd07amsh2bcb3d91a4a20c0p1869f9jsne71dbe1975ad',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
})

export default api