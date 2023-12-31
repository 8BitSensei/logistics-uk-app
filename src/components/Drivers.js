import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Search from './Search.js';
import { useState } from 'react';
import Traces from './Traces.js';
import driverData from '../data/drivers.json';

export default function Drivers() {
    function getMinutes(trace){
        let activityTime = {
            drive: 0,
            rest: 0,
            work: 0,
            available: 0,
        }
    
        if(!trace){
            return activityTime;
        }
        else if(trace.activity.length === 0){
            return activityTime;
        }
    
        trace.activity.forEach((activity) => {
            if(activity.type === 'drive'){
                activityTime.drive += activity.duration;
            }
            else if(activity.type === 'rest'){
                activityTime.rest += activity.duration;
            }
            else if(activity.type === 'work'){
                activityTime.work += activity.duration;
            }
            else if(activity.type === 'available'){
                activityTime.available += activity.duration;
            }
        });
        
        return activityTime;
    }
    
    function getDriver(driver){
        let totalMinutes = driver.traces.map((trace) => {
            return getMinutes(trace);
        });
    
        return (
        <TableRow key={driver.driverID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{driver.forename + " " + driver.surname}</TableCell>
            <TableCell component="th" scope="row">{driver.vehicleRegistration}</TableCell>
            <TableCell component="th" scope="row">{totalMinutes.reduce((sum, current) => { return sum + current.drive}, 0)}</TableCell>
            <TableCell component="th" scope="row">{totalMinutes.reduce((sum, current) => { return sum + current.rest}, 0)}</TableCell>
            <TableCell component="th" scope="row">{totalMinutes.reduce((sum, current) => { return sum + current.work}, 0)}</TableCell>
            <TableCell component="th" scope="row">{totalMinutes.reduce((sum, current) => { return sum + current.available}, 0)}</TableCell>
            <TableCell component="th" scope="row"><Traces traces={driver.traces}/></TableCell>
        </TableRow>
        )
    }

    const [drivers, setDrivers] = useState(driverData.data);
    return (
        <Box >
            <Search drivers={drivers} initialState={driverData.data} setDrivers={setDrivers}/>
            <TableContainer component={Paper} sx={{ borderRadius: '0px', boxShadow: '0px 0px 0px 0px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell component="th" scope="row" align="left"><b>Driver Name</b></TableCell>
                        <TableCell component="th" scope="row" align="left"><b>Vehicle Registration</b></TableCell>
                        <TableCell component="th" scope="row" align="left"><b>Drive time</b></TableCell>
                        <TableCell component="th" scope="row" align="left"><b>Rest time</b></TableCell>
                        <TableCell component="th" scope="row" align="left"><b>Work time</b></TableCell>
                        <TableCell component="th" scope="row" align="left"><b>Available time</b></TableCell>
                        <TableCell component="th" scope="row" align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {drivers.map((row) => (
                        getDriver(row)
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Box>
    );
}