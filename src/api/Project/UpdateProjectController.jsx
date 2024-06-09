import axios from 'axios';
import API_ENDPOINT from './../URL';

const Update_Project = async (postBody, setShowLoading, ProjectId) => {
  try {
    setShowLoading(true);
    const res = await axios.put(API_ENDPOINT.URL + `/update-project/${ProjectId}`, postBody);
    if (res.status === 202) {
      alert(res.data);
    }
    setShowLoading(false);
  } catch (err) {
    console.error(err);
    setShowLoading(false);
  }
};

export default Update_Project;
