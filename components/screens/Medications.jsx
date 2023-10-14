import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';

const Medications = () => {
  const [medicines, setMedicines] = useState([]);

  const [selectedDoses, setSelectedDoses] = useState({});
  const [mealSwitches, setMealSwitches] = useState({});

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

  const handleAddMedicine = () => {
    const medicineCnt = medicines.length; 
    setMedicines([...medicines, {id: medicineCnt, name: "" }]);
  };

  return (
    <View style={{flex: 1}}>
    <ScrollView contentContainerStyle={styles.container}>
      {medicines.map((medicine) => (
        <View key={medicine.id} style={styles.medicineContainer}>
          <Text style={styles.medicineName}>{medicine.name}</Text>
          <View style={styles.doseContainer}>
            {['Morning', 'Afternoon', 'Night'].map((dose) => (
              <View key={dose} style={styles.doseItem}>
                <Text>{dose.charAt(0).toUpperCase() + dose.slice(1)}</Text>
                <CheckBox
                  value={selectedDoses[medicine.id]?.[dose] || false}
                  onValueChange={() => toggleDose(medicine.id, dose)}
                />
              </View>
            ))}
          </View>
          <View style={styles.mealSwitchContainer}>
            <Text>Before Meal</Text>
            <Switch
              value={mealSwitches[medicine.id] || false}
              onValueChange={() => toggleMealSwitch(medicine.id)}
            />
            <Text>After Meal</Text>
          </View>
        </View>
      ))}
    </ScrollView>
      <TouchableOpacity onPress={handleAddMedicine} style={styles.addButton}>
        <AntDesign name="pluscircle" size={45} color="black" />
      </TouchableOpacity>
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
