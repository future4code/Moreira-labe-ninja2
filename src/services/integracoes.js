import { baseURL, headers } from "../constants/dadosIntegracoes"
import axios from 'axios'

export const createJob = (body, funcao) =>{
    const url = `${baseURL}jobs`
    axios.post(url, body, {headers})
    .then((resp)=>{funcao(1 ,resp.data.message)
        })
    .catch((err)=>{funcao(2 , err.response.data.message)
        })
}