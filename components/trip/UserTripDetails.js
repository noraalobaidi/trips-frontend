import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import UpdateTripButton from "./UpdateTripButton";
import tripsStore from "../../stores/tripsStore";
import userStore from "../../stores/UsersStore";
import DeleteTripButton from "./DeleteTripButton";
import { Entypo } from '@expo/vector-icons';

export default function UserTripDetails({ route, navigation }) {
  const { itemId ,tripp} = route.params;
  const trip = tripsStore.getTripById(itemId);
  const user = userStore.getUserById(trip.user);
  // console.log("userrrrr "+Object.entries(user));
  const [heart,setHeart]=useState(trip.favorite);
  console.log("fav before"+heart);
  const changeheart=()=>{
    if (heart=="heart-outlined")
    {setHeart("heart")
    console.log("fav after"+heart);
  tripsStore.updateFav(trip,{favorite:"heart"});
  }
    else if(heart=="heart")
    {setHeart("heart-outlined")
    tripsStore.updateFav(trip,{favorite:"heart-outlined"});}
  };
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={{ uri: trip.image }} />
        <TouchableOpacity onPress={()=>changeheart()}><View style={styles.heart}><Entypo name={heart} size={24} color="red" /></View></TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{trip.title}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("creatorProfile", {
                user: user,
              })
            }
          >
            <Text style={styles.user}>@{user.username}</Text>
          </TouchableOpacity>
          <Text style={styles.description}>{trip.description}</Text>
          <UpdateTripButton itemId={itemId} />
          <DeleteTripButton itemId={itemId} />
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
  heart:{
    display:"flex",
    alignItems:"flex-end",
    marginTop:10,
    marginRight:12
  },
  name: {
    fontSize: 29,
    fontWeight: "bold",
  },
  user: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    marginTop: 10,
    marginBottom: 16,
    textAlign: "justify",
  },
});
