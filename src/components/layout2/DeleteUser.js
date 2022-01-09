import React, { Component } from 'react'
import{TextField,Button} from '@mui/material';
import axios from 'axios';

export default class DeleteUser extends Component {
    constructor() {
        super();
    
        this.state= {
            tempUserName:"",
            tempPassword:""
        }
    }
    
checkUser() {
    var adminLogin= {
        tempUserName: this.state.tempUserName,
        tempPassword: this.state.tempPassword
            };
    
            var options= {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
           
            axios.post('http://localhost:8080/deleteUser', adminLogin, options).then((res)=>{
                alert("User by username "+this.state.tempUserName+ " Deleted")
              }).catch((err)=> {
                alert("Incorrect username/ password")
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
                <br/>
                <em style= {{textIndent: "100px"}}>Delete User *</em>
                <br/>
<br/>

           <TextField 
              type= "input"
              id="outlined-basic" 
              label="UserName" 
              variant="outlined"
              required
              onChange={(e)=> {
                this.setState({tempUserName: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
              type= "password"
              label="Password"
              id="outlined-basic"
              variant="outlined"
              onChange={(e)=> {
                this.setState({tempPassword: e.target.value})
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
