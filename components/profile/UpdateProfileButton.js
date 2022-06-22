import { View, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

export default function UpdateProfileButton() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("UpdateProfile")}>
        <Button variant="outline" colorScheme="black" style={styles.button}>
          Edit profile
        </Button>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: { width: 150, marginTop: 10 },

  // totalTrips:{}
});
