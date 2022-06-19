
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MainProfile from "../profile/MainProfile";


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
        //   headerRight: () => ,
        }}
      />
      <Screen
        name="UpdateProfile"
        component={MainProfile}
        options={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#375C81",
          title:"Update Profile",
        }}
      />

    </Navigator>
  );
}