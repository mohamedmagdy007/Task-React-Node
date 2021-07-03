export  const users = (state={},action)=>{
    switch (action.type){
        case 'ALL_USER':
        case 'USER_LIST':
        case 'CLEAR_USERS':
        case 'NEW_USER':
            return {...state,list:action.payload}
        
       
        case 'CLEAR_Details':
        case 'USER_DETAILS':
        case 'EDIT_USER':
        case 'USER_DELETED':        
            return {...state,details:action.payload}
        default:
            return state
    }
    
}