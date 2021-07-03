import {Edit_Profile} from '../actions/index'
import { useState,useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const EditProfile =({info})=>{
    const [user,setuser] = useState({
        name:info.name,
        email:info.email,
        image:info.image
    })
    const id = info._id;
    const dispatch = useDispatch()
    const imageRef = useRef()
   const handleChange = (e)=>{
       const key = e.currentTarget.name;
       const state = {...user}
       if(key !== "image"){
          state[key] = e.target.value
       }else{
           state[key] = e.target.files[0]
       }
       setuser(state)
   }
    const reg = ()=>{
        let formdata = new FormData()
        formdata.append("name", user.name)
        formdata.append("email", user.email)
        formdata.append("image", user.image)
         dispatch(Edit_Profile(id, formdata));
        imageRef.current.value=""
        setTimeout(()=>{
            window.location.href='/all-user'
        },2000)
       
    }
     return(
        <>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Edit
        </button>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form  encType="multipart/form-data">
                <input type="text" name="name" value={user.name} required className="form-control mt-4" placeholder="Name" onChange={handleChange}/>
                <input type="email" name="email" value={user.email}  required className="form-control mt-4" placeholder="Email" onChange={handleChange} />
                <input type="file" name="image" ref={imageRef} required className="form-control mt-4" onChange={handleChange}/>
            </form> 
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={reg}>Submit</button>
            </div>
            </div>
        </div>
        </div>
        </>



    )

}
export default EditProfile


