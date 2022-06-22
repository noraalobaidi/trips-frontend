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
// import * as ImagePicker from 'expo-image-picker';

function UpdateProfile() {
  const [input, setInput] = useState(userStore.profile);

  // const [img, SetImg] = useState(input.profileImage);

  // console.log(Object.entries(input)+"   inputt ")
  // console.log(input.profileImage+"   inputt image")

  // const [txt, setTxt] = useState(" Pick an image");
  // const handleOcr = async () => {
  // const result = await ImagePicker.launchImageLibraryAsync();
  // console.log("handleOcr" + handleOcr);
  // console.log("resulted image "+Object.values(result));

  // if (!result.cancelled) {
  // console.log("setteing the image")
  // const newimg=result.uri;
  // console.log("new image    "+ typeof newimg);
  // SetImg(newimg);
  // console.log("image after   "+ typeof img);
  // }
  // console.log("image after   "+img);
  // };
  const handleSubmit = () => {
    // event.preventDefault();
    const updatedProfile = {
      profile: input,
    };
    console.log(updatedProfile);
    userStore.updateProfile(updatedProfile);

    alert("Profile updated successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <Text>Image</Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={input.profileImage}
        label="Image"
        autoCapitalize="none"
        onChangeText={(img) => setInput({ ...input, profileImage: img })}
<<<<<<< HEAD
        defaultValue={input.profileImage}
=======
>>>>>>> origin/main
      />

      {/* <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{
            uri: img,
          }}
          
        />
        <View style={styles.text_container}>
          <TouchableOpacity onPress={handleOcr}>
            <Text style={styles.card_title}>{txt}</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      <Text>Username</Text>
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
      <Text>Bio</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={input.bio}
        label="bio"
        autoCapitalize="none"
        onChangeText={(bioo) => setInput({ ...input, bio: bioo })}
        defaultValue={input.bio}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.submitButtonText}> Update </Text>
      </TouchableOpacity>
    </View>
  );
}

export default observer(UpdateProfile);

const styles = StyleSheet.create({
  container: {
    padding: 30,
<<<<<<< HEAD
    width: "100%",
=======
    width: 300,
    textAlign: "center",
>>>>>>> origin/main
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
    minWidth: 387,
    elevation: 7,
  },
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
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius: 10,
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
