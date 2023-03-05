import axios from "axios";

// Setting up the API_KEY
const KEY = "AIzaSyAEPWaY2Dm8OubLxZ-LPsGZ8X9ALxh0lDI";

// Exporting the fetching function
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: KEY,
  },
});
