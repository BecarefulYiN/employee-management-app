import axios from "axios";
import API_ENDPOINT from './../URL';

const Get_Departments = async (setdata, setshowLoading) => {
  
  try {
    const res = await axios
    .get(`${API_ENDPOINT.URL}/department`);
    if (res.status === 200) {
      const DepartmentData = res.data.map(({ DepartmentId, DepartmentName, EmployeeCount}) => ({
        DepartmentId, DepartmentName, EmployeeCount
      }));
      setdata(DepartmentData);
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

export default Get_Departments;
