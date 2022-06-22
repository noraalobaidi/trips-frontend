import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.101:8001",

  // 188.70.2.247
  // 192.168.8.100
});

export default instance;
