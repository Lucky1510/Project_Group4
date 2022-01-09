import React, { Component } from 'react'
import{TextField,Button} from '@mui/material';
import axios from 'axios';

export default class DeleteFlights extends Component {
    constructor() {
        super();
    
        this.state= {
            flightId:0,
            userName:"",
            password:""
        }
    }
    
checkUser() {
    var adminLogin= {
        flightId:this.state.flightId,
        userName: this.state.userName,
        password: this.state.password
            };
    
            var options= {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
           
            axios.post('http://localhost:8080/deleteFlight', adminLogin, options).then((res)=>{
                alert("Flight by id"+this.state.flightId+ " Deleted")
              }).catch((err)=> {
                alert("Incorrect username/ password/flightId")
            });
  }
    render() {
        return (
            <div>
               <center><fieldset style={{
                margin: '20px',
                padding: '0 10px 10px',
                border: '1px solid #666',
                borderRadius: '8px',
                boxShadow: '0 0 10px #666',
                paddingTop: '10px',
                backgroundColor: 'white',
                width: "350px",
            }}>
<br/><br/>
<TextField 
              type= "number"
              label="FlightId"
              id="outlined-basic"
              variant="outlined"
              onChange={(e)=> {
                this.setState({flightId: e.target.value})
            }}
            required /><br/><br/><br/>
           <TextField 
              type= "input"
              id="outlined-basic" 
              label="UserName" 
              variant="outlined"
              required
              onChange={(e)=> {
                this.setState({userName: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
              type= "password"
              label="Password"
              id="outlined-basic"
              variant="outlined"
              onChange={(e)=> {
                this.setState({password: e.target.value})
            }}
            required /><br/><br/><br/>

            <Button variant="outlined" color="error" onClick= {()=> {
                
                this.checkUser()
            }}>Delete</Button><br/><br/>
            </fieldset>
            </center> 
            </div>
        )
    }
}
