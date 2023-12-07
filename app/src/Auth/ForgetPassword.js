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
import React,{useState} from 'react';
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
import { baseUrl } from '../assets/utilities/BaseUrl';
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

export default function ForgetPassword({navigation, route}) {

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const getOTP = async () => {
    setLoading(true);

    const apiUrl = `${baseUrl}/user/password/forgetpassword`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.msg);

      console.log('Email:', email);
      setLoading(false)

      if (data.msg === 'OTP sent successfully') {
        console.log("User OTP", data.otp)
        setLoading(false);

        navigation.replace('OTP', {email:email,OTP:data.otp});
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
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
        Forget Password
      </Text>

      <Text
        style={{
          fontSize: hp(2.1),
          marginTop: hp(3),
          marginLeft: wp(10),
          lineHeight:hp(3),
          fontWeight: '300',
          marginRight:wp(10),
          color: textGrey,
        }}>
        Please enter your account email address.
        We will send an OTP code for verification.
      </Text>

      <View style={{flex:1, justifyContent:'space-around', marginHorizontal:wp(10)}}>
      <CPaperInput
        placeholder="abc @ gmail.com"
        onChangeText={text => setEmail(text)}
        left={true}
        leftName="Mail"
      />
      <TouchableOpacity onPress={()=>getOTP()}>
      <CustomButton title={'Send Code'}/>

      </TouchableOpacity>

      
      </View>

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
