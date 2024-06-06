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
import { useNavigate } from 'react-router-dom';
import Get_Project_List from '../../api/Project/GetProjectListController';


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

function ProjectTable() {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true); // Initially set to true
  const navigate = useNavigate();

  useEffect(() => {
    Get_Project_List(setData, setShowLoading);
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ProjectId</StyledTableCell>
              <StyledTableCell align="center">ProjectName</StyledTableCell>
              <StyledTableCell align="center">StartDate</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.ProjectId}>
                <StyledTableCell align="center">{row.ProjectId}</StyledTableCell>
                <StyledTableCell align="center">{row.ProjectName}</StyledTableCell>
                <StyledTableCell align="center">{row.StartDate}</StyledTableCell>
                <StyledTableCell align="center">{row.Status}</StyledTableCell>
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
  )
}

export default ProjectTable
