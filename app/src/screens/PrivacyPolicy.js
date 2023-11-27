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
          1. Acceptance of Terms
By downloading, installing, or using Forex Trading App you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the App.
2. Use of the App
a. User Account:
To use certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials.
b. Signal Information:
The App provides Forex trading signals for informational purposes only. We do not guarantee the accuracy or profitability of the signals, and users are encouraged to use their discretion.
c. Wishlist Functionality:
Users may add or remove signals to/from their wishlist. The App reserves the right to modify or remove this feature at any time.
3. User Conduct
a. Prohibited Activities:
Users agree not to engage in any unlawful or prohibited activities while using the App, including but not limited to the unauthorized sharing or distribution of signals.
b. Compliance with Laws:
Users are responsible for ensuring compliance with all applicable local, state, national, and international laws and regulations.
4. Privacy
a. Privacy Policy:
The use of the App is also governed by our Privacy Policy. By using the App, you consent to the terms of the Privacy Policy.
5. Intellectual Property
a. App Content:
All content provided in the App, including signals, is the property of [Your Forex Trading App Name] and is protected by intellectual property laws.
b. Trademarks:
The trademarks, logos, and service marks displayed in the App are the registered and unregistered marks of [Your Forex Trading App Name].
6. Modification and Termination
a. App Changes:
We reserve the right to modify, suspend, or discontinue any part of the App at any time, with or without notice.
b. Termination of Accounts:
We reserve the right to terminate user accounts that violate these Terms and Conditions or for any other reason at our discretion.
7. Disclaimer of Warranties
The App is provided "as is" and "as available." We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the App.
8. Limitation of Liability
To the fullest extent permitted by applicable law, [Your Forex Trading App Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
9. Governing Law
These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
10. Contact Us
If you have any questions or concerns about these Terms and Conditions, please contact us

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
