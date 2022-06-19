import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { Button } from "native-base";

export default function UpdateProfileButton() {
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate("UpdateProfile")}>
            <Button colorScheme={"white"}>Update profile</Button>
            </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
    // button:{fontSize:22,fontWeight:"bold",},


    // totalTrips:{}
  });

