import { makeAutoObservable, runInAction } from "mobx";
import userStore from "./UsersStore";
import instance from "../instance/instance";

class TripsStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
    } catch (error) {
      console.error("fetchingerror", error);
    }
  };

  addTrip = async (newTrip) => {
    try {
      newTrip.user = userStore.user._id;
      const response = await instance.post("/trips", newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.error("can't add trip", error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      console.log(updatedTrip);
      await instance.put(`/trips/${updatedTrip._id}`, updatedTrip);
      const trip = Object.assign(
        this.trips.find((trip) => trip._id == updatedTrip._id),
        updatedTrip
      );
    } catch (error) {
      console.error("updating error", error);
    }
  };

  getTripById(id) {
    return this.trips.find((trip) => trip._id === id);
  }
}

const tripsStore = new TripsStore();
tripsStore.fetchTrips();
export default tripsStore;
