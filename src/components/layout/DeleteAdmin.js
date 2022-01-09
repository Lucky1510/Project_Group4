import React, { Component } from 'react'
import{TextField,Button} from '@mui/material';
import axios from 'axios';

export default class DeleteAdmin extends Component {
    constructor() {
        super();
    
        this.state= {
            userName:"",
            password:""
        }
    }
    
checkUser() {
    var adminLogin= {
        userName: this.state.userName,
        password: this.state.password
            };
    
            var options= {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
           
            axios.post('http://localhost:8080/deleteAdmin', adminLogin, options).then((res)=>{
                alert("User by username "+this.state.userName+ " Deleted")
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
                <em style= {{textIndent: "100px"}}>Delete Account *</em>
                <br/>
<br/>

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
