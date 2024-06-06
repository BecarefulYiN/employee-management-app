import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { GlobalContext } from "./context/GlobalContext";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/Login";
import Departments from "./pages/Department/Departments";
import EmployeeTable from "./pages/Employee/EmployeeTable";
import CreateEmployeePage from "./components/Employee/CreateEmployeePage";
import CreateDepartmentPage from "./components/Departments/CreateDepartmentPage";

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
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
