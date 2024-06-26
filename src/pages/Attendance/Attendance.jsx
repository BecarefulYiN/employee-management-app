import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../../components/AppBar';
import LeftNavBar from '../../components/LeftNavBar';
import AttendanceTableForAllUser from './../../components/Attendance/AttendanceTableForAllUser';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? `${drawerWidth}` : -230,
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Attendance() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState('Attendance');

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} selectedItem={selectedItem}/>
      <LeftNavBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Main open={open}>
        <DrawerHeader />
        <AttendanceTableForAllUser/>
      </Main>
    </Box>
  )
}

export default Attendance
