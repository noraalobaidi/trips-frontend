import { makeAutoObservable } from "mobx";
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

  getTrips = async () => {
    return this.trips;
  };
}

const tripsStore = new TripsStore();
tripsStore.fetchTrips();
export default tripsStore;
