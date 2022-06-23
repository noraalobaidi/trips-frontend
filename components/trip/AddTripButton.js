import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function AddTripButton() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddTrip");
        }}
      >
        <Button colorScheme={"white"}>Add trip</Button>
        {/* <Text style={styles.button}>Add trip</Text> */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    color: "white",
    marginLeft: 8,
  },
});
