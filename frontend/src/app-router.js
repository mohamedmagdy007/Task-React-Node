import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from './components/home'
import UserDetails from './components/userDetails'
import NotFound from './components/not-found'
import Resgister from './components/register'
import AllUser from './components/allUser'
const AppRouter = ()=>{
    return <Router>
      
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">

  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/all-user"}>All User</Link>
        </li>
      </ul>
      <form class="d-flex">
        <Link class="btn btn-outline-success" to={"/resgister"}>Register</Link>
      </form>
    </div>
  </div>
</nav>
      <div className="container">
            <div className="row">
                <div className="col">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route  path="/users/:id" component={UserDetails}/>
                        <Route exact path={"/all-user"} component={AllUser}/>
                        <Route  path={'/resgister'} component={Resgister}/>
    
                        <Route  path="*" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
}
export default AppRouter;