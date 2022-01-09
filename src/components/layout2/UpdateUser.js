import React, {Component} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TextField} from '@mui/material';

class UpdateUser extends Component {

    constructor() {
        super();

        this.state = {
            userId: 0,
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            contactId: "",
            type: "",
            addressLine: "",
            zipCode: "",
            city: "",
            state: "",
            country: "",
            mobileNo: ""
        }
        this.checkUser= this.checkUser.bind(this)
    }

    checkUser() {

        var contactobj= {
            contactId: 0,
            type: this.state.type,
            addressLine: this.state.addressLine,
            zipCode: this.state.zipCode,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            mobileNo: this.state.mobileNo
        };

        var user= {
            userId: 0,
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contact: contactobj
        };
        
                var options= {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
        
                axios.post('http://localhost:8080/updateUser', user, options).then((res)=>{
                        console.log(res.data)
                        console.log(user)
                         alert("Update Successfull!!")
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
                paddingLeft: '20px',
                paddingRight: '20px',
                backgroundColor: 'white',
                width: "700px",
                
            }}>
                <br/>
                <em style= {{textIndent: "100px"}}>Update User *</em>
                <br/>

            <TextField 
            type= "number"
            label="UserID"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({userId: e.target.value})
            }}
             />

             <TextField 
            type= "number"
            label="User contact ID"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingLeft: "20px", textIndent: "20px"}}
              onChange={(e)=> {
                this.setState({contactId: e.target.value})
            }}
             /><br/><br/>


            <TextField 
            type= "text"
            label="Username"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingRight: "20px"}}
              onChange={(e)=> {
                this.setState({userName: e.target.value})
            }}
            />
 
            <TextField 
            type= "password"
            label="Password"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingLeft: "20px", textIndent: "20px"}}
              onChange={(e)=> {
                this.setState({password: e.target.value})
            }}
            /><br/><br/>

            <TextField 
            type= "text"
            label="First name"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingRight: "20px", width: "40%"}}
              onChange={(e)=> {
                this.setState({firstName: e.target.value})
            }}
            />

           <TextField 
            type= "text"
            label="Last name"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingLeft: "20px", textIndent: "20px", width: "40%"}}
              onChange={(e)=> {
                this.setState({lastName: e.target.value})
            }}
            /><br/><br/>

            <TextField 
            type= "email"
            label="Email id"
            id="standard-size-normal"
            variant="standard"
            required  
            style= {{paddingRight: "20px", width: "45%"}}
              onChange={(e)=> {
                this.setState({email: e.target.value})
            }}
            />
            
            <TextField 
            type= "number"
            label="Mobile No."
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingLeft: "20px", width: "35%", textIndent: "20px"}}
              onChange={(e)=> {
                this.setState({mobileNo: e.target.value})
            }}
            /><br/><br/>

        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label ">Residence Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="standard-size-normal"
          //value={this.state.type}
          label="Type"
          onChange={(e)=> {
            // if(this.state.type==="Permanent")
            // {
            // this.setState({type:"Temporary"})
            // }
            // else{
            //   this.setState({type:"Permanent"})
            // }
           this.setState({type:e.target.value})
              console.log(e.target.value)
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Permanent">Permanent</MenuItem>
          <MenuItem value="Temporary">Temporary</MenuItem>
        </Select>
      </FormControl> 

      <TextField 
            type= "number"
            label="Zip code"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingLeft: "20px", textIndent: "20px"}}
              onChange={(e)=> {
                this.setState({zipCode: e.target.value})
            }}
            /><br/><br/>

          <TextField 
            type= "text"
            label="Address"
            id="standard-size-normal"
            variant="standard"
            style = {{width: "80%"}}
              onChange={(e)=> {
                this.setState({addressLine: e.target.value})
            }}
            required /><br/><br/>
            
            <TextField 
            type= "text"
            label="City"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingRight: "10px"}}
              onChange={(e)=> {
                this.setState({city: e.target.value})
            }}
            />

            <TextField 
            type= "text"
            label="State"
            id="standard-size-normal"
            variant="standard"
            required
              onChange={(e)=> {
                this.setState({state: e.target.value})
            }}
            />

            <TextField 
            type= "text"
            label="Country"
            id="standard-size-normal"
            variant="standard"
            required
            style= {{paddingLeft: "10px", textIndent: "10px"}}
              onChange={(e)=> {
                this.setState({country: e.target.value})
            }}
            /><br/><br/>

            <Button fullWidth onClick= {()=> {
                this.checkUser()
            }}>Update</Button><br/>
            </fieldset></center>
        </div>);
    }
}

export default UpdateUser;