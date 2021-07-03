import {deleteUser} from '../actions/index'
import { useState,useRef,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
const DeleteUser =({info})=>{
    const user = useSelector((state)=>state.users.details)
    const [mess,setmess] = useState('')
    const id = info._id;
    const dispatch = useDispatch()

    const done = ()=>{
        dispatch(deleteUser(id))
        setmess('modal')
        window.location.href='/'
    }
     return(
        <>
        <button type="button" class="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdropd">
        Delete
        </button>

        <div class="modal fade" id="staticBackdropd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                 Are you sure?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={done}>Delete</button>
            </div>
            </div>
        </div>
        </div>
        </>



    )

}
export default DeleteUser