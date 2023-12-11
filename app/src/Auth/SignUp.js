import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
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
import CustomSnackbarAlert from '../Custom/CustomSnackBarAlert';
import DeviceInfo from 'react-native-device-info';

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
  white,
} from '../assets/Colors';
import Headers from '../Custom/Headers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';
import {baseUrl} from '../assets/utilities/BaseUrl';
import {getToken} from '../assets/utilities/CommonUtils';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const [deviceId, setDeviceId] = useState('');

  const [password, setPassword] = useState('');

  const [googleToken, setGoogleToken] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [snackbarVisibleMatch, setSnackbarVisibleMatch] = useState(false);


  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    getUserID();
  }, []);

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  // all Error Statements

  const [signUpUserNameError, setSignUpUserNameError] = useState(false);

  const [signUpEmailError, setSignUpEmailError] = useState(false);

  const [signUpPasswordError, setSignUpPasswordError] = useState(false);

  const [emailNotCorrectSignUp, setemailNotCorrectSignUp] = useState(false);

  const [signUpConfirmPasswordError, setSignUpConfirmPasswordError] =
    useState(false);

  //---------------------------------\\

  const getUserID = async () => {
    console.log("Id's");
    try {
      const result = await AsyncStorage.getItem('UserToken');
      if (result !== null) {
        setAuthToken(result);
        const deviceId = DeviceInfo.getDeviceId();
        setDeviceId(deviceId);
        console.log('Device ID:', deviceId);

        console.log('user token retrieved:', result.replace(/\"/g, ''));
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };

  const matchPassword = () => {
    if (password !== confirmPassword) {
      handleUpdatePasswordMatch()
    } else {
      checkSignUp()
    }
  };

  const checkSignUp = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    console.log('Sign Up');

    setSignUpEmailError(false);
    setSignUpPasswordError(false);
    setSignUpConfirmPasswordError(false);

    if (email === '' && password === '' && confirmPassword === '') {
      setSignUpEmailError(true);
      setSignUpPasswordError(true);
      setSignUpConfirmPasswordError(true);
    } else if (email !== '' && password == '' && confirmPassword === '') {
      setSignUpEmailError(false);
      setSignUpPasswordError(true);
      setSignUpConfirmPasswordError(true);
    } else if (email !== '' && password !== '' && confirmPassword === '') {
      setSignUpEmailError(false);
      setSignUpPasswordError(false);
      setSignUpConfirmPasswordError(true);
    } else if (email !== '' && password == '' && confirmPassword !== '') {
      setSignUpEmailError(false);
      setSignUpPasswordError(true);
      setSignUpConfirmPasswordError(false);
    } else if (!emailRegex.test(email)) {
      setemailNotCorrectSignUp(true);
    } else {
      signUp();
    }
  };

  // Google Sign In Functionality

  const configureGoogleSignIn = async () => {
    console.log('google Sign in');
    try {
      await GoogleSignin.configure({
        webClientId:
          '567068341135-kcqvi7gvfk47jj5m2rfn5r6nb48dmj0n.apps.googleusercontent.com',
        /*  androidClientId:
          '736037778215-hjmnkaj86ssnqp0m2hh9kpcikh33obss.apps.googleusercontent.com', */

        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      });
    } catch (error) {
      console.error('Google Sign-In configuration error:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    console.log('Sign in');
    setLoading(true); // Show the loader

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {user} = userInfo;
      const userName = user.name;
      //console.log('User Name:', user);
      signUpWithGoogle(user, userInfo);
      setLoading(false);

      // Handle the signed-in user data
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the sign-in process
        console.log('Sign-in cancelled');
        setLoading(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Sign-in is in progress
        console.log('Sign-in in progress');
        //setIsLoading(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
        console.log('Play services not available or outdated');
        setLoading(false);
      } else {
        // Some other error occurred
        console.log('Sign-in error:', error);
        setLoading(false);
      }
    }
  };

  //-----------------------\\

  //--------Sign Up With Google-----------\\

  const signUpWithGoogle = async (user, userInfo) => {
    console.log('User Name:', user);
    console.log('User Info:', userInfo);
    setLoading(true);

    const apiUrl = `${baseUrl}/user/usersignup`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: 'Qwerty',
          signup_type: 'Google',
          device_id: authToken,
          token: userInfo.idToken,
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.msg);

      console.log('Email:', email);
      setLoading(false);

      if (data.msg === 'User signed up successfully') {
        console.log('Data =email', data.data.email);
        console.log('Data =id', data.data.id);

        setLoading(false);

        AsyncStorage.setItem('email', data.data.email.toString(), () => {
          console.log('user email saved successfully');
        });

        AsyncStorage.setItem('userId', data.data.id.toString(), () => {
          console.log('user id saved successfully of signup');
        });

        AsyncStorage.setItem('password', 'Qwerty', () => {
          console.log('user password saved successfully of signup');
        });
        navigation.replace('ProfileImage');
      } else if (data.msg === 'Email already exists') {
        signInWithGoogle(user.email);
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

  //--------------------------\\

  const signUp = async () => {
    setLoading(true);

    console.log('Password', password);
    console.log('Email', email);

    const apiUrl = `${baseUrl}/user/usersignup`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          signup_type: 'email',
          device_id: authToken.replace(/\"/g, ''),
          //device_id: deviceId.replace(/\"/g, '') ,
          //token: authToken.replace(/\"/g, ''),
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.data[0]);

      console.log('Email:', email);
      setLoading(false);

      if (data.error === false) {
        console.log('Data =email', data.data[0].email);
        console.log('Data =id', data.data[0].id);

        setLoading(false);

        AsyncStorage.setItem('email', data.data[0].email.toString(), () => {
          console.log('user email saved successfully');
        });

        AsyncStorage.setItem('userId', data.data[0].id.toString(), () => {
          console.log('user id saved successfully of signup');
        });

        AsyncStorage.setItem('password', password.toString(), () => {
          console.log(
            'user password saved successfully of signup',
            password.toString(),
          );
        });

        navigation.replace('OTPVerifyAccount', {
          email: data.data[0].email,
          OTP: data.data[0].verificationcode,
        });
      } else {
        handleUpdatePassword();
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      handleUpdatePassword();
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

  const dismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      //navigation.navigate('SignIn');
    }, 3000);
  };

  //-------------------------\\

  const dismissSnackbarMatch = () => {
    setSnackbarVisibleMatch(false);
  };


  const handleUpdatePasswordMatch = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisibleMatch(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisibleMatch(false);
      //navigation.navigate('SignIn');
    }, 3000);
  };


  //------------------------\\

  //sign in with with google

  const signInWithGoogle = async email => {
    setLoading(true);

    const apiUrl = `${baseUrl}/user/usersignin`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: 'Qwerty',
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data);

      console.log('Email:', email);
      setLoading(false);

      if (data.msg === 'Login successful') {
        console.log('Data =email', data.data.email);
        console.log('Data =id', data.data.id);

        setLoading(false);

        AsyncStorage.setItem('email', data.data.email.toString(), () => {
          console.log('user email saved successfully');
        });

        AsyncStorage.setItem('userId', data.data.id.toString(), () => {
          console.log('user id saved successfully of signup');
        });

        navigation.replace('BottomTabNavigation');
      } else {
        handleUpdatePassword();
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      handleUpdatePassword();
      setLoading(false);
    }
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
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{resizeMode: 'contain', width: wp(50)}}
            source={appImages.logo}
          />
        </View>

        <Text
          style={{
            fontSize: hp(2.5),
            marginTop: hp(3),
            marginLeft: wp(10),
            fontWeight: '500',
            color: textBlack,
          }}>
          Create Account
        </Text>

        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            onChangeText={text => setEmail(text)}
            placeholder="abc @ gmail.com"
            left={true}
            leftName="Mail"
          />
        </View>

        {signUpEmailError === true ? (
          <Text
            style={{
              color: 'red',
              marginLeft: wp(10),
              marginTop: hp(1.8),
              fontSize: hp(1.8),
            }}>
            Please Enter Your Email!
          </Text>
        ) : null}

        {emailNotCorrectSignUp === true ? (
          <Text
            style={{
              color: 'red',
              marginLeft: wp(10),
              marginTop: hp(1.8),
              fontSize: hp(1.8),
            }}>
            Please Enter Correct Email!
          </Text>
        ) : null}

        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            left={true}
            right={true}
            onChangeText={text => setPassword(text)}
            placeholder={'Your Password'}
            password={true}
            leftName="Lock"
          />

          {signUpPasswordError === true ? (
            <Text
              style={{
                color: 'red',
                marginLeft: wp(10),
                marginTop: hp(1.8),
                fontSize: hp(1.8),
              }}>
              Please Enter Your Password!
            </Text>
          ) : null}
        </View>

        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            left={true}
            right={true}
            onChangeText={text => setConfirmPassword(text)}
            placeholder={'Confirm Password'}
            password={true}
            leftName="Lock"
          />

          {signUpConfirmPasswordError === true ? (
            <Text
              style={{
                color: 'red',
                marginLeft: wp(10),
                marginTop: hp(1.8),
                fontSize: hp(1.8),
              }}>
              Please Enter Your Password!
            </Text>
          ) : null}
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: hp(3),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => matchPassword()}>
            <CustomButton title={'Create'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: hp(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: wp(8),
          }}>
          <View
            style={{
              height: hp(0.1),
              width: wp(25),
              backgroundColor: '#3333332B',
            }}></View>

          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '500',
              color: textBlack,
            }}>
            or continue with
          </Text>

          <View
            style={{
              height: hp(0.1),
              width: wp(25),
              backgroundColor: '#3333332B',
            }}></View>
        </View>

        <View
          style={{
            height: hp(8),
            marginTop: hp(3),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: wp(8),
          }}>
          <TouchableOpacity
            onPress={() => handleGoogleSignIn()}
            style={{
              height: hp(6),
              paddingHorizontal: wp(3),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderColor: orange,
              borderWidth: 1,
              borderRadius: wp(8),
              width: wp(39),
            }}>
            <Google />
            <Text
              style={{
                fontSize: hp(2.1),
                fontWeight: '400',
                color: textBlack,
              }}>
              Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: hp(6),
              paddingHorizontal: wp(3),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderColor: orange,
              borderWidth: 1,
              borderRadius: wp(8),
              width: wp(39),
            }}>
            <FaceBook />
            <Text
              style={{
                fontSize: hp(2.1),
                fontWeight: '400',
                color: textBlack,
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(5),
            height: hp(8),
            marginHorizontal: wp(18),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '300',
              color: textBlack,
            }}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                color: textBlack,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
        messageDescription={'Email Already Exists!'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />

      <CustomSnackbarAlert
        message={'Alert!'}
        messageDescription={'Password Doesnot Match!'}
        onDismiss={dismissSnackbarMatch} // Make sure this function is defined
        visible={snackbarVisibleMatch}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
