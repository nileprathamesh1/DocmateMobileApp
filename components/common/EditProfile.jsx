import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, Modal, Pressable, TextInput } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const EditDetails = ({showEditDetails, setShowEditDetails}) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showEditDetails}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowEditDetails(!showEditDetails);
        }}>
        <View >
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.modalText}>EDIT DETAILS</Text>
              <Pressable
              style={[ styles.cross]}
              onPress={() => setShowEditDetails(!showEditDetails)}>
              <Ionicons name="close" size={24} color="black"  />            
            </Pressable>
           </View>
            <View style = {styles.form}>
              <TextInput placeholder="Name" marginTop='10'/>
              <TextInput placeholder="Email"/>
              <TextInput placeholder="Phone number"/>
              {/*</TextInput>*/}
            </View>

           <Pressable
              style={[styles.button, styles.buttonClose, styles.submit]}
              onPress={() => setShowEditDetails(!showEditDetails)}>
              <Ionicons name="checkmark-done-sharp" size={24} color="white" />            
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );

    // Add logic to change the profile picture here
  };

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // position: 'absolute',
    // top: 1,
    marginTop: 10,

  },

  form:{

    marginTop: 50,
  },
  cross:{
    left: 195,
    position: 'absolute' 
  },
  submit: {
    position: 'absolute',
    bottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:"90%"
  },
  button: {
    borderRadius: 10,
    padding: 10,
   // elevation: 20,
  },
  buttonOpen: {
    backgroundColor: '#00000',
  },
  buttonClose: {
    backgroundColor: '#000000',
  },
  textStyle: {
    color: 'white',
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {

  },
});

export default EditDetails;