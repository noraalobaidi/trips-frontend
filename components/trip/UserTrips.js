import { SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import tripsStore from "../../stores/tripsStore";
import UserTripItem from "./UserTripItem";
import { observer } from "mobx-react";
import userStore from "../../stores/UsersStore";

function UserTripList({ navigation }) {
  tripsList = tripsStore.trips.filter(
    (trip) => trip.user === userStore.user._id
  );
  function renderTrip({ item: trip }) {
    return <UserTripItem navigation={navigation} trip={trip} />;
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

export default observer(UserTripList);

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
