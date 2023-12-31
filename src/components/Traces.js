import * as React from 'react';
import Box from '@mui/material/Box';

const commonStyles = {
  m: 1,
  border: 1,
  width: '2rem',
  height: '2rem',
};

const fontStyles = {
  fontSize:"15px",
  marginBottom: "0.1em",
  marginTop: "0.1em",
  textAlign:"center",
}

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
]

export default function Traces({traces}) {
  function getTraceForDriver()
  {
    let traceBoxes = [];
    for(let i = 0; i < 7; i++) {
      if(traces.find((trace) => {
        let date = new Date(trace.date);
        let day = date.getDay() - 1;
        if(day === -1){
          day = 6;          
        }

        if(day === i){
          return true;
        }

        return false;
      })){
        traceBoxes.push(
          <Box key={days[i]}>
            <p style={fontStyles}>{days[i]}</p>
            <Box sx={{ ...commonStyles, borderColor: 'primary.main', bgcolor: 'green' }} />
          </Box>
        )
      }
      else {
        traceBoxes.push(
          <Box key={days[i]}>
            <p style={fontStyles}>{days[i]}</p>
            < Box sx={{ ...commonStyles, borderColor: 'primary.main' }} />
          </Box>
        )
      }
    }

    return traceBoxes;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
        { getTraceForDriver() }
    </Box>
  );
}