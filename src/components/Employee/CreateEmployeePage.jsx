import React, { useState } from 'react';
import { Box, CssBaseline, TextField, Button, MenuItem, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import AppBar from './../AppBar';
import { useNavigate } from 'react-router-dom';
import Create_Employee from '../../api/Employee/CreateEmployeeController';

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
  const [showLoading, setShowLoading] = useState(false); // Initially set to true
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phoneNumber') setPhoneNumber(value);
    else if (name === 'department') setDepartment(value);
    else if (name === 'role') setRole(value);
  };

  const isFormValid = () => {
    return firstName && lastName && email && phoneNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Handle form submission logic here
      navigate('/employee');
    } else {
      console.log('Please fill all fields');
    }
  };

  const btnCreate = () => {
    const postBody = {
      FirstName: firstName,
      LastName: lastName,
      PhoneNumber: phoneNumber,
      Email: email,
      DepartmentName: department,
      RoleName: role
    }
    Create_Employee(postBody,setShowLoading,navigate);
  }

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
            value={firstName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            select
            label="Department"
            name="departmentId"
            value={department}
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
            value={role}
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
  );
}

export default CreateEmployeePage;
