import axios from "axios";

const KEY = "AIzaSyC6Uhlm52XsxT-QkGOUTGiMmBib9Yq3P0A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
//Here we have a PRE-CONFIGURED AXIOS instance of axios that already has baseUrl and default PARAMETERS
// header: It will include all of the query string parameters that we initially setted up on 'Youtube API search.com' want to add to the request.
