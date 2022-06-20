import { makeAutoObservable } from "mobx";
import instance from "./instance";

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
}

const tripsStore = new TripsStore();
// tripsStore.fetchTrips();
export default tripsStore;
