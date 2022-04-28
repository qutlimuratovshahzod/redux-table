import { CREATE_USER, DELETE_ALL, DELETE_USER } from "./types"

export const addUser = (user) => {
    return {
        type: CREATE_USER,
        payload: user
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id 
    }
}
export const deleteAll = () => {
    return {
        type: DELETE_ALL,
    }
}