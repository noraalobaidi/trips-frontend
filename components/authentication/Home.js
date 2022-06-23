import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Sign in to create your own trips!</Text>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text style={styles.signInButtonText}> Sign in </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.signUpButtonText}> Create a new account </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  signInButton: {
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

  signUpButton: {
    backgroundColor: "white",

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
  signInButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  signUpButtonText: {
    color: "#547AA5",
    textAlign: "center",
    fontWeight: "bold",
  },
  welcome: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 69,
    fontSize: 25,
  },
});
