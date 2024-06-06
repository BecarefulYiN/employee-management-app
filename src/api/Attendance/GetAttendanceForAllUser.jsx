import axios from "axios";
import API_ENDPOINT from './../URL';

const Get_AttendanceAllUser = async (setdata, setshowLoading) => {
  
  try {
    const res = await axios
    .get(`${API_ENDPOINT.URL}/attendance-records`);
    if (res.status === 200) {
      const AttendanceAllUserData = res.data.map(({ AttendanceId, EmployeeName, Email, Date,Status}) => ({
        AttendanceId, EmployeeName, Email, Date,Status
      }));
      setdata(AttendanceAllUserData);
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

export default Get_AttendanceAllUser;
