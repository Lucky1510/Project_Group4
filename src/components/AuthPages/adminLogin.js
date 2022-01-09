import React, {Component} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material'
import {withRouter} from '../../HistoryComp'

class AdminLoginComponent extends Component {

    constructor() {
        super();

        this.state = {
            adminName: "",
            password: ""
        }
        this.checkUser= this.checkUser.bind(this)
    }

    checkUser() {

        var adminLogin= {
            userName: this.state.adminName,
            password: this.state.password
                };
        
                var options= {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
               
                axios.post('http://localhost:8080/adminLogin', adminLogin, options).then((res)=>{
                        console.log(res.data)
                        console.log(adminLogin)
                        localStorage.setItem('userName', adminLogin.userName) 
                        this.props.history('/home')
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
                <em>Administrator Login *</em>
                <br/><br/>
            <TextField 

              type= "input"
              id="outlined-basic" 
              label="UserName" 
              data-testId="userName"
              variant="outlined"
              required
              onChange={(e)=> {
                this.setState({adminName: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
              type= "password"
              label="Password"
              data-testId="password"
              id="outlined-basic"
              variant="outlined"
              onChange={(e)=> {
                this.setState({password: e.target.value})
            }}
            required /><br/><br/><br/>

            <Button variant="outlined"  data-testId="signin" onClick= {()=> {
                console.log(this.state.adminName)
                console.log(this.state.password)
                this.checkUser()
            }}>Sign In</Button><br/><br/>
            </fieldset></center>
        </div>);
    }
}

export default withRouter(AdminLoginComponent);
