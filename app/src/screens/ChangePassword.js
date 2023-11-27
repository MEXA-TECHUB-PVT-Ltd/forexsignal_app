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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Headers from '../Custom/Headers';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function ChangePassword({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const [snackbarVisibleConfirmPassword, setSnackbarVisibleConfirmPassword] =
    useState(false);

  const [oldPassword, setOldPassword] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    await getUserID();
    // Fetch data one by one
    // Once all data is fetched, set loading to false
    setLoading(false);
  };

  const getUserID = async () => {
    console.log("Id's");
    try {
      const result = await AsyncStorage.getItem('email');
      if (result !== null) {
        setEmail(result);
        console.log('user email retrieved:', result);
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      navigation.goBack();
    }, 3000);
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

  const checkPassword = () => {
    console.log('Came to confirm password');
    if (password === confirmPassword) {
      resetPassword();
    } else {
      handleUpdateConfirmPassword();
    }
  };

  const resetPassword = async () => {
    setLoading(true);

    const apiUrl = 'http://192.168.18.114:4000/user/password/resetpassword';

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

  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          showText={true}
          onPress={() => navigation.goBack()}
          text={'Change Password'}
        />
      </View>

      <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
        <CPaperInput
          left={true}
          right={true}
          onChangeText={text => setOldPassword(text)}

          placeholder={'Old Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View style={{marginHorizontal: wp(8), marginTop: hp(1)}}>
        <CPaperInput
          left={true}
          right={true}
          onChangeText={text => setPassword(text)}
          placeholder={'New Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View style={{marginHorizontal: wp(8), marginTop: hp(1)}}>
        <CPaperInput
          left={true}
          right={true}
          onChangeText={text => setConfirmPassword(text)}
          placeholder={'Confirm Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View
        style={{flex: 1, paddingBottom: hp(10), justifyContent: 'flex-end'}}>
        <TouchableOpacity
          onPress={() => checkPassword()}
          style={{alignSelf: 'center'}}>
          <CustomButton title={'Change'} />
        </TouchableOpacity>
      </View>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Password Changed Successfully'}
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

      <CustomSnackbar
        message={'Alert!'}
        messageDescription={'Please Match The Below Passwords'}
        onDismiss={dismissSnackbarConfirmPassword} // Make sure this function is defined
        visible={snackbarVisibleConfirmPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
