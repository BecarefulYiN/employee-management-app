import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { GlobalContext } from "./context/GlobalContext";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/Login";
import Departments from "./pages/Department/Departments";
import EmployeeTable from "./pages/Employee/EmployeeTable";
import CreateEmployeePage from "./components/Employee/CreateEmployeePage";
import CreateDepartmentPage from "./components/Departments/CreateDepartmentPage";
import Attendance from "./pages/Attendance/Attendance";
import Project from "./pages/Project/Project";
import EditEmployeePage from "./components/Employee/EditEmployeePage";

function App() {
  const { Mode } = useContext(GlobalContext);

  const theme = createTheme({
    palette: {
      mode: Mode
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employee' element={<EmployeeTable/>} />
          <Route path='/department' element={<Departments/>} />
          <Route path='/employee/create-employee-page' element={<CreateEmployeePage/>} />
          <Route path='/employee/create-department-page' element={<CreateDepartmentPage/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/employee/edit-employee-page' element={<EditEmployeePage/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
