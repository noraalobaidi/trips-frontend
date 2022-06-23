import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from "../authentication/Home";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";

const { Navigator, Screen } = createStackNavigator();

export default function NotSignedInStackNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          title: "Sign in",
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          title: "Sign up",
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          title: "My account",
        }}
      />
    </Navigator>
  );
}
