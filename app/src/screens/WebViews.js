import {
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Linking,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useIsFocused} from '@react-navigation/native';
import {baseUrl} from '../assets/utilities/BaseUrl';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function WebViews({navigation, route}) {
  const [userId, setUserId] = useState(null);

  const [chatLink, setChatLink] = useState('');

  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    // Make the API request and update the 'data' state
    if (isFocused) {
      console.log('Came to use effect');
      fetchVideos();
    }
  }, [isFocused]);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    // Wait for getUserID to complete before calling getAllSignals
    await getUserID();

    // Fetch data one by one
    // Once all data is fetched, set loading to false
    setLoading(false);
  };

  const getUserID = async () => {
    console.log("Id's");
    try {
      const result = await AsyncStorage.getItem('userId');
      if (result !== null) {
        console.log('user id retrieved:', result);
        setUserId(result);
        getAllSignals(result);
      }
    } catch (error) {
      // Handle errors here
      //'https://infinite.red'
      console.error('Error retrieving user ID:', error);
    }
  };

  const getAllSignals = async (id) => {
    try {
      const apiUrl = `${baseUrl}/chatlink/getchatlink`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('Chat Signal', data.data);
      setChatLink(data.data[0].link);
      openLink(data.data[0].link, id)

      // Handle the response data as needed
      //console.log('Response data:', data);

      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
    }
  };

  const openLink = (result, id) => {
    //navigation.replace('WebViews');
    navigation.pop();
    console.log("results", `${result}${id}`);
      Linking.openURL(
      `${result}${id}`
    ); 
  };

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="transparent"
      />
      {/* <WebView
        source={{
          uri: `https://6576fe1f5345c171f2843988--gleaming-sundae-d0aa9f.netlify.app/userchats/`}}
        style={styles.webview} // Adjust height as needed
        onLoadStart={() => console.log('WebView is loading')}
        onLoad={() => console.log('WebView has loaded')}
        onError={error => console.error('WebView error:', error)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={false}
        scalesPageToFit={true}
        onMessage={(event) => console.log('WebView onMessage:', event.nativeEvent.data)}
        renderError={(error) => console.error('WebView renderError:', error)}

      />
 */}
      {/* {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#FACA4E" />
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  webview: {
    //flex: 1,
    //backgroundColor: 'yellow',
    width: deviceWidth,
    height: deviceHeight,
  },
});
