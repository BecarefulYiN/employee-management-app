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
import Get_Employee from '../../api/Employee/GetEmployeeController';

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
  const [showLoading, setShowLoading] = useState(true); // Initially set to true

  useEffect(() => {
    Get_Employee(setData, setShowLoading);
  }, []);

  return (
    <>
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
