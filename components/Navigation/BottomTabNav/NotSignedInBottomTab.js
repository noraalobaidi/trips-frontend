import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Fontisto } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";

//stack navigators
import TripsStackNavigator from "../TripsStackNavigation";
import NotSignedInStackNavigator from "../NotSignedInStackNavigation";

const Tab = createBottomTabNavigator();

function NotSignedInBottomTab() {
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
        name="Profile"
        component={NotSignedInStackNavigator}
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

export default observer(NotSignedInBottomTab);
