//import React, { PropTypes } from 'react';
import React, { useState, PropTypes } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View, Image, Text, Button, StyleSheet, Modal, Pressable,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Medications = () => {
    const [medicines, setMedicines] = useState([
    { id: 1, name: 'Medicine 1' },
    { id: 2, name: 'Medicine 2' },
  ]);

const [selectedDoses, setSelectedDoses] = useState(false);

 const toggleDose = (medicineId, dose) => {
    setSelectedDoses(prevState => ({
      ...prevState,
      [medicineId]: {
        ...prevState[medicineId],
        [dose]: !prevState[medicineId]?.[dose]
      }
    }));
  };

     return (
    <ScrollView>
      {medicines.map(medicine => (
        <View key={medicine.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flex: 1 }}>
            <Text>{medicine.name}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {['morning', 'afternoon', 'evening'].map(dose => (
              <View key={dose} style={{ marginRight: 10 }}>
                <Text>{dose.charAt(0).toUpperCase() + dose.slice(1)}</Text>
               <CheckBox
                 value={selectedDoses[medicine.id]?.[dose]}
                   onValueChange={() => toggleDose(medicine.id, dose)}
                />
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};



export default Medications;
