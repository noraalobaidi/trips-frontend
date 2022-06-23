import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button } from "native-base";
import tripsStore from "../../stores/tripsStore";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";

export default function DeleteTripButton({ itemId }) {
  const toast = useToast();
  const displayToast=()=>{toast.show({
    title: "Trip deleted successfully",
    placement: "top",
    bg:"red.800"
  });};
  const navigation = useNavigation();

  const showConfirmDialog = () => {
    return Alert.alert(
      "Delete Trip ?",
      "Are you sure you want to delete this trip",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            tripsStore.deleteTrip(itemId);
            navigation.navigate("My Trips");
            displayToast();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={styles.screen}>
      {/* {showBox && <View style={styles.box}></View>} */}

      <Button
        variant="outline"
        colorScheme="red"
        style={styles.button}
        onPress={() => showConfirmDialog()}
      >
        Delete Trip
      </Button>
    </View>
  );
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "red",
    marginBottom: 30,
  },
  text: {
    fontSize: 30,
  },
  button: { width: "100%", marginTop: 10 },
});
