const HOST = 'https://carapptaxi.herokuapp.com/api';


//get location
const GET_NETWORK_DATA_URL = `https://api.db-ip.com/v2/free/self`;

//user authentification
const LOGIN_URL = `${HOST}/user/login`;
const REGISTER_URL = `${HOST}/user/register`

//carinformations
const GET_CAR_INFORMATIONS_URL = `${HOST}/taxis/code`
const GET_USER_DEPLACEMENTS_URL = `${HOST}/user/useDeplacements`


export {
    LOGIN_URL,
    REGISTER_URL,
    GET_NETWORK_DATA_URL,
    GET_CAR_INFORMATIONS_URL,
    GET_USER_DEPLACEMENTS_URL
}