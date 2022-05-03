import axios from "axios";
import { API_URL } from "../constents";


export const getCarInfos = (code) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/taxis/code/${code}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    }
    )
}



