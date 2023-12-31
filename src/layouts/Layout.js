import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavMenu from '../components/NavMenu.js';
import logo from '../logo.png';
import menuData from '../data/menu.json';

const NavItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  backgroundColor: '#191918'
}));

const Header = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

export default function Layout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header>
            <img src={logo} width="300" alt="logo" />
          </Header>
        </Grid>
        <Grid item xs={3}>
          <NavItem>
            <NavMenu links={menuData.data}/>
          </NavItem>
        </Grid>
        <Grid item xs={9}>
          <Header>
            {children}
          </Header>
        </Grid>
      </Grid>
    </Box>
  );
}