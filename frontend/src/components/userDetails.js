import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserDetails,clearDetails,deleteUser } from '../actions'
import DeleteUser from "./deleteUser"
import EditProfile from "./EditProfile";
class userDetails extends Component{
    render(){
        return(
            <div>{this.renderDetails(this.props)}
            </div>
        )
    }
    renderDetails({details}){
        if(details){
            return(
                <div  className="m-auto text-center my-4 bg-light">
                    <h2 >
                      Name: {details.name}
                    </h2>
                    <div>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Email: </span>
                            {details.email}
                        </p>
                    </div>
                    <img className="w-25" src={`http://localhost:8000${details.image}`} alt={details.model} />
                     <div className="mt-2 pb-2">
                        <DeleteUser  info={details}/>
                        <EditProfile info={details} />
                     </div>   
                    
                </div>
            )
        }
        return <p>
            no details available.
        </p>
    }
    componentDidMount() {
        this.props.getUserDetails(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearDetails()
    }
}
export default connect(
    (state) => {
        return { details: state.users.details }
    },
    (dispatch) => {
        return bindActionCreators({ getUserDetails,clearDetails }, dispatch)
    })(userDetails)