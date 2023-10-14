import React, { PropTypes } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Dashboard = () => {
    return (
    	<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text>
        	Hello
        </Text>
        </SafeAreaView>
    );
};

export default Dashboard;
