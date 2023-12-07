import {
  StyleSheet,
  StatusBar,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import Google from '../assets/svg/Google.svg';
import FaceBook from '../assets/svg/FaceBook.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  borderLineGrey,
  green,
  grey,
  iconGrey,
  lightGrey,
  orange,
  red,
  textBlack,
  textGrey,
  white,
} from '../assets/Colors';
import Headers from '../Custom/Headers';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';
import {baseUrl} from '../assets/utilities/BaseUrl';
import CustomSnackbarAlert from '../Custom/CustomSnackBarAlert';

export default function OTP({navigation, route}) {
  const [otpCode, setOtpCode] = useState('');

  const [otp, setOtp] = useState('');


  const [email, setEmail] = useState('');

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [snackbarVisibleAlert, setSnackbarVisibleAlert] = useState(false);


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchOTP();
  }, []);

  const fetchOTP = async () => {
    // Simulate loading
    setLoading(true);

    await getOTP();

    setLoading(false);
  };

  const getOTP = async () => {
    const receivedData = route.params?.OTP;

    console.log('Recieved Data:', receivedData);

    setOtp(receivedData)

    const receivedDataEmail = route.params?.email;

    console.log('Recieved Data:', receivedDataEmail);

    setEmail(receivedDataEmail);
  };

  const dismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const checkOTPVerification=()=>{
    if (otp === otpCode) {
      handleUpdatePassword()
    } else {
      handleUpdateConfirmAlert()
    }
  }

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      navigation.replace('ResetPassword', {email: email});
      setSnackbarVisible(false);

    }, 3000);
  };

  const dismissSnackbarAlert = () => {
    setSnackbarVisibleAlert(false);
  };


  const handleUpdateConfirmAlert = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisibleAlert(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisibleAlert(false);
      //navigation.navigate('SignIn');
    }, 3000);
  };


  return (
    <ImageBackground
      source={appImages.backgroundImgAuth}
      style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={{marginTop: hp(8), marginHorizontal: wp(3)}}>
        <Headers showBackIcon={true} onPress={() => navigation.goBack()} />
      </View>

      <Text
        style={{
          fontSize: hp(2.8),
          marginTop: hp(3),
          marginLeft: wp(10),
          fontWeight: 'bold',
          color: textBlack,
        }}>
        You’ve got mail
      </Text>

      <Text
        style={{
          fontSize: hp(1.8),
          marginTop: hp(3),
          marginLeft: wp(10),
          lineHeight: hp(3),
          fontWeight: '400',
          marginRight: wp(10),
          color: textGrey,
        }}>
        We have sent the OTP verification code to your email address. Check your
        email and enter the code below.
      </Text>

      <View style={{marginHorizontal: wp(8), marginTop: hp(8)}}>
        <View style={{}}>
          <OTPInputView
            style={{
              height: 50,
              marginTop: hp(3),
            }}
            autoFocusOnLoad={false}
            pinCount={4}
            code={otpCode}
            onCodeChanged={code => {
              setOtpCode(code);
            }}
            placeholderTextColor={'#ABA7AF'}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={{
              ...styles.underlineStyleHighLighted,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp(2),
          height: hp(5),
          marginHorizontal: wp(30),
        }}>
        <Text
          style={{
            fontSize: hp(1.8),
            fontWeight: 'bold',
            color: orange,
          }}>
          Resend Code
        </Text>

        <Text
          style={{
            fontSize: hp(1.8),
            fontWeight: '400',
            marginLeft: wp(3),
            color: textGrey,
          }}>
          in 57 s
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: hp(2),
          marginHorizontal: wp(8),
        }}>
        <TouchableOpacity onPress={() => checkOTPVerification()}>
          <CustomButton title={'Confirm'} />
        </TouchableOpacity>
      </View>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Code Verified Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />

      {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#FACA4E" />
        </View>
      )}

      <CustomSnackbarAlert
        message={'Alert!'}
        messageDescription={'Otp Verification Failed!'}
        onDismiss={dismissSnackbarAlert} // Make sure this function is defined
        visible={snackbarVisibleAlert}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  underlineStyleBase: {
    color: textGrey,
    fontSize: 24,
    //fontFamily: Fonts.Inter_Medium,
    width: 60,
    height: 50,
    borderRadius: wp(5),
    borderWidth: 1,
    //borderBottomWidth: 1,
    borderColor: '#00000033',
    marginHorizontal: 5,
  },
  underlineStyleHighLighted: {
    borderColor: orange,
    borderRadius: 0,
    borderWidth: 1,
    borderRadius: wp(5),
  },
});
