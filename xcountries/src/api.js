import axios from 'axios';

export const fetchData = async () => {
  try {
    const res = await axios.get('https://xcountries-backend.azurewebsites.net/all');
    return res.data;
  } catch (err) {
    if (err.response) {
      console.error("Backend Error:", err.response.status, err.response.data);
    } else if (err.request) {
      console.error("No response received:", err.request);
    } else {
      console.error("Axios config error:", err.message);
    }
  }
};
