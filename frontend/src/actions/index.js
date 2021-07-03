import axios from "axios"
const baseURL = 'http://localhost:8000/users'

export const getAllUser = async ()=>{
        let response;
        try{
            response = await axios.get(`http://localhost:8000/`)
        }catch(err){
            console.log(err)
        }
        return{
            type:"ALL_USER",
            payload:response.data,
     
        }
       
}

export const getUserByName = async (name)=>{
console.log(name)
    let response;
    try{
        response = await axios.get(`${baseURL}?name=${name}`)
    }catch(err){
        console.log(err)
    }
    return{
        type:"USER_LIST",
        payload:response.data,
 
    }
   
}
export const getUserDetails = async (id)=>{
    let response;
    try {
        response = await axios.get(`${baseURL}/${id}`)

    } catch (err) {
        console.log(err)

    }

    return {
        type:'USER_DETAILS',
        payload:response.data
    }
}
export const clearList=()=>{
    return{
        type:'CLEAR_USERS',
        payload:null
    }
}

export const clearDetails=()=>{
    return{
        type:'CLEAR_Details',
        payload:null
    }
}
export const creatNewUser = async (user)=>{
     try {
     let response = await axios.post('http://localhost:8000/users', user);

        if (response.status === 201) {
          response = await axios.get('http://localhost:8000/users');
          return {
            type: "NEW_USER",
            payload: response.data,
          };
        } else return { type: "USER_CREATED", payload: [] };
      } catch (err) {
    console.log(err);
      }
   
}
export const Edit_Profile = async (id,user)=>{
    try {
        let response = await axios.put(`${baseURL}/${id}`,user);
   
           if (response.status === 201) {
             response = await axios.get(`${baseURL}/${id}`);
             return {
               type: "EDIT_USER",
               payload: response.data,
             };
           } else return { type: "EDIT_USER", payload: [] };
         } catch (err) {
            console.log(err);
         }
}

export const deleteUser = async (id)=>{
    let response;
    try {
        response = await axios.delete(`${baseURL}/${id}`)
        return {
            type:'USER_DELETED',
            payload:[]
        }
    } catch (err) {
        console.log(err)

    }

    return {
        type:'USER_DELETED',
        payload:[]
    }
}