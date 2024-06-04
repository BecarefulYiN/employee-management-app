import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Get_Employee from '../../api/Employee/GetEmployeeController';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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
  const [data, setdata] = useState([]);
  const [showLoading, setshowLoading] = useState(false);

  useEffect(() => {
    Get_Employee(setdata, setshowLoading);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EmployeeId</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">PhoneNumber</StyledTableCell>
            <StyledTableCell align="right">Hire Date</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">IsActive</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.EmployeeId}>
              <StyledTableCell align="right">{row.EmployeeId}</StyledTableCell>
              <StyledTableCell align="right">{row.FirstName}</StyledTableCell>
              <StyledTableCell align="right">{row.LastName}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.PhoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.HireDate}</StyledTableCell>
              <StyledTableCell align="right">{row.DepartmentName}</StyledTableCell>
              <StyledTableCell align="right">{row.RoleName}</StyledTableCell>
              <StyledTableCell align="right">{row.IsActive}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </TableContainer>
  );
}

export default EmployeeTableList;