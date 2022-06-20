import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import usersStore from "../../stores/UsersStore";

export function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME!</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter username"
          label="username"
          value={user.username}
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter password"
          label="password"
          secureTextEntry={true}
          value={user.password}
          autoCapitalize="none"
          onChangeText={(password) => setUser({ ...user, password })}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={async () => {
          await usersStore.signup(user);
          setUser({
            username: "",
            password: "",
          });
        }}
      >
        <Text style={styles.submitButtonText}> Sign up </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    width: 300,
  },
  input: {
    margin: 15,
    padding: 7,
    height: 40,
    borderColor: "#7a42f4",
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
});