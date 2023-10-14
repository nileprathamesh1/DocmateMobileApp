import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';



// ...
const News = () => {
	return (
    	<WebView source ={{uri:'https://health.gov/news'}} style={{ height: "100%", width: "100%"}}/>
    );


};

export default News;