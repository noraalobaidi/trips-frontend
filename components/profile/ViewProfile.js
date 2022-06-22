import { View, Text,StyleSheet } from 'react-native';
import {Image} from "native-base";
import React from 'react';
import UserStore from "../../stores/UsersStore"
import { observer } from 'mobx-react';
import tripsStore from '../../stores/tripsStore';


function ViewProfile({route}) {
  const { user, id } = route.params;
  console.log("user"+user);
  const founduser = UserStore.users.find((user)=>user._id==id);
  const userTrips=tripsStore.trips.filter((trip)=>trip.user==founduser._id);
const userprofile=founduser.profile;
// console.log("profileeee"+Object.entries(userprofile));


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.image}borderRadius={100}source={{ uri:userprofile.profileImage }} alt="Alternate Text" size="xl" />
        <Text style={styles.username}>{user.username}</Text>
     
      <View style={styles.box}>
        
        <Text style={styles.trips}>{UserStore.calcTotalTrips((userTrips))}</Text>
        <Text style={{fontSize:16,color:"black",marginBottom:10}}>Trips</Text>
      </View>
      <Text style={styles.bio}>{userprofile.bio}</Text>
        </View>
      
    </View>
  )
}
export default observer (ViewProfile);




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
    bio:{fontSize:16,marginTop:20,color:"#606060"},
    box:{marginTop:20,backgroundColor:"#f7f7f7",width:100,height:60, borderRadius:10,
    alignItems:"center",justifyContent:"center"},
    trips:{fontSize:20,color:"#547AA5",fontWeight:"700"}

    // totalTrips:{}
  });

