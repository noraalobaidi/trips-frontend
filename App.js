import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainProfile from "./components/profile/MainProfile";
import { NativeBaseProvider } from "native-base";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/StackNavigation";
import BottomTabNavigator from "./components/Navigation/BottomTabNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
