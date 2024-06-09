import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Get_Employee from '../../api/Employee/GetEmployeeController';
import Delete_Employee from '../../api/Employee/DeleteEmployeeController'; 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function EmployeeTableList() {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const refreshData = () => {
    Get_Employee(setData, setShowLoading);
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleCreateButtonClick = () => {
    navigate('/employee/create-employee-page');
  };

  const handleEditButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteButtonClick = () => {
    setIsDeleting(!isDeleting);
  };

  const handleEditButtonClickGotoEditPage = (id) => {
    navigate(`/employee/edit-employee-page?id=${id}`);
  };

  const handleDeleteEmployee = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      await Delete_Employee(id, setShowLoading, refreshData);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleCreateButtonClick}>
          Create
        </Button>
        <Button variant="contained" color="secondary" onClick={handleEditButtonClick} sx={{ ml: 2 }}>
          {isEditing ? 'Edit Complete' : 'Edit'}
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteButtonClick} sx={{ ml: 2 }}>
          {isDeleting ? 'Delete Complete' : 'Delete'}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">EmployeeId</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone Number</StyledTableCell>
              <StyledTableCell align="center">Hire Date</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
              <StyledTableCell align="center">Is Active</StyledTableCell>
              {isEditing && <StyledTableCell align="center">Actions</StyledTableCell>}
              {isDeleting && <StyledTableCell align="center">Actions</StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.EmployeeId}>
                <StyledTableCell align="center">{row.EmployeeId}</StyledTableCell>
                <StyledTableCell align="center">{row.FirstName}</StyledTableCell>
                <StyledTableCell align="center">{row.LastName}</StyledTableCell>
                <StyledTableCell align="center">{row.Email}</StyledTableCell>
                <StyledTableCell align="center">{row.PhoneNumber}</StyledTableCell>
                <StyledTableCell align="center">{row.HireDate}</StyledTableCell>
                <StyledTableCell align="center">{row.DepartmentName}</StyledTableCell>
                <StyledTableCell align="center">{row.RoleName}</StyledTableCell>
                <StyledTableCell align="center">{row.IsActive ? 'Yes' : 'No'}</StyledTableCell>
                {isEditing && (
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditButtonClickGotoEditPage(row.EmployeeId)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                )}
                {isDeleting && (
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteEmployee(row.EmployeeId)}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default EmployeeTableList;
