import axios from 'axios';
import API_ENDPOINT from './../URL';

const Edit_Department = async (id, setDepartmentName, setShowLoading) => {
  try {
    const res = await axios.get(API_ENDPOINT.URL + `/department/${id}`);
    if (res.status === 200) {
      if (res.data.length > 0) { // Check if data is not an empty array
        const DepartmentData = res.data[0]; // Assuming you only expect one employee
        setDepartmentName(DepartmentData.DepartmentName        )
        console.log(DepartmentData);
      } else {
        console.log(`No employee found with ID: ${id}`);
      }
      setShowLoading(false);
    }
  } catch (err) {
    console.error(err);
    setShowLoading(false);
  }
};

export default Edit_Department;
