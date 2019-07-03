import axios from "axios";

const api = axios.create({
  baseURL: "https://spotify-json-server.herokuapp.com"
});

export default api;
