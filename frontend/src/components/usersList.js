import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {getUserByName,clearList} from '../actions/index'
import {User} from "./user";

const UsersList =()=>{
    const users = useSelector((state)=>state.users.list)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserByName(""))
        dispatch(clearList())
    },[dispatch])
    if (users){
            if(users.length>0){
                 return users.map((user)=>(<User info={user} key={user._id}/>))
            }

            if(users.length===0) {return <p className="text-center mt-5 display-4">not found</p>  }
             
            return <User info={users} key={users._id}/>

    }
    else {
        return(
            <div className="d-flex justify-content-center m-5">
              <div className="spinner-border text-info" role="status"></div>
            </div>
          );
    } 

}

export default UsersList