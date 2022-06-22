import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SignInOrUp from "../authentication/SignInOrUp";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";

const { Navigator, Screen } = createStackNavigator();

export default function NotSignedInStackNavigator() {
  return (
    <Navigator initialRouteName="SignInOrUp">
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
        name="SignInOrUp"
        component={SignInOrUp}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          title: "My account",
        }}
      />
    </Navigator>
  );
}
