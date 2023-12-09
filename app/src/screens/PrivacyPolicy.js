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
            1. Introduction
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            Welcome to Forex Trading App ("we," "our," or "us"). This Privacy
            Policy is designed to help you understand how we collect, use,
            share, and safeguard your personal information when you use our
            Forex trading app and related services. By accessing or using our
            app, you consent to the terms of this Privacy Policy.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            2. Information We Collect
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            a. User-Provided Information: When you create an account, we collect
            your name, email address, and other necessary information. If you
            choose to enable notifications, we collect your device ID to send
            you alerts about new signals.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            b. Automatically Collected Information: We may collect information
            about your device, including IP address, device type, and operating
            system, to ensure a seamless user experience.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            3. How We Use Your Information
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            a. Providing Signals: We use your information to deliver Forex
            trading signals, which are created by our admin, to your app.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            b. Notifications: If you enable notifications, we use your device ID
            to send you alerts when new signals are added.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            c. Wishlist Functionality: The app allows users to add or remove
            signals to/from their wishlist. We use this information to customize
            your experience.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            4. Sharing Your Information
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            a. Admin Access: Our admin has access to user data to manage and
            create Forex signals.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            b. Third-Party Services: We may share non-personal information with
            third-party service providers to improve app functionality.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            c. Legal Requirements: We may disclose your information in response
            to a court order, legal process, or other legal requests.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            5. Security Measures
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            We employ industry-standard security measures to protect your
            personal information from unauthorized access or disclosure.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            6. Your Choices
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            a. Account Information: You can review and update your account
            information at any time within the app.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            b. Notifications: You can enable or disable notifications through
            your device settings.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            7. Children's Privacy
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            Our app is not intended for users under the age of 18. We do not
            knowingly collect or solicit personal information from minors.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            8. Changes to this Privacy Policy
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            We reserve the right to update this Privacy Policy to reflect
            changes in our practices. We will notify you of any material changes
            via the app.
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            9. Contact Us
          </Text>
        </View>

        <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
          <Text style={{color: textGrey, textAlign: 'left', fontSize: hp(2.5)}}>
            If you have any questions or concerns about this Privacy Policy,
            please contact us
          </Text>
        </View>

        {/* <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
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
        </View> */}
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
