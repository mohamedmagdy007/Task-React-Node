import {creatNewUser} from '../actions'
import { useDispatch } from 'react-redux';
import { useState,useRef } from 'react';

const Register =({history})=>{

     const [user,setuser] = useState({name:"",email:"",image:""})
     const dispatch = useDispatch()
     const imageRef = useRef()
    const handleChange = (e)=>{
        const key = e.currentTarget.name;
        const state = {...user}
        if(key === "name" || key === "email"){
           state[key] = e.target.value
        }else{
            state[key] = e.target.files[0]
        }
        setuser(state)
    }
    let reg = ()=>{
        let formdata = new FormData()
        formdata.append("name", user.name)
        formdata.append("email", user.email)
        formdata.append("image", user.image)
        dispatch(creatNewUser(formdata)) 

       history.push("/") 
    
        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-6 m-auto">
                    <form  encType="multipart/form-data">
                    <input type="text" name="name"  required className="form-control mt-4" placeholder="Name" onChange={handleChange}/>
                    <input type="email" name="email"  required className="form-control mt-4" placeholder="Email" onChange={handleChange} />
                    <input type="file" name="image" ref={imageRef} required className="form-control mt-4" onChange={handleChange}/>
                    <div className="d-flex justify-content-center">
                    <button  type="submit" className="btn btn-success mt-4" onClick={reg}>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Register;
