import { SafeAreaView, Text } from "react-native";
import React from "react";
import tripsStore from "../../stores/tripsStore";
import { observer } from "mobx-react";

function TripList() {
  //   const list = tripsStore.trips;
  return (
    <SafeAreaView>
      <Text>Trips n stuff</Text>
    </SafeAreaView>
  );
}

export default observer(TripList);
