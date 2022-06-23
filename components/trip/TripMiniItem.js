import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { Entypo } from '@expo/vector-icons';
  
  export default function TripMiniItem({trip}) {
    const [heart,setHeart]=useState(trip.favorite);
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("userDetail", {
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
           {heart=="heart" && <View style={styles.heart}><Entypo name={heart} size={24} color="white" /></View>}

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{trip.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
    //   borderRadius: 16,
      overflow: "hidden",
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: "black",
      width:"100%",
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 1,
    //   marginVertical: 15,
    //   marginHorizontal:5
    },
    thumb: {
      height: 130,
      width: "100%",
      borderRadius: 16,
    },
    heart:{
      display:"flex",
      alignItems:"flex-end",
      marginTop:5,
      marginRight:3,
    },
    infoContainer: {
      padding: 12,
      backgroundColor: "#2C2C2Cc0",
      width: "100%",
      position: "absolute",
      bottom: 0,
    },
    name: {
      fontSize: 13,
      fontWeight: "bold",
      color: "white",
    },
  });
  