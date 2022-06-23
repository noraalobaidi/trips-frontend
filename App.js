import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import SignedInBottomTab from "./components/Navigation/BottomTabNav/SignedInBottomTab";
import NotSignedInBottomTab from "./components/Navigation/BottomTabNav/NotSignedInBottomTab";
import userStore from "./stores/UsersStore";
import { observer } from "mobx-react-lite";

function App() {
  //userStore.user = null;
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {userStore.user ? <SignedInBottomTab /> : <NotSignedInBottomTab />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default observer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
