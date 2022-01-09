import React, { Component } from 'react'
import axios from 'axios';
import {Table, TableHead, TableRow, TableBody, TableCell, TableContainer, Paper, tableCellClasses, styled} from '@mui/material';
;
export default class ClientGetFlights extends Component {
    
    constructor() {
        super();

        this.state= {
            data: []
        }
    }
    
    componentDidMount(){

        var axiosinstance= axios.get("http://localhost:8080/searchAllFlights")
            axiosinstance.then((response)=> {
            this.setState({data: response.data})
            console.log(this.state.data)
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
