import React, { Component } from "react";
import axios from 'axios';
import {Table, TableHead, TableRow, TableBody, TableCell, Button, TableContainer, TextField, Paper, tableCellClasses, styled} from '@mui/material';
;

class ClientSearchFlights extends Component {
  constructor() {
    super();

    this.state= {
        data: [],
        arrivalLocation:"",
        departureLocation:""
    }
}

checkUser() {
  var adminLogin= {
      userName: this.state.departureLocation,
      password: this.state.arrivalLocation
          };
  
          var options= {
              headers: {
                  'Content-Type': 'application/json'
              }
          };
         
          axios.post('http://localhost:8080/searchFlightsByLocation', adminLogin, options).then((res)=>{
           this.setState({data:res.data})
            })
}
render() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
            '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
            '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

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
              type= "input"
              id="outlined-basic" 
              label="Departure Location" 
              variant="outlined"
              required
              onChange={(e)=> {
                this.setState({arrivalLocation: e.target.value})
            }}
            /><br/><br/><br/>

            <TextField 
              type= "text"
              label="Arrival Location"
              id="outlined-basic"
              variant="outlined"
              onChange={(e)=> {
                this.setState({departureLocation: e.target.value})
            }}
            required /><br/><br/><br/>

            <Button variant="outlined" onClick= {()=> {
                console.log(this.state.departureLocation)
                console.log(this.state.arrivalLocation)
                this.checkUser()
            }}>Search</Button><br/><br/>
            </fieldset>
            </center> 
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            FlightId
                        </StyledTableCell>
                        <StyledTableCell>
                            Arrival Location
                        </StyledTableCell>
                        <StyledTableCell>
                            Departure Location
                        </StyledTableCell>
                        <StyledTableCell>
                            Fleet Id
                        </StyledTableCell>
                        <StyledTableCell>
                            Fare Id
                        </StyledTableCell>
                        <StyledTableCell>
                            Flightstatus Id
                        </StyledTableCell>
                        <StyledTableCell>
                            Booking Id
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    this.state.data.map((e)=> {
                    return (<StyledTableRow key= {e.id}>
                            <StyledTableCell component="th" scope="row">
                                {e.id}
                            </StyledTableCell>
                            <StyledTableCell >
                                {e.departureLocation}
                                </StyledTableCell>

                                <StyledTableCell>
                                   {e.arrivalLocation}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {e.fleet.id}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {e.fare.id}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {e.status.flightStatusId}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {e.booking.bookingId}
                                </StyledTableCell>
                                
                                
                        </StyledTableRow>
                    );
                    })
                }
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}


   
}
 
export default ClientSearchFlights;