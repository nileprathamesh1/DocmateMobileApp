// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { Dimensions, ImageBackground ,ToastAndroid} from 'react-native';

import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { IsLoggedIn, Login as LoginApi } from '../../Apis';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/loader';

// import Loader from './Components/Loader';

const Login = ({navigation}) => {
  const [loader, setLoader] = useState(true);
	const checkIsLoggedIn = async () => {
		const resp = await IsLoggedIn();
    console.log(resp)
		if(resp?.code === 200 && resp?.data?.isLoggedIn){
      console.log("resp")
      AsyncStorage.setItem('userData', JSON.stringify(resp?.data));
      navigation.navigate("Home"); 
    }
    setLoader(false);
	}

	React.useEffect(() => {
		checkIsLoggedIn();
	}, []);

	const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }; 

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      showToast("Please fill Email");
      return;
    }
    if (!userPassword) {
      showToast("Please fill Password");
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    console.log(
      dataToSend
    )
  
    LoginApi(dataToSend)
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);    
        // If server response message same as Data Matched
        if (responseJson.code === 200) {
          AsyncStorage.setItem('userData',JSON.stringify(responseJson.data));
          navigation.replace('Home');

        } else {
          setErrortext(responseJson.msg);
          showToast('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error("error", error);
      });
  };

  return (
  <ImageBackground
  source={require('../../assets/background1.png')} // Replace with the actual path to your background image
  style={[styles.mainBody, {width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,}]}>
    <Loader loading={loader} />
      
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              {/*<Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />*/}
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonStyle, {backgroundColor: "blue"}]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonTextStyle}>New Here ? Register</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});