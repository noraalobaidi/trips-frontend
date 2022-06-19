import { makeAutoObservable } from "mobx";
import instance from "./instance";
import jwt_decode from "jwt-decode";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);
      this.user = jwt_decode(response.data.token);
      instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return true;
    } catch (error) {
      alert("This username is already taken. Please choose another name");
      console.error(error);
      return false;
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = jwt_decode(res.data.token);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      this.setUser(res.data.token);
      alert("Welcome back!");
    } catch (error) {
      alert("Incorrect username or password");
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("token");
    this.user = null;
  };

  setUser = (userToken) => {
    localStorage.setItem("token", userToken);
    instance.defaults.headers.common.Authorization = `Bearer ${userToken}`;
    this.user = jwt_decode(userToken);
  };

  checkForToken = () => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const newUser = jwt_decode(userToken);
      if (newUser.exp > Date.now()) this.setUser(userToken);
      else this.signout();
    }
  };
}

const userStore = new UserStore();
userStore.checkForToken();
export default userStore;
