import React, { useState } from 'react';
import { Box, CssBaseline, TextField, Button, MenuItem, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import AppBar from './../AppBar';
import { useNavigate } from 'react-router-dom';
import Create_Project from './../../api/Project/CreateProjectController';

const statuses = [
  { id: 1, name: 'Ongoing' },
  { id: 2, name: 'Done' },
];

function CreateProjectPage() {
  const [selectedItem, setSelectedItem] = useState('Create Project');
  const [showLoading, setShowLoading] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const btnCreate = async () => {
    const confirmCreate = window.confirm("Are you sure you want to create this project?");
    if (confirmCreate) {
      const postBody = {
        ProjectName: projectName,
        Status: status,
      };
      await Create_Project(postBody, setShowLoading);
      navigate('/project');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'projectName') setProjectName(value);
    else if (name === 'status') setStatus(value);
  };

  const isFormValid = () => {
    return projectName  && status;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      btnCreate();
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
          Create Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Project Name"
            name="projectName"
            value={projectName}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            select
            label="Status"
            name="status"
            value={status}
            onChange={handleInputChange}
            margin="normal"
            required
          >
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.name}>
                {status.name}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            disabled={!isFormValid()}
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

export default CreateProjectPage;
