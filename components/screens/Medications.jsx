import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import AddMedications from './AddMedications';

const Medications = () => {
  const [medicines, setMedicines] = useState([]);

  const [mealSwitches, setMealSwitches] = useState({});

const [selectedDoses, setSelectedDoses] = useState(false);
  const toggleDose = (medicineId, dose) => {
    setSelectedDoses((prevState) => ({
      ...prevState,
      [medicineId]: {
        ...prevState[medicineId],
        [dose]: !prevState[medicineId]?.[dose],
      },
    }));
  };

  const toggleMealSwitch = (medicineId) => {
    setMealSwitches((prevState) => ({
      ...prevState,
      [medicineId]: !prevState[medicineId],
    }));
  };

  const handleAddMedicine = (newMedication) => {
    setMedicines(prevMedicines => [...prevMedicines, newMedication]);
    setShowAddMed(false);
  };
  const [showAddMed, setShowAddMed] = useState(false);

  return (
    <View style={{flex: 1}}>
        {
            !showAddMed ?
            <View style={{flex: 1}}>
          

                {
  medicines.map((medicine, index) => (
    <View key={index} style={styles.medicineContainer}>
      <Text style={styles.medicineName}>{medicine.medicineName}</Text>
      <View style={styles.doseContainer}>
        {medicine.selectedTimes.map((time, idx) => (
          <Text key={idx}>{time}</Text>
        ))}
      </View>
      <View style={styles.mealSwitchContainer}>
        <Text>{medicine.mealTime}</Text>
      </View>
    </View>
  ))
}

                  <TouchableOpacity onPress={handleAddMedicine} style={styles.addButton}>
                    <AntDesign name="pluscircle" size={45} color="black" />
                  </TouchableOpacity>
                </View>
            :
            <AddMedications setShowEditDetails={setShowAddMed} showEditDetails={showAddMed}/>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100, // Added to make space for the button at the bottom
  },
  addButton: {
    borderColor:'red',
   position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: 'white',
    borderRadius:100,

  },
  medicineContainer: {
    marginTop:50,
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#ccc',

  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  doseItem: {
    alignItems: 'center',
  },
  mealSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
});

export default Medications;
