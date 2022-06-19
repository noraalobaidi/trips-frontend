import { View, Text,StyleSheet } from 'react-native';
import {Image} from "native-base";
import React from 'react';
import profile from "./mainProfileData";
import UserStore from "./UserStore"

export default function MainProfile() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.image}borderRadius={100}source={{uri: "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    }} alt="Alternate Text" size="xl" />
        <Text style={styles.username}>{profile[0].username}</Text>
      <Text style={styles.bio}>{profile[0].bio}</Text>
      <Text>{UserStore.calcTotalTrips(profile[0].trips)}</Text>
        </View>
      
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    header:{
        backgroundColor:"#547AA5",
        alignItems: 'center',
        width:450,
        height:200,

    }
    ,image:{borderColor: "#ffffff",borderWidth: 5,marginTop:100,width:200,height:200},
    username:{fontSize:24,fontWeight:"bold"},
    bio:{fontSize:16,marginTop:10,color:"#606060"},
    // totalTrips:{}
  });
  