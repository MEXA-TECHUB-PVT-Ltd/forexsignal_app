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
import SearchScreen from './app/src/screens/SearchScreen';
import Subscription from './app/src/screens/Subscription';
import ChatDesk from './app/src/screens/ChatDesk';
import Chat from './app/src/screens/Chat';
import MyWishList from './app/src/screens/MyWishList';
import EditProfile from './app/src/screens/EditProfile';
import ChangePassword from './app/src/screens/ChangePassword';
import Invite from './app/src/screens/Invite';
import PrivacyPolicy from './app/src/screens/PrivacyPolicy';
import TermsAndCondition from './app/src/screens/TermsAndCondition';
import ProfileImage from './app/src/screens/ProfileImage';
import RateApp from './app/src/screens/RateApp';

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
          name="RateApp"
          component={RateApp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProfileImage"
          component={ProfileImage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TermsAndCondition"
          component={TermsAndCondition}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Invite"
          component={Invite}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyWishList"
          component={MyWishList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChatDesk"
          component={ChatDesk}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Subscription"
          component={Subscription}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
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
