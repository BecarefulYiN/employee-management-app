import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { GlobalContext } from "./context/GlobalContext";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/Login";
import EmployeeTable from "./pages/EmployeeTable";
import Departments from "./pages/Departments";

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
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
