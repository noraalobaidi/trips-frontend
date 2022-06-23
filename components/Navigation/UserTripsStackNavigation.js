import { createStackNavigator } from "@react-navigation/stack";
import UserTripDetails from "../trip/UserTripDetails";
import UserTrips from "../trip/UserTrips";
import AddTripButton from "../trip/AddTripButton";
import AddTrip from "../trip/AddTrip";
import UpdateTrip from "../trip/UpdateTrip";

const { Navigator, Screen } = createStackNavigator();

export default function UserTripsStackNavigator() {
  return (
    <Navigator
      initialRouteName="My Trips"
      screenOptions={{
        headerStyle: { backgroundColor: "#547AA5" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="My Trips"
        component={UserTrips}
        options={{
          headerRight: () => <AddTripButton />,
        }}
      />
      <Screen name="UpdateTrip" component={UpdateTrip} />
      <Screen name="My Trips Details" component={UserTripDetails}
       options={({ route }) => ({
          title: `Trip to ${route.params.tripp.title}`,
        })}/>
      <Screen name="AddTrip" component={AddTrip} 
      options={{title:"Add trip"}}
      />
    </Navigator>
  );
}
