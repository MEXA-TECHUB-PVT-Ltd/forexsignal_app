import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import Feater from 'react-native-vector-icons/Feather';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import Headers from '../Custom/Headers';
import {appImages} from '../assets/utilities';
import Edit from '../assets/svg/Edit.svg';


import Dot from '../assets/svg/Dot.svg';

import LogOut from '../assets/svg/LogOut.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {greyBold, orange, textBlack, textGrey, white} from '../assets/Colors';

export default function BasicPlanSubscription() {
  return (
    <View style={{flex: 1, width: wp(100), backgroundColor: 'white'}}>

        <View style={{justifyContent:'center', alignItems:'center'}}>

      <Image
        style={{width: wp(30), resizeMode: 'contain'}}
        source={appImages.logo}
      />
        </View>

        
        <Text
          style={{
            fontSize: hp(2.5),
            marginLeft: wp(8),
            fontWeight: 'bold',
            color: textBlack,
          }}>
           Basic Plan
        </Text>

        <Text
          style={{
            fontSize: hp(3.2),
            marginLeft: wp(8),
            marginTop:hp(3),
            fontWeight: 'bold',
            color: orange,
          }}>
          $ 100
        </Text>

        <View style={{flexDirection:'row', paddingHorizontal:wp(8), alignItems:'center', height:hp(10)}}>
            <View style={{marginTop:hp(-2)}}>

         <Dot width={15} height={15}/>
            </View>

         <Text
          style={{
            fontSize: hp(2.1),
            marginLeft: wp(5),
            //lineHeight:hp(3.5),
            fontWeight: '300',
            color: textBlack,
          }}>
          Access to a limited number of trading signals.
        </Text>
        </View>

        <View style={{flexDirection:'row', paddingHorizontal:wp(8), alignItems:'center', height:hp(8)}}>
         <Dot width={15} height={15}/>

         <Text
          style={{
            fontSize: hp(2.1),
            marginLeft: wp(5),
            fontWeight: '300',
            color: textBlack,
          }}>
         Advertisements displayed within the app.
        </Text>
        </View>

        <View style={{flexDirection:'row', paddingHorizontal:wp(8), alignItems:'center', height:hp(8)}}>
         <Dot width={15} height={15}/>

         <Text
          style={{
            fontSize: hp(2.1),
            marginLeft: wp(5),
            fontWeight: '300',
            color: textBlack,
          }}>
         Basic market analysis tools.
        </Text>
        </View>

        <View style={{flexDirection:'row', paddingHorizontal:wp(8), alignItems:'center', height:hp(8)}}>
         <Dot width={15} height={15}/>

         <Text
          style={{
            fontSize: hp(2.1),
            marginLeft: wp(5),
            fontWeight: '300',
            color: textBlack,
          }}>
         Basic market analysis tools.
        </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({});
