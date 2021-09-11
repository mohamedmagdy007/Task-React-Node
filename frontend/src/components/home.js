import {useRef,useEffect,useState} from 'react';
import { useDispatch,useSelector} from "react-redux"
import { getUserByName,getAllUser } from '../actions';
import { Link } from "react-router-dom"
const Home =()=>{
    const [inputVal, setInputVal] = useState("");
    const userRef = useRef();
    const users = useSelector((state)=>state.users.list)
    console.log(users)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUser())
    },[dispatch])
    const handelTextChange = (e)=>{
        const continentName = e.target.value;
            setInputVal(continentName);
            if (continentName.length === 0 || !continentName ) {
              dispatch(getAllUser());
            } else {
              dispatch(getUserByName(continentName));
            }        
    }
    if(users) {
    return(
        <div className="text-center mb-5">
           <input  value={inputVal} type="text" placeholder="search" className="form-control w-50 m-auto mb-2 mt-4"
            onChange={handelTextChange}/>
    {
        users.map((user)=>{
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

    {/* <button className="btn btn-dark" onClick={(e)=>{
        setInputVal(e.target.value);
        if(e.target.value.length === 0 || !e.target.value){
            dispatch(getAllUser())
        }else{
            dispatch(getUserByName(e.target.value))
            
        }
        
    }}>
    Search
</button> */}
    </div>
)

}
else{
    return(
        <p>
        not found
      </p>
    )
 
}  
} 
export default Home
