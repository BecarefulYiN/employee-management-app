import axios from "axios";
import API_ENDPOINT from './../URL';

const Get_Project_List = async (setdata, setshowLoading) => {
  
  try {
    const res = await axios
    .get(`${API_ENDPOINT.URL}/project-list`);
    if (res.status === 200) {
      const ProjectData = res.data.map(({ ProjectId, ProjectName, StartDate, Status }) => ({
        ProjectId, ProjectName, StartDate, Status
      }));
      setdata(ProjectData);
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

export default Get_Project_List;
