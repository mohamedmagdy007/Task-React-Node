export const usersList = ( state=null,action)=>{
    console.log(action)
    if (action.type === "USER_LIST") {
        return action.payload
    }
    return state
}
