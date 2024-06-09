import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, TextField, Button, MenuItem, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import AppBar from './../AppBar';
import { useNavigate } from 'react-router-dom';
import Update_Department from './../../api/Departments/UpdateDepartmentController';
import Edit_Department from './../../api/Departments/EditDepartmentController';


function EditDepartmentPage() {
  const [selectedItem, setSelectedItem] = useState('Edit Department');
  const [showLoading, setShowLoading] = useState(true);
  const [departmentName, setDepartmentName] = useState('');
  const [departmentId, setDepartmentId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    setDepartmentId(id);
    Edit_Department(id, setDepartmentName, setShowLoading);
  }, []);

  const btnUpdate = async () => {
    const confirmUpdate = window.confirm("Are you sure you want to update the department details?");
    if (confirmUpdate) {
      const postBody = {
        DepartmentName: departmentName,
      };
      await Update_Department(postBody, setShowLoading, departmentId);
      navigate('/department');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'departmentName') setDepartmentName(value);
  };

  const isFormValid = () => {
    return departmentName;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      btnUpdate();
    } else {
      console.log('Please fill all fields');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <CssBaseline />
      <AppBar selectedItem={selectedItem} />
      <Paper sx={{ p: 4, width: '50%', marginTop: 5 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Edit Department
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Department Name"
            name="departmentName"
            value={departmentName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            disabled={!isFormValid()}
          >
            Update
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
  );
}

export default EditDepartmentPage;
