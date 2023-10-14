import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/screens/Login';
import RegisterScreen from '../components/screens/Register';
import Home from '../components/screens/Home';
import { IsLoggedIn } from '../Apis';


const Stack = createStackNavigator();

export default function Navigator(props){


	const checkIsLoggedIn = async () => {
		const resp = await IsLoggedIn();

		console.log('resp', resp);
		if(resp?.data?.isLoggedIn)
			setIsLoggedIn(true);
	}

	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	React.useEffect(() => {
		checkIsLoggedIn();
	}, [checkIsLoggedIn]);


	return(
	    <NavigationContainer>
	     {!isLoggedIn ? 
	      <Stack.Navigator>   	
	        <Stack.Screen name="Login" component={Login} options={{
	        	headerShown: false
          	}}/>
	        {/*<Stack.Screen name="Signup" component={Signup} />*/}
	      </Stack.Navigator>
	      :
	      <Stack.Navigator>   	
	        <Stack.Screen name="Home" component={Home} />
	      </Stack.Navigator>}
	    </NavigationContainer>
  );
}