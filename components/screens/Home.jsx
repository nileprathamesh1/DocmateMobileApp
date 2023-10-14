import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Medications from './Medications';
import { MaterialIcons } from '@expo/vector-icons'; 



const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    return (
		<NavigationContainer independent>
		  <Tab.Navigator screenOptions={{ headerShown: false  }}>
		    <Tab.Screen name="Home" component={Dashboard} options={{
		    	tabBarIcon: ({ color }) => (
		            <MaterialIcons name="home" color={color} size={25} />
		          ),
		    }} />
		    <Tab.Screen name="Medications" component={Medications} options={{
		    	tabBarIcon: ({ color }) => (
		            <MaterialIcons name="medical-services" color={color} size={25} />
		          ),
		    }}/>
		    <Tab.Screen name="Profile" component={Profile} options={{
		    	tabBarIcon: ({ color }) => (
		            <MaterialIcons name="portrait" color={color} size={25} />
		          ),
		    }} />
		  </Tab.Navigator>
		</NavigationContainer>        
    );
};

export default Home;
