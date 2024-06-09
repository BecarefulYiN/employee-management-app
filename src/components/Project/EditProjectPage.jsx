import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, TextField, Button, MenuItem, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import AppBar from './../AppBar';
import { useNavigate } from 'react-router-dom';
import Edit_Project from './../../api/Project/EditProjectController';
import Update_Project from './../../api/Project/UpdateProjectController';

const statuses = [
  { id: 1, name: 'Ongoing' },
  { id: 2, name: 'Done' },
  // Add more statuses as needed
];

function EditProjectPage() {
  const [selectedItem, setSelectedItem] = useState('Edit Project');
  const [showLoading, setShowLoading] = useState(true);
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('');
  const [projectId, setProjectId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    setProjectId(id);
    Edit_Project(id, setProjectName,setStatus, setShowLoading);
  }, []);

  const btnUpdate = async () => {
    const confirmUpdate = window.confirm("Are you sure you want to update the project details?");
    if (confirmUpdate) {
      const postBody = {
        ProjectName: projectName,
        Status: status,
      };
      await Update_Project(postBody, setShowLoading, projectId);
      navigate('/project');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'projectName') setProjectName(value);
    else if (name === 'status') setStatus(value);
  };

  const isFormValid = () => {
    return projectName && status;
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
          Edit Project
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

export default EditProjectPage;
