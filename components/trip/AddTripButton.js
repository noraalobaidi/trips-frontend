import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function AddTripButton() {
  const navigation = useNavigation();
  return (
    <Button
      colorScheme={"white"}
      onPress={() => {
        navigation.navigate("AddTrip");
      }}
    >
      Add trip
    </Button>
  );
}
const styles = StyleSheet.create({
  button: {
    color: "white",
    marginLeft: 8,
  },
});
