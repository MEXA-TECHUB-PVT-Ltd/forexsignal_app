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
import CustomSnackbarAlert from '../Custom/CustomSnackBarAlert';
import { baseUrl } from '../assets/utilities/BaseUrl';

export default function ResetPassword({navigation, route}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [snackbarVisibleConfirmPassword, setSnackbarVisibleConfirmPassword] =
    useState(false);

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');

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
    const receivedDataEmail = route.params?.email;

    console.log('Recieved Data Email:', receivedDataEmail);

    setEmail(receivedDataEmail);
  };

  const checkPassword = () => {
    console.log("Came to confirm password")
    if (password === confirmPassword) {
      resetPassword();
    } else {
      handleUpdateConfirmPassword();
    }
  };

  const resetPassword = async () => {
    setLoading(true);

    const apiUrl = `${baseUrl}/user/password/resetpassword`;

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.msg);

      setLoading(false);

      if (data.msg === 'Password updated successfully') {
        handleUpdatePassword();
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const dismissSnackbarConfirmPassword = () => {
    setSnackbarVisibleConfirmPassword(true);
  };

  const handleUpdateConfirmPassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisibleConfirmPassword(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisibleConfirmPassword(false);
      //navigation.navigate('SignIn');
    }, 3000);
  };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      navigation.replace('SignIn');
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

      <ScrollView style={{flexGrow: 1}}>
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
          Reset Password
        </Text>

        <Text
          style={{
            fontSize: hp(2.1),
            marginTop: hp(3),
            marginLeft: wp(10),
            lineHeight: hp(3),
            fontWeight: '300',
            marginRight: wp(5),
            color: textGrey,
          }}>
          Password must be at least 8 characters long and include at least one
          uppercase letter, one number, and one special character.
        </Text>

        <View
          style={{
            flex: 1,
            marginTop: hp(8),
            marginHorizontal: wp(10),
          }}>
          <CPaperInput
            left={true}
            right={true}
            placeholder={'Your Password'}
            onChangeText={text => setPassword(text)}
            password={true}
            leftName="Lock"
          />

          <CPaperInput
            left={true}
            right={true}
            placeholder={'Confirm Password'}
            onChangeText={text => setConfirmPassword(text)}
            password={true}
            leftName="Lock"
          />
        </View>

        <View style={{flex: 1, marginHorizontal: wp(3)}}>
          <TouchableOpacity
            onPress={() => checkPassword()}
            style={{alignItems: 'center', marginTop: hp(25)}}>
            <CustomButton title={'Reset'} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Password Reset  Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />

      <CustomSnackbarAlert
        message={'Alert!'}
        messageDescription={'Please Match The Below Passwords'}
        onDismiss={dismissSnackbarConfirmPassword} // Make sure this function is defined
        visible={snackbarVisibleConfirmPassword}
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
