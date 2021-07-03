import { useEffect} from "react";
import {useDispatch ,useSelector} from "react-redux"
import {getAllUser} from "../actions/index"
import { Link } from "react-router-dom"
const AllUser=()=>{
    const users = useSelector((state)=>state.users.list)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUser())
        // return getAllUser()
    },[dispatch])
   
if(users){
    return users.map((user)=>{
        return (
        <Link className="text-decoration-none" to={`/users/${user._id}`}>
        <div className="container " key={user._id} >
            <div className="row">
                <div className="col-8 m-auto">
                <div className="card mb-2 m-auto"  style={{width: "18rem"}}>
                    <img src= {`http://localhost:8000${user.image}`}  className="card-img-top  m-auto w-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center  text-dark">{user.name}</h5>
                        <p className="card-text text-center text-dark">{user.email}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
        )
    }) 
} 
else{
    return(
        <p>
            not found
        </p>
    )
}
}   
export default AllUser