import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.20.10.7:8001",

  //kems 192.168.1.167
  //galaxy note  192.168.234.242
  // 188.70.2.247
  // 192.168.8.100
});

export default instance;
