import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search({initialState, setDrivers}) {
    function updateDrivers(searchText){
        console.log(initialState);
        if(!searchText)
        {
            setDrivers(initialState);
        }
        else 
        {
            const result = initialState.filter(driver => [driver.forename, driver.surname, driver.vehicleRegistration].some(el => el.toLowerCase().includes(searchText.toLowerCase())));
            setDrivers(result);
        }
    }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      align="left"
    >
      <TextField id="outlined-basic" label="Search for Driver" variant="outlined" onChange={(e) => {updateDrivers(e.target.value)}}/>
    </Box>
  );
}