import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import tripsStore from "../../stores/tripsStore";

export default function TripDetails({ route }) {
  const { itemId } = route.params;
  const trip = tripsStore.getTripById(itemId);
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={{ uri: trip.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{trip.title}</Text>
          <Text style={styles.description}>{trip.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    marginTop: 16,
    marginBottom: 16,
  },
});
