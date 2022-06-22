import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useToast } from "native-base";
import { useState } from "react";
import tripsStore from "../../stores/tripsStore";

export default function AddTrip({ navigation }) {
  const toast = useToast();
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter trip title"
          label="title"
          value={trip.title}
          autoCapitalize="words"
          onChangeText={(title) => setTrip({ ...trip, title })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter trip description"
          label="description"
          value={trip.description}
          autoCapitalize="none"
          onChangeText={(description) => setTrip({ ...trip, description })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter trip image"
          label="image"
          value={trip.image}
          autoCapitalize="none"
          onChangeText={(image) => setTrip({ ...trip, image })}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={async () => {
          await tripsStore.addTrip(trip);
          setTrip({
            title: "",
            description: "",
            image: "",
          });
          toast.show({
            title: "Trip added! Enjoy!",
            placement: "top",
          });
          navigation.navigate("Trips");
        }}
      >
        <Text style={styles.submitButtonText}> Add trip </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
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
    minWidth: 387,
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
