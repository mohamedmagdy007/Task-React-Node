import {useRef,useEffect,useState} from 'react';
import { useDispatch,} from "react-redux"
import { getUserByName,getAllUser } from '../actions';
const Search = ()=>{
    const [inputVal, setInputVal] = useState("");
    const userRef = useRef();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllUser())
    },[])
    return <div className="text-center mb-5">
    <input  value={inputVal} type="text" placeholder="search" className="form-control w-50 m-auto mb-2 mt-4" onChange={(e)=>{
 setInputVal(e.target.value);
 if (e.target.value.length === 0 || !e.target.value ) {
   dispatch(getAllUser());
 } else {
   dispatch(getUserByName(e.target.value));
 }
    }}/>
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

}
export default Search