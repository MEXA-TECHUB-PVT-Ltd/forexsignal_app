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
import React, {useState, useRef} from 'react';
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

import Shares from 'react-native-share';

import CopyLinkBtn from '../assets/svg/CopyLinkBtn.svg';

import ShareBtn from '../assets/svg/ShareBtn.svg';

import Send from '../assets/svg/Send.svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import Camera from '../assets/svg/Camera.svg';

import Gallery from '../assets/svg/Gallery.svg';

import LogOut from '../assets/svg/LogOut.svg';

import Users from '../assets/svg/Users.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  greyBold,
  lightGrey,
  orange,
  textBlack,
  grey,
  green,
  red,
  textGrey,
  white,
  iconGrey,
} from '../assets/Colors';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function PrivacyPolicy({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showText={true}
          text={'Privacy Policy'}
          showBackIcon={true}
          onPress={() => navigation.goBack()}
        />
      </View>

      <ScrollView style={{flexGrow: 1}}>
        <View style={{marginHorizontal: wp(8), marginTop: hp(5)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in mtechub llc. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text
            style={{
              color: textBlack,
              fontWeight: 'bold',
              textAlign: 'left',
              fontSize: hp(2.5),
            }}>
            Information we collect
          </Text>

          <Text
            style={{
              color: textGrey,
              textAlign: 'left',
              marginTop: hp(1.8),
              fontSize: hp(2.5),
            }}>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide. When you register for an
            Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text
            style={{
              color: textBlack,
              fontWeight: 'bold',
              textAlign: 'left',
              fontSize: hp(2.5),
            }}>
            How we use your information
          </Text>

          <Text
            style={{
              color: textGrey,
              textAlign: 'left',
              marginTop: hp(1.8),
              fontSize: hp(2.5),
            }}>
            We use the information we collect in various ways, including to:
            Provide, operate, and maintain our website Improve, personalize, and
            expand our website Understand and analyze how you use our website
            Develop new products, services, features, and functionality
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes Send you emails Find and prevent
            fraud
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
