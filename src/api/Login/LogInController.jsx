import axios from "axios";
import API_ENDPOINT from '../URL';

const Check_Login = async (postBody, navigate) => {
  try {
    const res = await axios.post(API_ENDPOINT.URL + "/check-login", postBody);
    if (res.status === 200) {
      console.log(res.data);
      if (res.data) {
        navigate("/employee");
      } else {
        alert("You do not have admin privileges.");
      }
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred during login.");
  }
}

export default Check_Login;
