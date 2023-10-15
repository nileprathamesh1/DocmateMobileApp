import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, TextInput, Switch, KeyboardAvoidingView, TouchableOpacity } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons'; 

const AddMedications = ({showEditDetails, setShowEditDetails, onSave}) => {
  const [medicineName, setMedicineName] = useState('');
  const [times, setTimes] = useState({
    morning: false,
    afternoon: false,
    night: false,
  });
  const [mealSwitch, setMealSwitch] = useState(false);
 const [numberOfDoses, setNumberOfDoses] = useState(0);

  const handleSave = () => {
    const selectedTimes = Object.keys(times).filter(time => times[time]);
    const mealTime = mealSwitch ? 'After Meal' : 'Before Meal';


     const newMedication = {
    medicineName,
    selectedTimes,
    mealTime, numberOfDoses
  };

    // Now you can use 'selectedTimes' and 'mealTime' to determine when and how to take the medicine.

    setShowEditDetails(false); // Close the modal after saving
      onSave(newMedication); 
  }

  return (
    <KeyboardAvoidingView style={styles.centeredView} behavior="padding">
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={showEditDetails}
        onRequestClose={() => {
          setShowEditDetails(!showEditDetails);
        }}>
          <Pressable
              style={styles.cross}
              onPress={() => setShowEditDetails(!showEditDetails)}>
              <Ionicons name="close" size={24} color="black"  />            
            </Pressable>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.modalText}>Add Medications</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Medicine Name"
              value={medicineName}
              onChangeText={setMedicineName}
            />

            <Text>When to take:</Text>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxColumn}>
                <Text>Morning</Text>
                <Switch
                  value={times.morning}
                  onValueChange={(value) => setTimes({...times, morning: value})}
                />
              </View>
              <View style={styles.checkboxColumn}>
                <Text>Afternoon</Text>
                <Switch
                  value={times.afternoon}
                  onValueChange={(value) => setTimes({...times, afternoon: value})}
                />
              </View>
              <View style={styles.checkboxColumn}>
                <Text>Night</Text>
                <Switch
                  value={times.night}
                  onValueChange={(value) => setTimes({...times, night: value})}
                />
              </View>
            </View>

            <View style={styles.checkboxContainers}>
              <Text>Before Meal</Text>
              <Switch
                value={!mealSwitch}
                onValueChange={(value) => setMealSwitch(!value)}
              />
              <Text>After Meal</Text>
            </View>

            <View style={{ marginTop: 20, alignItems:  'center'  }}>
              <TextInput inputMode={"numeric"} keyboardType={"numeric"} placeholder={"No of Doses"} value={numberOfDoses} onChangeText={(e) => setNumberOfDoses(Number(e))}/>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSave}>
              <Text style={styles.buttonTextStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft:20,
  },
   input: {
    height: 40,
    width: 280, // Adjust the width as needed
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 8,
  },
  checkboxContainer: {
    marginTop :10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkboxContainers: {
    marginTop:60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkboxColumn: {
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  cross: {
    position:"absolute",
    right: 15
  },

  modalView: {
    margin: 15,
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
  header: {
    marginTop: 80
  }
});

export default AddMedications;
