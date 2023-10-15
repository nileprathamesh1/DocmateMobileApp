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
     <View style={styles.container}>
      <ScrollView>
        {medicines.map((medicine, index) => (
          <View key={index} style={styles.medicineContainer}>
            <Text style={styles.medicineName}>{medicine.medicineName}</Text>
            <View style={styles.doseContainer}>
              {medicine.selectedTimes.map((time, idx) => (
                <Text key={idx} style={styles.doseItem}>{time}</Text>
              ))}
            </View>
            <View style={styles.mealSwitchContainer}>
              <Text style={styles.mealSwitchText}>Meal: {medicine.mealTime}</Text>
            </View>
            <Text style={styles.numberOfDoses}>Number of Doses: {medicine.numberOfDoses}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => setShowAddMed(true)} style={styles.addButton}>
        <AntDesign name="pluscircle" size={45} color="black" />
      </TouchableOpacity>
      {showAddMed && (
        <AddMedications setShowEditDetails={setShowAddMed} showEditDetails={showAddMed} onSave={handleAddMedicine} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  medicineContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doseItem: {
    fontSize: 14,
  },
  mealSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealSwitchText: {
    fontSize: 14,
  },
  numberOfDoses: {
    fontSize: 14,
  },
   addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white', // Change the background color to black
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Medications;