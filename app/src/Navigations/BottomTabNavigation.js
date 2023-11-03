import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import HomeActive from '../assets/svg/HomeActive.svg';
import BrokersInActive from '../assets/svg/BrokersInActive.svg';
import ProfileInActive from '../assets/svg/ProfileInActive.svg';
import HomeInActive from '../assets/svg/HomeInActive.svg';
import ProfileActive from '../assets/svg/ProfileActive.svg';
import BrokersActive from '../assets/svg/BrokersActive.svg';
import { darkGrey, orange } from '../assets/Colors';
import Home from './../screens/Home';
import Brockers from './../screens/Brockers';
import Profile from '../screens/Profile';

const BottomTabNavigation = () => {
    const Bottom = createBottomTabNavigator();
    return (
      <Bottom.Navigator
        initialRouteName="Dashboard"
        //tabBar={(props) => <CustomTabBar {...props} />} // Use your custom tab bar
        tabBarOptions={
          {
            // ... (other tabBarOptions)
          }
        }
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: '#FFFFFF',
          tabBarInactiveBackgroundColor: '#FFFFFF',
          activeTintColor: orange, // Color of the active tab icon and label
          inactiveTintColor: darkGrey,
          tabBarHideOnKeyboard: true,
          lazy: false, // Set lazy to false to ensure all tabs are rendered
        }}>
        <Bottom.Screen
          options={({focused}) => ({
            tabBarIcon: ({focused}) =>
              focused ? (
                <HomeActive width={23} height={23} />
              ) : (
                <HomeInActive width={23} height={23} />
              ),
            tabBarLabel: ({focused}) => (
              <Text style={focused ? styles.focusedLabel : styles.inactiveLabel}>
                Home
              </Text>
            ),
          })}
          name="Dashboard"
          component={Home}
        />
  
        <Bottom.Screen
          options={({focused}) => ({
            tabBarIcon: ({focused}) =>
              focused ? (
                <BrokersActive />
              ) : (
                <BrokersInActive width={23} height={23} />
              ),
              tabBarLabel: ({focused}) => (
                <Text style={focused ? styles.focusedLabel : styles.inactiveLabel}>
                  Brokers
                </Text>
              ),
          })}
          name="Brockers"
          component={Brockers}
        />
  
        <Bottom.Screen
          options={({focused}) => ({
            tabBarIcon: ({focused}) =>
              focused ? (
                <ProfileActive width={23} height={23} />
              ) : (
                <ProfileInActive width={23} height={23} />
              ),
            tabBarLabel: ({focused}) => (
              <Text style={focused ? styles.focusedLabel : styles.inactiveLabel}>
                Profile
              </Text>
            ),
          })}
          name="Profile"
          component={Profile}
        />
  
        
      </Bottom.Navigator>
    );
  };
  
  export default BottomTabNavigation;
  
  const styles = StyleSheet.create({
    focusedLabel: {
      color: orange,
      fontSize: wp(2.8),
      marginTop: hp(-1),
    },
    inactiveLabel: {
      color: darkGrey,
      fontSize: wp(2.8),
      marginTop: hp(-1),
    },
  });
  