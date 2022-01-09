import React, { Component } from 'react'
import {TextField,Input} from '@mui/material';
import axios from 'axios';
import '../style/table.css';
class AddFlights extends Component {
    constructor() {
        super();
        this.state = {
            fid:0,
            userName:"",
            password:"",
            ArrivalLocation:"",
            DepatureLocation:"",
            FleetId:0,
            FareId:0,
            FlightStatusId:0,
            BookingId:0,
            LocationId:0,
            departureTime: "",
  arrivalDate: "",
        }
        this.checkUser=this.checkUser.bind(this)
    }
    checkUser() {

        var fleet={
            code: "",
            model: "",
            totalEconomySeats: 0,
            totalPremiumSeats: 0,
            totalBusinessSeats: 0,
            id:this.state.FleetId
        }
        var fare={
            id: this.state.FareId,
    economyFare: 0,
    premiumFare: 0,
    businessFare: 0
        }
        var status={
            flightStatusId: this.state.FlightStatusId,
    remainingEconomySeats: 0,
    remainingPremiumSeats: 0,
    remainingBusinessSeats: 0
        }
        var booking={
            bookingId: this.state.BookingId,
    bookingNumber: 0,
    travelDate: "",
    totalCost: 0
        }
        var location={ 
        
              name: "",
              code: 0,
              country: "",
              airportName: "",
              id:this.state.LocationId
        
            }
          var flight={
              
            id:this.state.FlightId,
            departureLocation:this.state.DepatureLocation,
            arrivalLocation:this.state.ArrivalLocation,
            fleet:fleet,
            booking:booking,
            fare:fare,
            status:status,
            departureTime:this.state.departureTime,
            arrivalDate:this.state.arrivalDate,
            location:location

          }
        
                var options= {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
        
                axios.post('http://localhost:8080/addFlight', flight, options).then((res)=>{
                        console.log(res.data)
                        console.log(flight)
                         alert("Flight Added Successfully!!")
                    }).catch((err)=> {
                        alert("enter correct credentials")
                    });
    }
   render() 
    {
        var ui=<div>
            <center>
            <div class="row">
  <div class="column">
    <table>
      <tr>
        <th>FleetId</th>
        <th>FleetStatus</th>
       
      </tr>
      <tr>
        <td></td>
        <td></td>
       
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
    </table>
  </div>
  <div class="column">
    <table>
      <tr>
        <th>FlightStatusId</th>
        <th>StatusCode</th>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
    </table>
  </div>
</div>
<div class="row">
  <div class="column">
    <table>
      <tr>
        <th>FareId</th>
        <th>FareCode</th>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
     
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
    </table>
  </div>
  <div class="column">
    <table>
      <tr>
        <th>LocationId</th>
        <th>LocationName</th>
       
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
       
      </tr>
      <tr>
        <td></td>
        <td></td>
        
      </tr>
    </table>
  </div>
</div>

                <form onSubmit={(e)=>{
                    this.checkUser(e)
                }}>

                    <fieldset style={{
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
             <TextField 
            type= "number"
            label="Flight ID"
            id="standard-size-normal"
            variant="standard"
            required 
            onChange={(e)=>{
                this.setState({fid:e.target.value})
            }}/>
<br/><br/>
             <TextField 
            type= "text"
            label="UserName"
            id="standard-size-normal"
            style={{paddingRight:"20px"}}
            variant="standard"
            required 
             onChange={(e)=>{
                this.setState({UserName:e.target.value})
            }}/>
             <TextField 
            type= "password"
            label="Password"
            id="standard-size-normal"
            variant="standard"
            style={{paddingLeft:"20px",textIndent:"20px"}}
            required  onChange={(e)=>{
                this.setState({Password:e.target.value})
            }}/><br/><br/>
            
            <TextField 
            type= "text"
            label="Arrival Location"
            id="standard-size-normal"
            style={{paddingRight:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({ArrivalLocation:e.target.value})
            }}/>
             <TextField 
            type= "text"
            label="Departure Location"
            id="standard-size-normal"
            style={{paddingLeft:"20px",textIndent:"20px"}}
            variant="standard"
            required 
            onChange={(e)=>{
                this.setState({DepatureLocation:e.target.value})
            }}/><br/>
          <br/>
          <TextField 
            type= "number"
            label="FleetId"
            id="standard-size-normal"
            style={{paddingRight:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({FleetId:e.target.value})
            }}/>
            <TextField 
            type= "number"
            label="FareId"
            id="standard-size-normal"
            style={{paddingLeft:"20px",textIndent:"20px"}}
            variant="standard"
            required onChange={(e)=>{
                this.setState({FareId:e.target.value})
            }}/><br/>
            <br/>
            <TextField 
            type= "number"
            label="FlightStatusID"
            id="standard-size-normal"
            style={{paddingRight:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({FlightStatusId:e.target.value})
            }}/>
           <TextField 
            type= "number"
            label="BookingID"
            id="standard-size-normal"
            style={{paddingLeft:"20px",textIndent:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({BookingId:e.target.value})
            }}/><br/><br/> 

             <TextField 
            type= "number"
            label="LocationId"
            id="standard-size-normal"
            style={{paddingRight:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({LocationId:e.target.value})
            }}/>

              <TextField 
            type= "date"
            label="DepartureDate"
            id="standard-size-normal"
            style={{paddingLeft:"20px",textIndent:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({departureTime:e.target.value})
            }}/><br/><br/> 
              <TextField 
            type= "date"
            label="ArrivalDate"
            id="standard-size-normal"
            style={{paddingRight:"20px"}}
            variant="standard"
            required  onChange={(e)=>{
                this.setState({arrivalDate:e.target.value})
            }}/><br/><br/> 

     <Input type="submit" value="submit" name="update" />
    
                
            </fieldset>
             </form></center>
        </div>
        return ui
    }
}
export default AddFlights;