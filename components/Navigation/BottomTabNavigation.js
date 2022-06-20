import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Fontisto } from "@expo/vector-icons";
import TripList from "../trip/TripList";
import MainProfile from "../profile/MainProfile";
import StackNavigator from "./StackNavigation";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
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
        component={StackNavigator}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: () => (
            <Fontisto name="compass" size={24} color="#D1D1D1" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={TripList}
        options={{
          tabBarLabel: "MyTrips",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="book-account-outline"
              size={24}
              color="#D1D1D1"
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
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
