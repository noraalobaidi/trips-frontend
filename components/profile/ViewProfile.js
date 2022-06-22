import { View, Text,StyleSheet ,FlatList} from 'react-native';
import {Image} from "native-base";
import React from 'react';
import UserStore from "../../stores/UsersStore"
import { observer } from 'mobx-react';
import tripsStore from '../../stores/tripsStore';
import TripItem from '../trip/TripItem';
import TripMiniItem from '../trip/TripMiniItem';

function ViewProfile({ route }) {
  const { user, id } = route.params;
  console.log("user"+user);
  const founduser = UserStore.users.find((user)=>user._id==id);
  const userTrips=tripsStore.trips.filter((trip)=>trip.user==founduser._id);
const userprofile=founduser.profile;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          borderRadius={100}
          source={{ uri: userprofile.profileImage }}
          alt="Alternate Text"
          size="xl"
        />
        <Text style={styles.username}>{founduser.username}</Text>
        <Text style={styles.bio}>{userprofile.bio}</Text>
        <View style={styles.box}>
          <Text style={styles.trips}>
            {UserStore.calcTotalTrips(userTrips)}
          </Text>
          <Text style={{ fontSize: 16, color: "black", marginBottom: 10 }}>
            Trips
          </Text>
        </View>
      </View>
      <FlatList
        style={styles.tripsList}
        data={userTrips}
        numColumns={3}
        // columnWrapperStyle={{
        //   flex: 1,
        //   justifyContent: 'space-evenly',
        // }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item:trip}) =><View style={{flex: 0.333,flexDirection: 'column'}}>
        <TripMiniItem trip={trip}/>
      </View>}
      />
    </View>
  );
}
export default observer(ViewProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: "#547AA5",
    alignItems: "center",
    width: "100%",
    // height:200,
    height: 150,
  },
  image: {
    borderColor: "#ffffff",
    borderWidth: 5,
    marginTop: 50,
    width: 180,
    height: 180,
  },
  username: { fontSize: 22, fontWeight: "bold" },
  bio: { fontSize: 16, marginTop: 10, color: "#606060" },
  box: {
    marginTop: 20,
    backgroundColor: "#f7f7f7",
    width: 100,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  trips: { fontSize: 20, color: "#547AA5", fontWeight: "700" },

  containerr: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   tripsList: {
    // backgroundColor:"red"

width:"100%",
height:10,
// marginTop:250
  },
  spaces:{
    flex: 1,
    justifyContent: "space-around"
  }, tripsList: {
        // backgroundColor:"red"
    width:"100%",
    height:10,
    marginTop:250
      },
  // totalTrips:{}
});

//instagram style 

{/* <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View>
        <Image
          style={styles.image}
          borderRadius={100}
          source={{ uri: userprofile.profileImage }}
          alt="Alternate Text"
          size="xl"
        />
        <Text style={styles.username}>{user.username}</Text>
        </View>
        <View style={styles.box}>
        
        <Text style={styles.trips}>{UserStore.calcTotalTrips((userTrips))}</Text>
        <Text style={{fontSize:13,color: "#ffffff",marginBottom:10}}>Trips</Text>
      </View>
        </View>
      
      <Text style={styles.bio}>{userprofile.bio}</Text>
        </View>
        <FlatList
        style={styles.tripsList}
        data={userTrips}
        numColumns={3}
        // columnWrapperStyle={{
        //   flex: 1,
        //   justifyContent: 'space-evenly',
        // }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item:trip}) =><View style={{flex: 0.333,flexDirection: 'column'}}>
        <TripMiniItem trip={trip}/>
      </View>}
      />
    </View> */}

    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     // justifyContent: 'center',
    //   },
    //   header: {
    //     backgroundColor: "#547AA5",
    //     // alignItems: "center",
    //     width:"100%",
    //     // height:200,
    //     height: 150,
       
    //   },
    //   row:{  display:"flex",
    //   flexDirection:"row"
    // },
    //   image: {
    //     marginLeft:8,
    //     borderColor: "#ffffff",
    //     borderWidth: 3,
    //     marginTop: 5,
    //     width: 80,
    //     height: 80,
    //   },
    //   username: { fontSize: 15, fontWeight: "500",color:"white",marginLeft:10,marginTop:5 },
    //   bio: { fontSize: 16, marginTop: 5, color: "#ffffff",marginLeft:10 },
    //   box: {
    //     marginTop: 20,
    //     // backgroundColor: "#f7f7f7",
    //     width: 100,
    //     height: 60,
    //     borderRadius: 10,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   },
    //   trips: { fontSize: 20, color: "#ffffff", fontWeight: "700" },
    //   containerr: {
    //     flex: 1,
    //     paddingTop: 22
    //    },
    //    item: {
    //      padding: 10,
    //      fontSize: 18,
    //      height: 44,
    //    },
    //    tripsList: {
    //     // backgroundColor:"red"
    // width:"100%",
    // height:10,
    // // marginTop:250
    //   },
    //   spaces:{
    //     flex: 1,
    //     justifyContent: "space-around"
    //   }
    //   // totalTrips:{}
    // });