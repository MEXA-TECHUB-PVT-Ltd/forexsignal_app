import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function SignIn({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');

  const signIn = async () => {
    setLoading(true);

    const apiUrl = 'http://192.168.18.114:4000/user/usersignin';

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

        navigation.navigate('BottomTabNavigation');
      }else{
        handleUpdatePassword()

      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      handleUpdatePassword()
      setLoading(false);
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
          Sign In
        </Text>

        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            onChangeText={text => setEmail(text)}
            placeholder="abc @ gmail.com"
            left={true}
            leftName="Mail"
          />
        </View>
        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            onChangeText={text => setPassword(text)}
            left={true}
            right={true}
            placeholder={'Your Password'}
            password={true}
            leftName="Lock"
          />
        </View>
        <View
          style={{
            height: hp(5),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: hp(2),
            marginHorizontal: wp(8),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text
              style={{
                fontSize: hp(2),
                fontWeight: 'bold',
                color: orange,
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginTop: hp(3),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => signIn()}>
            <CustomButton title={'Sign In'} />
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
            style={{
              height: hp(6),
              paddingHorizontal: wp(5),
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
            marginHorizontal: wp(10.9),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '300',
              color: textBlack,
            }}>
            Don’t have an account?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                color: textBlack,
              }}>
              Create Account
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
       
      <CustomSnackbar
        message={'Alert'}
        messageDescription={'Wrong Email Or Password'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
