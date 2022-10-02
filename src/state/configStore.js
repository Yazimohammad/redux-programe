import {createStore, combineReducers} from "redux"
import { gameReducer } from "./reducer/gameReducer"
import { coachReducer } from "./reducer/coachReducer"

export const configStore=()=>{

    const myStore=createStore(
        combineReducers({gameReducer,coachReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return myStore;
}