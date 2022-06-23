import { View, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

export default function UpdateTripButton({ itemId }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UpdateTrip", { itemId });
        }}
      >
        <Button variant="outline" colorScheme="black" style={styles.button}>
          Edit Trip
        </Button>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: { width: "100%", marginTop: 10 },
});
