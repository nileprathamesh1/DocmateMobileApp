import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, Modal, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import EditDetails from '../common/EditProfile';



//import { SafeAreaView } from 'react-native-safe-area-context';


const Profile = () => {
  const [user, setUser] = useState({
    name: 'Prathamesh',
    email: 'email address',
    age: 23,
    mobile: '8440974912',
  });

  const [showEditDetails, setShowEditDetails] = useState(false);

 
  return ( 
    <SafeAreaView style={styles.container}>
    {!showEditDetails ? 
      <View style={styles.background}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>           
			<Image
              style={styles.stretch}
              source={require("../../assets/Virat.png")} // Update the path to your image
            />
          </View>
          
   
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userInfoText}>Email: {user.email}</Text>
            <Text style={styles.userInfoText}>Age: {user.age}</Text>
            <Text style={styles.userInfoText}>Mobile: {user.mobile}</Text>
          </View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setShowEditDetails(true)}>
        <MaterialIcons name="edit" size={24} color="black" style={{margin:20}}
        /> 
        </Pressable>

      </View>
      : <EditDetails showEditDetails={showEditDetails} setShowEditDetails={setShowEditDetails}/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  background: {
    backgroundColor: '#eaeaea',
    flex: 1,
    flexDirection:"row",
    width: '100%',
    justifyContent: "space-between",
    maxHeight: '20%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  imageContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  stretch: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  userInfo: {
    flex: 1,
    justifyContent:  "center",
    marginLeft: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoText: {
    fontSize: 10,
        textAlign: "left",
  },

  icon:
  {
  	margin: 5,
    position: "absolute",
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    color: "tomato"
  },
  
});

export default Profile;

