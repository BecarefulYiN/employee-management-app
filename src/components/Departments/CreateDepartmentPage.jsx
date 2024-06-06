import React, { useState } from 'react';
import { Box, CssBaseline, TextField, Button, MenuItem, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import AppBar from './../AppBar';
import { useNavigate } from 'react-router-dom';
import Create_Department from '../../api/Departments/CreateDepartmentController';

function CreateDepartmentPage() {
  const [selectedItem, setSelectedItem] = useState('Create Department');
  const [showLoading, setShowLoading] = useState(false); // Initially set to true
  const [DepartmentName, setDepartmentName] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'DepartmentName') setDepartmentName(value);
  };

  const isFormValid = () => {
    return DepartmentName;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Handle form submission logic here
      navigate('/department');
    } else {
      console.log('Please fill all fields');
    }
  };

  const btnCreate = () => {
    const postBody = {
      DepartmentName: DepartmentName
    }
    Create_Department(postBody,setShowLoading,navigate);
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <CssBaseline />
      <AppBar selectedItem={selectedItem} />
      <Paper sx={{ p: 4, width: '50%', marginTop: 5 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Create Department
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Department Name"
            name="DepartmentName"
            value={DepartmentName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            onClick={() => { btnCreate() }}
            disabled={!isFormValid()} // Disable the button if the form is not valid
          >
            Create
          </Button>
        </form>
      </Paper>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

export default CreateDepartmentPage
