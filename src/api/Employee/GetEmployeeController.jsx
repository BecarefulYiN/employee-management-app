import axios from "axios";

const Get_Employee = async (setdata, setshowLoading) => {
  setshowLoading(true);
  try {
    const res = await axios.get("https://localhost:7130/api/employee");
    if (res.status === 200) {
      const employeeData = res.data.map(({ EmployeeId, FirstName, LastName, Email, PhoneNumber, HireDate, DepartmentName, RoleName, IsActive }) => ({
        EmployeeId, FirstName, LastName, Email, PhoneNumber, HireDate, DepartmentName, RoleName, IsActive
      }));
      setdata(employeeData);
    }
    setshowLoading(false);
  } catch (err) {
    console.error("Error fetching data:", err);
    if (err.response) {
      console.error("Response error:", err.response.status, err.response.data);
    } else if (err.request) {
      console.error("Request error:", err.request);
    } else {
      console.error("Error:", err.message);
    }
    setshowLoading(false);
  }
};

export default Get_Employee;
