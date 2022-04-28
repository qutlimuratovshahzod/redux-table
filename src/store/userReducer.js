import { CREATE_USER, DELETE_ALL, DELETE_USER } from "./types"

export const userReducer = ( state = [], action ) => {
    switch(action.type){
        case CREATE_USER: return [...state, action.payload]
        case DELETE_USER: {
            let newState = state.filter( item => item.id !== action.payload )
            return newState
        }
        case DELETE_ALL: return []
        default: return state 
    }
}

