import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {observer} from "mobx-react";
import { Entypo } from '@expo/vector-icons';
function UserTripItem({ navigation, trip }) {
const [heart,setHeart]=useState(trip.favorite);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("My Trips Details", {
          itemId: trip._id,
          tripp:trip
        });
      }}
    >
      <ImageBackground
        // resizeMode="cover"
        // opacity={0.6}
        style={styles.thumb}
        source={{ uri: trip.image }}
      >
         {heart=="heart" && <View style={styles.heart}><Entypo name={heart} size={40} color="white" /></View>}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{trip.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
export default observer(UserTripItem);
const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
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
  thumb: {
    height: 260,
    width: "100%",
    borderRadius: 16,
  },
  heart:{
    display:"flex",
    alignItems:"flex-end",
    marginTop:5,
    marginRight:10,

  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#2C2C2Cc0",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
