import axios from 'axios';
import API_ENDPOINT from './../URL';

const Delete_Department = async (DepartmentId, setShowLoading, refreshData) => {
  try {
    setShowLoading(true);
    const res = await axios.put(API_ENDPOINT.URL + `/delete-department/${DepartmentId}`);
    if (res.status === 201) {
      alert(res.data);
      // Refresh data after successful deletion
      refreshData();
    } else {
      alert('Delete failed');
    }
    setShowLoading(false);
  } catch (err) {
    console.error(err);
    setShowLoading(false);
  }
};

export default Delete_Department;
