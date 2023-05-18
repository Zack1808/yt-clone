import axios from "axios";

// Importing the API_KEY
import { KEY } from "../data/data";

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
