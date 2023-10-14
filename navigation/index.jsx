import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/screens/Login';
import RegisterScreen from '../components/screens/Register';
import Home from '../components/screens/Home';
import { IsLoggedIn } from '../Apis';


const Stack = createStackNavigator();

export default function Navigator(props){
	return(
	    <NavigationContainer>
	      <Stack.Navigator>   	
	        <Stack.Screen name="Login" component={Login} options={{
	        	headerShown: false
          	}}/>
	        <Stack.Screen name="Signup" component={RegisterScreen} options={{headerShown: false}} />
			<Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
	      </Stack.Navigator>
	    </NavigationContainer>
  );
}