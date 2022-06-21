import { createStackNavigator } from "@react-navigation/stack";
import TripDetails from "../trip/TripDetails";
import TripList from "../trip/TripList";

const { Navigator, Screen } = createStackNavigator();

export default function TripsStackNavigator() {
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
      <Screen name="Trips" component={TripList} />
      <Screen name="Detail" component={TripDetails} />
    </Navigator>
  );
}
