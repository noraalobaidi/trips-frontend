import { makeAutoObservable, runInAction } from "mobx";
import instance from "../instance/instance";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  users = [];
  user = null;
  profile = null;

  fetchUsers = async () => {
    try {
      const response = await instance.get("/user");
      this.users = response.data;

      //console.log(response.data);
    } catch (error) {
      console.log("userStore -> fetchUsers -> error", error);
    }
  };

  getUserById(id) {
    return this.users.find((user) => user._id === id);
  }

  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
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
    //console.log("userrrr " + Object.entries(this.user));
  };

  checkForToken = async () => {
    const userToken = await AsyncStorage.getItem("token");
    if (userToken) {
      const newUser = jwt_decode(userToken);
      if (newUser.exp > Date.now()) this.setUser(userToken);
      else this.signout();
    }
  };

  calcTotalTrips(trips) {
    return trips.length;
  }
  updateProfile = async (input) => {
    try {
      await instance.put(`/updateProfile/${this.user._id}`, input);
      runInAction(() => {
        this.users.find((userr) => userr._id == this.user._id).profile =
          input.profile;
      });
      // this.users.find((userr)=>userr._id==this.user._id).profile=input.profile;
    } catch (error) {
      console.error(error);
    }
  };
}

const userStore = new UserStore();
userStore.checkForToken();
userStore.fetchUsers();
export default userStore;
