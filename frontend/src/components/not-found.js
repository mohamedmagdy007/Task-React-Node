import {Link} from 'react-router-dom'
const NotFound = ()=>{
    return <>
        <h1 className="not-found-header">404</h1>
        <p>
            Page is not found, 
            <Link to="/">go home</Link>
        </p>
    </>
}
export default NotFound;