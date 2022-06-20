import { makeAutoObservable } from "mobx";
import instance from "../instance/instance";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  users=[];
  user = null;


  fetchUsers = async () => {
    try {

      const response = await instance.get("/user");
      this.users = response.data;

      console.log(response.data);
    } catch (error) {
      console.log("UserStore -> fetchUsers -> error", error);
    }
  };
getUserProfile = ()=>{

    const founduser= this.users.filter((userr) => this.user._id == userr._id);
console.log("getting user from users "+founduser);
const profile=founduser.profile;
return profile;
  

};
  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);
      this.user = jwt_decode(response.data.token);
      instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      alert("Welcome!");
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
      // this.user = jwt_decode(res.data.token);
      // instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      this.setUser(res.data.token);
    } catch (error) {
      alert("Incorrect username or password");
    }
  };

  signout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("token");
      this.user = null;
    } catch (error) {
      console.error(error);
    }
  };

  setUser = async (userToken) => {
    await AsyncStorage.setItem("token", userToken);
    instance.defaults.headers.common.Authorization = `Bearer ${userToken}`;
    this.user = jwt_decode(userToken);
    console.log("userrrr "+Object.entries(this.user))
  };

  checkForToken = async () => {
    const userToken = await AsyncStorage.getItem("token");
    if (userToken) {
      const newUser = jwt_decode(userToken);
      if (newUser.exp > Date.now()) this.setUser(userToken);
      else this.signout();
    }
  };

  calcTotalTrips(trips){
    return trips.length;
      }
}

const userStore = new UserStore();
userStore.checkForToken();
userStore.fetchUsers();
export default userStore;
