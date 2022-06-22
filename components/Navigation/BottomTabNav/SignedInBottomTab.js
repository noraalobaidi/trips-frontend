import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Fontisto } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";

// stack navigators
import StackNavigator from "../SignedInStackNavigation";
import TripsStackNavigator from "../TripsStackNavigation";
import UserTripsStackNavigator from "../UserTripsStackNavigation";

const Tab = createBottomTabNavigator();

function SignedInBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#547AA5",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={TripsStackNavigator}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: () => (
            <Fontisto name="compass" size={24} color="#D1D1D1" />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={UserTripsStackNavigator}
        options={{
          tabBarLabel: "MyTrips",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="book-account-outline"
              size={24}
              color="#D1D1D1"
            />
          ),
          //tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="MainProfile"
        component={StackNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={24} color="#D1D1D1" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default observer(SignedInBottomTab);
