import { View, Text,StyleSheet ,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler'
import {Image} from "native-base";
import React from 'react';
import profile from "../../mainProfileData";
import UserStore from "../../UserStore"
import { useState } from "react";

export default function UpdateProfile() {
    const [input, setInput] = useState(profile[0]
      );

      const handleSubmit = () => {
        // event.preventDefault();
        console.log(input);
        alert("Profile updated successfully");
      };
    
  return (
    
    <View style={styles.container}>
        <View style={styles.header}>
      </View>
    
    <Text>Image</Text>
    <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={input.image}
          label="Image"
          autoCapitalize="none"
          onChangeText={(img) => setInput({...input, image: img})}
        />
        <Text>Username</Text>
         <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={input.username}
          label="username"
          autoCapitalize="none"
          editable={false}
          onChangeText={(usernamee) => setInput({...input, username: usernamee})}
        />
        <Text>Bio</Text>
         <TextInput
          style={styles.bio}
          underlineColorAndroid="transparent"
          placeholder={input.bio}
          label="bio"
          autoCapitalize="none"
          onChangeText={(bioo) => setInput({...input, bio: bioo})}
        />
         <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>{ console.log(input);
            alert("Profile updated successfully");}}
      >
        <Text style={styles.submitButtonText}> Update </Text>
      </TouchableOpacity>
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
        // height:200,
        height:150

    }
    ,image:{borderColor: "#ffffff",borderWidth: 5,marginTop:50,width:180,height:180},
    username:{fontSize:22,fontWeight:"bold"},
    box:{marginTop:20,backgroundColor:"#f7f7f7",width:100,height:60, borderRadius:10,
    alignItems:"center",justifyContent:"center"},
    trips:{fontSize:18,color:"#547AA5",fontWeight:"500"},
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
      }, bio: {
        margin: 15,
        padding: 7,
        height: 100,
        width:300,
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

    // totalTrips:{}
  });

