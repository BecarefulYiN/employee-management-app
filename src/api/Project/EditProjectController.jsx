import axios from 'axios';
import API_ENDPOINT from './../URL';

const Edit_Project = async (id, setProjectName, setStatus, setShowLoading) => {
  try {
    const res = await axios.get(API_ENDPOINT.URL + `/project/${id}`);
    if (res.status === 200) {
      if (res.data.length > 0) { 
        const ProjectData = res.data[0]; 
        setProjectName(ProjectData.ProjectName);
        setStatus(ProjectData.Status);
        console.log(ProjectData);
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

export default Edit_Project;
