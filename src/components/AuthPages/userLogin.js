import React, {Component} from "react";
import axios from 'axios';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {withRouter} from '../../HistoryComp'

class UserLoginComponent extends Component {

    constructor() {
        super();

        this.state = {
            userName: "",
            password: ""
        }
        this.checkUser= this.checkUser.bind(this)
    }

    checkUser() {
        var user= {
                    tempUserName: this.state.userName,
                    tempPassword: this.state.password
                };
        
                var options= {
                    headers: {
                        'content-type': 'application/json'
                    }
                };
                
                axios.post('http://localhost:8080/userLogin', user, options).then((res)=>{
                    console.log(res.data)
                        console.log(user)
                        localStorage.setItem('tempUserName', user.tempUserName) 
                        this.props.history('/clienthome')
                    }).catch((err)=> {
                        alert("Incorrect username/ password")
                    });
    }

    render() {
        
        return (<div>
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
                <em>User Login *</em>
                <br/><br/>
            <TextField 
            type= "input"
            id="outlined-basic" 
            label="Username" 
            variant="outlined"
            required
            onChange={(e)=> {
                this.setState({userName: e.target.value})
            }}/><br/><br/><br/>

        <TextField 
            type= "password"
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            required
            onChange={(e)=> {
                this.setState({password: e.target.value})
            }}/><br/><br/><br/>
            
            <Button variant="outlined" onClick= {()=> {
                this.checkUser();
            }}>Sign In</Button><br/><br/>
            </fieldset></center>
        </div>);
    }
}

export default withRouter(UserLoginComponent);