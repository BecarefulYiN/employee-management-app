import axios from 'axios';
import API_ENDPOINT from './../URL';

const Update_Department = async (postBody, setShowLoading, DepartmentId) => {
  try {
    setShowLoading(true);
    const res = await axios.put(API_ENDPOINT.URL + `/update-department/${DepartmentId}`, postBody);
    if (res.status === 202) {
      alert(res.data);
    }
    setShowLoading(false);
  } catch (err) {
    console.error(err);
    setShowLoading(false);
  }
};

export default Update_Department;
