import { View, Text, StyleSheet } from "react-native";
import { Image } from "native-base";
import React from "react";
import userStore from "../../stores/UsersStore";
import { observer } from "mobx-react";
import UpdateProfileButton from "../profile/UpdateProfileButton";
import tripsStore from "../../stores/tripsStore";

function MainProfile() {
  let founduser;
  let userprofile;
  let userTrips;
  if (userStore.user) {
    founduser = userStore.users.find(
      (userr) => userStore.user._id == userr._id
    );
    userprofile = founduser.profile;
    userStore.profile = userprofile;
    userTrips = tripsStore.trips.filter((trip) => trip.user == founduser._id);
  }

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
        <UpdateProfileButton />
        <View style={styles.box}>
          <Text style={styles.trips}>
            {userStore.calcTotalTrips(userTrips)}
          </Text>
          <Text style={{ fontSize: 16, color: "black", marginBottom: 10 }}>
            Trips
          </Text>
        </View>
      </View>
    </View>
  );
}
export default observer(MainProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#547AA5",
    alignItems: "center",
    width: "100%",
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
  trips: { fontSize: 20, color: "#547AA5", fontWeight: "bold" },
});
