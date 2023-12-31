import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function NavMenu({links}) {
  return (
    <Box sx={{ width: '100%', bgcolor: '#191918', color: 'white' }}>
      <nav aria-label="main mailbox folders">
        <List>
            {
                links.map((item) => {
                    const {title, url} = item;
                    return (
                        <ListItem disablePadding key={title}>
                            <ListItemButton component={Link} to={url} sx={{ '&:hover': {backgroundColor: '#DD1F1B'} }}>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
      </nav>
    </Box>
  );
}