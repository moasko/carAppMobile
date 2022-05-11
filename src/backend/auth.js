import { axios } from './setup'
import { ciPhoneNumberFormatIsValide } from '../utils/modules/ciNumber'

import {
    LOGIN_URL,
    REGISTER_URL
} from './urls'


function login(data){
if(data.phone &&data.password){
    let _data = {}
    if(ciPhoneNumberFormatIsValide(data.phone)){
        _data.phone = data.phone
        _data.password = data.password
    }else{
        alert('veiller enter un numero de telephone valide')
    }

    console.log(_data)
    return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: LOGIN_URL,
            data: _data
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
}else{
 alert('veiller entrer votre numero et votre mot de pass svp')
}
}



function register(data){
if(data.number && data.password){
    let _data = {}
    _data.name = data.name
    _data.password1 = data.password1
    _data.password2 =data.password2
    if(ciPhoneNumberFormatIsValide(data.number)){
        _data.number = data.number
    }else{
        console.log("telephone invalide")
    }

    return new Promise((resolve,reject)=>{
        axios({
            url:REGISTER_URL,
            method:"POST",
            data:_data
        })
        .then((res)=>{
            resolve(res)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}
}


export {
    login,
    register
}