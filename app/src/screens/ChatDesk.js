import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  Linking,
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
import {GiftedChat, Bubble, Day} from 'react-native-gifted-chat';

import Happiness from '../assets/svg/Happiness.svg';

import Send from '../assets/svg/Send.svg';


import LogOut from '../assets/svg/LogOut.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {greyBold, orange, textBlack, textGrey, white} from '../assets/Colors';

export default function ChatDesk({navigation}) {

  const openTelegramDirectMessage = (recipientUsername, message) => {
    // Form the deep link URL for the Telegram direct message
    const telegramDeepLink = `https://t.me/${recipientUsername}?text=${encodeURIComponent(message)}`;
  
    // Try to open the Telegram deep link
    Linking.openURL(telegramDeepLink)
      .catch((err) => console.error('An error occurred: ', err));
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          onPress={() => navigation.goBack()}
          showLogo={true}
        />
      </View>

      {/* <Text
        style={{
          fontSize: hp(2.6),
          marginTop: hp(10),
          alignSelf: 'center',
          fontWeight: 'bold',
          color: textBlack,
        }}>
        Lets Talk!
      </Text> */}

      <Text
        style={{
          fontSize: hp(2.6),
          marginTop: hp(10),
          alignSelf: 'center',
          fontWeight: 'bold',
          color: textBlack,
        }}>
        CONTACT SUPPORT
      </Text>
      
      <View style={{marginHorizontal:wp(10)}}>

      <Text
        style={{
          fontSize: hp(2.6),
          textAlign:'center',
          fontWeight: 'bold',
          color: textBlack,
        }}>
        if you have any question or encounter any issues, please feel free to reach out to us on Telegram.We are available and active 24/7, and we've here to assist you.
      </Text>
      </View>

      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={()=>openTelegramDirectMessage('Testing', ' Is there a demo account for practice!')}
          style={{
            marginLeft: wp(5),
            marginBottom: hp(3),
            width: wp(75),
            height: hp(5),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: wp(5),
            borderColor: '#00000017',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              alignSelf: 'center',
              fontWeight: '300',
              color: textGrey,
            }}>
            Is there a demo account for practice?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>openTelegramDirectMessage('Testing', ' Any upcoming app changes or enhancements?')}
          style={{
            marginLeft: wp(5),
            marginBottom: hp(3),
            width: wp(92),
            height: hp(5),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: wp(5),
            borderColor: '#00000017',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              alignSelf: 'center',
              fontWeight: '300',
              color: textGrey,
            }}>
            Any upcoming app changes or enhancements?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>openTelegramDirectMessage('Testing', 'How often are charts and data updated?')}
          style={{
            marginLeft: wp(5),
            paddingLeft: wp(5),
            marginBottom: hp(3),
            width: wp(85),
            height: hp(5),
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: wp(5),
            borderColor: '#00000017',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            How often are charts and data updated?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>openTelegramDirectMessage('Testing', 'How are disputes or trade issues resolved?')}
          style={{
            marginLeft: wp(5),
            marginBottom: hp(3),
            width: wp(85),
            height: hp(5),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: wp(5),
            borderColor: '#00000017',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              marginLeft: wp(1),
              fontWeight: '300',
              color: textGrey,
            }}>
            How are disputes or trade issues resolved?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>openTelegramDirectMessage('Testing', 'How can I contact customer support?')}

          style={{
            marginLeft: wp(5),
            marginBottom: hp(3),
            width: wp(81),
            height: hp(5),
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: wp(5),
            borderColor: '#00000017',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              marginLeft: wp(3),
              color: textGrey,
            }}>
            How can I contact customer support?
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={{justifyContent:'center', marginTop:hp(1), marginBottom:hp(5), alignItems:'center'}}>

      <TouchableOpacity onPress={()=>openTelegramDirectMessage('Testing', 'Hello, this is a custom message!')} style={{ width:wp(39), borderRadius:wp(8), height:hp(5), backgroundColor:orange, justifyContent:'center',alignItems:'center'}}>
      <Text
          style={{
            fontWeight: 'bold',
            color: textBlack,
            fontSize: hp(2.1),
          }}>
            Contact Support
        </Text>
      </TouchableOpacity>
      </View>

      {/* <View style={{flexDirection:'row',height:hp(8), paddingHorizontal:wp(5), alignItems:'center'}}>
        <View style={{ flex:1, borderRadius:wp(5), alignItems:'center', flexDirection:'row', borderWidth:1, borderColor:'#00000017'}}>
         <Happiness style={{marginLeft:wp(3)}} width={20} height={20}/>

         <TextInput placeholder='Type a message' style={{flex:1, marginLeft:wp(8)}}/>
        </View>
         <TouchableOpacity style={{marginLeft:wp(3)}} onPress={()=>navigation.navigate("Chat")}>

         <Send width={48} height={48}/>
         </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
