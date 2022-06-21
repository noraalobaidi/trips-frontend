import { createStackNavigator } from "@react-navigation/stack";
import TripDetails from "../trip/TripDetails";
import TripList from "../trip/TripList";
import ViewProfile from "../profile/ViewProfile"

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
      <Screen name="creatorProfile" component={ViewProfile}
      options={({ route }) => ({
          title: route.params.user.username,
        })}/>
    </Navigator>
  );
}
