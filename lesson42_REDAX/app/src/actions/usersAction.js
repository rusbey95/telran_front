export const addUsers = (newUser) => {
    return {
        type: 'ADD_USER',
        payload: newUser
    }
}
export const deleteUsers = (idUser) => {
    return {
        type: 'DELETE_USER',
        payload: idUser
    }
}