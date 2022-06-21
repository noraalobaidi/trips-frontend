import { View, Text,StyleSheet } from 'react-native';
import {Image} from "native-base";
import React from 'react';
import UserStore from "../../stores/UsersStore"
import { observer } from 'mobx-react';

function MainProfile() {

const founduser= UserStore.users.find((userr) => UserStore.user._id == userr._id);
const userprofile=founduser.profile;
// console.log("profileeee"+Object.entries(userprofile));
UserStore.profile=userprofile;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.image}borderRadius={100}source={{ uri:userprofile.profileImage }} alt="Alternate Text" size="xl" />
        <Text style={styles.username}>{founduser.username}</Text>
      <Text style={styles.bio}>{userprofile.bio}</Text>
      {/* <Text>{UserStore.calcTotalTrips(profile[0].trips)}</Text> */}
      <View style={styles.box}>
        <Text style={styles.trips}>Trips</Text>
        <Text style={{fontSize:16,color:"black"}}>{UserStore.calcTotalTrips((founduser.trips))}</Text>
      </View>
        </View>
      
    </View>
  )
}
export default observer (MainProfile);




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
        // height:200,
        height:150

    }
    ,image:{borderColor: "#ffffff",borderWidth: 5,marginTop:50,width:180,height:180},
    username:{fontSize:22,fontWeight:"bold"},
    bio:{fontSize:16,marginTop:10,color:"#606060"},
    box:{marginTop:20,backgroundColor:"#f7f7f7",width:100,height:60, borderRadius:10,
    alignItems:"center",justifyContent:"center"},
    trips:{fontSize:18,color:"#547AA5",fontWeight:"500"}

    // totalTrips:{}
  });

