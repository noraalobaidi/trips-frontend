
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


//screens
import MainProfile from "../profile/MainProfile";
import UpdateProfile from "../profile/UpdateProfile";
import UpdateProfileButton from "../profile/UpdateProfileButton"


const { Navigator, Screen } = createStackNavigator();

export default function StackNavigator() {
  return (
    <Navigator initialRouteName="Profile">
      <Screen
        name="Profile"
        component={MainProfile}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          headerRight: () => <UpdateProfileButton/>,
        }}
      />
      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
            headerStyle: { backgroundColor: "#547AA5" },
            headerTintColor: "white",
          title:"Update Profile",
        }}
      />

    </Navigator>
  );
}