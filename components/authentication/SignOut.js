import { View, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import userStore from "../../stores/UsersStore";

export default function SignOut() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          userStore.signout();
          navigation.navigate("Home");
        }}
      >
        <Button colorScheme={"white"}>Sign out</Button>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});
