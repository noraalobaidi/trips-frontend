import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MainProfile from "../profile/MainProfile";
import UpdateProfile from "../profile/UpdateProfile";
import UpdateProfileButton from "../profile/UpdateProfileButton";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import MainAccountPage from "../authentication/MainAccountPage";

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigator() {
  return (
    <Navigator initialRouteName="MainAccountPage">
      <Screen
        name="Profile"
        component={MainProfile}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          headerRight: () => <UpdateProfileButton />,
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
        name="MainAccountPage"
        component={MainAccountPage}
        options={{
          headerStyle: { backgroundColor: "#547AA5" },
          headerTintColor: "white",
          title: "My account",
        }}
      />
    </Navigator>
  );
}
