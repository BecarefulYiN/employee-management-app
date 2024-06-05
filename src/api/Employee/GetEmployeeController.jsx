import axios from "axios";
import API_ENDPOINT from './../URL';

const Get_Employee = async (setdata, setshowLoading) => {
  
  try {
    const res = await axios
    .get(`${API_ENDPOINT.URL}/employee`);
    if (res.status === 200) {
      const employeeData = res.data.map(({ EmployeeId, FirstName, LastName, Email, PhoneNumber, HireDate, DepartmentName, RoleName, IsActive }) => ({
        EmployeeId, FirstName, LastName, Email, PhoneNumber, HireDate, DepartmentName, RoleName, IsActive
      }));
      setdata(employeeData);
    }
    setshowLoading(false);
  } catch (err) {
    setshowLoading(true);
    console.error("Error fetching data:", err);
    if (err.response) {
      console.error("Response error:", err.response.status, err.response.data);
    } else if (err.request) {
      console.error("Request error:", err.request);
    } else {
      console.error("Error:", err.message);
    }
  }
};

export default Get_Employee;
