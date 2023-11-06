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
import Fontiso from 'react-native-vector-icons/Fontisto';

import Happiness from '../assets/svg/Happiness.svg';

import Send from '../assets/svg/Send.svg';

import LogOut from '../assets/svg/LogOut.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {greyBold, lightGrey, orange, textBlack, grey, green, red, textGrey, white} from '../assets/Colors';

export default function MyWishList({navigation}) {
    const data = [
        {
          id: 1,
          currency: 'NZD/USD',
          buy: Buy,
          sell:Sell,
          price:'$113.22',
          profit:'0.59038',
          loss:'0.59038',
          date:'27-oct-2023, 08:20 AM',
          status:'Buy'
        },
        {
            id: 2,
            currency: 'EUR/USD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 3,
            currency: 'CAD/CHF',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 4,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Buy'
          },
          {
            id: 5,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 6,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 8,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 9,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 10,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          }

      ];

      const renderItems = item => {
        return (
          <TouchableOpacity
          onPress={()=>navigation.navigate("SignalDetails")}
            style={{
              marginTop: hp(3),
              justifyContent: 'space-around',
              borderWidth: 1,
              paddingHorizontal: wp(3),
              marginHorizontal: wp(8),
              borderRadius: wp(5),
              height: hp(15),
              borderColor: '#00000017',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: wp(3),
                height: hp(5),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: hp(3),
                  width: wp(35),
                }}>
                <Text
                  style={{fontSize: hp(2.1), fontWeight: '500', color: textBlack}}>
                  {item.currency}
                </Text>
                {
                    item.status==='Buy'?
                    <Buy width={50} height={50} />:
                    <Sell width={50} height={50} />
                }
                
              </View>


              <Fontiso name="heart" size={15} color={orange} />
             
            </View>
    
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: wp(3),
                height: hp(5),
              }}>
              <Text
                style={{fontSize: hp(1.7), fontWeight: '500', color: lightGrey}}>
                {item.date}
              </Text>
              <Text style={{fontSize: hp(2.1), fontWeight: '500', color: orange}}>
                {item.price}
              </Text>
            </View>
    
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: wp(3),
                borderTopColor: '#00000017',
                borderTopWidth: 0.3,
                height: hp(5),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: hp(3),
                  width: wp(23),
                }}>
                <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: grey}}>
                  Profit
                </Text>
    
                <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: green}}>
                  {item.profit}
                </Text>
              </View>
    
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: hp(3),
                  width: wp(28),
                }}>
                <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: grey}}>
                  Stop loss
                </Text>
    
                <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: red}}>
                {item.loss}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers showBackIcon={true} onPress={()=>navigation.goBack()} showText={true} text={'My WishList'} />
      </View>

      <View style={{flex:1}}>
            <FlatList
              style={{flexGrow:1}}
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => renderItems(item)}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
