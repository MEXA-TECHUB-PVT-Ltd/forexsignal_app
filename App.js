import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
LogBox.ignoreAllLogs();

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  LogBox,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';

// screen
import SplashScreen from './app/src/screens/SplashScreen';
import Onboarding from './app/src/screens/Onboarding';
import Home from './app/src/screens/Home';
import BottomTabNavigation from './app/src/Navigations/BottomTabNavigation';

//---------------\\

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

      <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={Onboarding}
          options={{headerShown: false}}
        />

       

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
