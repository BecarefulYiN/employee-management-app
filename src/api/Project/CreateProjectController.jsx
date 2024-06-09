import axios from "axios";
import API_ENDPOINT from './../URL';

const Create_Project = async (postBody, setShowLoading, navigate) => {
  try {
    setShowLoading(true); 
    const res = await axios.post(API_ENDPOINT.URL + "/create-project", postBody);
    if (res.status === 201) {
      console.log(res.data);
      setShowLoading(false); // Hide loading indicator
    }
  } catch (err) {
    setShowLoading(false); // Hide loading indicator in case of error
    console.error(err);
    // You may handle the error here if needed
  }
}

export default Create_Project;
