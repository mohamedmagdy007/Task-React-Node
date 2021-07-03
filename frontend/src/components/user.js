import { Link } from "react-router-dom"
export const User = ({info})=>{
    if(info){
        return (
            <Link className="text-decoration-none" to={`/users/${info._id}`}>
            <div className="alert alert-dark d-flex justify-content-between">
                <h2 className="align-self-center">{info.name}</h2>
                <img className="w-25 " src={`http://localhost:8000${info.image}`} alt="img"/>
            </div>
            </Link>
            
        )
    }
    return <p>No Info</p>
}
