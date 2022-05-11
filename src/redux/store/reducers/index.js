import { SET_CARE,SET_USER_DEPLACEMENTS } from "../actions";


const initialState = {
    care: {},
    userDeplacements: []
}


const reducer = (state = initialState, action)=>{
    let newState;
    switch(action.type){
        case SET_CARE:
            const careData = action.payload;
            newState = {
                ...state,
                care: careData
            }
            return newState;


        case SET_USER_DEPLACEMENTS:
            const userDeplacementsData = action.payload;
            newState = {
                ...state,
                userDeplacements: userDeplacementsData
            }
            return newState;


        default:
            return state;
}

}


export default reducer;