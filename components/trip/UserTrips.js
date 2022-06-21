import { SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import tripsStore from "../../stores/tripsStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import userStore from "../../stores/UsersStore";

function TripList({ navigation }) {
  const tripsList = tripsStore.trips.filter(
    (trip) => trip.user === userStore.user._id
  );
  function renderTrip({ item: trip }) {
    return (
      <TripItem
        trip={trip}
        onPress={() => {
          navigation.navigate("Detail", {
            itemId: trip._id,
          });
        }}
      />
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        style={styles.tripsList}
        contentContainerStyle={styles.tripsListContainer}
        data={tripsList}
        renderItem={renderTrip}
      />
    </SafeAreaView>
  );
}

export default observer(TripList);

const styles = StyleSheet.create({
  tripsList: {
    backgroundColor: "#eeeeee",
  },
  tripsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
