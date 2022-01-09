import React, {Component} from "react";
import axios from 'axios';
import Button from '@mui/material/Button'
import {TextField} from '@mui/material'

class AdminUpdate extends Component {

    constructor() {
        super();

        this.state = {
            adminId: 0,
            adminFirstName: "",
            adminLastName: "",
            userName: "",
            adminPassword: ""
        }
        this.checkUser= this.checkUser.bind(this)
    }

    checkUser() {
        var user= {
                    userName: 0,
                    adminPassword: this.state.adminPassword,
                    adminFirstName: this.state.adminFirstName,
                    adminLastName: this.state.adminLastName,
                    adminId: this.state.adminId
                };
        
                var options= {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
        
                axios.post('http://localhost:8080/updateAdmin', user, options).then((res)=>{
                        console.log(res.data)
                        console.log(user)
                        alert("Update Successfull !!")
                    }).catch((err)=> {
                        alert("enter correct credentials")
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
                <em>Update Accounts *</em>
                <br/><br/>
           <TextField 
            type= "number"
            label="AdminID"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({adminId: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
            type= "text"
            label="Username"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({userName: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
            type= "password"
            label="Password"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({adminPassword: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
            type= "text"
            label="First name"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({adminFirstName: e.target.value})
            }}
            /><br/><br/><br/>
            
            <TextField 
            type= "text"
            label="Last name"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({adminLastName: e.target.value})
            }}
            /><br/><br/><br/>

            <Button fullwidth onClick= {()=> {
                this.checkUser()
            }}>Update</Button><br/><br/>
            </fieldset></center>
        </div>);
    }
}

export default AdminUpdate;