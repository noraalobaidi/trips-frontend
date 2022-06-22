import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MainProfile from "../profile/MainProfile";
import UpdateProfile from "../profile/UpdateProfile";
import SignInOrUp from "../authentication/SignInOrUp";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import SignOut from "../authentication/SignOut";

const { Navigator, Screen } = createStackNavigator();

export default function SignedInStackNavigator() {
  return (
    <Navigator initialRouteName="Profile">
      <Screen
        name="Profile"
        component={MainProfile}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          headerLeft: () => {
            return null;
          },
          headerRight: () => <SignOut />,
        }}
      />
      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          title: "Update Profile",
        }}
      />
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