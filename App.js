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
import SignUp from './app/src/Auth/SignUp';
import SignIn from './app/src/Auth/SignIn';
import ForgetPassword from './app/src/Auth/ForgetPassword';
import OTP from './app/src/Auth/OTP';
import ResetPassword from './app/src/Auth/ResetPassword';
import Notifications from './app/src/screens/Notifications';
import SignalDetails from './app/src/screens/SignalDetails';

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
          name="SignalDetails"
          component={SignalDetails}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
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
