import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Medications from './Medications';
import News from './News';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 



const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    return (
    	<SafeAreaView style={{flex: 1}}>
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

		    <Tab.Screen name="News" component={News} options={{
		    	tabBarIcon: ({ color }) => (
				<Ionicons name="newspaper" size={24} color="black" />
				  ),
		    }}/>
		    <Tab.Screen name="Profile" component={Profile} options={{
		    	tabBarIcon: ({ color }) => (
		            <MaterialIcons name="portrait" color={color} size={25} />
		          ),
		    }} />
		  </Tab.Navigator>
		</NavigationContainer>
		</SafeAreaView>        
    );
};

export default Home;
