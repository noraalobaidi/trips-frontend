import { createStackNavigator } from "@react-navigation/stack";
import TripDetails from "../trip/TripDetails";
import UserTrips from "../trip/UserTrips";
import AddTripButton from "../trip/AddTripButton";
import AddTrip from "../trip/AddTrip";

const { Navigator, Screen } = createStackNavigator();

export default function UserTripsStackNavigator() {
  return (
    <Navigator
      initialRouteName="Trips"
      screenOptions={{
        headerStyle: { backgroundColor: "#547AA5" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Trips"
        component={UserTrips}
        options={{
          headerRight: () => <AddTripButton />,
        }}
      />
      <Screen name="Detail" component={TripDetails} />
      <Screen name="Add Trip" component={AddTrip} />
    </Navigator>
  );
}
