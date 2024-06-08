import axios from 'axios';
import API_ENDPOINT from './../URL';

const Update_Employee = async (postBody, setShowLoading, employeeId) => {
  try {
    setShowLoading(true);
    const res = await axios.put(API_ENDPOINT.URL + `/employee-infor-update/${employeeId}`, postBody);
    if (res.status === 202) {
      alert(res.data);
    }
    setShowLoading(false);
  } catch (err) {
    console.error(err);
    setShowLoading(false);
  }
};

export default Update_Employee;
