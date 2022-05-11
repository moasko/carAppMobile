import { axios } from "../backend/setup"

import {
    GET_CAR_INFORMATIONS_URL,
    GET_USER_DEPLACEMENTS_URL,
    LOGIN_URL
} from "./urls";


export const getCarInfos = (code) => {
    return new Promise((resolve, reject) => {
        axios.get(`${GET_CAR_INFORMATIONS_URL}/${code}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    }
    )
}

export const getUserDeplacements = (userId) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: `${GET_USER_DEPLACEMENTS_URL}/${userId}`
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}



export const login = (phone, password) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: LOGIN_URL,
            data: {
                phone,
                password
            }
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}