import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from "native-base";
import React from "react";
import profile from "../../mainProfileData";
import userStore from "../../stores/UsersStore";
import { useState } from "react";
import { observer } from "mobx-react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";

function UpdateProfile() {
  const toast = useToast();
  const [input, setInput] = useState(userStore.profile);
  const navigation = useNavigation();

  const [img, SetImg] = useState(input.profileImage);
  const handleOcr = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      const newimg = result.uri;
      console.log("new image: \n" + newimg);
      SetImg(newimg);
      console.log("updated image:" + img);
    }
    setInput({ ...input, profileImage: img });
  };

  const handleSubmit = async () => {
    toast.show({
      title: "Profile updated successfully",
      placement: "top",
      bg: "green.800",
    });
    const updatedProfile = {
      profile: input,
    };
    userStore.updateProfile(updatedProfile);
    // alert("Profile updated successfully");
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={userStore.user.username}
        label="username"
        autoCapitalize="none"
        editable={false}
        onChangeText={(usernamee) =>
          setInput({ ...input, username: usernamee })
        }
      />
      <Text style={styles.text}>Bio</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={input.bio}
        label="bio"
        autoCapitalize="none"
        onChangeText={(bioo) => setInput({ ...input, bio: bioo })}
        defaultValue={input.bio}
      />

      <Text style={styles.text}>Image</Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={input.profileImage}
        label="Image"
        autoCapitalize="none"
        onChangeText={(img) => setInput({ ...input, profileImage: img })}
        defaultValue={input.profileImage}
      />

      <View style={styles.card_template}>
        <TouchableOpacity onPress={handleOcr}>
          <Image
            style={styles.card_image}
            source={{
              uri: img,
            }}
            alt="profile image"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.submitButtonText}> Save changes </Text>
      </TouchableOpacity>
    </View>
  );
}

export default observer(UpdateProfile);

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    width: "100%",
    textAlign: "center",
  },
  input: {
    margin: 15,
    padding: 7,
    height: 40,
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: { margin: 5, paddingLeft: 5 },
  submitButton: {
    backgroundColor: "#547AA5",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  welcome: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 69,
    fontSize: 30,
  },
  card_template: {
    width: "100%",
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    textAlign: "center",
    alignItems: "center",
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    textAlign: "center",
  },
  text_container: {
    position: "absolute",
    width: 250,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "white",
    textAlign: "center",
  },
});
