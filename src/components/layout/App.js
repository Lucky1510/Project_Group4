import React,{Component} from "react";
import { Link,Outlet} from "react-router-dom";
import {Button,Alert} from '@mui/material';
import {withRouter} from '../../HistoryComp'
class Main extends Component

{
    render()
    {
        var ui=(
         
        <div>
         
         <img src="/flight1.jpg" alt= "noImg" width="100%" height="150px"/>

        
          
          <ul className="header">
            <li><Link to="/home/searchByLocation"> Search Flights </Link></li>
            <li><Link to="/home/getAllFlights">View all Flights </Link></li>
            <li><Link to="/home/addFlights">Add Flights </Link></li>
            <li><Link to="/home/updateFlights">Update Flights </Link></li>
            <li><Link to="/home/deleteFlights">Delete Flights </Link></li>
            <li><Link to="/home/account">Accounts </Link></li>
            <Button id= "" style= {{textIndent: "300px"}} onClick= {()=> {
              localStorage.removeItem('userName')
              this.props.history('/')
              
            }}>Logout</Button>
          </ul>

          
          <div>
          < Outlet />
          </div>
        </div>
        
      
    );
    var loggedOut=(
      <div>
       <center>
       <Alert severity="error">You are not Logged In,Login to Continue!</Alert></center>
       </div>
    );
    if(localStorage.getItem("userName")===null){
      return loggedOut;
    }
    else{
      return ui;
    }
    }
}
export default withRouter(Main);