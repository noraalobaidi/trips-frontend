import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import tripsStore from "../../stores/tripsStore";
import { useNavigation } from "@react-navigation/native";

export default function UpdateTrip({ route, navigation }) {
  const { itemId } = route.params;
  const trip = tripsStore.getTripById(itemId);
  const [updatedTrip, setUpdatedTrip] = useState({
    _id: trip._id,
    user: trip.user,
    title: trip.title,
    description: trip.description,
    image: trip.image,
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          label="title"
          value={updatedTrip.title}
          autoCapitalize="words"
          onChangeText={(title) => setUpdatedTrip({ ...updatedTrip, title })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          label="description"
          value={updatedTrip.description}
          autoCapitalize="none"
          onChangeText={(description) =>
            setUpdatedTrip({ ...updatedTrip, description })
          }
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter trip image"
          label="image"
          value={updatedTrip.image}
          autoCapitalize="none"
          onChangeText={(image) => setUpdatedTrip({ ...updatedTrip, image })}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={async () => {
          await tripsStore.updateTrip(updatedTrip);
          console.log(`/trips/${trip._id}`);
          setUpdatedTrip({
            title: "",
            description: "",
            image: "",
          });
          navigation.navigate("My Trips");
        }}
      >
        <Text style={styles.submitButtonText}> update trip </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    width: "100%",
  },
  input: {
    margin: 15,
    padding: 7,
    height: 40,
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  submitButton: {
    backgroundColor: "#547AA5",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  welcome: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 69,
    fontSize: 30,
  },
});
