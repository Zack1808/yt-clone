import axios from "axios";

// Exporting the fetching function
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: process.env.REACT_APP_YT_API_KEY,
  },
});
