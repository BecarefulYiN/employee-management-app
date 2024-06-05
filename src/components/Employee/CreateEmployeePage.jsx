import React, { useState } from 'react';
import { Box, CssBaseline, TextField, Button, MenuItem, Typography, Paper } from '@mui/material';
import AppBar from './../AppBar';
import { useNavigate } from 'react-router-dom';

const departments = [
  { id: 1, name: 'HR' },
  { id: 2, name: 'Engineering' },
  { id: 3, name: 'Marketing' },
];

const roles = [
  { id: 1, name: 'Manager' },
  { id: 2, name: 'Developer' },
  { id: 3, name: 'Designer' },
];

function CreateEmployeePage() {
  const [selectedItem, setSelectedItem] = useState('Create Employee');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    departmentId: '',
    roleId: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate('/employee');
  };

  const isFormValid = () => {
    const { firstName, lastName, email, phoneNumber } = formData;
    return firstName && lastName && email && phoneNumber;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <CssBaseline />
      <AppBar selectedItem={selectedItem} />
      <Paper sx={{ p: 4, width: '50%', marginTop: 5 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Create Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            select
            label="Department"
            name="departmentId"
            value={formData.departmentId}
            onChange={handleInputChange}
            margin="normal"
          >
            {departments.map((dept) => (
              <MenuItem key={dept.id} value={dept.id}>
                {dept.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Role"
            name="roleId"
            value={formData.roleId}
            onChange={handleInputChange}
            margin="normal"
      
          >
            {roles.map((role) => (
              <MenuItem key={role.id} value={role.id}>
                {role.name}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            disabled={!isFormValid()} // Disable the button if the form is not valid
          >
            Create
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default CreateEmployeePage;
