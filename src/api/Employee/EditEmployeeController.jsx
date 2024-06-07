import axios from 'axios';
import API_ENDPOINT from './../URL';

const Edit_Employee = async (EmployeeId, setFirstName, setLastName, setEmail, setPhoneNumber, setDepartment, setRole, setShowLoading) => {
  try {
    const res = await axios.get(API_ENDPOINT.URL + `/employee/${EmployeeId}`);
    if (res.status === 200) {
      if (res.data.length > 0) { // Check if data is not an empty array
        const employeeData = res.data[0]; // Assuming you only expect one employee
        setFirstName(employeeData.FirstName);
        setLastName(employeeData.LastName);
        setEmail(employeeData.Email);
        setPhoneNumber(employeeData.PhoneNumber);
        // Check if DepartmentName is null or undefined, and set to an empty string if so
        setDepartment(employeeData.DepartmentName || ''); 
        // Check if RoleName is null or undefined, and set to an empty string if so
        setRole(employeeData.RoleName || ''); 
        console.log(employeeData);
      } else {
        console.log(`No employee found with ID: ${EmployeeId}`);
      }
      setShowLoading(false);
    }
  } catch (err) {
    console.error(err);
    setShowLoading(false);
  }
};

export default Edit_Employee;
