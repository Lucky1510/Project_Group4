import React,{Component} from "react";
import { Link,Outlet} from "react-router-dom";
import {Button,Alert} from '@mui/material';
import {withRouter} from '../../HistoryComp'
class ClientMain extends Component

{
    render()
    {
        var ui=(
         
        <div>
         
         <img src="/flight1.jpg" alt= "noImg" width="100%" height="150px"/>
          <ul className="header">
            <li><Link to="/clienthome/clientSearchByLocation"> Search Flights </Link></li>
            <li><Link to="/clienthome/clientGetAllFlights">View all Flights </Link></li>
            <li><Link to="/clienthome/clientAccount">Accounts </Link></li>
            <Button id= "" style= {{textIndent: "300px"}} onClick= {()=> {
              localStorage.removeItem('tempUserName')
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
    if(localStorage.getItem('tempUserName')===null){
      return loggedOut;
    }
    else{
      return ui;
    }
    
    }
}
export default withRouter(ClientMain);