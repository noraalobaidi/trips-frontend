import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.103:8001",
});

export default instance;
