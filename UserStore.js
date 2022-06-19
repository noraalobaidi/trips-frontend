import { makeAutoObservable } from 'mobx';

class UserStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
 

  calcTotalTrips(trips){
return trips.length;
  }
}

const userStore = new UserStore();

export default userStore;