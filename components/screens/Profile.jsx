import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button, StyleSheet, Modal, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import EditDetails from '../common/EditProfile';



//import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-community/async-storage';
import { HOST, Logout } from '../../Apis';

const Profile = (props) => {
  const getUserData = async() =>{
    try{
      var data = JSON.parse(await AsyncStorage.getItem("userData"));
      if(data.dp)
        setImageUri(HOST + "static/" + data.dp);
    }catch(e){
      console.error(e);
    }
    setUser(data);
  }

  const [imageUri, setImageUri] = useState("www.foof.com");
  const [user, setUser] = useState({});

  const [showEditDetails, setShowEditDetails] = useState(false);

  const handleLogout = async () => {
    await Logout();
    await AsyncStorage.clear();
    props.navigation.navigate("Login");
  }

  useEffect(()=> {
    getUserData();
  }, []);
 
  return ( 
    <View style={styles.container}>
    {!showEditDetails ? 
      <View style={styles.background}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>           
			      <Image
              style={styles.stretch}
              source={{uri: imageUri}} // Update the path to your image
            />
             <Pressable
              style={{position: "absolute", right: -20, top: 0}}
              onPress={() => setShowEditDetails(true)}>
            <MaterialIcons name="edit" size={24} color="black"
            /> 
          </Pressable>
          </View>
          
   
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userInfoText}>Email: {user.email}</Text>
            <Text style={styles.userInfoText}>Age: {user.age}</Text>
          </View>
       
      <View style={{marginTop: 70, marginRight: 50 }}>
        <Button title='Logout' onPress={handleLogout} />
      </View>

      </View>
      : <EditDetails showEditDetails={showEditDetails} setShowEditDetails={setShowEditDetails}/>}
    </View>
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
    width: 80,
    height: 80,
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

