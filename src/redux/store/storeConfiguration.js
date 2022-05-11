import { createStore } from "redux";
import { persistReducer } from "redux-persist";
import reducer from "./reducers";
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}


export default createStore(
    persistReducer(persistConfig, reducer)
)