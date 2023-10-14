import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/screens/Login';
import Home from '../components/screens/Home';
// import Login from '../components/screens/Login';


const Stack = createStackNavigator();

export default function Navigator(props){
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	//API call check isLoggedIn

	return(
	    <NavigationContainer>
	     {/*isLoggedIn ? */}
	      <Stack.Navigator>   	
	        <Stack.Screen name="Login" component={Home} options={{
	        	headerShown: false
          	}}/>
	        {/*<Stack.Screen name="Signup" component={Signup} />*/}
	      </Stack.Navigator>
	      {/*:
	      <Stack.Navigator>   	
	        <Stack.Screen name="Home" component={Home} />
	      </Stack.Navigator>*/}
	    </NavigationContainer>
  );
}